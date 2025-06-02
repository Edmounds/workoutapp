#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests
import json
import time

def test_server():
    """快速测试服务器"""
    print("🔍 测试服务器是否正常运行...")
    
    # 等待服务器启动
    time.sleep(3)
    
    try:
        # 测试健康检查
        response = requests.get('http://localhost:5000/health', timeout=5)
        if response.status_code == 200:
            print("✅ 服务器运行正常")
            print(f"响应: {response.json()}")
            return True
        else:
            print(f"❌ 服务器响应异常: {response.status_code}")
            return False
    except requests.exceptions.ConnectionError:
        print("❌ 无法连接到服务器，请确保服务器已启动")
        return False
    except Exception as e:
        print(f"❌ 测试失败: {e}")
        return False

def test_register_login():
    """测试注册和登录功能"""
    print("🔍 测试注册和登录功能...")
    
    try:
        # 测试注册
        register_data = {
            'name': 'testuser2024',
            'password': 'testpass123'
        }
        
        register_response = requests.post(
            'http://localhost:5000/api/users/register', 
            json=register_data,
            timeout=5
        )
        
        print(f"注册响应: {register_response.status_code} - {register_response.json()}")
        
        # 测试登录
        login_response = requests.post(
            'http://localhost:5000/api/users/login',
            json=register_data,
            timeout=5
        )
        
        print(f"登录响应: {login_response.status_code} - {login_response.json()}")
        
        if login_response.status_code == 200:
            data = login_response.json().get('data', {})
            print(f"✅ 登录成功，用户名: {data.get('username')}, Token已生成")
            return True
        else:
            print("❌ 登录失败")
            return False
            
    except Exception as e:
        print(f"❌ 注册/登录测试失败: {e}")
        return False

if __name__ == '__main__':
    print("🧪 快速测试运动小程序后端")
    print("=" * 40)
    
    # 测试服务器
    if test_server():
        print("-" * 40)
        # 测试注册登录
        test_register_login()
    
    print("\n测试完成！") 