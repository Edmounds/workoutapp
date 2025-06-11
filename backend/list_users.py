#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
列出数据库中的所有用户
"""

import mysql.connector

# 数据库配置
mysql_config = {
    'host': '113.45.220.0',
    'port': 3306,
    'user': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app'
}

def list_users():
    """列出所有用户"""
    conn = None
    cursor = None
    
    try:
        # 连接数据库
        print(f"连接到数据库 {mysql_config['host']}...")
        conn = mysql.connector.connect(**mysql_config)
        cursor = conn.cursor(dictionary=True)
        
        # 查询所有用户
        print("查询所有用户...")
        cursor.execute("""
            SELECT id, username, gender, age, level, total_workouts, total_duration, total_distance
            FROM users
            ORDER BY id
        """)
        
        users = cursor.fetchall()
        
        if not users:
            print("数据库中没有用户")
            return
            
        # 打印用户列表
        print(f"\n共找到 {len(users)} 个用户:")
        print("-" * 80)
        print(f"{'ID':<5} {'用户名':<20} {'性别':<5} {'年龄':<5} {'级别':<10} {'运动次数':<8} {'总时长(分)':<10} {'总距离(km)':<10}")
        print("-" * 80)
        
        for user in users:
            gender_text = {0: "未知", 1: "男", 2: "女"}.get(user['gender'], "未知")
            print(f"{user['id']:<5} {user['username']:<20} {gender_text:<5} {user['age'] or '-':<5} {user['level']:<10} {user['total_workouts']:<8} {user['total_duration']:<10} {user['total_distance']:<10}")
            
    except Exception as e:
        print(f"错误: {e}")
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

if __name__ == "__main__":
    list_users() 