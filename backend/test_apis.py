#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests
import json
import time

BASE_URL = 'http://localhost:5000'

def test_health_check():
    """测试健康检查"""
    print("🔍 测试健康检查...")
    try:
        response = requests.get(f'{BASE_URL}/health')
        print(f"状态码: {response.status_code}")
        print(f"响应: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ 健康检查失败: {e}")
        return False

def test_db_connection():
    """测试数据库连接"""
    print("🔍 测试数据库连接...")
    try:
        response = requests.get(f'{BASE_URL}/test/db')
        print(f"状态码: {response.status_code}")
        print(f"响应: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ 数据库连接测试失败: {e}")
        return False

def test_user_register():
    """测试用户注册"""
    print("🔍 测试用户注册...")
    try:
        data = {
            'name': 'testuser',
            'password': 'testpass123',
            'nickname': '测试用户'
        }
        response = requests.post(f'{BASE_URL}/api/users/register', json=data)
        print(f"状态码: {response.status_code}")
        print(f"响应: {response.json()}")
        return response.status_code in [200, 201, 400]  # 400表示用户已存在
    except Exception as e:
        print(f"❌ 用户注册测试失败: {e}")
        return False

def test_user_login():
    """测试用户登录"""
    print("🔍 测试用户登录...")
    try:
        data = {
            'name': 'testuser',
            'password': 'testpass123'
        }
        response = requests.post(f'{BASE_URL}/api/users/login', json=data)
        print(f"状态码: {response.status_code}")
        result = response.json()
        print(f"响应: {result}")
        
        if response.status_code == 200 and 'data' in result:
            return result['data'].get('token')
        return None
    except Exception as e:
        print(f"❌ 用户登录测试失败: {e}")
        return None

def test_get_user_info(token):
    """测试获取用户信息"""
    print("🔍 测试获取用户信息...")
    try:
        headers = {'Authorization': f'Bearer {token}'}
        response = requests.get(f'{BASE_URL}/api/users/all/list', headers=headers)
        print(f"状态码: {response.status_code}")
        print(f"响应: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ 获取用户信息测试失败: {e}")
        return False

def test_get_running_records(token):
    """测试获取跑步记录"""
    print("🔍 测试获取跑步记录...")
    try:
        headers = {'Authorization': f'Bearer {token}'}
        response = requests.get(f'{BASE_URL}/api/user/running_records', headers=headers)
        print(f"状态码: {response.status_code}")
        print(f"响应: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ 获取跑步记录测试失败: {e}")
        return False

def test_upload_workout(token):
    """测试上传运动记录"""
    print("🔍 测试上传运动记录...")
    try:
        headers = {'Authorization': f'Bearer {token}'}
        data = {
            'workout_type': '跑步',
            'start_time': '2024-01-01 08:00:00',
            'duration': 1800,  # 30分钟
            'distance': 5000,  # 5公里
            'avg_pace': 360,   # 6分钟/公里
            'calories': 300,
            'avg_heart_rate': 150,
            'max_heart_rate': 170,
            'notes': '测试跑步记录'
        }
        response = requests.post(f'{BASE_URL}/api/user/upload_workout', 
                               json=data, headers=headers)
        print(f"状态码: {response.status_code}")
        print(f"响应: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ 上传运动记录测试失败: {e}")
        return False

def test_get_physical_stats(token):
    """测试获取体能数据"""
    print("🔍 测试获取体能数据...")
    try:
        headers = {'Authorization': f'Bearer {token}'}
        response = requests.get(f'{BASE_URL}/api/physical/stats', headers=headers)
        print(f"状态码: {response.status_code}")
        print(f"响应: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ 获取体能数据测试失败: {e}")
        return False

def main():
    """主测试函数"""
    print("🧪 运动小程序API测试")
    print("=" * 50)
    
    # 等待服务器启动
    print("等待服务器启动...")
    time.sleep(2)
    
    results = []
    
    # 1. 健康检查
    results.append(("健康检查", test_health_check()))
    print("-" * 50)
    
    # 2. 数据库连接测试
    results.append(("数据库连接", test_db_connection()))
    print("-" * 50)
    
    # 3. 用户注册
    results.append(("用户注册", test_user_register()))
    print("-" * 50)
    
    # 4. 用户登录
    token = test_user_login()
    results.append(("用户登录", token is not None))
    print("-" * 50)
    
    if token:
        # 5. 获取用户信息
        results.append(("获取用户信息", test_get_user_info(token)))
        print("-" * 50)
        
        # 6. 获取跑步记录
        results.append(("获取跑步记录", test_get_running_records(token)))
        print("-" * 50)
        
        # 7. 上传运动记录
        results.append(("上传运动记录", test_upload_workout(token)))
        print("-" * 50)
        
        # 8. 获取体能数据
        results.append(("获取体能数据", test_get_physical_stats(token)))
        print("-" * 50)
    
    # 显示测试结果
    print("📊 测试结果总结")
    print("=" * 50)
    for test_name, success in results:
        status = "✅ 通过" if success else "❌ 失败"
        print(f"{test_name}: {status}")
    
    passed = sum(1 for _, success in results if success)
    total = len(results)
    print(f"\n总计: {passed}/{total} 个测试通过")
    
    if passed == total:
        print("🎉 所有测试通过！")
    else:
        print("⚠️ 部分测试失败，请检查服务器状态")

if __name__ == '__main__':
    main() 