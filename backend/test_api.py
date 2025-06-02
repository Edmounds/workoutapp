#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""API测试脚本"""

import requests
import json
import time

# 基础URL
BASE_URL = "http://localhost:5000"
# 存储登录后的令牌
TOKEN = None

def print_response(response):
    """打印响应结果"""
    print("状态码:", response.status_code)
    try:
        print("响应内容:", json.dumps(response.json(), ensure_ascii=False, indent=2))
    except:
        print("响应内容:", response.text)
    print("-" * 50)

def test_health_check():
    """测试健康检查接口"""
    print("\n测试健康检查接口 /health")
    response = requests.get(f"{BASE_URL}/health")
    print_response(response)
    return response.status_code == 200

def test_db_connection():
    """测试数据库连接"""
    print("\n测试数据库连接 /test/db")
    response = requests.get(f"{BASE_URL}/test/db")
    print_response(response)
    return response.status_code == 200

def test_user_register():
    """测试用户注册"""
    print("\n测试用户注册 /api/users/register")
    # 使用时间戳确保用户名唯一
    username = f"test_user_{int(time.time())}"
    data = {
        "name": username,
        "password": "password123",
        "email": f"{username}@example.com",
        "gender": 1,
        "age": 25,
        "height": 175.5,
        "weight": 70.0
    }
    response = requests.post(f"{BASE_URL}/api/users/register", json=data)
    print_response(response)
    return response.status_code in [200, 201], username

def test_user_login(username):
    """测试用户登录"""
    global TOKEN
    print(f"\n测试用户登录 /api/users/login (用户名: {username})")
    data = {
        "name": username,
        "password": "password123"
    }
    response = requests.post(f"{BASE_URL}/api/users/login", json=data)
    print_response(response)
    
    if response.status_code == 200:
        result = response.json()
        TOKEN = result.get("data", {}).get("token")
        print(f"获取到的令牌: {TOKEN}")
    
    return response.status_code == 200 and TOKEN is not None

def test_get_user_info():
    """测试获取用户信息"""
    if not TOKEN:
        print("\n无法测试获取用户信息：未登录")
        return False
    
    print("\n测试获取用户信息 /api/users/all/list")
    headers = {"Authorization": f"Bearer {TOKEN}"}
    response = requests.get(f"{BASE_URL}/api/users/all/list", headers=headers)
    print_response(response)
    return response.status_code == 200

def test_upload_workout():
    """测试上传运动记录"""
    if not TOKEN:
        print("\n无法测试上传运动记录：未登录")
        return False
    
    print("\n测试上传运动记录 /api/user/upload_workout")
    headers = {"Authorization": f"Bearer {TOKEN}"}
    data = {
        "workout_type": "跑步",
        "start_time": time.strftime("%Y-%m-%d %H:%M:%S"),
        "duration": 1800,  # 30分钟
        "distance": 5000,  # 5公里
        "avg_pace": 360,   # 6分钟/公里
        "calories": 350,
        "avg_heart_rate": 128,
        "max_heart_rate": 152,
        "notes": "测试上传的运动记录"
    }
    response = requests.post(f"{BASE_URL}/api/user/upload_workout", json=data, headers=headers)
    print_response(response)
    return response.status_code == 200

def test_get_running_records():
    """测试获取跑步记录"""
    if not TOKEN:
        print("\n无法测试获取跑步记录：未登录")
        return False
    
    print("\n测试获取跑步记录 /api/user/running_records")
    headers = {"Authorization": f"Bearer {TOKEN}"}
    response = requests.get(f"{BASE_URL}/api/user/running_records", headers=headers)
    print_response(response)
    return response.status_code == 200

def run_all_tests():
    """运行所有测试"""
    print("=" * 50)
    print("开始API测试...")
    print("=" * 50)
    
    # 测试健康检查
    if not test_health_check():
        print("健康检查测试失败，服务可能未正常启动")
        return
    
    # 测试数据库连接
    if not test_db_connection():
        print("数据库连接测试失败，数据库可能未正常配置")
        return
    
    # 测试用户注册
    register_success, username = test_user_register()
    if not register_success:
        print("用户注册测试失败")
        return
    
    # 测试用户登录
    if not test_user_login(username):
        print("用户登录测试失败")
        return
    
    # 测试获取用户信息
    test_get_user_info()
    
    # 测试上传运动记录
    test_upload_workout()
    
    # 测试获取跑步记录
    test_get_running_records()
    
    print("=" * 50)
    print("API测试完成")
    print("=" * 50)

if __name__ == "__main__":
    run_all_tests() 