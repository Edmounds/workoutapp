#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试设备模拟器的calculate_and_store_stats方法
"""

import mysql.connector
import pymongo
import random
from datetime import datetime, timedelta
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

# MongoDB配置
mongo_config = {
    'host': '113.45.220.0',
    'port': 27017,
    'username': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app'
}

def calculate_and_store_stats(user_id, start_time, end_time):
    """模拟设备模拟器的calculate_and_store_stats方法"""
    mongo_client = None
    mysql_conn = None
    try:
        # 连接DB
        print(f"连接MongoDB {mongo_config['host']}...")
        mongo_client = pymongo.MongoClient(
            host=mongo_config['host'], port=mongo_config['port'],
            username=mongo_config['username'], password=mongo_config['password'],
            authSource='workout_app', serverSelectionTimeoutMS=5000
        )
        mongo_db = mongo_client[mongo_config['database']]
        
        print(f"连接MySQL {mysql_config['host']}...")
        mysql_conn = mysql.connector.connect(**mysql_config)
        cursor = mysql_conn.cursor(dictionary=True)

        # 1. 查询用户当前的统计数据
        print(f"\n查询用户 {user_id} 当前的统计数据...")
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

        # 2. 生成模拟原始数据并插入MongoDB
        print("\n生成模拟原始数据...")
        duration_minutes = random.randint(20, 60)
        docs = []
        base_heart_rate = random.randint(70, 85)
        base_steps = random.randint(60, 80)
        
        for m in range(duration_minutes):
            intensity_factor = 1 + 0.5 * (m / duration_minutes)
            heart_rate = int(base_heart_rate + random.randint(-5, 15) * intensity_factor)
            step_count = int(base_steps + random.randint(-10, 15) * intensity_factor)
            calories = round(step_count * random.uniform(0.04, 0.06) * intensity_factor, 2)
            distance = round(step_count * random.uniform(0.75, 0.85) * intensity_factor, 2)
            
            ts = start_time + timedelta(minutes=m)
            doc = {
                "user_id": int(user_id), 
                "device_id": f"TEST_DEV_{user_id}",
                "timestamp": ts,
                "heart_rate": heart_rate, 
                "step_count": step_count, 
                "calories": calories,
                "distance": distance, 
                "pace": round(random.uniform(4.5, 9.0), 2),
                "elevation": round(random.uniform(-1, 2), 2),
                "blood_oxygen": round(random.uniform(95.0, 99.9), 1),
                "temperature": round(random.uniform(36.1, 37.2), 1),
                "weather": random.choice(["sunny", "cloudy", "rainy", "windy"])
            }
            docs.append(doc)
        
        # 插入MongoDB
        print(f"插入 {len(docs)} 条原始数据到MongoDB...")
        mongo_db.raw_records.insert_many(docs)

        # 3. 从MongoDB查询原始数据
        print("\n从MongoDB查询原始数据...")
        records = list(mongo_db.raw_records.find({
            "user_id": int(user_id), "timestamp": {"$gte": start_time, "$lte": end_time}
        }))
        print(f"查询到 {len(records)} 条原始数据")
        
        if not records:
            print(f"错误: 用户 {user_id} 没有找到 {start_time.strftime('%Y-%m-%d %H:%M')} 至 {end_time.strftime('%Y-%m-%d %H:%M')} 的原始数据")
            return False

        # 4. 计算运动记录统计
        print("\n计算运动记录统计...")
        duration_sec = (end_time - start_time).total_seconds()
        total_distance_m = sum(r['distance'] for r in records)
        avg_pace_sec_km = (duration_sec / (total_distance_m / 1000)) if total_distance_m > 0 else 0
        avg_heart_rate = sum(r['heart_rate'] for r in records) / len(records)
        total_calories = sum(r['calories'] for r in records)
        elevation_gain = sum(r['elevation'] for r in records if r['elevation'] > 0)
        avg_step_rate = (sum(r['step_count'] for r in records) / duration_sec * 60) if duration_sec > 0 else 0

        # 5. 插入 running_records
        print("\n插入运动记录到MySQL...")
        cursor.execute("""
            INSERT INTO running_records 
            (user_id, workout_type, start_time, end_time, duration, distance, avg_pace, 
            avg_heart_rate, calories, elevation_gain, avg_step_rate, weather, temperature)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            user_id, '模拟跑步', start_time, end_time, int(duration_sec), round(total_distance_m, 2),
            int(avg_pace_sec_km), int(avg_heart_rate), int(total_calories), round(elevation_gain, 2),
            int(avg_step_rate), records[-1]['weather'], round(sum(r['temperature'] for r in records) / len(records), 1)
        ))
        
        run_record_id = cursor.lastrowid
        print(f"已插入跑步记录ID: {run_record_id}, 距离: {round(total_distance_m/1000, 2)}km, 时长: {int(duration_sec/60)}分钟")

        # 6. 计算健康数据统计
        print("\n计算健康数据统计...")
        resting_heart_rate = min(r['heart_rate'] for r in records)
        max_heart_rate = max(r['heart_rate'] for r in records)
        avg_blood_oxygen = sum(r['blood_oxygen'] for r in records) / len(records)
        health_index = random.randint(60, 95)
        stress_index = random.randint(10, 40)
        sleep_quality = random.randint(50, 95)
        sleep_duration = random.randint(360, 540)
        
        # 7. 插入或更新 physical_stats
        print("\n插入/更新体能数据...")
        cursor.execute("""
            INSERT INTO physical_stats (user_id, date, avg_heart_rate, resting_heart_rate, max_heart_rate, 
            avg_blood_oxygen, health_index, stress_index, sleep_quality, sleep_duration)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            ON DUPLICATE KEY UPDATE
            avg_heart_rate = VALUES(avg_heart_rate), resting_heart_rate = VALUES(resting_heart_rate),
            max_heart_rate = VALUES(max_heart_rate), avg_blood_oxygen = VALUES(avg_blood_oxygen),
            health_index = VALUES(health_index), stress_index = VALUES(stress_index),
            sleep_quality = VALUES(sleep_quality), sleep_duration = VALUES(sleep_duration)
        """, (
            user_id, start_time.date(), int(avg_heart_rate), resting_heart_rate, max_heart_rate,
            round(avg_blood_oxygen, 1), health_index, stress_index, sleep_quality, sleep_duration
        ))
        
        print(f"已更新体能数据，日期: {start_time.date()}, 平均心率: {int(avg_heart_rate)}, 健康指数: {health_index}")

        # 8. 更新用户总运动统计数据
        print("\n更新用户总运动统计数据...")
        # 首先查询用户当前的运动统计数据
        cursor.execute("SELECT total_workouts, total_duration, total_distance FROM users WHERE id = %s", (user_id,))
        user_stats = cursor.fetchone()
        
        if user_stats:
            current_workouts = int(user_stats['total_workouts'])
            current_duration = float(user_stats['total_duration'])
            current_distance = float(user_stats['total_distance']) if isinstance(user_stats['total_distance'], Decimal) else user_stats['total_distance']
            
            # 计算新的统计数据
            new_workouts = current_workouts + 1  # 增加一次运动
            new_duration = current_duration + int(duration_sec / 60)  # 增加运动时长（分钟）
            new_distance = current_distance + (total_distance_m / 1000)  # 增加运动距离（公里）
            
            # 更新用户表
            cursor.execute("""
                UPDATE users 
                SET total_workouts = %s, total_duration = %s, total_distance = %s, updated_at = NOW()
                WHERE id = %s
            """, (new_workouts, new_duration, new_distance, user_id))
            
            print(f"已更新用户总运动统计 - 总次数: {new_workouts}, 总时长: {new_duration}分钟, 总距离: {round(new_distance, 2)}公里")

        # 提交事务
        mysql_conn.commit()
        
        # 9. 再次查询用户统计数据
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
        print(f"  总运动时长: {updated_duration} 分钟 (+{int(duration_sec/60)})")
        print(f"  总运动距离: {updated_distance} 公里 (+{round(total_distance_m/1000, 2)})")
        
        # 10. 验证更新是否成功
        if (updated_workouts == total_workouts + 1 and
            abs(updated_duration - total_duration - int(duration_sec/60)) < 1 and
            abs(updated_distance - total_distance - (total_distance_m/1000)) < 0.1):
            print("\n✅ 测试成功: 用户统计数据已正确更新")
            return True
        else:
            print("\n❌ 测试失败: 用户统计数据未正确更新")
            print(f"  预期总运动次数: {total_workouts + 1}, 实际: {updated_workouts}")
            print(f"  预期总运动时长: {total_duration + int(duration_sec/60)}, 实际: {updated_duration}")
            print(f"  预期总运动距离: {total_distance + (total_distance_m/1000)}, 实际: {updated_distance}")
            return False
            
    except Exception as e:
        if mysql_conn: mysql_conn.rollback()
        print(f"错误: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        if cursor:
            cursor.close()
        if mysql_conn:
            mysql_conn.close()
        if mongo_client:
            mongo_client.close()

if __name__ == "__main__":
    # 如果提供了用户ID参数，则使用该用户ID，否则默认使用用户ID 601
    user_id = int(sys.argv[1]) if len(sys.argv) > 1 else 601
    start_time = datetime.now() - timedelta(hours=1)
    end_time = datetime.now()
    calculate_and_store_stats(user_id, start_time, end_time) 