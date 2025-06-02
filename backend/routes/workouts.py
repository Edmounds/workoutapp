#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""运动记录相关路由"""

import traceback
from flask import Blueprint, request, jsonify
import pymysql
from ..utils.db import get_db_connection
from ..utils.helpers import decimal_to_float
from ..middleware.auth import token_required
from ..config import logger

workouts_bp = Blueprint('workouts', __name__, url_prefix='/api/user')


@workouts_bp.route('/running_records', methods=['GET'])
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


@workouts_bp.route('/upload_workout', methods=['POST'])
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