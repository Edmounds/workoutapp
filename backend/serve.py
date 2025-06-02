#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import hashlib
import jwt
import datetime
from functools import wraps
import traceback
import decimal
import logging

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'workout-app-secret-key-2024'

# 启用CORS
CORS(app, supports_credentials=True, origins="*")

# 数据库配置
DB_CONFIG = {
    'host': '113.45.220.0',
    'port': 3306,
    'user': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app',
    'charset': 'utf8mb4',
    'autocommit': True
}


def get_db_connection():
    """获取数据库连接"""
    try:
        connection = pymysql.connect(**DB_CONFIG)
        return connection
    except Exception as e:
        logger.error(f"数据库连接失败: {e}")
        return None


def hash_password(password):
    """密码哈希"""
    return hashlib.sha256(password.encode()).hexdigest()


def generate_token(user_id):
    """生成JWT令牌"""
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7)
    }
    return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')


def token_required(f):
    """JWT令牌验证装饰器"""

    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'code': 401, 'message': '缺少认证令牌'}), 401

        try:
            if token.startswith('Bearer '):
                token = token[7:]
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user_id = data['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'code': 401, 'message': '令牌已过期'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'code': 401, 'message': '无效令牌'}), 401

        return f(current_user_id, *args, **kwargs)

    return decorated


def decimal_to_float(obj):
    """转换Decimal为float"""
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    elif isinstance(obj, dict):
        return {k: decimal_to_float(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [decimal_to_float(item) for item in obj]
    return obj


# 健康检查
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok', 'message': '服务运行正常'})


# 用户注册
@app.route('/api/users/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        name = data.get('name')
        password = data.get('password')

        if not name or not password:
            return jsonify({'code': 400, 'message': '用户名和密码不能为空'})

        # 密码复杂度检查
        if len(password) < 8:
            return jsonify({'code': 400, 'message': '密码长度不能少于8位'})

        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()

        # 检查用户是否已存在
        cursor.execute("SELECT id FROM users WHERE username = %s", (name,))
        if cursor.fetchone():
            cursor.close()
            conn.close()
            return jsonify({'code': 400, 'message': '用户名已存在'})

        # 创建新用户，只包含基本信息
        hashed_password = hash_password(password)
        cursor.execute("""
            INSERT INTO users (username, password, level, total_workouts, total_duration, total_distance) 
            VALUES (%s, %s, 'beginner', 0, 0, 0.00)
        """, (name, hashed_password))

        cursor.close()
        conn.close()

        return jsonify({'code': 201, 'message': '注册成功'})

    except Exception as e:
        logger.error(f"注册错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 用户登录
@app.route('/api/users/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        name = data.get('name')
        password = data.get('password')

        if not name or not password:
            return jsonify({'code': 400, 'message': '用户名和密码不能为空'})

        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)

        # 查询用户
        hashed_password = hash_password(password)
        cursor.execute("""
            SELECT id, username, gender, age, height, weight, level, 
                   total_workouts, total_duration, total_distance
            FROM users 
            WHERE username = %s AND password = %s
        """, (name, hashed_password))

        user = cursor.fetchone()
        cursor.close()
        conn.close()

        if not user:
            return jsonify({'code': 401, 'message': '用户名或密码错误'})

        # 生成令牌
        token = generate_token(user['id'])

        # 转换数据类型
        user = decimal_to_float(user)

        # 计算用户等级
        total_workouts = user.get('total_workouts', 0)
        if total_workouts < 10:
            level = '业余跑者'
        elif total_workouts < 50:
            level = '初级跑者'
        elif total_workouts < 100:
            level = '中级跑者'
        else:
            level = '高级跑者'

        response_data = {
            'id': user['id'],
            'username': user['username'],
            'level': level,
            'token': token
        }

        return jsonify({'code': 200, 'message': '登录成功', 'data': response_data})

    except Exception as e:
        logger.error(f"登录错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 获取用户完整信息
@app.route('/api/users/all/list', methods=['GET'])
@token_required
def get_user_all_info(current_user_id):
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)

        # 获取用户基本信息
        cursor.execute("""
            SELECT id, username, gender, age, height, weight, level,
                   total_workouts, total_duration, total_distance
            FROM users WHERE id = %s
        """, (current_user_id,))

        user = cursor.fetchone()
        if not user:
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})

        # 转换数据类型
        user = decimal_to_float(user)

        # 构造运动记录数据
        workout_records = {
            'total_count': user.get('total_workouts', 0),
            'total_hours': round(user.get('total_duration', 0) / 60.0, 1),  # 转换为小时
            'total_km': user.get('total_distance', 0.0)
        }

        response_data = {
            'user_info': user,
            'workout_records': workout_records
        }

        cursor.close()
        conn.close()

        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})

    except Exception as e:
        logger.error(f"获取用户信息错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 获取跑步记录
@app.route('/api/user/running_records', methods=['GET'])
@token_required
def get_running_records(current_user_id):
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)

        # 获取跑步记录
        cursor.execute("""
            SELECT id, workout_type, start_time, end_time, duration, distance, 
                   avg_pace, best_pace, avg_heart_rate, max_heart_rate, 
                   avg_step_rate, calories, elevation_gain, weather, 
                   temperature, notes
            FROM running_records 
            WHERE user_id = %s 
            ORDER BY start_time DESC 
            LIMIT 50
        """, (current_user_id,))

        records = cursor.fetchall()
        cursor.close()
        conn.close()

        # 转换数据类型并格式化
        formatted_records = []
        for record in records:
            record = decimal_to_float(record)

            # 格式化时间
            if record['start_time']:
                record['start_time'] = record['start_time'].strftime('%Y-%m-%d %H:%M:%S')
            if record['end_time']:
                record['end_time'] = record['end_time'].strftime('%Y-%m-%d %H:%M:%S')

            # 转换距离单位（米转公里）
            if record['distance']:
                record['distance_km'] = round(record['distance'] / 1000, 2)

            # 转换配速格式（秒/公里转分钟/公里）
            if record['avg_pace']:
                minutes = record['avg_pace'] // 60
                seconds = record['avg_pace'] % 60
                record['avg_pace_formatted'] = f"{minutes}'{seconds:02d}\""

            # 转换时长格式（秒转分钟）
            if record['duration']:
                record['duration_minutes'] = round(record['duration'] / 60, 1)

            formatted_records.append(record)

        return jsonify({'code': 200, 'message': '获取成功', 'data': formatted_records})

    except Exception as e:
        logger.error(f"获取跑步记录错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 上传运动记录
@app.route('/api/user/upload_workout', methods=['POST'])
@token_required
def upload_workout(current_user_id):
    try:
        data = request.get_json()

        # 提取运动数据
        workout_type = data.get('workout_type', '跑步')
        start_time = data.get('start_time')
        duration = data.get('duration', 0)  # 秒
        distance = data.get('distance', 0)  # 米
        avg_pace = data.get('avg_pace', 0)  # 秒/公里
        calories = data.get('calories', 0)
        avg_heart_rate = data.get('avg_heart_rate')
        max_heart_rate = data.get('max_heart_rate')
        notes = data.get('notes', '')

        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()

        # 插入运动记录
        cursor.execute("""
            INSERT INTO running_records (
                user_id, workout_type, start_time, duration, distance, 
                avg_pace, calories, avg_heart_rate, max_heart_rate, notes
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            current_user_id, workout_type, start_time, duration, distance,
            avg_pace, calories, avg_heart_rate, max_heart_rate, notes
        ))

        # 更新用户统计数据
        distance_km = distance / 1000.0  # 转换为公里
        duration_minutes = duration / 60.0  # 转换为分钟

        cursor.execute("""
            UPDATE users SET 
                total_workouts = total_workouts + 1,
                total_duration = total_duration + %s,
                total_distance = total_distance + %s
            WHERE id = %s
        """, (duration_minutes, distance_km, current_user_id))

        cursor.close()
        conn.close()

        return jsonify({'code': 200, 'message': '运动记录上传成功'})

    except Exception as e:
        logger.error(f"上传运动记录错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 获取体能数据
@app.route('/api/physical/stats', methods=['GET'])
@token_required
def get_physical_stats(current_user_id):
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)

        # 获取基础体能数据（从physical_stats表）
        cursor.execute("""
            SELECT avg_blood_oxygen, health_index, stress_index, sleep_quality, 
                   sleep_duration, aerobic_capacity, weekly_distance, date
            FROM physical_stats 
            WHERE user_id = %s 
            ORDER BY date DESC 
            LIMIT 1
        """, (current_user_id,))

        base_stats = cursor.fetchone()

        # 获取运动记录来计算平均值和最大值
        cursor.execute("""
            SELECT avg_heart_rate, max_heart_rate, avg_step_rate, avg_pace, best_pace
            FROM running_records 
            WHERE user_id = %s 
            ORDER BY start_time DESC 
            LIMIT 10
        """, (current_user_id,))

        records = cursor.fetchall()
        cursor.close()
        conn.close()

        # 如果没有运动记录，返回默认数据
        if not records:
            stats = {
                'avg_heart_rate': 75,
                'current_heart_rate': 72,
                'resting_heart_rate': 65,
                'max_heart_rate': 180,
                'current_step_rate': 160,
                'avg_step_rate': 165,
                'avg_blood_oxygen': 98.5,
                'current_pace': '5\'30\"',
                'avgHeartRate': 75,
                'avgStepRate': 165,
                'avgPace': '5\'30\"',
                'health_index': 85,
                'stress_index': 25,
                'sleep_quality': 80,
                'sleep_duration': 480,
                'aerobic_capacity': 75,
                'weekly_distance': 25.0
            }
        else:
            # 计算平均值和最大值
            heart_rates = [r['avg_heart_rate'] for r in records if r['avg_heart_rate']]
            max_heart_rates = [r['max_heart_rate'] for r in records if r['max_heart_rate']]
            step_rates = [r['avg_step_rate'] for r in records if r['avg_step_rate']]
            paces = [r['avg_pace'] for r in records if r['avg_pace']]
            best_paces = [r['best_pace'] for r in records if r['best_pace']]

            # 计算平均心率
            avg_heart_rate = int(sum(heart_rates) / len(heart_rates)) if heart_rates else 75
            max_heart_rate = min(max(max_heart_rates) if max_heart_rates else avg_heart_rate + 25, 160)  # 限制160
            current_heart_rate = heart_rates[0] if heart_rates else avg_heart_rate

            # 确保最大心率大于平均心率，但不超过160
            if max_heart_rate <= avg_heart_rate:
                max_heart_rate = min(avg_heart_rate + 20, 160)  # 确保最大心率比平均心率高20，但不超过160

            # 计算平均步频
            avg_step_rate = int(sum(step_rates) / len(step_rates)) if step_rates else 165
            current_step_rate = step_rates[0] if step_rates else avg_step_rate

            # 计算平均配速（秒/公里转换为分钟格式）
            avg_pace_seconds = sum(paces) / len(paces) if paces else 330  # 默认5分30秒
            current_pace_seconds = paces[0] if paces else avg_pace_seconds
            best_pace_seconds = min(best_paces) if best_paces else current_pace_seconds - 30  # 最佳配速比当前配速快30秒
            max_pace_seconds = max(paces) if paces else avg_pace_seconds + 30  # 最慢配速比平均配速慢30秒

            # 确保配速的逻辑关系：最佳配速 < 平均配速 < 最慢配速
            if best_pace_seconds >= avg_pace_seconds:
                best_pace_seconds = avg_pace_seconds - 20  # 确保最佳配速比平均配速快20秒
            if max_pace_seconds <= avg_pace_seconds:
                max_pace_seconds = avg_pace_seconds + 20  # 确保最慢配速比平均配速慢20秒

            def format_pace(seconds):
                minutes = int(seconds // 60)
                secs = int(seconds % 60)
                return f"{minutes}'{secs:02d}\""

            # 组合基础数据
            stats = {
                'avg_heart_rate': avg_heart_rate,
                'current_heart_rate': current_heart_rate,
                'resting_heart_rate': max(50, avg_heart_rate - 15),  # 静息心率通常比平均心率低15
                'max_heart_rate': max_heart_rate,
                'current_step_rate': current_step_rate,
                'avg_step_rate': avg_step_rate,
                'current_pace': format_pace(current_pace_seconds),
                'best_pace': format_pace(best_pace_seconds),  # 最佳配速（最快）
                'max_pace': format_pace(max_pace_seconds),  # 最慢配速
                'avgHeartRate': avg_heart_rate,  # 用于图表显示的平均值
                'avgStepRate': avg_step_rate,  # 用于图表显示的平均值
                'avgPace': format_pace(avg_pace_seconds),  # 用于图表显示的平均值
            }

            # 添加基础数据（如果存在）
            if base_stats:
                base_stats = decimal_to_float(base_stats)
                stats.update({
                    'avg_blood_oxygen': base_stats.get('avg_blood_oxygen', 98.5),
                    'health_index': base_stats.get('health_index', 85),
                    'stress_index': base_stats.get('stress_index', 25),
                    'sleep_quality': base_stats.get('sleep_quality', 80),
                    'sleep_duration': base_stats.get('sleep_duration', 480),
                    'aerobic_capacity': base_stats.get('aerobic_capacity', 75),
                    'weekly_distance': base_stats.get('weekly_distance', 25.0)
                })
            else:
                # 默认基础数据
                stats.update({
                    'avg_blood_oxygen': 98.5,
                    'health_index': 85,
                    'stress_index': 25,
                    'sleep_quality': 80,
                    'sleep_duration': 480,
                    'aerobic_capacity': 75,
                    'weekly_distance': 25.0
                })

        return jsonify({'code': 200, 'message': '获取成功', 'data': stats})

    except Exception as e:
        logger.error(f"获取体能数据错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 更新用户信息
@app.route('/api/users/update', methods=['PUT'])
@token_required
def update_user_info(current_user_id):
    try:
        data = request.get_json()
        gender = data.get('gender')  # 0:未知, 1:男, 2:女
        age = data.get('age')
        height = data.get('height')  # 身高(cm)
        weight = data.get('weight')  # 体重(kg)

        # 数据验证
        if gender is not None and gender not in [0, 1, 2]:
            return jsonify({'code': 400, 'message': '性别参数无效'})

        if age is not None:
            try:
                age = int(age)
                if age < 1 or age > 120:
                    return jsonify({'code': 400, 'message': '年龄必须在1-120岁之间'})
            except (ValueError, TypeError):
                return jsonify({'code': 400, 'message': '年龄必须是有效数字'})

        if height is not None:
            try:
                height = float(height)
                if height < 50 or height > 250:
                    return jsonify({'code': 400, 'message': '身高必须在50-250cm之间'})
            except (ValueError, TypeError):
                return jsonify({'code': 400, 'message': '身高必须是有效数字'})

        if weight is not None:
            try:
                weight = float(weight)
                if weight < 10 or weight > 500:
                    return jsonify({'code': 400, 'message': '体重必须在10-500kg之间'})
            except (ValueError, TypeError):
                return jsonify({'code': 400, 'message': '体重必须是有效数字'})

        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()

        # 构建更新SQL语句
        update_fields = []
        update_values = []

        if gender is not None:
            update_fields.append("gender = %s")
            update_values.append(gender)

        if age is not None:
            update_fields.append("age = %s")
            update_values.append(age)

        if height is not None:
            update_fields.append("height = %s")
            update_values.append(height)

        if weight is not None:
            update_fields.append("weight = %s")
            update_values.append(weight)

        if not update_fields:
            cursor.close()
            conn.close()
            return jsonify({'code': 400, 'message': '没有提供需要更新的字段'})

        # 添加更新时间和用户ID
        update_fields.append("updated_at = CURRENT_TIMESTAMP")
        update_values.append(current_user_id)

        # 执行更新
        sql = f"UPDATE users SET {', '.join(update_fields)} WHERE id = %s"
        cursor.execute(sql, update_values)

        # 检查是否有记录被更新
        if cursor.rowcount == 0:
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})

        cursor.close()
        conn.close()

        return jsonify({'code': 200, 'message': '用户信息更新成功'})

    except Exception as e:
        logger.error(f"更新用户信息错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 获取营养建议
@app.route('/api/nutrition/tips', methods=['GET'])
def get_nutrition_tips():
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)

        # 获取营养建议，按重要性和类别排序
        cursor.execute("""
            SELECT tip, category, importance
            FROM nutrition_tips 
            ORDER BY importance ASC, category
        """)

        tips = cursor.fetchall()
        cursor.close()
        conn.close()

        # 按类别分组
        tips_by_category = {}
        for tip in tips:
            category = tip['category']
            if category not in tips_by_category:
                tips_by_category[category] = []
            tips_by_category[category].append(tip)

        return jsonify({'code': 200, 'message': '获取成功', 'data': tips_by_category})

    except Exception as e:
        logger.error(f"获取营养建议错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 获取AI建议
@app.route('/api/ai/advice', methods=['GET'])
@token_required
def get_ai_advice(current_user_id):
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)

        # 获取用户的AI建议
        cursor.execute("""
            SELECT advice_content, category, created_at
            FROM ai_advice 
            WHERE user_id = %s 
            ORDER BY created_at DESC 
            LIMIT 5
        """, (current_user_id,))

        advice_list = cursor.fetchall()
        cursor.close()
        conn.close()

        # 格式化时间
        for advice in advice_list:
            if advice['created_at']:
                advice['created_at'] = advice['created_at'].strftime('%Y-%m-%d %H:%M:%S')

        return jsonify({'code': 200, 'message': '获取成功', 'data': advice_list})

    except Exception as e:
        logger.error(f"获取AI建议错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 错误处理
@app.errorhandler(404)
def not_found(error):
    return jsonify({'code': 404, 'message': '接口不存在'}), 404


@app.errorhandler(500)
def internal_error(error):
    return jsonify({'code': 500, 'message': '服务器内部错误'}), 500


if __name__ == '__main__':
    print("=" * 50)
    print("🏃 运动小程序后端服务")
    print("=" * 50)
    print(f"服务器地址: http://localhost:5000")
    print(f"数据库: {DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['database']}")
    print("API接口:")
    print("  POST /api/users/register - 用户注册")
    print("  POST /api/users/login - 用户登录")
    print("  GET  /api/users/all/list - 获取用户信息")
    print("  PUT  /api/users/update - 更新用户信息")
    print("  GET  /api/user/running_records - 获取跑步记录")
    print("  POST /api/user/upload_workout - 上传运动记录")
    print("  GET  /api/physical/stats - 获取体能数据")
    print("  GET  /api/nutrition/tips - 获取营养建议")
    print("  GET  /api/ai/advice - 获取AI建议")
    print("  GET  /health - 健康检查")
    print("  GET  /test/db - 测试数据库连接")
    print("=" * 50)

    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,
        threaded=True
    ) 