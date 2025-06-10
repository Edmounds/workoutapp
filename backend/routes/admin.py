#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""管理员相关路由"""

import traceback
import pymysql
from flask import Blueprint, request, jsonify
from utils.db import get_db_connection
from utils.auth import hash_password, generate_token
from utils.helpers import decimal_to_float
from middleware.auth import admin_token_required
from config import logger

admin_bp = Blueprint('admin', __name__, url_prefix='/api/admin')


@admin_bp.route('/login', methods=['POST'])
def admin_login():
    """管理员登录"""
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

        # 查询管理员用户
        # 首先尝试直接匹配用户名和密码（用于测试中使用明文密码的情况）
        cursor.execute("""
            SELECT id, username 
            FROM admin_users 
            WHERE username = %s AND password = %s
        """, (name, password))
        
        admin = cursor.fetchone()
        
        # 如果找不到，尝试使用哈希密码进行匹配
        if not admin:
            hashed_password = hash_password(password)
            cursor.execute("""
                SELECT id, username 
                FROM admin_users 
                WHERE username = %s AND password = %s
            """, (name, hashed_password))
            admin = cursor.fetchone()
        
        cursor.close()
        conn.close()

        if not admin:
            return jsonify({'code': 401, 'message': '用户名或密码错误'})

        # 生成令牌
        token = generate_token(admin['id'], is_admin=True)

        response_data = {
            'id': admin['id'],
            'username': admin['username'],
            'token': token,
            'role': 'admin'
        }

        return jsonify({'code': 200, 'message': '登录成功', 'data': response_data})

    except Exception as e:
        logger.error(f"管理员登录错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/users', methods=['GET'])
@admin_token_required
def get_all_users(current_admin_id):
    """获取所有用户列表（分页）"""
    try:
        page = int(request.args.get('page', 1))
        size = int(request.args.get('size', 20))
        keyword = request.args.get('keyword', '')
        
        if page < 1:
            page = 1
        if size < 1 or size > 100:
            size = 20
            
        offset = (page - 1) * size
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建查询条件
        where_clause = ""
        params = []
        
        if keyword:
            where_clause = "WHERE username LIKE %s"
            params.append(f'%{keyword}%')
            
        # 获取总记录数
        count_sql = f"SELECT COUNT(*) as total FROM users {where_clause}"
        cursor.execute(count_sql, params)
        total = cursor.fetchone()['total']
        
        # 查询用户列表
        sql = f"""
            SELECT id, username, gender, age, height, weight, level,
                   total_workouts, total_distance, created_at
            FROM users {where_clause}
            ORDER BY id DESC
            LIMIT %s, %s
        """
        cursor.execute(sql, params + [offset, size])
        
        users = cursor.fetchall()
        users = [decimal_to_float(user) for user in users]
        
        cursor.close()
        conn.close()
        
        response_data = {
            'total': total,
            'page': page,
            'size': size,
            'users': users
        }
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取用户列表错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/registrations', methods=['GET'])
@admin_token_required
def get_registration_stats(current_admin_id):
    """获取用户注册统计数据"""
    try:
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        interval = request.args.get('interval', 'day')
        
        if interval not in ['day', 'week', 'month']:
            interval = 'day'
            
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建SQL查询
        date_format = '%Y-%m-%d'
        if interval == 'week':
            date_format = '%Y-%u'  # 年份和周数
        elif interval == 'month':
            date_format = '%Y-%m'  # 年份和月份
            
        sql = f"""
            SELECT DATE_FORMAT(created_at, %s) as date, COUNT(*) as count
            FROM users
            WHERE 1=1
        """
        params = [date_format]
        
        if start_date:
            sql += " AND created_at >= %s"
            params.append(start_date)
            
        if end_date:
            sql += " AND created_at <= %s"
            params.append(end_date)
            
        sql += " GROUP BY date ORDER BY date"
        
        cursor.execute(sql, params)
        stats = cursor.fetchall()
        
        # 获取总注册用户数
        cursor.execute("SELECT COUNT(*) as total FROM users")
        total = cursor.fetchone()['total']
        
        cursor.close()
        conn.close()
        
        response_data = {
            'total': total,
            'stats': stats
        }
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取注册统计错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/active_users', methods=['GET'])
@admin_token_required
def get_active_users_stats(current_admin_id):
    """获取活跃用户统计数据"""
    try:
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        interval = request.args.get('interval', 'day')
        
        if interval not in ['day', 'week', 'month']:
            interval = 'day'
            
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建SQL查询 - 基于运动记录统计活跃用户
        date_format = '%Y-%m-%d'
        if interval == 'week':
            date_format = '%Y-%u'
        elif interval == 'month':
            date_format = '%Y-%m'
            
        sql = f"""
            SELECT DATE_FORMAT(start_time, %s) as date, COUNT(DISTINCT user_id) as active_users
            FROM running_records
            WHERE start_time IS NOT NULL
        """
        params = [date_format]
        
        if start_date:
            sql += " AND start_time >= %s"
            params.append(start_date)
            
        if end_date:
            sql += " AND start_time <= %s"
            params.append(end_date)
            
        sql += " GROUP BY date ORDER BY date"
        
        cursor.execute(sql, params)
        stats = cursor.fetchall()
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': {'stats': stats}})
        
    except Exception as e:
        logger.error(f"获取活跃用户统计错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/workouts/summary', methods=['GET'])
@admin_token_required
def get_workouts_summary(current_admin_id):
    """获取所有用户运动总量统计"""
    try:
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建查询条件
        where_clause = "WHERE start_time IS NOT NULL"
        params = []
        
        if start_date:
            where_clause += " AND start_time >= %s"
            params.append(start_date)
            
        if end_date:
            where_clause += " AND start_time <= %s"
            params.append(end_date)
        
        # 获取运动数据总量
        sql = f"""
            SELECT 
                COUNT(*) as total_workouts,
                SUM(distance/1000) as total_distance,
                SUM(duration) as total_duration
            FROM running_records
            {where_clause}
        """
        cursor.execute(sql, params)
        summary = cursor.fetchone()
        summary = decimal_to_float(summary)
        
        # 获取用户数量
        cursor.execute("SELECT COUNT(*) as total_users FROM users")
        user_count = cursor.fetchone()['total_users']
        
        # 计算人均数据
        avg_distance_per_user = 0
        avg_workouts_per_user = 0
        
        if user_count > 0:
            avg_distance_per_user = round(summary['total_distance'] / user_count, 2) if summary['total_distance'] else 0
            avg_workouts_per_user = round(summary['total_workouts'] / user_count, 2) if summary['total_workouts'] else 0
        
        response_data = {
            'total_workouts': summary['total_workouts'] or 0,
            'total_distance': summary['total_distance'] or 0,
            'total_duration': summary['total_duration'] or 0,
            'avg_distance_per_user': avg_distance_per_user,
            'avg_workouts_per_user': avg_workouts_per_user
        }
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取运动总量统计错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/workouts/types', methods=['GET'])
@admin_token_required
def get_workout_types_stats(current_admin_id):
    """获取运动类型分布统计"""
    try:
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建查询条件
        where_clause = "WHERE 1=1"
        params = []
        
        if start_date:
            where_clause += " AND start_time >= %s"
            params.append(start_date)
            
        if end_date:
            where_clause += " AND start_time <= %s"
            params.append(end_date)
        
        # 获取各类型运动次数
        sql = f"""
            SELECT 
                workout_type,
                COUNT(*) as count
            FROM running_records
            {where_clause}
            GROUP BY workout_type
            ORDER BY count DESC
        """
        cursor.execute(sql, params)
        types = cursor.fetchall()
        
        # 获取总运动次数
        sql = f"SELECT COUNT(*) as total FROM running_records {where_clause}"
        cursor.execute(sql, params)
        total = cursor.fetchone()['total']
        
        # 计算百分比
        result = []
        for t in types:
            percentage = round((t['count'] / total) * 100, 1) if total > 0 else 0
            result.append({
                'workout_type': t['workout_type'] or '未分类',
                'count': t['count'],
                'percentage': percentage
            })
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': result})
        
    except Exception as e:
        logger.error(f"获取运动类型统计错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/user/<int:user_id>', methods=['GET'])
@admin_token_required
def get_user_detail(current_admin_id, user_id):
    """获取指定用户的详细信息"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 获取用户基本信息
        cursor.execute("""
            SELECT id, username, gender, age, height, weight, level, email,
                   total_workouts, total_duration, total_distance, 
                   created_at, updated_at
            FROM users 
            WHERE id = %s
        """, (user_id,))
        
        user_info = cursor.fetchone()
        if not user_info:
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})
        
        user_info = decimal_to_float(user_info)
        
        # 获取用户运动类型分布
        cursor.execute("""
            SELECT workout_type, COUNT(*) as count
            FROM running_records
            WHERE user_id = %s AND workout_type IS NOT NULL
            GROUP BY workout_type
            ORDER BY count DESC
        """, (user_id,))
        
        workout_types = cursor.fetchall()
        
        # 获取最新的体能数据
        cursor.execute("""
            SELECT avg_heart_rate, resting_heart_rate, avg_blood_oxygen,
                   health_index, sleep_quality, aerobic_capacity
            FROM physical_stats
            WHERE user_id = %s
            ORDER BY date DESC
            LIMIT 1
        """, (user_id,))
        
        physical_stats = cursor.fetchone()
        if physical_stats:
            physical_stats = decimal_to_float(physical_stats)
        else:
            physical_stats = {}
        
        # 构造响应数据
        workout_summary = {
            'total_count': user_info.get('total_workouts', 0),
            'total_hours': round(user_info.get('total_duration', 0) / 60.0, 1),
            'total_km': user_info.get('total_distance', 0.0),
            'workout_types': workout_types
        }
        
        response_data = {
            'user_info': user_info,
            'workout_summary': workout_summary,
            'latest_physical_stats': physical_stats
        }
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取用户详情错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/user/<int:user_id>', methods=['PUT'])
@admin_token_required
def update_user(current_admin_id, user_id):
    """管理员编辑用户信息"""
    try:
        data = request.get_json()
        username = data.get('username')
        gender = data.get('gender')
        age = data.get('age')
        height = data.get('height')
        weight = data.get('weight')
        level = data.get('level')
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()
        
        # 检查用户是否存在
        cursor.execute("SELECT id FROM users WHERE id = %s", (user_id,))
        if not cursor.fetchone():
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})
        
        # 构建更新SQL
        update_fields = []
        update_values = []
        
        if username:
            # 检查用户名是否已被其他用户使用
            cursor.execute("SELECT id FROM users WHERE username = %s AND id != %s", (username, user_id))
            if cursor.fetchone():
                cursor.close()
                conn.close()
                return jsonify({'code': 400, 'message': '用户名已存在'})
                
            update_fields.append("username = %s")
            update_values.append(username)
            
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
            
        if level:
            update_fields.append("level = %s")
            update_values.append(level)
            
        if not update_fields:
            cursor.close()
            conn.close()
            return jsonify({'code': 400, 'message': '没有提供要更新的数据'})
        
        # 执行更新
        sql = f"UPDATE users SET {', '.join(update_fields)} WHERE id = %s"
        cursor.execute(sql, update_values + [user_id])
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '用户信息更新成功'})
        
    except Exception as e:
        logger.error(f"更新用户信息错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/user/<int:user_id>', methods=['DELETE'])
@admin_token_required
def delete_user(current_admin_id, user_id):
    """删除指定用户"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()
        
        # 检查用户是否存在
        cursor.execute("SELECT id FROM users WHERE id = %s", (user_id,))
        if not cursor.fetchone():
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})
        
        # 删除用户 (外键约束会自动删除关联数据)
        cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '用户删除成功'})
        
    except Exception as e:
        logger.error(f"删除用户错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/user/<int:user_id>/running_records', methods=['GET'])
@admin_token_required
def get_user_running_records(current_admin_id, user_id):
    """获取指定用户的运动记录"""
    try:
        page = int(request.args.get('page', 1))
        size = int(request.args.get('size', 20))
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        workout_type = request.args.get('workout_type')
        
        if page < 1:
            page = 1
        if size < 1 or size > 100:
            size = 20
            
        offset = (page - 1) * size
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 检查用户是否存在
        cursor.execute("SELECT id FROM users WHERE id = %s", (user_id,))
        if not cursor.fetchone():
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})
        
        # 构建查询条件
        where_clause = "WHERE user_id = %s"
        params = [user_id]
        
        if start_date:
            where_clause += " AND start_time >= %s"
            params.append(start_date)
            
        if end_date:
            where_clause += " AND start_time <= %s"
            params.append(end_date)
            
        if workout_type:
            where_clause += " AND workout_type = %s"
            params.append(workout_type)
        
        # 获取总记录数
        count_sql = f"SELECT COUNT(*) as total FROM running_records {where_clause}"
        cursor.execute(count_sql, params)
        total = cursor.fetchone()['total']
        
        # 查询运动记录
        sql = f"""
            SELECT id, workout_type, start_time, 
                   ROUND(duration/60, 1) as duration_minutes,
                   ROUND(distance/1000, 2) as distance_km,
                   CONCAT(FLOOR(avg_pace/60), "'", avg_pace%60, '"') as avg_pace_formatted,
                   avg_heart_rate, calories
            FROM running_records
            {where_clause}
            ORDER BY start_time DESC
            LIMIT %s, %s
        """
        cursor.execute(sql, params + [offset, size])
        
        records = cursor.fetchall()
        records = [decimal_to_float(record) for record in records]
        
        cursor.close()
        conn.close()
        
        response_data = {
            'total': total,
            'page': page,
            'size': size,
            'records': records
        }
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取用户运动记录错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/dashboard/overview', methods=['GET'])
@admin_token_required
def get_dashboard_overview(current_admin_id):
    """获取系统概况统计"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 获取总用户数
        cursor.execute("SELECT COUNT(*) as total_users FROM users")
        total_users = cursor.fetchone()['total_users']
        
        # 获取今日新增用户数
        cursor.execute("""
            SELECT COUNT(*) as new_users_today 
            FROM users 
            WHERE DATE(created_at) = CURDATE()
        """)
        new_users_today = cursor.fetchone()['new_users_today']
        
        # 获取今日活跃用户数 (有运动记录的用户)
        cursor.execute("""
            SELECT COUNT(DISTINCT user_id) as active_users_today
            FROM running_records
            WHERE DATE(start_time) = CURDATE()
        """)
        active_users_today = cursor.fetchone()['active_users_today']
        
        # 获取总运动次数
        cursor.execute("SELECT COUNT(*) as total_workouts FROM running_records")
        total_workouts = cursor.fetchone()['total_workouts']
        
        # 获取今日运动次数
        cursor.execute("""
            SELECT COUNT(*) as workouts_today
            FROM running_records
            WHERE DATE(start_time) = CURDATE()
        """)
        workouts_today = cursor.fetchone()['workouts_today']
        
        # 获取总运动距离
        cursor.execute("SELECT SUM(distance/1000) as total_distance FROM running_records")
        result = cursor.fetchone()
        total_distance = decimal_to_float(result)['total_distance'] or 0
        
        # 获取今日运动距离
        cursor.execute("""
            SELECT SUM(distance/1000) as distance_today
            FROM running_records
            WHERE DATE(start_time) = CURDATE()
        """)
        result = cursor.fetchone()
        distance_today = decimal_to_float(result)['distance_today'] or 0
        
        # 获取平均健康指数
        cursor.execute("SELECT AVG(health_index) as avg_health_index FROM physical_stats")
        result = cursor.fetchone()
        avg_health_index = decimal_to_float(result)['avg_health_index'] or 0
        
        # 获取平均睡眠质量
        cursor.execute("SELECT AVG(sleep_quality) as avg_sleep_quality FROM physical_stats")
        result = cursor.fetchone()
        avg_sleep_quality = decimal_to_float(result)['avg_sleep_quality'] or 0
        
        response_data = {
            'total_users': total_users,
            'new_users_today': new_users_today,
            'active_users_today': active_users_today,
            'total_workouts': total_workouts,
            'workouts_today': workouts_today,
            'total_distance': total_distance,
            'distance_today': distance_today,
            'avg_health_index': avg_health_index,
            'avg_sleep_quality': avg_sleep_quality
        }
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取系统概况错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/dashboard/user_growth', methods=['GET'])
@admin_token_required
def get_user_growth(current_admin_id):
    """获取用户增长趋势"""
    try:
        period = request.args.get('period', 'month')
        count = int(request.args.get('count', 12))
        
        if period not in ['week', 'month', 'year']:
            period = 'month'
            
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建SQL查询
        date_format = '%Y-%m'  # 默认按月统计
        interval = 'MONTH'
        
        if period == 'week':
            date_format = '%Y-%u'
            interval = 'WEEK'
        elif period == 'year':
            date_format = '%Y'
            interval = 'YEAR'
            
        # 获取时间点列表
        sql = f"""
            SELECT DATE_FORMAT(created_at, %s) as date, COUNT(*) as new_users
            FROM users
            GROUP BY date
            ORDER BY MIN(created_at) DESC
            LIMIT %s
        """
        cursor.execute(sql, [date_format, count])
        results = cursor.fetchall()
        
        # 倒序排列以计算累计用户数
        results.reverse()
        
        # 计算累计用户数
        cumulative = 0
        for result in results:
            cumulative += result['new_users']
            result['cumulative_users'] = cumulative
            
        # 再次倒序，确保最近的日期在前面
        results.reverse()
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': {
            'period': period,
            'data': results
        }})
        
    except Exception as e:
        logger.error(f"获取用户增长趋势错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/dashboard/workout_trends', methods=['GET'])
@admin_token_required
def get_workout_trends(current_admin_id):
    """获取运动数据趋势"""
    try:
        period = request.args.get('period', 'month')
        count = int(request.args.get('count', 12))
        metric = request.args.get('metric', 'workouts')
        
        if period not in ['week', 'month', 'year']:
            period = 'month'
            
        if metric not in ['workouts', 'distance', 'duration']:
            metric = 'workouts'
            
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建SQL查询
        date_format = '%Y-%m'  # 默认按月统计
        
        if period == 'week':
            date_format = '%Y-%u'
        elif period == 'year':
            date_format = '%Y'
            
        # 根据指标选择聚合函数
        if metric == 'workouts':
            select_metric = "COUNT(*) as value"
        elif metric == 'distance':
            select_metric = "SUM(distance/1000) as value"
        else:  # duration
            select_metric = "SUM(duration/60) as value"  # 转换为分钟
            
        # 获取时间序列数据
        sql = f"""
            SELECT DATE_FORMAT(start_time, %s) as date, {select_metric}
            FROM running_records
            WHERE start_time IS NOT NULL
            GROUP BY date
            ORDER BY MIN(start_time) DESC
            LIMIT %s
        """
        cursor.execute(sql, [date_format, count])
        results = cursor.fetchall()
        
        # 转换数据类型
        results = [decimal_to_float(result) for result in results]
        
        # 按日期降序
        results.reverse()
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': {
            'period': period,
            'metric': metric,
            'data': results
        }})
        
    except Exception as e:
        logger.error(f"获取运动趋势错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/users/age_distribution', methods=['GET'])
@admin_token_required
def get_age_distribution(current_admin_id):
    """获取用户年龄分布统计"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 获取总用户数
        cursor.execute("SELECT COUNT(*) as total FROM users WHERE age IS NOT NULL")
        total = cursor.fetchone()['total']
        
        # 定义年龄段
        age_ranges = [
            {'range': '<=18', 'min': 0, 'max': 18},
            {'range': '19-25', 'min': 19, 'max': 25},
            {'range': '26-35', 'min': 26, 'max': 35},
            {'range': '36-45', 'min': 36, 'max': 45},
            {'range': '>=46', 'min': 46, 'max': 150}
        ]
        
        result = []
        
        for age_range in age_ranges:
            sql = """
                SELECT COUNT(*) as count 
                FROM users 
                WHERE age >= %s AND age <= %s
            """
            cursor.execute(sql, [age_range['min'], age_range['max']])
            count = cursor.fetchone()['count']
            
            percentage = round((count / total) * 100, 1) if total > 0 else 0
            
            result.append({
                'range': age_range['range'],
                'count': count,
                'percentage': percentage
            })
            
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': result})
        
    except Exception as e:
        logger.error(f"获取年龄分布错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/users/gender_distribution', methods=['GET'])
@admin_token_required
def get_gender_distribution(current_admin_id):
    """获取用户性别分布统计"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 获取总用户数
        cursor.execute("SELECT COUNT(*) as total FROM users")
        total = cursor.fetchone()['total']
        
        # 获取各性别用户数量
        sql = """
            SELECT gender, COUNT(*) as count
            FROM users
            GROUP BY gender
        """
        cursor.execute(sql)
        genders = cursor.fetchall()
        
        result = []
        
        for gender_data in genders:
            gender = gender_data['gender']
            count = gender_data['count']
            
            # 构造性别标签
            label = "未知"
            if gender == 1:
                label = "男"
            elif gender == 2:
                label = "女"
                
            percentage = round((count / total) * 100, 1) if total > 0 else 0
            
            result.append({
                'gender': gender,
                'label': label,
                'count': count,
                'percentage': percentage
            })
            
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': result})
        
    except Exception as e:
        logger.error(f"获取性别分布错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/physical', methods=['GET'])
@admin_token_required
def get_physical_stats(current_admin_id):
    """获取用户体能数据统计"""
    try:
        metric = request.args.get('metric', 'health_index')
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        
        # 验证指标
        valid_metrics = ['health_index', 'stress_index', 'sleep_quality', 'aerobic_capacity']
        if metric not in valid_metrics:
            metric = 'health_index'
            
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建查询条件
        where_clause = f"WHERE {metric} IS NOT NULL"
        params = []
        
        if start_date:
            where_clause += " AND date >= %s"
            params.append(start_date)
            
        if end_date:
            where_clause += " AND date <= %s"
            params.append(end_date)
        
        # 获取指标统计数据
        sql = f"""
            SELECT 
                AVG({metric}) as avg_value,
                MIN({metric}) as min_value,
                MAX({metric}) as max_value
            FROM physical_stats
            {where_clause}
        """
        cursor.execute(sql, params)
        stats = cursor.fetchone()
        stats = decimal_to_float(stats)
        
        # 获取分布情况
        distribution = []
        
        ranges = [
            {'range': '0-20', 'min': 0, 'max': 20},
            {'range': '21-40', 'min': 21, 'max': 40},
            {'range': '41-60', 'min': 41, 'max': 60},
            {'range': '61-80', 'min': 61, 'max': 80},
            {'range': '81-100', 'min': 81, 'max': 100}
        ]
        
        # 获取总记录数
        sql = f"SELECT COUNT(*) as total FROM physical_stats {where_clause}"
        cursor.execute(sql, params)
        total = cursor.fetchone()['total']
        
        # 获取各区间的记录数
        for range_item in ranges:
            range_where = f"{where_clause} AND {metric} >= %s AND {metric} <= %s"
            range_params = params + [range_item['min'], range_item['max']]
            
            sql = f"SELECT COUNT(*) as count FROM physical_stats {range_where}"
            cursor.execute(sql, range_params)
            count = cursor.fetchone()['count']
            
            percentage = round((count / total) * 100, 1) if total > 0 else 0
            
            distribution.append({
                'range': range_item['range'],
                'count': count,
                'percentage': percentage
            })
        
        result = {
            'metric': metric,
            'avg_value': stats['avg_value'] or 0,
            'min_value': stats['min_value'] or 0,
            'max_value': stats['max_value'] or 0,
            'distribution': distribution
        }
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': result})
        
    except Exception as e:
        logger.error(f"获取体能数据统计错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/sleep', methods=['GET'])
@admin_token_required
def get_sleep_stats(current_admin_id):
    """获取用户睡眠质量统计"""
    try:
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建查询条件
        where_clause = "WHERE sleep_quality IS NOT NULL AND sleep_duration IS NOT NULL"
        params = []
        
        if start_date:
            where_clause += " AND date >= %s"
            params.append(start_date)
            
        if end_date:
            where_clause += " AND date <= %s"
            params.append(end_date)
        
        # 获取睡眠统计数据
        sql = f"""
            SELECT 
                AVG(sleep_quality) as avg_sleep_quality,
                AVG(sleep_duration) as avg_sleep_duration
            FROM physical_stats
            {where_clause}
        """
        cursor.execute(sql, params)
        stats = cursor.fetchone()
        stats = decimal_to_float(stats)
        
        # 获取总记录数
        sql = f"SELECT COUNT(*) as total FROM physical_stats {where_clause}"
        cursor.execute(sql, params)
        total = cursor.fetchone()['total']
        
        # 睡眠质量分布
        quality_ranges = [
            {'range': '0-20', 'min': 0, 'max': 20},
            {'range': '21-40', 'min': 21, 'max': 40},
            {'range': '41-60', 'min': 41, 'max': 60},
            {'range': '61-80', 'min': 61, 'max': 80},
            {'range': '81-100', 'min': 81, 'max': 100}
        ]
        
        quality_distribution = []
        
        for range_item in quality_ranges:
            range_where = f"{where_clause} AND sleep_quality >= %s AND sleep_quality <= %s"
            range_params = params + [range_item['min'], range_item['max']]
            
            sql = f"SELECT COUNT(*) as count FROM physical_stats {range_where}"
            cursor.execute(sql, range_params)
            count = cursor.fetchone()['count']
            
            percentage = round((count / total) * 100, 1) if total > 0 else 0
            
            quality_distribution.append({
                'range': range_item['range'],
                'count': count,
                'percentage': percentage
            })
            
        # 睡眠时长分布
        duration_ranges = [
            {'range': '<6小时', 'min': 0, 'max': 359},
            {'range': '6-7小时', 'min': 360, 'max': 419},
            {'range': '7-8小时', 'min': 420, 'max': 479},
            {'range': '8-9小时', 'min': 480, 'max': 539},
            {'range': '>9小时', 'min': 540, 'max': 1440}
        ]
        
        duration_distribution = []
        
        for range_item in duration_ranges:
            range_where = f"{where_clause} AND sleep_duration >= %s AND sleep_duration <= %s"
            range_params = params + [range_item['min'], range_item['max']]
            
            sql = f"SELECT COUNT(*) as count FROM physical_stats {range_where}"
            cursor.execute(sql, range_params)
            count = cursor.fetchone()['count']
            
            percentage = round((count / total) * 100, 1) if total > 0 else 0
            
            duration_distribution.append({
                'range': range_item['range'],
                'count': count,
                'percentage': percentage
            })
        
        result = {
            'avg_sleep_quality': stats['avg_sleep_quality'] or 0,
            'avg_sleep_duration': stats['avg_sleep_duration'] or 0,
            'quality_distribution': quality_distribution,
            'duration_distribution': duration_distribution
        }
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': result})
        
    except Exception as e:
        logger.error(f"获取睡眠统计错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/user/<int:user_id>/physical_stats', methods=['POST'])
@admin_token_required
def add_physical_stats(current_admin_id, user_id):
    """为用户添加体能数据"""
    try:
        data = request.get_json()
        date = data.get('date')
        avg_heart_rate = data.get('avg_heart_rate')
        current_heart_rate = data.get('current_heart_rate')
        resting_heart_rate = data.get('resting_heart_rate')
        max_heart_rate = data.get('max_heart_rate')
        avg_blood_oxygen = data.get('avg_blood_oxygen')
        health_index = data.get('health_index')
        stress_index = data.get('stress_index')
        sleep_quality = data.get('sleep_quality')
        sleep_duration = data.get('sleep_duration')
        aerobic_capacity = data.get('aerobic_capacity')
        weekly_distance = data.get('weekly_distance')
        
        if not date:
            return jsonify({'code': 400, 'message': '日期不能为空'})
            
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()
        
        # 检查用户是否存在
        cursor.execute("SELECT id FROM users WHERE id = %s", (user_id,))
        if not cursor.fetchone():
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})
            
        # 检查该日期是否已有记录
        cursor.execute("""
            SELECT id FROM physical_stats 
            WHERE user_id = %s AND date = %s
        """, (user_id, date))
        existing = cursor.fetchone()
        
        if existing:
            # 如果存在则更新
            update_fields = []
            update_values = []
            
            if avg_heart_rate is not None:
                update_fields.append("avg_heart_rate = %s")
                update_values.append(avg_heart_rate)
                
            if current_heart_rate is not None:
                update_fields.append("current_heart_rate = %s")
                update_values.append(current_heart_rate)
                
            if resting_heart_rate is not None:
                update_fields.append("resting_heart_rate = %s")
                update_values.append(resting_heart_rate)
                
            if max_heart_rate is not None:
                update_fields.append("max_heart_rate = %s")
                update_values.append(max_heart_rate)
                
            if avg_blood_oxygen is not None:
                update_fields.append("avg_blood_oxygen = %s")
                update_values.append(avg_blood_oxygen)
                
            if health_index is not None:
                update_fields.append("health_index = %s")
                update_values.append(health_index)
                
            if stress_index is not None:
                update_fields.append("stress_index = %s")
                update_values.append(stress_index)
                
            if sleep_quality is not None:
                update_fields.append("sleep_quality = %s")
                update_values.append(sleep_quality)
                
            if sleep_duration is not None:
                update_fields.append("sleep_duration = %s")
                update_values.append(sleep_duration)
                
            if aerobic_capacity is not None:
                update_fields.append("aerobic_capacity = %s")
                update_values.append(aerobic_capacity)
                
            if weekly_distance is not None:
                update_fields.append("weekly_distance = %s")
                update_values.append(weekly_distance)
                
            if not update_fields:
                cursor.close()
                conn.close()
                return jsonify({'code': 400, 'message': '没有提供要更新的数据'})
                
            sql = f"""
                UPDATE physical_stats 
                SET {', '.join(update_fields)} 
                WHERE user_id = %s AND date = %s
            """
            cursor.execute(sql, update_values + [user_id, date])
        else:
            # 如果不存在则插入
            fields = ["user_id", "date"]
            values = [user_id, date]
            
            if avg_heart_rate is not None:
                fields.append("avg_heart_rate")
                values.append(avg_heart_rate)
                
            if current_heart_rate is not None:
                fields.append("current_heart_rate")
                values.append(current_heart_rate)
                
            if resting_heart_rate is not None:
                fields.append("resting_heart_rate")
                values.append(resting_heart_rate)
                
            if max_heart_rate is not None:
                fields.append("max_heart_rate")
                values.append(max_heart_rate)
                
            if avg_blood_oxygen is not None:
                fields.append("avg_blood_oxygen")
                values.append(avg_blood_oxygen)
                
            if health_index is not None:
                fields.append("health_index")
                values.append(health_index)
                
            if stress_index is not None:
                fields.append("stress_index")
                values.append(stress_index)
                
            if sleep_quality is not None:
                fields.append("sleep_quality")
                values.append(sleep_quality)
                
            if sleep_duration is not None:
                fields.append("sleep_duration")
                values.append(sleep_duration)
                
            if aerobic_capacity is not None:
                fields.append("aerobic_capacity")
                values.append(aerobic_capacity)
                
            if weekly_distance is not None:
                fields.append("weekly_distance")
                values.append(weekly_distance)
                
            placeholders = ", ".join(["%s"] * len(values))
            sql = f"INSERT INTO physical_stats ({', '.join(fields)}) VALUES ({placeholders})"
            cursor.execute(sql, values)
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '体能数据添加成功'})
        
    except Exception as e:
        logger.error(f"添加体能数据错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/user/<int:user_id>/goals', methods=['POST'])
@admin_token_required
def add_user_goals(current_admin_id, user_id):
    """为用户添加进度目标"""
    try:
        data = request.get_json()
        title = data.get('title')
        current_value = data.get('current_value')
        target_value = data.get('target_value')
        category = data.get('category')
        deadline = data.get('deadline')
        
        if not title or current_value is None or target_value is None or not category:
            return jsonify({'code': 400, 'message': '标题、当前值、目标值和类别不能为空'})
            
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()
        
        # 检查用户是否存在
        cursor.execute("SELECT id FROM users WHERE id = %s", (user_id,))
        if not cursor.fetchone():
            cursor.close()
            conn.close()
            return jsonify({'code': 404, 'message': '用户不存在'})
            
        # 插入进度目标
        sql = """
            INSERT INTO progress_goals 
            (user_id, title, current_value, target_value, category, deadline) 
            VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(sql, [user_id, title, current_value, target_value, category, deadline])
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '进度目标添加成功'})
        
    except Exception as e:
        logger.error(f"添加进度目标错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/export/users', methods=['GET'])
@admin_token_required
def export_users(current_admin_id):
    """导出用户数据（CSV格式）"""
    try:
        import csv
        import io
        from flask import Response
        
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建查询条件
        where_clause = "WHERE 1=1"
        params = []
        
        if start_date:
            where_clause += " AND created_at >= %s"
            params.append(start_date)
            
        if end_date:
            where_clause += " AND created_at <= %s"
            params.append(end_date)
        
        # 获取用户数据
        sql = f"""
            SELECT id, username, gender, age, height, weight, level, email,
                   total_workouts, total_duration, total_distance, 
                   created_at, updated_at
            FROM users
            {where_clause}
            ORDER BY id
        """
        cursor.execute(sql, params)
        users = cursor.fetchall()
        
        # 转换数据类型
        users = [decimal_to_float(user) for user in users]
        
        cursor.close()
        conn.close()
        
        # 创建CSV文件
        output = io.StringIO()
        writer = csv.writer(output)
        
        # 写入表头
        header = ['用户ID', '用户名', '性别', '年龄', '身高(cm)', '体重(kg)', '等级', 
                  '邮箱', '总运动次数', '总运动时长(分钟)', '总运动距离(km)', '注册时间', '更新时间']
        writer.writerow(header)
        
        # 写入数据行
        for user in users:
            gender_label = '未知'
            if user['gender'] == 1:
                gender_label = '男'
            elif user['gender'] == 2:
                gender_label = '女'
                
            row = [
                user['id'],
                user['username'],
                gender_label,
                user['age'],
                user['height'],
                user['weight'],
                user['level'],
                user['email'],
                user['total_workouts'],
                user['total_duration'],
                user['total_distance'],
                user['created_at'],
                user['updated_at']
            ]
            writer.writerow(row)
            
        # 返回CSV文件
        output.seek(0)
        return Response(
            output,
            mimetype="text/csv",
            headers={"Content-Disposition": "attachment;filename=users_export.csv"}
        )
        
    except Exception as e:
        logger.error(f"导出用户数据错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/import/users', methods=['POST'])
@admin_token_required
def import_users(current_admin_id):
    """批量导入用户数据"""
    try:
        import csv
        import io
        
        if 'file' not in request.files:
            return jsonify({'code': 400, 'message': '没有上传文件'})
            
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'code': 400, 'message': '没有选择文件'})
            
        if not file.filename.endswith('.csv'):
            return jsonify({'code': 400, 'message': '只支持CSV文件格式'})
            
        # 读取CSV文件
        stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
        csv_reader = csv.reader(stream)
        
        # 读取表头
        header = next(csv_reader)
        
        # 验证表头格式
        required_fields = ['用户名', '密码', '性别', '年龄', '身高(cm)', '体重(kg)', '邮箱']
        for field in required_fields:
            if field not in header:
                return jsonify({'code': 400, 'message': f'CSV文件缺少必要字段: {field}'})
                
        # 获取字段索引
        username_idx = header.index('用户名')
        password_idx = header.index('密码')
        gender_idx = header.index('性别')
        age_idx = header.index('年龄')
        height_idx = header.index('身高(cm)')
        weight_idx = header.index('体重(kg)')
        email_idx = header.index('邮箱')
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()
        
        # 开始导入
        total = 0
        success = 0
        failed = 0
        errors = []
        
        for row_idx, row in enumerate(csv_reader, 2):  # 从2开始计数（表头是第1行）
            try:
                if len(row) < len(required_fields):
                    errors.append({'row': row_idx, 'error': '行数据不完整'})
                    failed += 1
                    continue
                    
                total += 1
                
                username = row[username_idx].strip()
                password = row[password_idx].strip()
                
                # 验证必填字段
                if not username or not password:
                    errors.append({'row': row_idx, 'error': '用户名和密码不能为空'})
                    failed += 1
                    continue
                
                # 检查用户名是否已存在
                cursor.execute("SELECT id FROM users WHERE username = %s", (username,))
                if cursor.fetchone():
                    errors.append({'row': row_idx, 'error': '用户名已存在'})
                    failed += 1
                    continue
                
                # 处理性别字段
                gender_str = row[gender_idx].strip()
                gender = None
                if gender_str == '男':
                    gender = 1
                elif gender_str == '女':
                    gender = 2
                else:
                    gender = 0  # 未知
                
                # 处理年龄字段
                age = None
                if row[age_idx].strip():
                    try:
                        age = int(row[age_idx])
                    except ValueError:
                        errors.append({'row': row_idx, 'error': '年龄必须是有效数字'})
                        failed += 1
                        continue
                
                # 处理身高字段
                height = None
                if row[height_idx].strip():
                    try:
                        height = float(row[height_idx])
                    except ValueError:
                        errors.append({'row': row_idx, 'error': '身高必须是有效数字'})
                        failed += 1
                        continue
                
                # 处理体重字段
                weight = None
                if row[weight_idx].strip():
                    try:
                        weight = float(row[weight_idx])
                    except ValueError:
                        errors.append({'row': row_idx, 'error': '体重必须是有效数字'})
                        failed += 1
                        continue
                
                # 处理邮箱字段
                email = row[email_idx].strip() if row[email_idx].strip() else None
                
                # 哈希密码
                hashed_password = hash_password(password)
                
                # 插入用户数据
                sql = """
                    INSERT INTO users (username, password, gender, age, height, weight, email, level, total_workouts, total_duration, total_distance)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """
                cursor.execute(sql, [username, hashed_password, gender, age, height, weight, email, 'beginner', 0, 0, 0.0])
                
                success += 1
                
            except Exception as e:
                logger.error(f"导入第{row_idx}行出错: {str(e)}")
                errors.append({'row': row_idx, 'error': str(e)})
                failed += 1
        
        cursor.close()
        conn.close()
        
        return jsonify({
            'code': 200,
            'message': '导入成功',
            'data': {
                'total': total,
                'success': success,
                'failed': failed,
                'errors': errors
            }
        })
        
    except Exception as e:
        logger.error(f"导入用户数据错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


# 设备管理相关API
@admin_bp.route('/devices', methods=['GET'])
@admin_token_required
def get_all_devices(current_admin_id):
    """获取所有设备列表（分页）"""
    try:
        page = int(request.args.get('page', 1))
        size = int(request.args.get('size', 20))
        status = request.args.get('status')
        keyword = request.args.get('keyword', '')
        
        if page < 1:
            page = 1
        if size < 1 or size > 100:
            size = 20
            
        offset = (page - 1) * size
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 构建查询条件
        where_clause = ""
        params = []
        
        conditions = []
        if status is not None:
            try:
                status_int = int(status)
                conditions.append("d.status = %s")
                params.append(status_int)
            except ValueError:
                pass
        
        if keyword:
            conditions.append("(d.device_id LIKE %s OR d.device_name LIKE %s OR d.device_type LIKE %s)")
            params.extend([f'%{keyword}%', f'%{keyword}%', f'%{keyword}%'])
            
        if conditions:
            where_clause = "WHERE " + " AND ".join(conditions)
            
        # 获取总记录数
        count_sql = f"SELECT COUNT(*) as total FROM devices d {where_clause}"
        cursor.execute(count_sql, params)
        total = cursor.fetchone()['total']
        
        # 查询设备列表
        sql = f"""
            SELECT d.id, d.device_id, d.device_name, d.device_type, d.status, 
                   d.user_id, u.username, d.last_active, d.created_at
            FROM devices d
            LEFT JOIN users u ON d.user_id = u.id
            {where_clause}
            ORDER BY d.id DESC
            LIMIT %s, %s
        """
        cursor.execute(sql, params + [offset, size])
        
        devices = cursor.fetchall()
        
        cursor.close()
        conn.close()
        
        response_data = {
            'total': total,
            'page': page,
            'size': size,
            'devices': devices
        }
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取设备列表错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/devices', methods=['POST'])
@admin_token_required
def add_device(current_admin_id):
    """添加新设备到系统"""
    try:
        data = request.get_json()
        
        required_fields = ['device_id', 'secret', 'device_name', 'device_type']
        for field in required_fields:
            if field not in data:
                return jsonify({'code': 400, 'message': f'缺少必要参数: {field}'})
        
        device_id = data['device_id']
        secret = data['secret']
        device_name = data['device_name']
        device_type = data['device_type']
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 检查设备ID是否已存在
        cursor.execute("SELECT id FROM devices WHERE device_id = %s", (device_id,))
        if cursor.fetchone():
            return jsonify({'code': 400, 'message': '设备ID已存在'})
        
        # 插入新设备
        cursor.execute("""
            INSERT INTO devices (device_id, secret, device_name, device_type, status, created_at, updated_at)
            VALUES (%s, %s, %s, %s, 0, NOW(), NOW())
        """, (device_id, secret, device_name, device_type))
        
        conn.commit()
        new_device_id = cursor.lastrowid
        
        cursor.close()
        conn.close()
        
        return jsonify({
            'code': 201,
            'message': '设备添加成功',
            'data': {
                'id': new_device_id,
                'device_id': device_id
            }
        })
        
    except Exception as e:
        logger.error(f"添加设备错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/devices/batch', methods=['POST'])
@admin_token_required
def batch_add_devices(current_admin_id):
    """批量添加设备"""
    try:
        data = request.get_json()
        
        if not data or 'devices' not in data or not isinstance(data['devices'], list):
            return jsonify({'code': 400, 'message': '无效的请求数据'})
        
        devices = data['devices']
        if not devices:
            return jsonify({'code': 400, 'message': '设备列表为空'})
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        total = len(devices)
        success = 0
        failed = 0
        
        for device in devices:
            try:
                if not all(k in device for k in ['device_id', 'secret', 'device_name', 'device_type']):
                    failed += 1
                    continue
                
                # 检查设备ID是否已存在
                cursor.execute("SELECT id FROM devices WHERE device_id = %s", (device['device_id'],))
                if cursor.fetchone():
                    failed += 1
                    continue
                
                # 插入新设备
                cursor.execute("""
                    INSERT INTO devices (device_id, secret, device_name, device_type, status, created_at, updated_at)
                    VALUES (%s, %s, %s, %s, 0, NOW(), NOW())
                """, (device['device_id'], device['secret'], device['device_name'], device['device_type']))
                
                conn.commit()
                success += 1
                
            except Exception as e:
                logger.error(f"批量添加设备错误: {e}")
                failed += 1
                conn.rollback()
        
        cursor.close()
        conn.close()
        
        return jsonify({
            'code': 201,
            'message': '批量添加成功',
            'data': {
                'total': total,
                'success': success,
                'failed': failed
            }
        })
        
    except Exception as e:
        logger.error(f"批量添加设备错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/devices/<device_id>', methods=['PUT'])
@admin_token_required
def update_device_info(current_admin_id, device_id):
    """修改设备信息"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'code': 400, 'message': '无效的请求数据'})
        
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 检查设备是否存在
        cursor.execute("SELECT * FROM devices WHERE device_id = %s", (device_id,))
        device = cursor.fetchone()
        
        if not device:
            return jsonify({'code': 404, 'message': '设备不存在'})
        
        # 构建更新SQL
        update_fields = []
        params = []
        
        if 'device_name' in data:
            update_fields.append("device_name = %s")
            params.append(data['device_name'])
            
        if 'device_type' in data:
            update_fields.append("device_type = %s")
            params.append(data['device_type'])
            
        if 'status' in data:
            try:
                status = int(data['status'])
                if status not in [0, 1, 2]:
                    return jsonify({'code': 400, 'message': '无效的状态值'})
                
                update_fields.append("status = %s")
                params.append(status)
                
                # 如果状态设为未绑定，清除用户ID
                if status == 0:
                    update_fields.append("user_id = NULL")
            except ValueError:
                return jsonify({'code': 400, 'message': '无效的状态值'})
        
        if not update_fields:
            return jsonify({'code': 400, 'message': '没有提供要更新的字段'})
        
        # 更新设备信息
        sql = f"""
            UPDATE devices
            SET {", ".join(update_fields)}, updated_at = NOW()
            WHERE device_id = %s
        """
        params.append(device_id)
        
        cursor.execute(sql, params)
        conn.commit()
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '设备信息更新成功'})
        
    except Exception as e:
        logger.error(f"更新设备信息错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/devices/<device_id>', methods=['DELETE'])
@admin_token_required
def delete_device(current_admin_id, device_id):
    """从系统中删除设备"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor()
        
        # 检查设备是否存在
        cursor.execute("SELECT id FROM devices WHERE device_id = %s", (device_id,))
        if not cursor.fetchone():
            return jsonify({'code': 404, 'message': '设备不存在'})
        
        # 删除设备
        cursor.execute("DELETE FROM devices WHERE device_id = %s", (device_id,))
        conn.commit()
        
        cursor.close()
        conn.close()
        
        return jsonify({'code': 200, 'message': '设备删除成功'})
        
    except Exception as e:
        logger.error(f"删除设备错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/devices/<device_id>/reset_secret', methods=['POST'])
@admin_token_required
def reset_device_secret(current_admin_id, device_id):
    """重置设备密钥"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 检查设备是否存在
        cursor.execute("SELECT * FROM devices WHERE device_id = %s", (device_id,))
        device = cursor.fetchone()
        
        if not device:
            return jsonify({'code': 404, 'message': '设备不存在'})
        
        # 生成新的密钥
        import uuid
        new_secret = str(uuid.uuid4()).replace('-', '')
        
        # 更新设备密钥
        cursor.execute(
            "UPDATE devices SET secret = %s, updated_at = NOW() WHERE device_id = %s",
            (new_secret, device_id)
        )
        conn.commit()
        
        cursor.close()
        conn.close()
        
        return jsonify({
            'code': 200,
            'message': '设备密钥重置成功',
            'data': {
                'device_id': device_id,
                'new_secret': new_secret
            }
        })
        
    except Exception as e:
        logger.error(f"重置设备密钥错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@admin_bp.route('/stats/devices', methods=['GET'])
@admin_token_required
def get_devices_stats(current_admin_id):
    """获取设备统计数据"""
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({'code': 500, 'message': '数据库连接失败'})

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        
        # 获取设备总数
        cursor.execute("SELECT COUNT(*) as total FROM devices")
        total_devices = cursor.fetchone()['total']
        
        # 获取已绑定设备数量
        cursor.execute("SELECT COUNT(*) as count FROM devices WHERE status = 1")
        bound_devices = cursor.fetchone()['count']
        
        # 获取未绑定设备数量
        cursor.execute("SELECT COUNT(*) as count FROM devices WHERE status = 0")
        unbound_devices = cursor.fetchone()['count']
        
        # 获取已禁用设备数量
        cursor.execute("SELECT COUNT(*) as count FROM devices WHERE status = 2")
        disabled_devices = cursor.fetchone()['count']
        
        # 获取今日活跃设备数量
        cursor.execute("""
            SELECT COUNT(*) as count FROM devices 
            WHERE last_active >= CURDATE()
        """)
        active_devices_today = cursor.fetchone()['count']
        
        # 获取本周活跃设备数量
        cursor.execute("""
            SELECT COUNT(*) as count FROM devices 
            WHERE last_active >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
        """)
        active_devices_week = cursor.fetchone()['count']
        
        # 获取设备类型分布
        cursor.execute("""
            SELECT device_type, COUNT(*) as count
            FROM devices
            GROUP BY device_type
            ORDER BY count DESC
        """)
        device_types = cursor.fetchall()
        
        # 计算百分比
        for device_type in device_types:
            device_type['percentage'] = round(device_type['count'] / total_devices * 100, 1) if total_devices > 0 else 0
        
        cursor.close()
        conn.close()
        
        response_data = {
            'total_devices': total_devices,
            'bound_devices': bound_devices,
            'unbound_devices': unbound_devices,
            'disabled_devices': disabled_devices,
            'active_devices_today': active_devices_today,
            'active_devices_week': active_devices_week,
            'by_type': device_types
        }
        
        return jsonify({'code': 200, 'message': '获取成功', 'data': response_data})
        
    except Exception as e:
        logger.error(f"获取设备统计数据错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'}) 