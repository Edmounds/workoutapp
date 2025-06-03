#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
新用户批量创建工具
- 创建不同性别、年龄、身体健康状况的用户
- 并为这些用户生成运动数据
"""

import random
import string
import time
import hashlib
import pymysql
from datetime import datetime, timedelta

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

# 用户属性范围定义
USER_PROFILES = [
    # 健康的年轻男性
    {
        'gender': 1,  # 男性
        'age_range': (18, 30),
        'height_range': (170, 185),
        'weight_range': (60, 75),
        'level': 'intermediate',
        'count': 5,  # 创建5个此类用户
        'prefix': 'healthy_young_male'
    },
    # 健康的年轻女性
    {
        'gender': 2,  # 女性
        'age_range': (18, 30),
        'height_range': (158, 170),
        'weight_range': (45, 60),
        'level': 'intermediate',
        'count': 5,
        'prefix': 'healthy_young_female'
    },
    # 中年男性 - 稍微超重
    {
        'gender': 1,
        'age_range': (35, 50),
        'height_range': (165, 180),
        'weight_range': (75, 90),
        'level': 'beginner',
        'count': 4,
        'prefix': 'middle_age_male'
    },
    # 中年女性 - 健康体重
    {
        'gender': 2,
        'age_range': (35, 50),
        'height_range': (155, 168),
        'weight_range': (50, 65),
        'level': 'beginner',
        'count': 4,
        'prefix': 'middle_age_female'
    },
    # 年长男性 - 健康
    {
        'gender': 1,
        'age_range': (55, 70),
        'height_range': (160, 175),
        'weight_range': (65, 80),
        'level': 'beginner',
        'count': 3,
        'prefix': 'elder_male'
    },
    # 年长女性 - 健康
    {
        'gender': 2,
        'age_range': (55, 70),
        'height_range': (150, 165),
        'weight_range': (50, 65),
        'level': 'beginner',
        'count': 3,
        'prefix': 'elder_female'
    },
    # 超重男性
    {
        'gender': 1,
        'age_range': (30, 45),
        'height_range': (165, 180),
        'weight_range': (90, 110),
        'level': 'beginner',
        'count': 3,
        'prefix': 'overweight_male'
    },
    # 超重女性
    {
        'gender': 2,
        'age_range': (30, 45),
        'height_range': (155, 168),
        'weight_range': (75, 90),
        'level': 'beginner',
        'count': 3,
        'prefix': 'overweight_female'
    },
    # 健身达人男性
    {
        'gender': 1,
        'age_range': (20, 40),
        'height_range': (170, 185),
        'weight_range': (70, 85),
        'level': 'advanced',
        'count': 3,
        'prefix': 'fitness_pro_male'
    },
    # 健身达人女性
    {
        'gender': 2,
        'age_range': (20, 40),
        'height_range': (160, 175),
        'weight_range': (50, 65),
        'level': 'advanced',
        'count': 3,
        'prefix': 'fitness_pro_female'
    },
    # 瘦弱男性
    {
        'gender': 1,
        'age_range': (18, 30),
        'height_range': (170, 185),
        'weight_range': (50, 60),
        'level': 'beginner',
        'count': 2,
        'prefix': 'slim_male'
    },
    # 瘦弱女性
    {
        'gender': 2,
        'age_range': (18, 30),
        'height_range': (155, 170),
        'weight_range': (40, 45),
        'level': 'beginner',
        'count': 2,
        'prefix': 'slim_female'
    }
]


def connect_to_mysql():
    """连接到MySQL数据库"""
    try:
        connection = pymysql.connect(**MYSQL_CONFIG)
        print(f"✅ 成功连接到MySQL数据库: {MYSQL_CONFIG['database']}")
        return connection
    except Exception as e:
        print(f"❌ 连接MySQL失败: {e}")
        return None


def generate_password_hash(password):
    """生成密码哈希"""
    return hashlib.sha256(password.encode()).hexdigest()


def create_user(mysql_connection, user_data):
    """创建一个新用户"""
    try:
        cursor = mysql_connection.cursor()
        
        # 生成唯一用户名
        timestamp = int(time.time())
        username = f"{user_data['prefix']}_{timestamp}"
        
        # 生成邮箱
        email = f"{username}@example.com"
        
        # 生成默认密码 (123456)
        password_hash = generate_password_hash("123456")
        
        # 插入用户数据
        cursor.execute("""
            INSERT INTO users (
                username, gender, age, height, weight, level, 
                password, email, created_at
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            username, 
            user_data['gender'], 
            user_data['age'], 
            user_data['height'], 
            user_data['weight'],
            user_data['level'],
            password_hash,
            email,
            datetime.now()
        ))
        
        # 获取新用户ID
        user_id = cursor.lastrowid
        
        cursor.close()
        mysql_connection.commit()
        
        return {
            'id': user_id,
            'username': username,
            'gender': user_data['gender'],
            'age': user_data['age'],
            'height': user_data['height'],
            'weight': user_data['weight'],
            'level': user_data['level']
        }
    except Exception as e:
        print(f"❌ 创建用户失败: {e}")
        return None


def generate_users_batch():
    """批量生成不同类型的用户"""
    mysql_connection = connect_to_mysql()
    if not mysql_connection:
        return
    
    try:
        created_users = []
        total_to_create = sum(profile['count'] for profile in USER_PROFILES)
        created_count = 0
        
        print(f"🚀 开始创建 {total_to_create} 个不同类型的用户...")
        
        for profile in USER_PROFILES:
            print(f"\n📊 创建 {profile['count']} 个 {profile['prefix']} 类型用户...")
            
            for i in range(profile['count']):
                # 随机生成年龄、身高、体重
                age = random.randint(profile['age_range'][0], profile['age_range'][1])
                height = round(random.uniform(profile['height_range'][0], profile['height_range'][1]), 2)
                weight = round(random.uniform(profile['weight_range'][0], profile['weight_range'][1]), 2)
                
                user_data = {
                    'prefix': profile['prefix'],
                    'gender': profile['gender'],
                    'age': age,
                    'height': height,
                    'weight': weight,
                    'level': profile['level']
                }
                
                new_user = create_user(mysql_connection, user_data)
                if new_user:
                    created_users.append(new_user)
                    created_count += 1
                    print(f"   ✅ [{created_count}/{total_to_create}] 创建用户: {new_user['username']} (ID: {new_user['id']})")
                    print(f"      性别: {'男' if new_user['gender'] == 1 else '女'}, 年龄: {age}, 身高: {height}cm, 体重: {weight}kg, 等级: {profile['level']}")
                
                # 稍微延迟，避免用户名时间戳重复
                time.sleep(0.5)
        
        print(f"\n🎉 成功创建 {len(created_users)} 个不同类型的用户！")
        return created_users
        
    except Exception as e:
        print(f"❌ 批量生成用户失败: {e}")
        return []
    finally:
        mysql_connection.close()


def main():
    """主函数"""
    print("=== 👥 新用户批量创建工具 ===")
    print("将创建不同性别、年龄、身体健康状况的用户")
    print()
    
    # 确认是否继续
    should_continue = input("🤔 是否开始创建新用户？(y/n): ").lower() == 'y'
    if not should_continue:
        print("⏹️  操作取消")
        return
    
    # 生成用户
    new_users = generate_users_batch()
    
    if new_users:
        # 询问是否要为这些用户生成运动数据
        generate_data = input("\n🤔 是否要为这些新用户生成运动数据？(y/n): ").lower() == 'y'
        if generate_data:
            print("\n🏃 正在为新用户生成运动数据...")
            print("请运行 python device/data_create.py 来为这些用户生成数据")
        
    print("👋 程序结束")


if __name__ == "__main__":
    main() 