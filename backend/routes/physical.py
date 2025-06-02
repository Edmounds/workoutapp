#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""体能数据相关路由"""

import traceback
from flask import Blueprint, jsonify
import pymysql
from ..utils.db import get_db_connection
from ..utils.helpers import decimal_to_float, format_pace
from ..middleware.auth import token_required
from ..config import logger

physical_bp = Blueprint('physical', __name__, url_prefix='/api/physical')


@physical_bp.route('/stats', methods=['GET'])
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