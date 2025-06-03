#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
双数据库架构数据生成器
- MySQL：存储用户信息、跑步记录、目标、AI建议等核心数据
- MongoDB：存储健康监测数据（心率、步频、体能等动态数据）
为已注册用户生成完整的运动数据
"""

import random
from datetime import datetime, timedelta
import pymysql
import pymongo
import decimal
from bson.objectid import ObjectId

# MySQL连接信息 (服务器)
MYSQL_CONFIG = {
    'host': '113.45.220.0',
    'port': 3306,
    'user': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app',
    'charset': 'utf8mb4',
    'autocommit': True
}

# MongoDB连接信息 (本地)
MONGO_URI = "mongodb://113.45.220.0:27017/"
MONGO_DB_NAME = "workout_app"
HEALTH_DATA_COLLECTION = "user_health_data"
DAILY_STATS_COLLECTION = "daily_stats"


def connect_to_mysql():
    """连接到MySQL数据库"""
    try:
        connection = pymysql.connect(**MYSQL_CONFIG)
        print(f"✅ 成功连接到MySQL数据库: {MYSQL_CONFIG['database']}")
        return connection
    except Exception as e:
        print(f"❌ 连接MySQL失败: {e}")
        return None


def connect_to_mongodb():
    """连接到MongoDB数据库"""
    try:
        client = pymongo.MongoClient(MONGO_URI)
        db = client[MONGO_DB_NAME]
        health_collection = db[HEALTH_DATA_COLLECTION]
        daily_stats_collection = db[DAILY_STATS_COLLECTION]
        print(f"✅ 成功连接到MongoDB数据库: {MONGO_DB_NAME}")
        return db, health_collection, daily_stats_collection, client
    except Exception as e:
        print(f"❌ 连接MongoDB失败: {e}")
        return None, None, None, None


def get_mysql_users(mysql_connection):
    """从MySQL获取所有注册用户"""
    try:
        cursor = mysql_connection.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT id, username, gender, age, height, weight, level, created_at FROM users")
        users = cursor.fetchall()
        cursor.close()
        print(f"📊 从MySQL获取到 {len(users)} 个注册用户")
        return users
    except Exception as e:
        print(f"❌ 获取MySQL用户失败: {e}")
        return []


# ==================== MySQL数据生成函数 ====================

def calculate_user_profile(user):
    """根据用户信息计算用户运动档案"""
    age = user.get('age', 25) or 25  # 默认25岁
    gender = user.get('gender', 1) or 1  # 默认1:男
    height = user.get('height', 170) or 170  # 默认170cm
    weight = user.get('weight', 65) or 65  # 默认65kg
    level = user.get('level', 'beginner') or 'beginner'  # 默认初学者

    # 计算BMI
    if height and weight:
        height_m = float(height) / 100
        bmi = float(weight) / (height_m * height_m)
    else:
        bmi = 22.0  # 默认正常BMI

    # 根据性别和年龄调整基础数据
    if gender == 1:  # 男性
        base_heart_rate = 65
        max_heart_rate_base = min(200 - age, 160)  # 限制最大心率不超过160
        base_step_rate = 170
        base_pace = 5.5  # 分钟/公里
        base_distance_multiplier = 1.2
    elif gender == 2:  # 女性
        base_heart_rate = 70
        max_heart_rate_base = min(210 - age, 160)  # 限制最大心率不超过160
        base_step_rate = 175
        base_pace = 6.0
        base_distance_multiplier = 1.0
    else:  # 未知
        base_heart_rate = 68
        max_heart_rate_base = min(200 - age, 160)  # 限制最大心率不超过160
        base_step_rate = 172
        base_pace = 5.8
        base_distance_multiplier = 1.1

    # 根据等级调整
    level_multipliers = {
        'beginner': {'pace': 1.3, 'distance': 0.8, 'heart_rate': 1.1},
        'intermediate': {'pace': 1.1, 'distance': 1.0, 'heart_rate': 1.0},
        'advanced': {'pace': 0.85, 'distance': 1.5, 'heart_rate': 0.9}
    }
    multiplier = level_multipliers.get(level, level_multipliers['beginner'])

    profile = {
        'age': age,
        'gender': gender,
        'bmi': bmi,
        'base_heart_rate': base_heart_rate,
        'max_heart_rate': max_heart_rate_base,
        'resting_heart_rate': base_heart_rate - random.randint(5, 15),
        'base_step_rate': base_step_rate,
        'base_pace': base_pace * multiplier['pace'],
        'distance_multiplier': base_distance_multiplier * multiplier['distance'],
        'heart_rate_multiplier': multiplier['heart_rate'],
        'fitness_level': level
    }

    return profile


def generate_running_records_data(user_id, user_profile, count=None):
    """生成个性化跑步记录数据（存储到MySQL）- 每个用户生成6-7条记录"""
    # 如果没有指定count，随机生成6-7条
    if count is None:
        count = random.randint(6, 7)
    
    data_list = []
    workout_types = ['跑步', '间歇跑', '长距离跑', '恢复跑', '节奏跑']
    weather_options = ['晴朗', '多云', '阴天', '小雨', '微风']
    
    # 根据用户档案调整数据范围
    base_distance = 5000 * user_profile['distance_multiplier']  # 基础距离5公里
    base_pace = user_profile['base_pace']
    
    for i in range(count):
        # 随机选择训练类型，并根据类型调整数据
        workout_type = random.choice(workout_types)
        
        if workout_type == '长距离跑':
            distance = round(random.uniform(base_distance * 1.2, min(base_distance * 1.8, 9500)), 2)  # 最大9.5km
            pace_factor = 1.2  # 长距离跑配速较慢
        elif workout_type == '间歇跑':
            distance = round(random.uniform(base_distance * 0.6, base_distance * 1.0), 2)
            pace_factor = 0.8  # 间歇跑配速较快
        elif workout_type == '恢复跑':
            distance = round(random.uniform(base_distance * 0.5, base_distance * 0.8), 2)
            pace_factor = 1.3  # 恢复跑配速很慢
        elif workout_type == '节奏跑':
            distance = round(random.uniform(base_distance * 0.8, base_distance * 1.2), 2)
            pace_factor = 0.9  # 节奏跑配速中等偏快
        else:  # 普通跑步
            distance = round(random.uniform(base_distance * 0.8, min(base_distance * 1.5, 9000)), 2)  # 最大9km
            pace_factor = 1.0
        
        # 确保距离不超过数据库限制（9999.99米）
        distance = min(distance, 9999.99)
        
        # 计算时间相关数据
        pace_seconds_per_km = base_pace * pace_factor * 60  # 转换为秒/公里
        duration = int((distance / 1000) * pace_seconds_per_km)  # 总用时（秒）
        
        # 生成不同时间的训练记录（过去30天内）
        start_time = datetime.now() - timedelta(
            days=random.randint(1, 30), 
            hours=random.randint(6, 20), 
            minutes=random.randint(0, 59)
        )
        end_time = start_time + timedelta(seconds=duration)
        
        # 计算配速 - 确保最佳配速比平均配速快
        avg_pace = int(pace_seconds_per_km)
        best_pace = avg_pace - random.randint(15, 40)  # 最佳配速比平均配速快15-40秒
        
        # 确保最佳配速不会太快（避免不现实的配速）
        min_reasonable_pace = 180  # 最快3分钟/公里
        best_pace = max(best_pace, min_reasonable_pace)
        
        # 计算心率（根据用户档案）- 确保最大心率不超过160
        base_hr = user_profile['base_heart_rate']
        hr_multiplier = user_profile['heart_rate_multiplier']
        avg_heart_rate = int(base_hr + random.randint(40, 70) * hr_multiplier)
        max_heart_rate = min(avg_heart_rate + random.randint(20, 35), 160)  # 限制最大心率为160
        
        # 确保最大心率总是大于平均心率，但不超过160
        if max_heart_rate <= avg_heart_rate:
            max_heart_rate = min(avg_heart_rate + 20, 160)
        
        # 如果平均心率太高，调整为合理范围
        if avg_heart_rate > 140:
            avg_heart_rate = random.randint(120, 140)
            max_heart_rate = min(avg_heart_rate + random.randint(10, 20), 160)
        
        # 计算其他数据
        avg_step_rate = int(user_profile['base_step_rate'] + random.randint(-10, 10))
        calories = int((distance / 1000) * (60 + user_profile['age'] * 0.5))  # 根据年龄调整卡路里
        
        data = {
            'user_id': user_id,
            'workout_type': workout_type,
            'start_time': start_time,
            'end_time': end_time,
            'duration': duration,
            'distance': distance,
            'avg_pace': avg_pace,
            'best_pace': best_pace,
            'avg_heart_rate': avg_heart_rate,
            'max_heart_rate': max_heart_rate,
            'avg_step_rate': avg_step_rate,
            'calories': calories,
            'elevation_gain': round(random.uniform(0, distance / 100), 2),  # 根据距离调整爬升
            'weather': random.choice(weather_options),
            'temperature': round(random.uniform(15, 30), 1),
            'notes': f'今天的{workout_type}训练，感觉{"很棒" if random.random() > 0.3 else "一般"}！'
        }
        data_list.append(data)
    
    return data_list


def generate_physical_stats_data(user_id, user_profile, days=1):
    """生成个性化体能统计数据（存储到MySQL）- 每个用户只生成1条记录"""
    data_list = []
    today = datetime.now().date()

    # 根据用户档案设置基础数据
    base_hr = user_profile['base_heart_rate']
    resting_hr = user_profile['resting_heart_rate']
    max_hr = user_profile['max_heart_rate']
    base_step_rate = user_profile['base_step_rate']
    fitness_level = user_profile['fitness_level']

    # 根据健身水平调整健康指数基础值
    health_base = {'beginner': 70, 'intermediate': 80, 'advanced': 90}.get(fitness_level, 75)

    for i in range(days):
        # 只生成今天的数据
        date = today - timedelta(days=i)

        data = {
            'user_id': user_id,
            'date': date,
            'avg_heart_rate': int(base_hr + random.randint(-5, 10)),
            'current_heart_rate': int(base_hr + random.randint(-15, 20)),
            'resting_heart_rate': int(resting_hr + random.randint(-3, 5)),
            'max_heart_rate': min(int(max_hr + random.randint(-10, 5)), 160),  # 限制最大心率160
            'current_step_rate': int(base_step_rate + random.randint(-15, 15)),
            'avg_step_rate': int(base_step_rate + random.randint(-8, 8)),
            'avg_blood_oxygen': round(random.uniform(96.0, 100.0), 1),
            'current_pace': f"{int(user_profile['base_pace'])}'{random.randint(0, 59):02d}\"",
            'health_index': min(100, int(health_base + random.randint(-10, 15))),
            'stress_index': max(0, int(30 - random.randint(0, 25))),
            'sleep_quality': min(100, int(75 + random.randint(-15, 20))),
            'sleep_duration': random.randint(360, 540),  # 6-9小时
            'aerobic_capacity': min(100, int(health_base + random.randint(-5, 10))),
            'weekly_distance': round(random.uniform(10.0, 40.0) * user_profile['distance_multiplier'], 2)
        }
        data_list.append(data)

    return data_list


def generate_progress_goals_data(user_id, user_profile):
    """生成个性化进度目标数据（存储到MySQL）- 每个用户只生成1条记录"""
    fitness_level = user_profile['fitness_level']
    distance_multiplier = user_profile['distance_multiplier']

    # 根据用户水平选择一个目标
    if fitness_level == 'beginner':
        goal = {
            'title': '月跑量目标',
            'current_value': round(random.uniform(20, 40) * distance_multiplier, 2),
            'target_value': 50.0 * distance_multiplier,
            'category': '距离',
            'deadline': datetime.now().date() + timedelta(days=30)
        }
    elif fitness_level == 'intermediate':
        goal = {
            'title': '10公里PB',
            'current_value': round(random.uniform(50, 60), 2),
            'target_value': 45.0,
            'category': '时间',
            'deadline': datetime.now().date() + timedelta(days=60)
        }
    else:  # advanced
        goal = {
            'title': '马拉松PB',
            'current_value': round(random.uniform(180, 240), 2),
            'target_value': 180.0,
            'category': '时间',
            'deadline': datetime.now().date() + timedelta(days=120)
        }

    goal['user_id'] = user_id
    goal['created_at'] = datetime.now()

    return [goal]


def generate_ai_advice_data(user_id, user_profile):
    """生成个性化AI建议数据（存储到MySQL）- 每个用户只生成1条记录"""
    fitness_level = user_profile['fitness_level']
    age = user_profile['age']
    bmi = user_profile['bmi']

    # 根据用户情况提供一条个性化建议
    if fitness_level == 'beginner':
        if bmi > 25:
            advice_content = "建议从每周3次短距离跑步开始，同时注意控制饮食，减少高热量食物摄入"
            category = "训练"
        elif age > 40:
            advice_content = "建议循序渐进训练，注意关节保护，每次训练后进行充分的拉伸"
            category = "健康"
        else:
            advice_content = "建议从每周3-4次短距离跑步开始，注意循序渐进，避免运动伤害"
            category = "训练"
    elif fitness_level == 'intermediate':
        advice_content = "可以加入间歇训练提高速度，建议加入核心力量训练"
        category = "训练"
    else:  # advanced
        advice_content = "可以制定更加系统的训练计划，加入速度和耐力的专项训练"
        category = "训练"

    return [{
        'user_id': user_id,
        'advice_content': advice_content,
        'category': category
    }]


def generate_nutrition_tips():
    """生成营养建议数据（全局数据，存储到MySQL）"""
    tips = [
        {
            'tip': '跑步前2-3小时避免摄入高脂肪和高纤维食物',
            'category': '赛前',
            'importance': 1
        },
        {
            'tip': '跑步后30分钟内是补充蛋白质的黄金时间',
            'category': '赛后',
            'importance': 1
        },
        {
            'tip': '每天保证充足的水分摄入，约2-3升',
            'category': '日常',
            'importance': 2
        },
        {
            'tip': '长距离跑步时每15-20分钟补充一次水分',
            'category': '训练',
            'importance': 1
        },
        {
            'tip': '适量摄入复合碳水化合物为训练提供能量',
            'category': '日常',
            'importance': 2
        },
        {
            'tip': '跑步前避免尝试新的食物，以免肠胃不适',
            'category': '赛前',
            'importance': 1
        },
        {
            'tip': '增加抗氧化食物摄入，如蓝莓、菠菜等',
            'category': '日常',
            'importance': 3
        },
        {
            'tip': '电解质饮料适合长时间或高强度训练时使用',
            'category': '训练',
            'importance': 2
        }
    ]
    return tips


# ==================== MongoDB数据生成函数 ====================

def generate_heart_rate_data(user_profile, length=24):
    """生成个性化24小时心率数据"""
    base_hr = user_profile['base_heart_rate']
    resting_hr = user_profile['resting_heart_rate']
    max_hr = user_profile['max_heart_rate']

    heart_rates = []
    for hour in range(length):
        # 模拟心率的日常变化（睡眠时较低，活动时较高）
        if 0 <= hour <= 6:  # 睡眠时间
            hr = resting_hr + random.randint(-5, 10)
        elif 7 <= hour <= 8:  # 起床时间
            hr = base_hr + random.randint(-5, 15)
        elif 9 <= hour <= 17:  # 工作时间
            hr = base_hr + random.randint(-10, 20)
        elif 18 <= hour <= 20:  # 可能的运动时间
            hr = base_hr + random.randint(20, 60)
        else:  # 晚上放松时间
            hr = base_hr + random.randint(-8, 12)

        # 确保心率在合理范围内，最大不超过160
        hr = max(resting_hr - 10, min(160, hr))
        heart_rates.append(hr)

    return heart_rates


def generate_step_rate_data(user_profile, length=10):
    """生成个性化步频数据"""
    base_step_rate = user_profile['base_step_rate']
    return [base_step_rate + random.randint(-15, 15) for _ in range(length)]


def generate_pace_data(user_profile, length=10):
    """生成个性化配速数据"""
    base_pace = user_profile['base_pace']
    return [round(base_pace + random.uniform(-0.5, 0.8), 1) for _ in range(length)]


def generate_weekly_workout_data(user_profile):
    """生成个性化周运动数据"""
    fitness_level = user_profile['fitness_level']
    distance_multiplier = user_profile['distance_multiplier']

    # 根据健身水平调整运动频率和强度
    if fitness_level == 'beginner':
        base_minutes = [0, 30, 0, 40, 0, 35, 60]  # 一周3-4次
    elif fitness_level == 'intermediate':
        base_minutes = [45, 0, 50, 0, 40, 60, 90]  # 一周5次
    else:  # advanced
        base_minutes = [60, 45, 70, 50, 40, 80, 120]  # 一周6-7次

    # 添加随机变化
    return [int(minutes * distance_multiplier * random.uniform(0.7, 1.3)) for minutes in base_minutes]


def generate_health_document(mysql_user_id, username, user_profile):
    """为单个MySQL用户创建个性化健康数据文档（存储到MongoDB）"""
    today = datetime.now()
    
    # 生成基础健康数据
    heart_rate_data = generate_heart_rate_data(user_profile)
    step_rate_data = generate_step_rate_data(user_profile)
    pace_data = generate_pace_data(user_profile)
    weekly_data = generate_weekly_workout_data(user_profile)

    # 根据用户档案生成其他健康指标
    age = user_profile['age']
    fitness_level = user_profile['fitness_level']
    bmi = user_profile['bmi']

    # 血氧水平（年龄和健身水平影响）
    base_oxygen = 98.0
    if age > 50:
        base_oxygen -= 1.0
    if fitness_level == 'advanced':
        base_oxygen += 1.0
    elif fitness_level == 'beginner':
        base_oxygen -= 0.5
    blood_oxygen = round(max(95.0, base_oxygen + random.uniform(-1.0, 1.5)), 1)

    # 健康指数（多因素影响）
    health_base = {'beginner': 75, 'intermediate': 82, 'advanced': 88}.get(fitness_level, 75)
    if 18.5 <= bmi <= 24.9:
        health_base += 5  # 正常BMI加分
    elif bmi > 30:
        health_base -= 10  # 肥胖扣分
    if age > 40:
        health_base -= (age - 40) * 0.3  # 年龄因素
    health_index = max(60, min(100, int(health_base + random.randint(-8, 12))))

    # 压力指数（年龄和健身水平影响）
    stress_base = 25
    if fitness_level == 'advanced':
        stress_base -= 5  # 运动有助减压
    if age > 35:
        stress_base += (age - 35) * 0.2  # 年龄压力
    stress_index = max(0, min(100, int(stress_base + random.randint(-10, 15))))
    
    # 创建文档
    document = {
        "mysqlUserId": mysql_user_id,  # 对应MySQL中的用户ID
        "username": username,
        "timestamp": today,
        "date": today.strftime("%Y-%m-%d"),
        "heartRateData": heart_rate_data,
        "stepRateData": step_rate_data,
        "paceData": pace_data,
        "weeklyWorkoutData": weekly_data,
        "bloodOxygen": blood_oxygen,
        "healthIndex": health_index,
        "stressIndex": stress_index,
        "currentHeartRate": heart_rate_data[-1],
        "currentStepRate": step_rate_data[-1],
        "avgHeartRate": round(sum(heart_rate_data) / len(heart_rate_data)),
        "maxHeartRate": max(heart_rate_data),
        "minHeartRate": min(heart_rate_data),
        "restingHeartRate": user_profile['resting_heart_rate'],
        "sleepQuality": max(60, min(100, 85 - age * 0.3 + random.randint(-15, 15))),
        "sleepDuration": random.randint(360, 540),  # 6-9小时
        "stepCount": int(8000 * user_profile['distance_multiplier'] * random.uniform(0.8, 1.4)),
        "caloriesBurned": int(1800 + age * 10 + random.randint(-300, 500)),
        "bmi": round(bmi, 1),
        "fitnessLevel": fitness_level,
        "metrics": [
            {"type": "heartRate", "value": heart_rate_data[-1], "timestamp": today},
            {"type": "stepRate", "value": step_rate_data[-1], "timestamp": today},
            {"type": "bloodOxygen", "value": blood_oxygen, "timestamp": today},
            {"type": "healthIndex", "value": health_index, "timestamp": today},
        ],
        "createTime": today,
        "updateTime": today
    }

    return document


def generate_daily_stats_document(mysql_user_id, username, user_profile, date):
    """生成个性化每日统计数据（存储到MongoDB）"""
    fitness_level = user_profile['fitness_level']
    distance_multiplier = user_profile['distance_multiplier']
    age = user_profile['age']
    base_hr = user_profile['base_heart_rate']
    max_hr = user_profile['max_heart_rate']

    # 根据健身水平调整每日活动数据
    if fitness_level == 'beginner':
        base_steps = 6000
        base_distance = 4.0
        base_active_minutes = 30
    elif fitness_level == 'intermediate':
        base_steps = 10000
        base_distance = 7.0
        base_active_minutes = 60
    else:  # advanced
        base_steps = 12000
        base_distance = 10.0
        base_active_minutes = 90

    # 生成24小时心率数据
    hourly_heart_rate = generate_heart_rate_data(user_profile, 24)

    # 生成24小时步数数据
    hourly_steps = []
    for hour in range(24):
        if 0 <= hour <= 6:  # 睡眠时间
            steps = random.randint(0, 50)
        elif 7 <= hour <= 8:  # 起床时间
            steps = random.randint(200, 600)
        elif 9 <= hour <= 17:  # 工作时间
            steps = random.randint(300, 800)
        elif 18 <= hour <= 20:  # 可能的运动时间
            steps = random.randint(800, 2000)
        else:  # 晚上时间
            steps = random.randint(100, 400)
        hourly_steps.append(steps)

    # 生成24小时活动强度
    hourly_activity = []
    for hour in range(24):
        if 0 <= hour <= 6:
            activity = 'rest'
        elif 18 <= hour <= 20 and random.random() > 0.4:  # 60%概率运动时间
            activity = random.choice(['moderate', 'vigorous'])
        else:
            activity = random.choice(['rest', 'light', 'light', 'moderate'])  # 偏向轻度活动
        hourly_activity.append(activity)

    document = {
        "mysqlUserId": mysql_user_id,
        "username": username,
        "date": date.strftime("%Y-%m-%d"),
        "timestamp": date,
        "dailyStats": {
            "steps": int(base_steps * distance_multiplier * random.uniform(0.7, 1.3)),
            "distance": round(base_distance * distance_multiplier * random.uniform(0.8, 1.2), 2),
            "calories": int((base_steps * distance_multiplier * 0.04) + age * 20 + random.randint(-100, 200)),
            "activeMinutes": int(base_active_minutes * random.uniform(0.6, 1.4)),
            "avgHeartRate": round(sum(hourly_heart_rate) / len(hourly_heart_rate)),
            "maxHeartRate": max(hourly_heart_rate),
            "sleepHours": round(random.uniform(6.0, 9.0), 1),
            "waterIntake": round(random.uniform(1.5, 3.5), 1),  # 升
        },
        "hourlyData": {
            "heartRate": hourly_heart_rate,
            "steps": hourly_steps,
            "activity": hourly_activity
        },
        "userProfile": {
            "fitnessLevel": fitness_level,
            "age": age,
            "bmi": round(user_profile['bmi'], 1)
        },
        "createTime": date,
        "updateTime": date
    }
    
    return document


def generate_historical_health_data(mysql_user_id, username, user_profile, days=1):
    """生成个性化历史健康数据（存储到MongoDB）- 每个用户只生成1条记录"""
    documents = []
    today = datetime.now()
    
    for i in range(days):
        # 只生成今天的数据
        date = today - timedelta(days=i)
        
        # 生成当天的健康数据
        document = generate_health_document(mysql_user_id, username, user_profile)
        document["timestamp"] = date
        document["date"] = date.strftime("%Y-%m-%d")
        document["createTime"] = date
        document["updateTime"] = date
        
        # 更新嵌套的timestamp
        for metric in document["metrics"]:
            metric["timestamp"] = date
            
        documents.append(document)
    
    return documents


def generate_historical_daily_stats(mysql_user_id, username, user_profile, days=1):
    """生成个性化历史每日统计数据（存储到MongoDB）- 每个用户只生成1条记录"""
    documents = []
    today = datetime.now()

    for i in range(days):
        # 只生成今天的数据
        date = today - timedelta(days=i)
        document = generate_daily_stats_document(mysql_user_id, username, user_profile, date)
        documents.append(document)

    return documents


# ==================== 数据插入函数 ====================

def insert_mysql_data(mysql_connection, users, force_regenerate=False):
    """将生成的数据插入到MySQL各表中"""
    cursor = mysql_connection.cursor()
    mysql_stats = {
        'physical_stats': 0,
        'running_records': 0,
        'progress_goals': 0,
        'ai_advice': 0,
        'nutrition_tips': 0
    }

    try:
        print("\n🏃 开始插入MySQL数据...")

        # 1. 生成并插入nutrition_tips（全局数据）
        print("📝 生成营养建议数据...")
        cursor.execute("SELECT COUNT(*) FROM nutrition_tips")
        existing_tips = cursor.fetchone()[0]

        if existing_tips == 0:
            nutrition_data = generate_nutrition_tips()
            for tip in nutrition_data:
                cursor.execute("""
                    INSERT INTO nutrition_tips (tip, category, importance)
                    VALUES (%s, %s, %s)
                """, (tip['tip'], tip['category'], tip['importance']))
            mysql_stats['nutrition_tips'] = len(nutrition_data)
            print(f"   ✅ 插入 {len(nutrition_data)} 条营养建议")
        else:
            print(f"   ⏭️  营养建议表已有 {existing_tips} 条数据，跳过")

        # 2. 为每个用户生成MySQL数据
        print(f"\n🎯 开始为 {len(users)} 个用户生成个性化数据...")

        for i, user in enumerate(users, 1):
            user_id = user['id']
            username = user['username']
            print(f"\n👤 [{i}/{len(users)}] 为用户 {username} (ID: {user_id}) 生成MySQL数据...")

            # 计算用户档案
            user_profile = calculate_user_profile(user)
            print(
                f"   📊 用户档案: {user_profile['fitness_level']} | 年龄:{user_profile['age']} | BMI:{user_profile['bmi']:.1f}")

            # 检查是否已有数据
            cursor.execute("SELECT COUNT(*) FROM physical_stats WHERE user_id = %s", (user_id,))
            existing_stats = cursor.fetchone()[0]

            cursor.execute("SELECT COUNT(*) FROM running_records WHERE user_id = %s", (user_id,))
            existing_records = cursor.fetchone()[0]

            cursor.execute("SELECT COUNT(*) FROM progress_goals WHERE user_id = %s", (user_id,))
            existing_goals = cursor.fetchone()[0]

            cursor.execute("SELECT COUNT(*) FROM ai_advice WHERE user_id = %s", (user_id,))
            existing_advice = cursor.fetchone()[0]

            if not force_regenerate and (existing_stats > 0 or existing_records > 0):
                print(
                    f"   ⚠️  用户已有数据 - 体能:{existing_stats}条, 跑步:{existing_records}条, 目标:{existing_goals}条, 建议:{existing_advice}条")
                print(f"   ⏭️  跳过用户 {username}（如需重新生成，请选择清空数据选项）")
                continue

            # 如果强制重新生成，先删除现有数据
            if force_regenerate and (existing_stats > 0 or existing_records > 0):
                print(f"   🗑️  删除用户现有数据...")
                cursor.execute("DELETE FROM ai_advice WHERE user_id = %s", (user_id,))
                cursor.execute("DELETE FROM progress_goals WHERE user_id = %s", (user_id,))
                cursor.execute("DELETE FROM running_records WHERE user_id = %s", (user_id,))
                cursor.execute("DELETE FROM physical_stats WHERE user_id = %s", (user_id,))
                print(f"   ✅ 已清空用户 {username} 的现有数据")

            # 生成并插入体能数据
            print(f"   📈 生成体能数据...")
            physical_data = generate_physical_stats_data(user_id, user_profile)
            for stats in physical_data:
                cursor.execute("""
                    INSERT INTO physical_stats (
                        user_id, date, avg_heart_rate, current_heart_rate, resting_heart_rate,
                        max_heart_rate, current_step_rate, avg_step_rate, avg_blood_oxygen,
                        current_pace, health_index, stress_index, sleep_quality, sleep_duration,
                        aerobic_capacity, weekly_distance
                    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    stats['user_id'], stats['date'], stats['avg_heart_rate'],
                    stats['current_heart_rate'], stats['resting_heart_rate'],
                    stats['max_heart_rate'], stats['current_step_rate'],
                    stats['avg_step_rate'], stats['avg_blood_oxygen'],
                    stats['current_pace'], stats['health_index'],
                    stats['stress_index'], stats['sleep_quality'],
                    stats['sleep_duration'], stats['aerobic_capacity'],
                    stats['weekly_distance']
                ))
            mysql_stats['physical_stats'] += len(physical_data)
            print(f"   ✅ 插入 {len(physical_data)} 条体能数据")

            # 生成并插入跑步记录
            print(f"   🏃 生成跑步记录...")
            running_data = generate_running_records_data(user_id, user_profile)
            for record in running_data:
                cursor.execute("""
                    INSERT INTO running_records (
                        user_id, workout_type, start_time, end_time, duration, distance,
                        avg_pace, best_pace, avg_heart_rate, max_heart_rate, avg_step_rate,
                        calories, elevation_gain, weather, temperature, notes
                    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    record['user_id'], record['workout_type'], record['start_time'],
                    record['end_time'], record['duration'], record['distance'],
                    record['avg_pace'], record['best_pace'], record['avg_heart_rate'],
                    record['max_heart_rate'], record['avg_step_rate'], record['calories'],
                    record['elevation_gain'], record['weather'], record['temperature'],
                    record['notes']
                ))
            mysql_stats['running_records'] += len(running_data)
            print(f"   ✅ 插入 {len(running_data)} 条跑步记录")

            # 生成并插入目标数据
            print(f"   🎯 生成目标数据...")
            goals_data = generate_progress_goals_data(user_id, user_profile)
            for goal in goals_data:
                cursor.execute("""
                    INSERT INTO progress_goals (
                        user_id, title, current_value, target_value, category, deadline, created_at
                    ) VALUES (%s, %s, %s, %s, %s, %s, %s)
                """, (
                    goal['user_id'], goal['title'], goal['current_value'],
                    goal['target_value'], goal['category'], goal['deadline'],
                    goal['created_at']
                ))
            mysql_stats['progress_goals'] += len(goals_data)
            print(f"   ✅ 插入 {len(goals_data)} 条目标数据")

            # 生成并插入AI建议
            print(f"   🤖 生成AI建议...")
            advice_data = generate_ai_advice_data(user_id, user_profile)
            for advice in advice_data:
                cursor.execute("""
                    INSERT INTO ai_advice (user_id, advice_content, category)
                    VALUES (%s, %s, %s)
                """, (advice['user_id'], advice['advice_content'], advice['category']))
            mysql_stats['ai_advice'] += len(advice_data)
            print(f"   ✅ 插入 {len(advice_data)} 条AI建议")

            # 更新用户统计信息
            total_workouts = len(running_data)
            total_duration = sum(record['duration'] for record in running_data) // 60  # 转换为分钟
            total_distance = sum(record['distance'] for record in running_data) / 1000  # 转换为公里

            cursor.execute("""
                UPDATE users SET 
                    total_workouts = %s,
                    total_duration = %s,
                    total_distance = %s,
                    updated_at = CURRENT_TIMESTAMP
                WHERE id = %s
            """, (total_workouts, total_duration, total_distance, user_id))
            print(f"   ✅ 更新用户统计: {total_workouts}次训练, {total_duration}分钟, {total_distance:.1f}公里")
            print(f"   🎉 用户 {username} 数据生成完成！")

        # 提交事务
        mysql_connection.commit()
        print(f"\n💾 MySQL数据已提交到数据库")

        return mysql_stats

    except Exception as e:
        print(f"❌ 插入MySQL数据失败: {e}")
        mysql_connection.rollback()
        return mysql_stats
    finally:
        cursor.close()


def insert_mongodb_data(health_collection, daily_stats_collection, users, force_regenerate=False):
    """将生成的数据插入到MongoDB中"""
    mongodb_stats = {
        'health_data': 0,
        'daily_stats': 0
    }

    try:
        print("\n🍃 开始插入MongoDB数据...")
        print(f"🎯 开始为 {len(users)} 个用户生成健康监测数据...")

        for i, user in enumerate(users, 1):
            mysql_user_id = user['id']
            username = user['username']
            print(f"\n👤 [{i}/{len(users)}] 为用户 {username} (ID: {mysql_user_id}) 生成MongoDB数据...")

            # 计算用户档案
            user_profile = calculate_user_profile(user)

            # 检查是否已有健康数据
            existing_health = health_collection.count_documents({"mysqlUserId": mysql_user_id})
            existing_daily = daily_stats_collection.count_documents({"mysqlUserId": mysql_user_id})

            if not force_regenerate and existing_health > 0:
                print(f"   ⚠️  用户已有数据 - 健康数据:{existing_health}条, 每日统计:{existing_daily}条")
                print(f"   ⏭️  跳过用户 {username}（如需重新生成，请选择清空数据选项）")
                continue

            # 如果强制重新生成，先删除现有数据
            if force_regenerate and (existing_health > 0 or existing_daily > 0):
                print(f"   🗑️  删除用户现有MongoDB数据...")
                health_collection.delete_many({"mysqlUserId": mysql_user_id})
                daily_stats_collection.delete_many({"mysqlUserId": mysql_user_id})
                print(f"   ✅ 已清空用户 {username} 的现有MongoDB数据")

            # 生成并插入健康数据
            print(f"   📊 生成健康监测数据...")
            health_documents = generate_historical_health_data(mysql_user_id, username, user_profile, 1)
            if health_documents:
                result = health_collection.insert_many(health_documents)
                mongodb_stats['health_data'] += len(result.inserted_ids)
                print(f"   ✅ 插入 {len(result.inserted_ids)} 条健康数据")

            # 生成并插入每日统计数据
            print(f"   📈 生成每日统计数据...")
            daily_documents = generate_historical_daily_stats(mysql_user_id, username, user_profile, 1)
            if daily_documents:
                result = daily_stats_collection.insert_many(daily_documents)
                mongodb_stats['daily_stats'] += len(result.inserted_ids)
                print(f"   ✅ 插入 {len(result.inserted_ids)} 条每日统计数据")

            print(f"   🎉 用户 {username} MongoDB数据生成完成！")

        return mongodb_stats

    except Exception as e:
        print(f"❌ 插入MongoDB数据失败: {e}")
        return mongodb_stats


def test_connections():
    """测试双数据库连接"""
    print("=== 🔍 测试双数据库连接 ===")

    # 测试MySQL连接
    mysql_conn = connect_to_mysql()
    mysql_ok = False
    if mysql_conn is not None:
        users = get_mysql_users(mysql_conn)
        if users:
            print("📋 MySQL用户列表:")
            for user in users[:3]:  # 显示前3个用户
                print(f"   👤 {user['username']} (ID: {user['id']}) - {user.get('level', '未知等级')}")

        # 检查现有MySQL数据
        cursor = mysql_conn.cursor()
        mysql_tables = ['physical_stats', 'running_records', 'progress_goals']  # 移除不存在的表
        print("\n📊 MySQL现有数据统计:")
        for table in mysql_tables:
            try:
                cursor.execute(f"SELECT COUNT(*) FROM {table}")
                count = cursor.fetchone()[0]
                print(f"   📈 {table}: {count} 条")
            except Exception as e:
                print(f"   ❌ 表 {table} 查询失败: {e}")

        cursor.close()
        mysql_conn.close()
        mysql_ok = True

    # 测试MongoDB连接
    db, health_collection, daily_stats_collection, mongo_client = connect_to_mongodb()
    mongodb_ok = False
    if health_collection is not None and daily_stats_collection is not None:
        try:
            health_count = health_collection.count_documents({})
            daily_count = daily_stats_collection.count_documents({})
            print(f"\n📊 MongoDB现有数据统计:")
            print(f"   📈 健康数据: {health_count} 条")
            print(f"   📈 每日统计: {daily_count} 条")
            mongodb_ok = True
        except Exception as e:
            print(f"   ❌ MongoDB查询失败: {e}")
        finally:
            mongo_client.close()

    print("=== 连接测试完成 ===\n")
    return mysql_ok and mongodb_ok


def main():
    """主函数"""
    print("=== 🏃 双数据库运动数据生成器 ===")
    print("架构说明：")
    print("  🗄️  MySQL：用户信息、跑步记录、目标、AI建议等结构化数据")
    print("  🍃 MongoDB：健康监测、心率数据、体能统计等动态数据")
    print()

    # 测试连接
    if not test_connections():
        print("❌ 数据库连接失败，程序退出")
        return

    print("\n" + "=" * 60)

    # 配置生成参数
    force_regenerate = True  # 强制为所有用户重新生成数据
    should_clear_all = False  # 不清空现有数据
    
    print("\n🚀 开始连接双数据库...")
    mysql_connection = connect_to_mysql()
    db, health_collection, daily_stats_collection, mongo_client = connect_to_mongodb()

    if mysql_connection is not None and health_collection is not None and daily_stats_collection is not None:
        try:
            # 获取所有用户
            users = get_mysql_users(mysql_connection)
            if not users:
                print("⚠️  没有找到用户，请先注册用户")
                return

            print(f"\n👥 找到 {len(users)} 个注册用户，准备生成数据...")
            for user in users:
                print(f"   - {user['username']} (ID: {user['id']}, 等级: {user.get('level', '未设置')})")
            
            # 插入MySQL数据 - 为每个用户生成15-20条跑步记录
            for user in users:
                # 计算用户档案
                user_profile = calculate_user_profile(user)
                
                # 生成15-20条跑步记录
                records_count = random.randint(15, 20)
                print(f"\n🏃 为用户 {user['username']} 生成 {records_count} 条额外跑步记录...")
                
                running_data = generate_running_records_data(user['id'], user_profile, records_count)
                
                # 插入记录
                cursor = mysql_connection.cursor()
                for record in running_data:
                    cursor.execute("""
                        INSERT INTO running_records (
                            user_id, workout_type, start_time, end_time, duration, distance,
                            avg_pace, best_pace, avg_heart_rate, max_heart_rate, avg_step_rate,
                            calories, elevation_gain, weather, temperature, notes
                        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, (
                        record['user_id'], record['workout_type'], record['start_time'],
                        record['end_time'], record['duration'], record['distance'],
                        record['avg_pace'], record['best_pace'], record['avg_heart_rate'],
                        record['max_heart_rate'], record['avg_step_rate'], record['calories'],
                        record['elevation_gain'], record['weather'], record['temperature'],
                        record['notes']
                    ))
                    
                # 更新用户统计信息
                cursor.execute("SELECT COUNT(*) FROM running_records WHERE user_id = %s", (user['id'],))
                total_workouts = cursor.fetchone()[0]
                
                cursor.execute("SELECT SUM(duration) FROM running_records WHERE user_id = %s", (user['id'],))
                total_duration = cursor.fetchone()[0] // 60  # 转换为分钟
                
                cursor.execute("SELECT SUM(distance) FROM running_records WHERE user_id = %s", (user['id'],))
                total_distance = cursor.fetchone()[0] / 1000  # 转换为公里
                
                cursor.execute("""
                    UPDATE users SET 
                        total_workouts = %s,
                        total_duration = %s,
                        total_distance = %s,
                        updated_at = CURRENT_TIMESTAMP
                    WHERE id = %s
                """, (total_workouts, total_duration, total_distance, user['id']))
                
                cursor.close()
                mysql_connection.commit()
                
                print(f"   ✅ 成功为用户 {user['username']} 添加 {records_count} 条跑步记录")
                print(f"   ✅ 更新用户统计: {total_workouts}次训练, {total_duration}分钟, {total_distance:.1f}公里")
                
                # 为每个用户生成更多MongoDB健康数据
                print(f"\n🍃 为用户 {user['username']} 生成MongoDB健康数据...")
                
                # 生成30天的历史健康数据
                health_documents = generate_historical_health_data(user['id'], user['username'], user_profile, 30)
                health_collection.insert_many(health_documents)
                
                # 生成30天的每日统计数据
                daily_documents = generate_historical_daily_stats(user['id'], user['username'], user_profile, 30)
                daily_stats_collection.insert_many(daily_documents)
                
                print(f"   ✅ 成功为用户 {user['username']} 添加 {len(health_documents)} 条健康数据和 {len(daily_documents)} 条每日统计")

            print(f"\n🎉 所有用户的补充数据生成完成！")

        finally:
            mysql_connection.close()
            mongo_client.close()
    else:
        print("❌ 无法连接到数据库，操作取消")


if __name__ == "__main__":
    main()