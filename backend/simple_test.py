#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests
import json

def test_api():
    """测试API是否可用"""
    print("🔍 诊断后端API问题")
    print("=" * 40)
    
    try:
        # 1. 测试健康检查
        print("1. 测试健康检查...")
        response = requests.get('http://localhost:5000/health', timeout=3)
        print(f"   状态码: {response.status_code}")
        print(f"   响应: {response.text}")
        
        if response.status_code != 200:
            print("❌ 服务器没有正常运行")
            return False
            
        # 2. 测试注册
        print("\n2. 测试注册...")
        register_data = {
            'name': 'diagnostic_user',
            'password': 'test123456'
        }
        
        register_response = requests.post(
            'http://localhost:5000/api/users/register',
            json=register_data,
            timeout=3
        )
        print(f"   注册状态码: {register_response.status_code}")
        print(f"   注册响应: {register_response.text}")
        
        # 3. 测试登录
        print("\n3. 测试登录...")
        login_response = requests.post(
            'http://localhost:5000/api/users/login',
            json=register_data,
            timeout=3
        )
        print(f"   登录状态码: {login_response.status_code}")
        print(f"   登录响应: {login_response.text}")
        
        if login_response.status_code == 200:
            token = login_response.json().get('data', {}).get('token')
            if token:
                # 4. 测试获取用户信息
                print("\n4. 测试获取用户信息...")
                headers = {'Authorization': f'Bearer {token}'}
                user_info_response = requests.get(
                    'http://localhost:5000/api/users/all/list',
                    headers=headers,
                    timeout=3
                )
                print(f"   用户信息状态码: {user_info_response.status_code}")
                print(f"   用户信息响应: {user_info_response.text}")
                
                if user_info_response.status_code == 200:
                    print("\n✅ 所有API都正常工作！")
                    return True
        
        print("\n❌ 部分API存在问题")
        return False
        
    except requests.exceptions.ConnectionError:
        print("❌ 无法连接到服务器")
        print("   可能原因：")
        print("   1. 服务器没有启动")
        print("   2. 端口5000被其他程序占用")
        print("   3. Flask版本冲突导致启动失败")
        return False
    except Exception as e:
        print(f"❌ 测试过程中出现错误: {e}")
        return False

if __name__ == '__main__':
    test_api() 