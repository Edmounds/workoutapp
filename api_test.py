#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests
import json
import unittest
import pymysql
from colorama import Fore, Style, init

# 初始化colorama
init()

# 服务器配置
API_BASE_URL = "http://localhost:5000"

# 数据库配置
DB_CONFIG = {
    'host': '113.45.220.0',
    'port': 3306,
    'user': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app',
    'charset': 'utf8mb4',
    'autocommit': True
}


class APIDocConsistencyTest(unittest.TestCase):
    """测试API实现是否与API文档一致的测试类"""

    def setUp(self):
        """测试前的设置"""
        self.token = None
        # 先登录获取token
        self.login()

    def login(self):
        """登录并获取token"""
        url = f"{API_BASE_URL}/api/users/login"
        login_data = {
            "name": "cxyyy",  # 使用已存在的用户
            "password": "123456"
        }
        response = requests.post(url, json=login_data)
        result = response.json()
        
        if result['code'] == 200:
            self.token = result['data']['token']
            print(f"{Fore.GREEN}登录成功，获取到token{Style.RESET_ALL}")
        else:
            print(f"{Fore.RED}登录失败: {result['message']}{Style.RESET_ALL}")

    def test_login_api(self):
        """测试登录API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 POST /api/users/login{Style.RESET_ALL}")
        
        url = f"{API_BASE_URL}/api/users/login"
        login_data = {
            "name": "cxyyy",
            "password": "123456"
        }
        
        # 发送请求
        response = requests.post(url, json=login_data)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        self.assertIn('data', result)
        
        # 检查登录成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '登录成功')
        
        # 检查返回的数据字段
        data = result['data']
        self.assertIn('id', data)
        self.assertIn('username', data)
        self.assertIn('level', data)
        self.assertIn('token', data)
        
        print(f"{Fore.GREEN}登录API测试通过{Style.RESET_ALL}")

    def test_get_user_info(self):
        """测试获取用户信息API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 GET /api/users/all/list{Style.RESET_ALL}")
        
        # 确保已登录
        if not self.token:
            self.skipTest("未获取到token，跳过测试")
            
        url = f"{API_BASE_URL}/api/users/all/list"
        headers = {
            'Authorization': f'Bearer {self.token}'
        }
        
        # 发送请求
        response = requests.get(url, headers=headers)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        self.assertIn('data', result)
        
        # 检查请求成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '获取成功')
        
        # 检查返回的数据结构
        data = result['data']
        self.assertIn('user_info', data)
        self.assertIn('workout_records', data)
        
        user_info = data['user_info']
        self.assertIn('id', user_info)
        self.assertIn('username', user_info)
        self.assertIn('level', user_info)
        
        workout_records = data['workout_records']
        self.assertIn('total_count', workout_records)
        self.assertIn('total_hours', workout_records)
        self.assertIn('total_km', workout_records)
        
        print(f"{Fore.GREEN}获取用户信息API测试通过{Style.RESET_ALL}")

    def test_get_running_records(self):
        """测试获取跑步记录API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 GET /api/user/running_records{Style.RESET_ALL}")
        
        # 确保已登录
        if not self.token:
            self.skipTest("未获取到token，跳过测试")
            
        url = f"{API_BASE_URL}/api/user/running_records"
        headers = {
            'Authorization': f'Bearer {self.token}'
        }
        
        # 发送请求
        response = requests.get(url, headers=headers)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        self.assertIn('data', result)
        
        # 检查请求成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '获取成功')
        
        # 检查返回的数据结构
        data = result['data']
        self.assertTrue(isinstance(data, list))
        
        if len(data) > 0:
            record = data[0]
            self.assertIn('id', record)
            self.assertIn('workout_type', record)
            self.assertIn('start_time', record)
            self.assertIn('duration', record)
            self.assertIn('distance', record)
            
        print(f"{Fore.GREEN}获取跑步记录API测试通过{Style.RESET_ALL}")

    def test_upload_workout(self):
        """测试上传运动数据API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 POST /api/user/upload_workout{Style.RESET_ALL}")
        
        # 确保已登录
        if not self.token:
            self.skipTest("未获取到token，跳过测试")
            
        url = f"{API_BASE_URL}/api/user/upload_workout"
        headers = {
            'Authorization': f'Bearer {self.token}',
            'Content-Type': 'application/json'
        }
        
        # 测试数据
        workout_data = {
            "workout_type": "跑步",
            "start_time": "2025-06-05T08:30:00",
            "duration": 1800,  # 30分钟
            "distance": 5000,  # 5公里
            "avg_pace": 360,   # 6分钟/公里
            "calories": 350,
            "avg_heart_rate": 145,
            "max_heart_rate": 165,
            "notes": "测试上传的运动记录"
        }
        
        # 发送请求
        response = requests.post(url, headers=headers, json=workout_data)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        
        # 检查请求成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '运动记录上传成功')
        
        print(f"{Fore.GREEN}上传运动数据API测试通过{Style.RESET_ALL}")
        
        # 测试数据库是否正确保存了数据
        self._verify_workout_in_database(workout_data)

    def test_get_physical_stats(self):
        """测试获取体能数据API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 GET /api/physical/stats{Style.RESET_ALL}")
        
        # 确保已登录
        if not self.token:
            self.skipTest("未获取到token，跳过测试")
            
        url = f"{API_BASE_URL}/api/physical/stats"
        headers = {
            'Authorization': f'Bearer {self.token}'
        }
        
        # 发送请求
        response = requests.get(url, headers=headers)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        self.assertIn('data', result)
        
        # 检查请求成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '获取成功')
        
        # 检查返回的数据结构
        data = result['data']
        self.assertIn('avg_heart_rate', data)
        self.assertIn('max_heart_rate', data)
        self.assertIn('current_heart_rate', data)
        self.assertIn('resting_heart_rate', data)
        self.assertIn('health_index', data)
        self.assertIn('sleep_quality', data)
        
        print(f"{Fore.GREEN}获取体能数据API测试通过{Style.RESET_ALL}")

    def test_get_nutrition_tips(self):
        """测试获取营养建议API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 GET /api/nutrition/tips{Style.RESET_ALL}")
        
        url = f"{API_BASE_URL}/api/nutrition/tips"
        
        # 发送请求
        response = requests.get(url)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        self.assertIn('data', result)
        
        # 检查请求成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '获取成功')
        
        # 检查返回的数据结构
        data = result['data']
        self.assertTrue(isinstance(data, dict))
        
        # 检查是否有营养建议分类
        for category, tips in data.items():
            self.assertTrue(isinstance(tips, list))
            if len(tips) > 0:
                tip = tips[0]
                self.assertIn('tip', tip)
                self.assertIn('category', tip)
                self.assertIn('importance', tip)
        
        print(f"{Fore.GREEN}获取营养建议API测试通过{Style.RESET_ALL}")

    def test_update_user_info(self):
        """测试更新用户信息API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 PUT /api/users/update{Style.RESET_ALL}")
        
        # 确保已登录
        if not self.token:
            self.skipTest("未获取到token，跳过测试")
            
        url = f"{API_BASE_URL}/api/users/update"
        headers = {
            'Authorization': f'Bearer {self.token}',
            'Content-Type': 'application/json'
        }
        
        # 测试数据
        update_data = {
            "gender": 1,  # 男性
            "age": 25,
            "height": 175.5,
            "weight": 70.2
        }
        
        # 发送请求
        response = requests.put(url, headers=headers, json=update_data)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        
        # 检查请求成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '用户信息更新成功')
        
        print(f"{Fore.GREEN}更新用户信息API测试通过{Style.RESET_ALL}")
        
        # 验证数据库是否更新
        self._verify_user_info_updated(update_data)

    def test_get_ai_advice(self):
        """测试获取AI建议API是否与文档一致"""
        print(f"\n{Fore.CYAN}测试 GET /api/ai/advice{Style.RESET_ALL}")
        
        # 确保已登录
        if not self.token:
            self.skipTest("未获取到token，跳过测试")
            
        url = f"{API_BASE_URL}/api/ai/advice"
        headers = {
            'Authorization': f'Bearer {self.token}'
        }
        
        # 发送请求
        response = requests.get(url, headers=headers)
        result = response.json()
        
        # 检查状态码
        self.assertEqual(response.status_code, 200)
        
        # 检查响应格式是否与文档一致
        self.assertIn('code', result)
        self.assertIn('message', result)
        self.assertIn('data', result)
        
        # 检查请求成功
        self.assertEqual(result['code'], 200)
        self.assertEqual(result['message'], '获取成功')
        
        # 检查返回的数据结构
        data = result['data']
        self.assertTrue(isinstance(data, list))
        
        if len(data) > 0:
            advice = data[0]
            self.assertIn('advice_content', advice)
            self.assertIn('category', advice)
            self.assertIn('created_at', advice)
        
        print(f"{Fore.GREEN}获取AI建议API测试通过{Style.RESET_ALL}")

    def _verify_workout_in_database(self, workout_data):
        """验证运动记录是否正确保存到数据库"""
        print(f"{Fore.YELLOW}检查数据库中的运动记录...{Style.RESET_ALL}")
        
        try:
            conn = pymysql.connect(**DB_CONFIG)
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            
            # 查询最新的运动记录
            cursor.execute("""
                SELECT * FROM running_records 
                WHERE user_id = (
                    SELECT id FROM users WHERE username = 'cxyyy'
                )
                ORDER BY id DESC LIMIT 1
            """)
            
            record = cursor.fetchone()
            
            if record:
                # 验证关键字段
                self.assertEqual(record['workout_type'], workout_data['workout_type'])
                self.assertEqual(record['duration'], workout_data['duration'])
                self.assertEqual(float(record['distance']), float(workout_data['distance']))
                self.assertEqual(record['avg_pace'], workout_data['avg_pace'])
                self.assertEqual(record['avg_heart_rate'], workout_data['avg_heart_rate'])
                self.assertEqual(record['max_heart_rate'], workout_data['max_heart_rate'])
                self.assertEqual(record['notes'], workout_data['notes'])
                
                print(f"{Fore.GREEN}数据库验证成功：运动记录已正确保存{Style.RESET_ALL}")
            else:
                print(f"{Fore.RED}数据库验证失败：未找到运动记录{Style.RESET_ALL}")
                
            cursor.close()
            conn.close()
            
        except Exception as e:
            print(f"{Fore.RED}数据库连接错误: {str(e)}{Style.RESET_ALL}")

    def _verify_user_info_updated(self, update_data):
        """验证用户信息是否正确更新到数据库"""
        print(f"{Fore.YELLOW}检查数据库中的用户信息...{Style.RESET_ALL}")
        
        try:
            conn = pymysql.connect(**DB_CONFIG)
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            
            # 查询用户信息
            cursor.execute("""
                SELECT * FROM users WHERE username = 'cxyyy'
            """)
            
            user = cursor.fetchone()
            
            if user:
                # 验证关键字段
                self.assertEqual(user['gender'], update_data['gender'])
                self.assertEqual(user['age'], update_data['age'])
                self.assertEqual(float(user['height']), update_data['height'])
                self.assertEqual(float(user['weight']), update_data['weight'])
                
                print(f"{Fore.GREEN}数据库验证成功：用户信息已正确更新{Style.RESET_ALL}")
            else:
                print(f"{Fore.RED}数据库验证失败：未找到用户{Style.RESET_ALL}")
                
            cursor.close()
            conn.close()
            
        except Exception as e:
            print(f"{Fore.RED}数据库连接错误: {str(e)}{Style.RESET_ALL}")


def print_summary(result):
    """打印测试结果汇总"""
    print(f"{Fore.CYAN}{'=' * 60}")
    print(f"API测试汇总报告")
    print(f"{'-' * 60}")
    print(f"测试总数: {result.testsRun}")
    print(f"成功: {Fore.GREEN}{result.testsRun - len(result.errors) - len(result.failures)}{Fore.CYAN}")
    print(f"失败: {Fore.RED}{len(result.failures)}{Fore.CYAN}")
    print(f"错误: {Fore.RED}{len(result.errors)}{Fore.CYAN}")
    print(f"{'=' * 60}{Style.RESET_ALL}")


if __name__ == "__main__":
    # 创建测试套件
    loader = unittest.TestLoader()
    suite = loader.loadTestsFromTestCase(APIDocConsistencyTest)
    
    # 运行测试
    print(f"\n{Fore.YELLOW}开始运行API测试...{Style.RESET_ALL}")
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    
    # 打印汇总信息
    print_summary(result)
    
    # 退出码
    exit(0 if result.wasSuccessful() else 1) 