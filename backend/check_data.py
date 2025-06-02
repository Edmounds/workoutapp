#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pymysql

# 连接配置
config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'cxr',
    'password': '123456',
    'database': 'workout_app',
    'charset': 'utf8mb4'
}

try:
    conn = pymysql.connect(**config)
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    
    print("=== 数据库状态检查 ===")
    
    # 检查所有用户
    cursor.execute('SELECT id, username FROM users')
    users = cursor.fetchall()
    print(f'用户数量: {len(users)}')
    for user in users:
        print(f'  - {user["username"]} (ID: {user["id"]})')
    
    print()
    
    # 检查每个用户的跑步记录数量
    for user in users:
        cursor.execute('SELECT COUNT(*) as count FROM running_records WHERE user_id = %s', (user['id'],))
        result = cursor.fetchone()
        count = result['count']
        print(f'用户 {user["username"]} (ID: {user["id"]}) 的跑步记录: {count} 条')
        
        # 如果有记录，显示最新的几条
        if count > 0:
            cursor.execute('''
                SELECT workout_type, start_time, distance, duration 
                FROM running_records 
                WHERE user_id = %s 
                ORDER BY start_time DESC 
                LIMIT 3
            ''', (user['id'],))
            records = cursor.fetchall()
            for i, record in enumerate(records, 1):
                print(f'    {i}. {record["workout_type"]} - {record["start_time"]} - {record["distance"]}m - {record["duration"]}s')
    
    print()
    
    # 检查其他表的数据量
    tables = ['physical_stats', 'progress_goals', 'ai_advice', 'nutrition_tips']
    for table in tables:
        cursor.execute(f'SELECT COUNT(*) as count FROM {table}')
        result = cursor.fetchone()
        count = result['count']
        print(f'{table} 表记录数: {count}')
    
    cursor.close()
    conn.close()
    print('\n检查完成')
    
except Exception as e:
    print(f'错误: {e}') 