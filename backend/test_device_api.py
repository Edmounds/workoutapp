#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""测试设备API的脚本"""

import requests
import json
import time
from datetime import datetime
import pymysql
import sys
import os

# 添加当前目录到Python路径
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

# 导入配置
from config import DB_CONFIG

# 服务器地址
BASE_URL = "http://localhost:5000"

# 颜色输出
class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def print_response(response, title=None):
    """打印响应内容"""
    if title:
        print(f"\n{Colors.BOLD}{title}{Colors.ENDC}")
    
    status_color = Colors.OKGREEN if response.status_code < 400 else Colors.FAIL
    print(f"{status_color}状态码: {response.status_code}{Colors.ENDC}")
    
    try:
        resp_json = response.json()
        print(f"响应内容: {json.dumps(resp_json, ensure_ascii=False, indent=2)}")
        return resp_json
    except:
        print(f"响应内容: {response.text}")
        return None

def reset_device_status(device_id):
    """重置设备状态为未绑定"""
    try:
        conn = pymysql.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        cursor.execute(
            "UPDATE devices SET user_id = NULL, status = 0, updated_at = NOW() WHERE device_id = %s",
            (device_id,)
        )
        conn.commit()
        
        cursor.close()
        conn.close()
        print(f"{Colors.OKCYAN}已重置测试设备状态{Colors.ENDC}")
        return True
    except Exception as e:
        print(f"{Colors.WARNING}重置设备状态失败: {e}{Colors.ENDC}")
        return False

def create_test_device(device_id, device_secret):
    """创建测试设备"""
    try:
        conn = pymysql.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        # 先检查设备是否已存在
        cursor.execute("SELECT id FROM devices WHERE device_id = %s", (device_id,))
        if cursor.fetchone():
            # 如果设备已存在，重置其状态
            reset_device_status(device_id)
            print(f"{Colors.OKCYAN}测试设备已存在，已重置状态{Colors.ENDC}")
        else:
            # 如果设备不存在，创建新设备
            cursor.execute(
                """INSERT INTO devices 
                   (device_id, secret, status, device_name, device_type, created_at, updated_at) 
                   VALUES (%s, %s, 0, %s, %s, NOW(), NOW())""",
                (device_id, device_secret, "测试设备", "Wristband")
            )
            conn.commit()
            print(f"{Colors.OKCYAN}已创建新的测试设备{Colors.ENDC}")
        
        cursor.close()
        conn.close()
        return True
    except Exception as e:
        print(f"{Colors.WARNING}创建测试设备失败: {e}{Colors.ENDC}")
        return False

def main():
    """主测试流程"""
    print(f"{Colors.BOLD}{Colors.HEADER}开始测试设备API...{Colors.ENDC}")
    
    # 使用现有设备数据进行测试
    test_device_id = f"DEV{int(time.time())}"
    test_device_secret = "test_secret_123456"
    
    # 首先，创建测试设备
    if not create_test_device(test_device_id, test_device_secret):
        print(f"{Colors.FAIL}创建测试设备失败，无法继续测试{Colors.ENDC}")
        return
    
    # 首先，确保设备处于未绑定状态
    reset_device_status(test_device_id)
    
    # 创建并登录测试用户
    timestamp = int(time.time())
    test_username = f"test_device_user_{timestamp}"
    
    # 注册测试用户
    register_data = {
        "name": test_username,
        "password": "Chenqichen666",
        "email": f"{test_username}@example.com",
        "gender": 1,
        "age": 30,
        "height": 175.0,
        "weight": 70.0
    }
    
    try:
        # 测试服务器是否在线
        try:
            response = requests.get(f"{BASE_URL}/health", timeout=5)
            if response.status_code != 200:
                print(f"{Colors.FAIL}服务器未正常响应，请先启动服务器{Colors.ENDC}")
                return
        except requests.exceptions.RequestException:
            print(f"{Colors.FAIL}无法连接到服务器，请先启动服务器{Colors.ENDC}")
            return
        
        # 注册用户
        response = requests.post(f"{BASE_URL}/api/users/register", json=register_data)
        resp_data = print_response(response, "注册测试用户")
        
        if response.status_code not in [200, 201]:
            print(f"{Colors.FAIL}测试用户注册失败，无法继续测试{Colors.ENDC}")
            return
        
        # 登录测试用户
        login_data = {
            "name": test_username,
            "password": "Chenqichen666"
        }
        
        response = requests.post(f"{BASE_URL}/api/users/login", json=login_data)
        resp_data = print_response(response, "登录测试用户")
        
        if response.status_code != 200:
            print(f"{Colors.FAIL}测试用户登录失败，无法继续测试{Colors.ENDC}")
            return
        
        user_token = resp_data.get('data', {}).get('token')
        if not user_token:
            print(f"{Colors.FAIL}未获取到用户令牌，无法继续测试{Colors.ENDC}")
            return
        
        # 测试设备绑定
        headers = {
            "Authorization": f"Bearer {user_token}",
            "Content-Type": "application/json"
        }
        
        bind_data = {
            "device_id": test_device_id,
            "secret": test_device_secret
        }
        
        response = requests.post(f"{BASE_URL}/api/devices/bind", headers=headers, json=bind_data)
        resp_data = print_response(response, "设备绑定")
        
        if response.status_code != 200:
            print(f"{Colors.FAIL}设备绑定失败，无法继续测试{Colors.ENDC}")
            if response.status_code == 404 and "设备不存在" in str(resp_data):
                print(f"{Colors.WARNING}请确保数据库中存在设备ID: {test_device_id}{Colors.ENDC}")
                print(f"{Colors.WARNING}可能原因: 数据库连接配置与实际不符，或设备记录已被删除{Colors.ENDC}")
            reset_device_status(test_device_id)
            return
        
        print(f"{Colors.OKGREEN}✓ 设备绑定成功{Colors.ENDC}")
        
        # 测试获取设备列表
        response = requests.get(f"{BASE_URL}/api/devices/list", headers=headers)
        resp_data = print_response(response, "获取设备列表")
        
        if response.status_code == 200:
            devices = resp_data.get('data', [])
            if devices:
                print(f"{Colors.OKGREEN}✓ 成功获取设备列表，共{len(devices)}个设备{Colors.ENDC}")
                
                # 测试更新设备信息
                update_data = {
                    "device_id": test_device_id,
                    "device_name": f"测试设备_{timestamp}"
                }
                
                response = requests.put(f"{BASE_URL}/api/devices/update", headers=headers, json=update_data)
                print_response(response, "更新设备信息")
                
                if response.status_code == 200:
                    print(f"{Colors.OKGREEN}✓ 设备信息更新成功{Colors.ENDC}")
                else:
                    print(f"{Colors.FAIL}✗ 设备信息更新失败{Colors.ENDC}")
            else:
                print(f"{Colors.WARNING}! 设备列表为空{Colors.ENDC}")
        else:
            print(f"{Colors.FAIL}✗ 获取设备列表失败{Colors.ENDC}")
        
        # 测试设备认证
        auth_data = {
            "device_id": test_device_id,
            "secret": test_device_secret
        }
        
        response = requests.post(f"{BASE_URL}/api/devices/auth", json=auth_data)
        resp_data = print_response(response, "设备认证")
        
        if response.status_code == 200:
            device_token = resp_data.get('data', {}).get('token')
            if device_token:
                print(f"{Colors.OKGREEN}✓ 设备认证成功{Colors.ENDC}")
                
                # 测试数据上传
                device_headers = {
                    "Authorization": f"Bearer {device_token}",
                    "Content-Type": "application/json"
                }
                
                # 上传运动数据
                workout_data = {
                    "data_type": "workout",
                    "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                    "data": {
                        "workout_type": "跑步",
                        "duration": 1800,  # 30分钟
                        "distance": 5000,  # 5公里
                        "avg_pace": 360,   # 6分钟/公里
                        "calories": 350,
                        "avg_heart_rate": 130,
                        "max_heart_rate": 155
                    }
                }
                
                response = requests.post(f"{BASE_URL}/api/devices/upload_data", headers=device_headers, json=workout_data)
                print_response(response, "上传运动数据")
                
                if response.status_code == 200:
                    print(f"{Colors.OKGREEN}✓ 运动数据上传成功{Colors.ENDC}")
                else:
                    print(f"{Colors.FAIL}✗ 运动数据上传失败{Colors.ENDC}")
                
                # 上传健康数据
                health_data = {
                    "data_type": "health_stats",
                    "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                    "data": {
                        "avg_heart_rate": 68,
                        "current_heart_rate": 72,
                        "resting_heart_rate": 58,
                        "max_heart_rate": 155,
                        "avg_blood_oxygen": 97.5,
                        "health_index": 82,
                        "stress_index": 23,
                        "sleep_quality": 85,
                        "sleep_duration": 460
                    }
                }
                
                response = requests.post(f"{BASE_URL}/api/devices/upload_data", headers=device_headers, json=health_data)
                print_response(response, "上传健康数据")
                
                if response.status_code == 200:
                    print(f"{Colors.OKGREEN}✓ 健康数据上传成功{Colors.ENDC}")
                else:
                    print(f"{Colors.FAIL}✗ 健康数据上传失败{Colors.ENDC}")
            else:
                print(f"{Colors.FAIL}✗ 设备认证失败，未获取到设备令牌{Colors.ENDC}")
        else:
            print(f"{Colors.FAIL}✗ 设备认证失败{Colors.ENDC}")
        
        # 测试解绑设备
        unbind_data = {
            "device_id": test_device_id
        }
        
        response = requests.post(f"{BASE_URL}/api/devices/unbind", headers=headers, json=unbind_data)
        print_response(response, "解绑设备")
        
        if response.status_code == 200:
            print(f"{Colors.OKGREEN}✓ 设备解绑成功{Colors.ENDC}")
        else:
            print(f"{Colors.FAIL}✗ 设备解绑失败{Colors.ENDC}")
            # 强制重置设备状态
            reset_device_status(test_device_id)
        
    except Exception as e:
        print(f"{Colors.FAIL}测试过程中发生错误: {e}{Colors.ENDC}")
    finally:
        # 确保设备被重置
        reset_device_status(test_device_id)
    
    # 测试总结
    print(f"\n{Colors.BOLD}{Colors.HEADER}测试完成!{Colors.ENDC}")

if __name__ == "__main__":
    main() 