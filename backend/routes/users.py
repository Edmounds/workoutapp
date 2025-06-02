#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""用户相关路由"""

import traceback
import pymysql
from flask import Blueprint, request, jsonify
from ..utils.db import get_db_connection
from ..utils.auth import hash_password, generate_token
from ..utils.helpers import decimal_to_float
from ..middleware.auth import token_required
from ..config import logger

users_bp = Blueprint('users', __name__, url_prefix='/api/users')


@users_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        name = data.get('name')
        password = data.get('password')
        email = data.get('email')  # 可选字段
        gender = data.get('gender')  # 可选字段：0-未知，1-男，2-女
        age = data.get('age')  # 可选字段
        height = data.get('height')  # 可选字段：身高(cm)
        weight = data.get('weight')  # 可选字段：体重(kg)

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

        # 创建新用户，包含所有可用字段
        hashed_password = hash_password(password)
        
        # 准备SQL插入语句和参数
        insert_fields = ["username", "password", "level", "total_workouts", "total_duration", "total_distance"]
        insert_values = [name, hashed_password, 'beginner', 0, 0, 0.00]
        
        # 添加可选字段
        if email:
            insert_fields.append("email")
            insert_values.append(email)
        if gender is not None:
            insert_fields.append("gender")
            insert_values.append(gender)
        if age is not None:
            insert_fields.append("age")
            insert_values.append(age)
        if height is not None:
            insert_fields.append("height")
            insert_values.append(height)
        if weight is not None:
            insert_fields.append("weight")
            insert_values.append(weight)
            
        # 构建SQL语句
        sql = f"""
            INSERT INTO users ({', '.join(insert_fields)}) 
            VALUES ({', '.join(['%s'] * len(insert_values))})
        """
        
        cursor.execute(sql, insert_values)
        
        # 获取新创建用户的ID
        user_id = cursor.lastrowid
        
        cursor.close()
        conn.close()

        return jsonify({
            'code': 201, 
            'message': '注册成功',
            'data': {
                'id': user_id,
                'username': name
            }
        })

    except Exception as e:
        logger.error(f"注册错误: {traceback.format_exc()}")
        return jsonify({'code': 500, 'message': f'服务器内部错误: {str(e)}'})


@users_bp.route('/login', methods=['POST'])
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


@users_bp.route('/all/list', methods=['GET'])
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


@users_bp.route('/update', methods=['PUT'])
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