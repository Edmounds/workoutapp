#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
差异化数据生成器
生成不同类型的用户数据，包括：
- 运动少的人群
- 睡眠少的人群
- 高压力人群
- 运动健将
- 均衡型用户
让数据之间的差异更加明显，分布更加合理
"""

import random
from datetime import datetime, timedelta
import pymysql
import decimal
import sys
import argparse

# MySQL连接信息
MYSQL_CONFIG = {
    'host': '113.45.220.0',
    'port': 3306,
    'user': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app',
    'charset': 'utf8mb4',
    'autocommit': True
}

# 用户类型及其特征
USER_TYPES = {
    'sedentary': {  # 久坐不运动型
        'description': '运动很少的人群',
        'workout_frequency': 0.3,  # 运动频率（每周天数比例）
        'workout_intensity': 0.4,  # 运动强度
        'sleep_quality': (60, 80),  # 睡眠质量范围
        'sleep_duration': (300, 420),  # 睡眠时长范围（分钟）
        'stress_index': (40, 80),  # 压力指数范围
        'health_index': (30, 60),  # 健康指数范围
        'aerobic_capacity': (30, 50),  # 有氧能力评估范围
        'weekly_distance': (0, 5),  # 周跑量范围（公里）
        'heart_rate_profile': {
            'resting': (65, 80),  # 静息心率范围
            'avg': (75, 90),  # 平均心率范围 
            'max': (150, 170)  # 最大心率范围
        },
        'pace_range': (400, 600)  # 配速范围（秒/公里）
    },
    'insomnia': {  # 睡眠不足型
        'description': '睡眠质量差或时长短的人群',
        'workout_frequency': 0.5,
        'workout_intensity': 0.6,
        'sleep_quality': (30, 60),
        'sleep_duration': (180, 300),
        'stress_index': (50, 90),
        'health_index': (40, 70),
        'aerobic_capacity': (40, 70),
        'weekly_distance': (5, 15),
        'heart_rate_profile': {
            'resting': (70, 85),
            'avg': (80, 95),
            'max': (160, 175)
        },
        'pace_range': (360, 480)
    },
    'stressed': {  # 高压力型
        'description': '工作压力大的人群',
        'workout_frequency': 0.4,
        'workout_intensity': 0.5,
        'sleep_quality': (40, 70),
        'sleep_duration': (240, 390),
        'stress_index': (70, 95),
        'health_index': (35, 65),
        'aerobic_capacity': (35, 65),
        'weekly_distance': (3, 10),
        'heart_rate_profile': {
            'resting': (68, 82),
            'avg': (78, 92),
            'max': (155, 172)
        },
        'pace_range': (380, 520)
    },
    'athlete': {  # 运动健将型
        'description': '经常运动的健身达人',
        'workout_frequency': 0.8,
        'workout_intensity': 0.9,
        'sleep_quality': (75, 95),
        'sleep_duration': (390, 480),
        'stress_index': (20, 50),
        'health_index': (70, 95),
        'aerobic_capacity': (70, 95),
        'weekly_distance': (30, 60),
        'heart_rate_profile': {
            'resting': (45, 60),
            'avg': (60, 75),
            'max': (140, 160)
        },
        'pace_range': (240, 330)
    },
    'balanced': {  # 均衡型
        'description': '生活习惯较为均衡的普通人',
        'workout_frequency': 0.6,
        'workout_intensity': 0.7,
        'sleep_quality': (65, 85),
        'sleep_duration': (360, 450),
        'stress_index': (30, 60),
        'health_index': (60, 80),
        'aerobic_capacity': (50, 75),
        'weekly_distance': (10, 25),
        'heart_rate_profile': {
            'resting': (55, 70),
            'avg': (65, 85),
            'max': (145, 165)
        },
        'pace_range': (300, 420)
    }
}

def connect_to_mysql():
    """连接到MySQL数据库"""
    try:
        connection = pymysql.connect(**MYSQL_CONFIG)
        print(f"✅ 成功连接到MySQL数据库: {MYSQL_CONFIG['database']}")
        return connection
    except Exception as e:
        print(f"❌ 连接MySQL失败: {e}")
        return None

def create_user(mysql_connection, user_type, gender=None):
    """创建一个新用户，并返回用户ID"""
    try:
        cursor = mysql_connection.cursor()
        
        # 随机生成用户基本信息
        if gender is None:
            gender = random.choice([1, 2])  # 1:男, 2:女
        
        age = random.randint(18, 50)
        
        if gender == 1:  # 男性
            height = random.uniform(165, 190)
            weight = random.uniform(60, 95)
        else:  # 女性
            height = random.uniform(155, 175)
            weight = random.uniform(45, 75)
        
        # 根据用户类型决定跑步水平
        if user_type == 'athlete':
            level = random.choice(['intermediate', 'advanced'])
        elif user_type == 'sedentary':
            level = 'beginner'
        else:
            level = random.choice(['beginner', 'intermediate'])
        
        # 随机生成用户名
        username = f"{user_type}_{gender}_{int(datetime.now().timestamp())}"
        
        # 简单密码哈希（实际应用中应使用更安全的方式）
        password = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"  # "password"的SHA-256哈希
        
        # 插入用户数据
        sql = """
        INSERT INTO users (username, gender, age, height, weight, level, password)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(sql, (username, gender, age, height, weight, level, password))
        user_id = cursor.lastrowid
        
        cursor.close()
        print(f"✅ 创建用户成功: {username} (ID: {user_id})")
        return user_id, username, gender, age, height, weight, level
    
    except Exception as e:
        print(f"❌ 创建用户失败: {e}")
        return None, None, None, None, None, None, None

def generate_running_records(mysql_connection, user_id, user_type, days_span=30):
    """根据用户类型生成跑步记录"""
    try:
        cursor = mysql_connection.cursor()
        
        profile = USER_TYPES[user_type]
        workout_frequency = profile['workout_frequency']
        workout_intensity = profile['workout_intensity']
        pace_range = profile['pace_range']
        
        # 确定生成记录的数量（基于频率）
        record_count = int(days_span * workout_frequency / 7 * 2)  # 平均每周运动天数
        if record_count < 1:
            record_count = 1  # 至少生成一条记录
        
        # 获取用户信息
        cursor.execute("SELECT gender, age, level FROM users WHERE id = %s", (user_id,))
        user_info = cursor.fetchone()
        if not user_info:
            print(f"❌ 未找到用户信息: ID {user_id}")
            return False
        
        gender, age, level = user_info
        
        workout_types = ['跑步', '间歇跑', '长距离跑', '恢复跑', '节奏跑']
        weather_options = ['晴朗', '多云', '阴天', '小雨', '微风']
        
        # 根据用户类型调整基础距离
        if user_type == 'athlete':
            base_distance = random.uniform(4000, 8000)  # 降低基础距离避免超出范围
        elif user_type == 'sedentary':
            base_distance = random.uniform(2000, 4000)
        else:
            base_distance = random.uniform(3000, 6000)
        
        for i in range(record_count):
            # 选择训练类型并调整数据
            workout_type = random.choice(workout_types)
            
            # 根据训练类型调整距离
            if workout_type == '长距离跑':
                distance = base_distance * random.uniform(1.2, 1.6) * workout_intensity
            elif workout_type == '间歇跑':
                distance = base_distance * random.uniform(0.6, 0.9) * workout_intensity
            elif workout_type == '恢复跑':
                distance = base_distance * random.uniform(0.5, 0.8) * workout_intensity
            else:  # 普通跑步或节奏跑
                distance = base_distance * random.uniform(0.8, 1.2) * workout_intensity
            
            # 限制最大距离 - 数据库限制为decimal(6,2)，最大值为9999.99
            distance = min(distance, 9900)
            
            # 计算配速和时间
            avg_pace = random.randint(pace_range[0], pace_range[1])
            best_pace = max(avg_pace - random.randint(20, 60), 180)  # 确保最快不低于3分钟/公里
            
            duration = int((distance / 1000) * avg_pace)  # 总时长（秒）
            
            # 生成随机时间（过去days_span天内）
            days_ago = random.randint(0, days_span)
            hours = random.randint(6, 20)
            minutes = random.randint(0, 59)
            
            start_time = datetime.now() - timedelta(days=days_ago, hours=0, minutes=0)
            start_time = start_time.replace(hour=hours, minute=minutes)
            end_time = start_time + timedelta(seconds=duration)
            
            # 计算心率数据
            heart_rate_profile = profile['heart_rate_profile']
            avg_heart_rate = random.randint(heart_rate_profile['avg'][0], heart_rate_profile['avg'][1])
            max_heart_rate = random.randint(max(avg_heart_rate + 10, heart_rate_profile['max'][0]), 
                                          heart_rate_profile['max'][1])
            
            # 计算步频（基于用户类型和性别）
            if gender == 1:  # 男性
                base_step_rate = 165
            else:  # 女性
                base_step_rate = 170
                
            if user_type == 'athlete':
                base_step_rate += 10
            elif user_type == 'sedentary':
                base_step_rate -= 5
                
            avg_step_rate = base_step_rate + random.randint(-10, 10)
            
            # 计算卡路里消耗
            calories = int((distance / 1000) * (60 + age * 0.2) * workout_intensity)
            
            # 插入数据
            sql = """
            INSERT INTO running_records (
                user_id, workout_type, start_time, end_time, duration, distance, 
                avg_pace, best_pace, avg_heart_rate, max_heart_rate, avg_step_rate, 
                calories, elevation_gain, weather, temperature, notes
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            
            cursor.execute(sql, (
                user_id, workout_type, start_time, end_time, duration, distance,
                avg_pace, best_pace, avg_heart_rate, max_heart_rate, avg_step_rate,
                calories, random.uniform(0, distance/200), random.choice(weather_options),
                random.uniform(15, 30), f"今天的{workout_type}训练，感觉{'很棒' if random.random() > 0.3 else '一般'}！"
            ))
        
        # 更新用户的总运动数据
        sql = """
        UPDATE users 
        SET total_workouts = %s, 
            total_duration = (SELECT SUM(duration)/60 FROM running_records WHERE user_id = %s), 
            total_distance = (SELECT SUM(distance)/1000 FROM running_records WHERE user_id = %s)
        WHERE id = %s
        """
        cursor.execute(sql, (record_count, user_id, user_id, user_id))
        
        cursor.close()
        print(f"✅ 为用户 {user_id} 生成了 {record_count} 条跑步记录")
        return True
        
    except Exception as e:
        print(f"❌ 生成跑步记录失败: {e}")
        return False

def generate_physical_stats(mysql_connection, user_id, user_type, days=1):
    """生成用户体能数据"""
    try:
        cursor = mysql_connection.cursor()
        
        profile = USER_TYPES[user_type]
        
        for day in range(days):
            date = (datetime.now() - timedelta(days=day)).date()
            
            # 从用户类型配置中获取范围
            sleep_quality = random.randint(*profile['sleep_quality'])
            sleep_duration = random.randint(*profile['sleep_duration'])
            stress_index = random.randint(*profile['stress_index'])
            health_index = random.randint(*profile['health_index'])
            aerobic_capacity = random.randint(*profile['aerobic_capacity'])
            weekly_distance = random.uniform(*profile['weekly_distance'])
            
            # 心率数据
            resting_heart_rate = random.randint(*profile['heart_rate_profile']['resting'])
            avg_heart_rate = random.randint(resting_heart_rate, 
                                          profile['heart_rate_profile']['avg'][1])
            max_heart_rate = random.randint(avg_heart_rate + 10, 
                                          profile['heart_rate_profile']['max'][1])
            current_heart_rate = random.randint(resting_heart_rate, 
                                             resting_heart_rate + 15)
            
            # 步频和配速
            current_step_rate = random.randint(150, 185)
            avg_step_rate = random.randint(155, 190)
            
            # 配速格式化 (例如: 5'30")
            pace_seconds = random.randint(*profile['pace_range'])
            pace_min = pace_seconds // 60
            pace_sec = pace_seconds % 60
            current_pace = f"{pace_min}'{pace_sec}\""
            
            # 血氧水平
            if user_type == 'athlete':
                avg_blood_oxygen = random.uniform(97.0, 99.0)
            elif user_type == 'sedentary':
                avg_blood_oxygen = random.uniform(94.0, 97.0)
            else:
                avg_blood_oxygen = random.uniform(95.0, 98.0)
            
            # 插入数据
            sql = """
            INSERT INTO physical_stats (
                user_id, date, avg_heart_rate, current_heart_rate, resting_heart_rate, 
                max_heart_rate, current_step_rate, avg_step_rate, avg_blood_oxygen, 
                current_pace, health_index, stress_index, sleep_quality, sleep_duration, 
                aerobic_capacity, weekly_distance
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            
            cursor.execute(sql, (
                user_id, date, avg_heart_rate, current_heart_rate, resting_heart_rate,
                max_heart_rate, current_step_rate, avg_step_rate, avg_blood_oxygen,
                current_pace, health_index, stress_index, sleep_quality, sleep_duration,
                aerobic_capacity, weekly_distance
            ))
        
        cursor.close()
        print(f"✅ 为用户 {user_id} 生成了 {days} 天的体能数据")
        return True
        
    except Exception as e:
        print(f"❌ 生成体能数据失败: {e}")
        return False

def generate_progress_goals(mysql_connection, user_id, user_type):
    """生成用户目标数据"""
    try:
        cursor = mysql_connection.cursor(pymysql.cursors.DictCursor)
        
        # 根据用户类型设置不同的目标
        profile = USER_TYPES[user_type]
        
        # 获取用户当前总跑量
        cursor.execute("SELECT total_distance FROM users WHERE id = %s", (user_id,))
        result = cursor.fetchone()
        if not result:
            print(f"❌ 未找到用户数据: ID {user_id}")
            return False
        
        total_distance = result['total_distance'] or 0
        
        # 确保total_distance是float类型
        if isinstance(total_distance, decimal.Decimal):
            total_distance = float(total_distance)
        
        # 设置月跑量目标
        if user_type == 'athlete':
            target_distance = total_distance + random.uniform(30, 60)
        elif user_type == 'sedentary':
            target_distance = total_distance + random.uniform(5, 15)
        else:
            target_distance = total_distance + random.uniform(15, 40)
        
        # 截止日期设置为30天后
        deadline = (datetime.now() + timedelta(days=30)).date()
        
        # 插入数据
        sql = """
        INSERT INTO progress_goals (
            user_id, title, current_value, target_value, category, deadline
        ) VALUES (%s, %s, %s, %s, %s, %s)
        """
        
        cursor.execute(sql, (
            user_id, "月跑量目标", total_distance, target_distance, "距离", deadline
        ))
        
        cursor.close()
        print(f"✅ 为用户 {user_id} 生成了目标数据")
        return True
        
    except Exception as e:
        print(f"❌ 生成目标数据失败: {e}")
        return False

def generate_user_data(mysql_connection, user_type, count=1):
    """生成特定类型的用户数据"""
    for i in range(count):
        # 创建用户
        user_id, username, gender, age, height, weight, level = create_user(mysql_connection, user_type)
        if not user_id:
            continue
        
        # 生成跑步记录
        generate_running_records(mysql_connection, user_id, user_type)
        
        # 生成体能数据
        generate_physical_stats(mysql_connection, user_id, user_type, days=7)
        
        # 生成目标数据
        generate_progress_goals(mysql_connection, user_id, user_type)

def main():
    parser = argparse.ArgumentParser(description='生成差异化用户数据')
    parser.add_argument('--sedentary', type=int, default=1, help='久坐不运动型用户数量')
    parser.add_argument('--insomnia', type=int, default=1, help='睡眠不足型用户数量')
    parser.add_argument('--stressed', type=int, default=1, help='高压力型用户数量')
    parser.add_argument('--athlete', type=int, default=1, help='运动健将型用户数量')
    parser.add_argument('--balanced', type=int, default=1, help='均衡型用户数量')
    
    args = parser.parse_args()
    
    # 连接数据库
    mysql_connection = connect_to_mysql()
    if not mysql_connection:
        sys.exit(1)
    
    try:
        # 生成各类型用户数据
        if args.sedentary > 0:
            print(f"\n生成 {args.sedentary} 个久坐不运动型用户...")
            generate_user_data(mysql_connection, 'sedentary', args.sedentary)
        
        if args.insomnia > 0:
            print(f"\n生成 {args.insomnia} 个睡眠不足型用户...")
            generate_user_data(mysql_connection, 'insomnia', args.insomnia)
        
        if args.stressed > 0:
            print(f"\n生成 {args.stressed} 个高压力型用户...")
            generate_user_data(mysql_connection, 'stressed', args.stressed)
        
        if args.athlete > 0:
            print(f"\n生成 {args.athlete} 个运动健将型用户...")
            generate_user_data(mysql_connection, 'athlete', args.athlete)
        
        if args.balanced > 0:
            print(f"\n生成 {args.balanced} 个均衡型用户...")
            generate_user_data(mysql_connection, 'balanced', args.balanced)
        
        print("\n✅ 数据生成完成")
        
    except Exception as e:
        print(f"❌ 生成数据过程中出错: {e}")
    
    finally:
        if mysql_connection:
            mysql_connection.close()
            print("MySQL连接已关闭")

if __name__ == "__main__":
    main()
