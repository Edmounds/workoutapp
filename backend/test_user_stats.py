#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试用户运动统计数据更新
"""

import mysql.connector
from datetime import datetime, timedelta
import random
import sys
from decimal import Decimal

# 数据库配置
mysql_config = {
    'host': '113.45.220.0',
    'port': 3306,
    'user': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app'
}

def test_user_stats_update(user_id):
    """测试用户运动统计数据更新"""
    conn = None
    cursor = None
    
    try:
        # 连接数据库
        print(f"连接到数据库 {mysql_config['host']}...")
        conn = mysql.connector.connect(**mysql_config)
        cursor = conn.cursor(dictionary=True)
        
        # 1. 查询用户当前的统计数据
        print(f"查询用户 {user_id} 当前的统计数据...")
        cursor.execute("""
            SELECT id, username, total_workouts, total_duration, total_distance 
            FROM users WHERE id = %s
        """, (user_id,))
        
        user = cursor.fetchone()
        if not user:
            print(f"错误: 用户 {user_id} 不存在")
            return False
        
        # 转换Decimal为float
        total_workouts = int(user['total_workouts'])
        total_duration = float(user['total_duration'])
        total_distance = float(user['total_distance']) if isinstance(user['total_distance'], Decimal) else user['total_distance']
            
        print(f"用户 {user['username']} (ID: {user['id']}) 当前统计:")
        print(f"  总运动次数: {total_workouts}")
        print(f"  总运动时长: {total_duration} 分钟")
        print(f"  总运动距离: {total_distance} 公里")
        
        # 2. 生成模拟运动数据
        start_time = datetime.now() - timedelta(hours=1)
        end_time = datetime.now()
        duration_sec = int((end_time - start_time).total_seconds())
        distance_m = random.randint(3000, 8000)  # 3-8公里
        avg_pace = int(duration_sec / (distance_m / 1000))
        avg_heart_rate = random.randint(120, 160)
        
        # 3. 插入运动记录
        print("\n插入模拟运动记录...")
        cursor.execute("""
            INSERT INTO running_records 
            (user_id, workout_type, start_time, end_time, duration, distance, avg_pace, avg_heart_rate, calories)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            user_id, '测试跑步', start_time, end_time, duration_sec, distance_m,
            avg_pace, avg_heart_rate, int(duration_sec * 0.1)
        ))
        
        record_id = cursor.lastrowid
        print(f"已插入运动记录 ID: {record_id}")
        
        # 4. 更新用户统计数据
        distance_km = distance_m / 1000.0
        duration_min = duration_sec / 60.0
        
        print("\n更新用户统计数据...")
        cursor.execute("""
            UPDATE users SET 
            total_workouts = total_workouts + 1,
            total_duration = total_duration + %s,
            total_distance = total_distance + %s,
            updated_at = NOW()
            WHERE id = %s
        """, (duration_min, distance_km, user_id))
        
        # 提交事务
        conn.commit()
        
        # 5. 再次查询用户统计数据
        print("\n查询用户更新后的统计数据...")
        cursor.execute("""
            SELECT id, username, total_workouts, total_duration, total_distance 
            FROM users WHERE id = %s
        """, (user_id,))
        
        updated_user = cursor.fetchone()
        
        # 转换Decimal为float
        updated_workouts = int(updated_user['total_workouts'])
        updated_duration = float(updated_user['total_duration'])
        updated_distance = float(updated_user['total_distance']) if isinstance(updated_user['total_distance'], Decimal) else updated_user['total_distance']
        
        print(f"用户 {updated_user['username']} (ID: {updated_user['id']}) 更新后统计:")
        print(f"  总运动次数: {updated_workouts} (+1)")
        print(f"  总运动时长: {updated_duration} 分钟 (+{int(duration_min)})")
        print(f"  总运动距离: {updated_distance} 公里 (+{distance_km:.2f})")
        
        # 6. 验证更新是否成功
        if (updated_workouts == total_workouts + 1 and
            abs(updated_duration - total_duration - duration_min) < 1 and
            abs(updated_distance - total_distance - distance_km) < 0.1):
            print("\n✅ 测试成功: 用户统计数据已正确更新")
            return True
        else:
            print("\n❌ 测试失败: 用户统计数据未正确更新")
            print(f"  预期总运动次数: {total_workouts + 1}, 实际: {updated_workouts}")
            print(f"  预期总运动时长: {total_duration + duration_min}, 实际: {updated_duration}")
            print(f"  预期总运动距离: {total_distance + distance_km}, 实际: {updated_distance}")
            return False
            
    except Exception as e:
        print(f"错误: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

if __name__ == "__main__":
    # 如果提供了用户ID参数，则使用该用户ID，否则默认使用用户ID 601
    user_id = int(sys.argv[1]) if len(sys.argv) > 1 else 601
    test_user_stats_update(user_id) 