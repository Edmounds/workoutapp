#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""设备管理相关的API路由"""

from flask import Blueprint, request, jsonify
import pymysql
import time
import uuid
from functools import wraps
import jwt
from config import APP_CONFIG, logger
from utils.db import get_db_connection
from middleware.auth import token_required

# 创建蓝图
devices_bp = Blueprint('devices', __name__, url_prefix='/api/devices')

# 验证设备令牌的装饰器
def device_token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]
        
        if not token:
            return jsonify({'code': 401, 'message': '缺少访问令牌'}), 401
        
        try:
            data = jwt.decode(token, APP_CONFIG['SECRET_KEY'], algorithms=["HS256"])
            device_id = data.get('device_id')
            
            if not device_id:
                return jsonify({'code': 401, 'message': '无效的设备令牌'}), 401
                
            conn = get_db_connection()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute("SELECT * FROM devices WHERE device_id = %s", (device_id,))
            device = cursor.fetchone()
            cursor.close()
            conn.close()
            
            if not device:
                return jsonify({'code': 401, 'message': '无效的设备令牌'}), 401
            
            return f(device, *args, **kwargs)
            
        except Exception as e:
            logger.error(f"设备令牌验证失败: {e}")
            return jsonify({'code': 401, 'message': '无效的设备令牌'}), 401
        
    return decorated

@devices_bp.route('/bind', methods=['POST'])
@token_required
def bind_device(current_user_id):
    """将设备与当前用户绑定"""
    data = request.get_json()
    
    if not data or 'device_id' not in data or 'secret' not in data:
        return jsonify({'code': 400, 'message': '缺少必要参数'}), 400
    
    device_id = data['device_id']
    secret = data['secret']
    user_id = current_user_id
    
    conn = get_db_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    
    try:
        # 检查设备是否存在且密钥是否匹配
        cursor.execute("SELECT * FROM devices WHERE device_id = %s", (device_id,))
        device = cursor.fetchone()
        
        if not device:
            return jsonify({'code': 404, 'message': '设备不存在'}), 404
        
        if device['secret'] != secret:
            return jsonify({'code': 401, 'message': '设备密钥不正确'}), 401
        
        if device['status'] == 2:
            return jsonify({'code': 403, 'message': '该设备已被禁用'}), 403
        
        if device['user_id'] is not None and device['user_id'] != user_id:
            return jsonify({'code': 403, 'message': '该设备已被其他用户绑定'}), 403
        
        # 更新设备状态为已绑定
        cursor.execute(
            "UPDATE devices SET user_id = %s, status = 1, updated_at = NOW() WHERE device_id = %s",
            (user_id, device_id)
        )
        conn.commit()
        
        # 获取更新后的设备信息
        cursor.execute("SELECT * FROM devices WHERE device_id = %s", (device_id,))
        updated_device = cursor.fetchone()
        
        return jsonify({
            'code': 200,
            'message': '设备绑定成功',
            'data': {
                'device_id': updated_device['device_id'],
                'device_name': updated_device['device_name'],
                'device_type': updated_device['device_type'],
                'status': updated_device['status']
            }
        })
        
    except Exception as e:
        conn.rollback()
        logger.error(f"绑定设备失败: {e}")
        return jsonify({'code': 500, 'message': f'绑定设备失败: {str(e)}'}), 500
    
    finally:
        cursor.close()
        conn.close()

@devices_bp.route('/unbind', methods=['POST'])
@token_required
def unbind_device(current_user_id):
    """解除当前用户与设备的绑定"""
    data = request.get_json()
    
    if not data or 'device_id' not in data:
        return jsonify({'code': 400, 'message': '缺少必要参数'}), 400
    
    device_id = data['device_id']
    user_id = current_user_id
    
    conn = get_db_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    
    try:
        # 检查设备是否存在且是否被当前用户绑定
        cursor.execute(
            "SELECT * FROM devices WHERE device_id = %s AND user_id = %s",
            (device_id, user_id)
        )
        device = cursor.fetchone()
        
        if not device:
            return jsonify({'code': 404, 'message': '未找到您绑定的该设备'}), 404
        
        # 更新设备状态为未绑定
        cursor.execute(
            "UPDATE devices SET user_id = NULL, status = 0, updated_at = NOW() WHERE device_id = %s",
            (device_id,)
        )
        conn.commit()
        
        return jsonify({'code': 200, 'message': '设备解绑成功'})
        
    except Exception as e:
        conn.rollback()
        logger.error(f"解绑设备失败: {e}")
        return jsonify({'code': 500, 'message': f'解绑设备失败: {str(e)}'}), 500
    
    finally:
        cursor.close()
        conn.close()

@devices_bp.route('/list', methods=['GET'])
@token_required
def get_device_list(current_user_id):
    """获取当前用户绑定的所有设备"""
    user_id = current_user_id
    
    conn = get_db_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    
    try:
        cursor.execute(
            "SELECT id, device_id, device_name, device_type, status, last_active FROM devices WHERE user_id = %s",
            (user_id,)
        )
        devices = cursor.fetchall()
        
        return jsonify({
            'code': 200,
            'message': '获取成功',
            'data': devices
        })
        
    except Exception as e:
        logger.error(f"获取设备列表失败: {e}")
        return jsonify({'code': 500, 'message': f'获取设备列表失败: {str(e)}'}), 500
    
    finally:
        cursor.close()
        conn.close()

@devices_bp.route('/auth', methods=['POST'])
def device_auth():
    """设备连接认证，获取临时访问令牌"""
    data = request.get_json()
    
    if not data or 'device_id' not in data or 'secret' not in data:
        return jsonify({'code': 400, 'message': '缺少必要参数'}), 400
    
    device_id = data['device_id']
    secret = data['secret']
    
    conn = get_db_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    
    try:
        # 检查设备是否存在且密钥是否匹配
        cursor.execute("SELECT * FROM devices WHERE device_id = %s", (device_id,))
        device = cursor.fetchone()
        
        if not device:
            return jsonify({'code': 404, 'message': '设备不存在'}), 404
        
        if device['secret'] != secret:
            return jsonify({'code': 401, 'message': '设备密钥不正确'}), 401
        
        if device['status'] == 2:
            return jsonify({'code': 403, 'message': '该设备已被禁用'}), 403
        
        # 更新设备最后活跃时间
        cursor.execute(
            "UPDATE devices SET last_active = NOW() WHERE device_id = %s",
            (device_id,)
        )
        conn.commit()
        
        # 如果设备已绑定用户，获取用户信息
        user_info = None
        if device['user_id']:
            cursor.execute(
                "SELECT id, username FROM users WHERE id = %s",
                (device['user_id'],)
            )
            user = cursor.fetchone()
            if user:
                user_info = {
                    'user_id': user['id'],
                    'username': user['username']
                }
        
        # 生成设备临时访问令牌
        token_payload = {
            'device_id': device_id,
            'exp': int(time.time()) + 3600  # 令牌有效期1小时
        }
        
        token = jwt.encode(token_payload, APP_CONFIG['SECRET_KEY'], algorithm="HS256")
        
        response_data = {
            'token': token,
            'expires_in': 3600
        }
        
        if user_info:
            response_data.update(user_info)
        
        return jsonify({
            'code': 200,
            'message': '认证成功',
            'data': response_data
        })
        
    except Exception as e:
        conn.rollback()
        logger.error(f"设备认证失败: {e}")
        return jsonify({'code': 500, 'message': f'设备认证失败: {str(e)}'}), 500
    
    finally:
        cursor.close()
        conn.close()

@devices_bp.route('/upload_data', methods=['POST'])
@device_token_required
def upload_data(device):
    """设备上传运动和健康数据"""
    data = request.get_json()
    user_id = device['user_id']
    
    if not user_id:
        return jsonify({'code': 403, 'message': '该设备未绑定用户，无法上传数据'}), 403
    
    if not data or 'data_type' not in data or 'data' not in data:
        return jsonify({'code': 400, 'message': '缺少必要参数'}), 400
    
    data_type = data['data_type']
    timestamp = data.get('timestamp')
    upload_data = data['data']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # 根据数据类型处理不同的数据
        if data_type == 'workout':
            # 处理运动数据
            workout_type = upload_data.get('workout_type', '跑步')
            duration = upload_data.get('duration')
            distance = upload_data.get('distance')
            avg_pace = upload_data.get('avg_pace')
            calories = upload_data.get('calories')
            avg_heart_rate = upload_data.get('avg_heart_rate')
            max_heart_rate = upload_data.get('max_heart_rate')
            
            # 插入运动记录
            cursor.execute(
                """
                INSERT INTO running_records 
                (user_id, workout_type, start_time, duration, distance, avg_pace, 
                avg_heart_rate, max_heart_rate, calories)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                """,
                (user_id, workout_type, timestamp, duration, distance, avg_pace, 
                 avg_heart_rate, max_heart_rate, calories)
            )
            
            # 更新用户总运动数据
            cursor.execute(
                """
                UPDATE users SET 
                total_workouts = total_workouts + 1,
                total_duration = total_duration + %s,
                total_distance = total_distance + %s
                WHERE id = %s
                """,
                (duration // 60, distance / 1000, user_id)
            )
            
        elif data_type == 'health_stats':
            # 处理健康数据
            current_date = time.strftime('%Y-%m-%d')
            
            # 检查今天是否已有记录
            cursor.execute(
                "SELECT id FROM physical_stats WHERE user_id = %s AND date = %s",
                (user_id, current_date)
            )
            existing = cursor.fetchone()
            
            if existing:
                # 更新现有记录
                fields = []
                values = []
                
                for key, value in upload_data.items():
                    if value is not None:
                        fields.append(f"{key} = %s")
                        values.append(value)
                
                if fields:
                    values.append(user_id)
                    values.append(current_date)
                    
                    query = f"UPDATE physical_stats SET {', '.join(fields)} WHERE user_id = %s AND date = %s"
                    cursor.execute(query, values)
            else:
                # 创建新记录
                fields = ['user_id', 'date']
                placeholders = ['%s', '%s']
                values = [user_id, current_date]
                
                for key, value in upload_data.items():
                    if value is not None:
                        fields.append(key)
                        placeholders.append('%s')
                        values.append(value)
                
                query = f"INSERT INTO physical_stats ({', '.join(fields)}) VALUES ({', '.join(placeholders)})"
                cursor.execute(query, values)
        
        else:
            return jsonify({'code': 400, 'message': '不支持的数据类型'}), 400
        
        conn.commit()
        
        return jsonify({'code': 200, 'message': '数据上传成功'})
        
    except Exception as e:
        conn.rollback()
        logger.error(f"数据上传失败: {e}")
        return jsonify({'code': 500, 'message': f'数据上传失败: {str(e)}'}), 500
    
    finally:
        cursor.close()
        conn.close()

@devices_bp.route('/update', methods=['PUT'])
@token_required
def update_device(current_user_id):
    """修改设备信息"""
    data = request.get_json()
    
    if not data or 'device_id' not in data:
        return jsonify({'code': 400, 'message': '缺少必要参数'}), 400
    
    device_id = data['device_id']
    device_name = data.get('device_name')
    user_id = current_user_id
    
    if not device_name:
        return jsonify({'code': 400, 'message': '设备名称不能为空'}), 400
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # 检查设备是否存在且是否被当前用户绑定
        cursor.execute(
            "SELECT * FROM devices WHERE device_id = %s AND user_id = %s",
            (device_id, user_id)
        )
        device = cursor.fetchone()
        
        if not device:
            return jsonify({'code': 404, 'message': '未找到您绑定的该设备'}), 404
        
        # 更新设备信息
        cursor.execute(
            "UPDATE devices SET device_name = %s, updated_at = NOW() WHERE device_id = %s",
            (device_name, device_id)
        )
        conn.commit()
        
        return jsonify({'code': 200, 'message': '设备信息更新成功'})
        
    except Exception as e:
        conn.rollback()
        logger.error(f"更新设备信息失败: {e}")
        return jsonify({'code': 500, 'message': f'更新设备信息失败: {str(e)}'}), 500
    
    finally:
        cursor.close()
        conn.close() 