#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""测试管理员API功能"""

import requests
import json
import sys
import time
from datetime import datetime, timedelta

# 配置参数
BASE_URL = "http://localhost:5000"
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin"

# 颜色打印函数
def print_success(message):
    print(f"\033[92m✓ {message}\033[0m")

def print_error(message):
    print(f"\033[91m✗ {message}\033[0m")

def print_info(message):
    print(f"\033[94mℹ {message}\033[0m")

def print_section(message):
    print(f"\n\033[95m===== {message} =====\033[0m")

# 发送请求并处理响应
def make_request(method, endpoint, data=None, token=None, params=None, files=None):
    url = f"{BASE_URL}{endpoint}"
    headers = {}
    
    if token:
        headers['Authorization'] = f"Bearer {token}"
        
    try:
        if method == "GET":
            response = requests.get(url, headers=headers, params=params)
        elif method == "POST":
            response = requests.post(url, json=data, headers=headers, files=files)
        elif method == "PUT":
            response = requests.put(url, json=data, headers=headers)
        elif method == "DELETE":
            response = requests.delete(url, headers=headers)
        else:
            print_error(f"不支持的请求方法: {method}")
            return None
            
        return response
    except requests.exceptions.RequestException as e:
        print_error(f"请求错误: {e}")
        return None

# 测试管理员登录
def test_admin_login():
    print_section("测试管理员登录")
    
    # 测试正确的用户名和密码
    data = {
        "name": ADMIN_USERNAME,
        "password": ADMIN_PASSWORD
    }
    response = make_request("POST", "/api/admin/login", data)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            token = result.get("data", {}).get("token")
            print_success("管理员登录成功")
            print_info(f"用户名: {result.get('data', {}).get('username')}")
            print_info(f"角色: {result.get('data', {}).get('role')}")
            return token
        else:
            print_error(f"登录失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return None

# 测试获取用户列表
def test_get_users(token):
    print_section("测试获取用户列表")
    
    response = make_request("GET", "/api/admin/users", token=token)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            users = result.get("data", {}).get("users", [])
            total = result.get("data", {}).get("total", 0)
            print_success(f"获取用户列表成功，共 {total} 个用户")
            if users:
                print_info("用户列表示例:")
                for i, user in enumerate(users[:3]):
                    print_info(f"  {i+1}. {user.get('username')} (ID: {user.get('id')})")
                if len(users) > 3:
                    print_info(f"  ... 共 {len(users)} 个用户")
            return users
        else:
            print_error(f"获取用户列表失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return []

# 测试系统概况
def test_dashboard_overview(token):
    print_section("测试系统概况")
    
    response = make_request("GET", "/api/admin/dashboard/overview", token=token)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            data = result.get("data", {})
            print_success("获取系统概况成功")
            print_info(f"总用户数: {data.get('total_users', 0)}")
            print_info(f"今日新增用户: {data.get('new_users_today', 0)}")
            print_info(f"今日活跃用户: {data.get('active_users_today', 0)}")
            print_info(f"总运动次数: {data.get('total_workouts', 0)}")
            print_info(f"总运动距离: {data.get('total_distance', 0)} km")
            return data
        else:
            print_error(f"获取系统概况失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return {}

# 测试用户注册统计
def test_registration_stats(token):
    print_section("测试用户注册统计")
    
    # 获取过去30天的数据
    end_date = datetime.now().strftime("%Y-%m-%d")
    start_date = (datetime.now() - timedelta(days=30)).strftime("%Y-%m-%d")
    
    params = {
        "start_date": start_date,
        "end_date": end_date,
        "interval": "day"
    }
    
    response = make_request("GET", "/api/admin/stats/registrations", token=token, params=params)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            data = result.get("data", {})
            total = data.get("total", 0)
            stats = data.get("stats", [])
            print_success(f"获取用户注册统计成功，总用户数: {total}")
            if stats:
                print_info("近期注册统计:")
                for i, stat in enumerate(stats[:5]):
                    print_info(f"  {stat.get('date')}: {stat.get('count')} 位新用户")
                if len(stats) > 5:
                    print_info(f"  ... 共 {len(stats)} 天的数据")
            return data
        else:
            print_error(f"获取用户注册统计失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return {}

# 测试运动类型分布
def test_workout_types(token):
    print_section("测试运动类型分布")
    
    response = make_request("GET", "/api/admin/stats/workouts/types", token=token)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            types = result.get("data", [])
            print_success("获取运动类型分布成功")
            if types:
                print_info("运动类型分布:")
                for type_data in types:
                    print_info(f"  {type_data.get('workout_type')}: {type_data.get('count')} 次 ({type_data.get('percentage')}%)")
            return types
        else:
            print_error(f"获取运动类型分布失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return []

# 测试用户详情
def test_user_detail(token, user_id):
    print_section(f"测试获取用户详情 (ID: {user_id})")
    
    response = make_request("GET", f"/api/admin/user/{user_id}", token=token)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            data = result.get("data", {})
            user_info = data.get("user_info", {})
            print_success("获取用户详情成功")
            print_info(f"用户名: {user_info.get('username')}")
            print_info(f"性别: {'男' if user_info.get('gender') == 1 else '女' if user_info.get('gender') == 2 else '未知'}")
            print_info(f"年龄: {user_info.get('age', '未设置')}")
            print_info(f"总运动次数: {user_info.get('total_workouts', 0)}")
            print_info(f"总运动距离: {user_info.get('total_distance', 0)} km")
            return data
        else:
            print_error(f"获取用户详情失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return {}

# 测试运动数据趋势
def test_workout_trends(token):
    print_section("测试运动数据趋势")
    
    params = {
        "period": "month",
        "count": 6,
        "metric": "distance"
    }
    
    response = make_request("GET", "/api/admin/dashboard/workout_trends", token=token, params=params)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            data = result.get("data", {})
            trend_data = data.get("data", [])
            print_success(f"获取运动数据趋势成功，指标: {data.get('metric')}")
            if trend_data:
                print_info("月度趋势:")
                for item in trend_data:
                    print_info(f"  {item.get('date')}: {item.get('value')} {'km' if data.get('metric') == 'distance' else '次' if data.get('metric') == 'workouts' else '分钟'}")
            return data
        else:
            print_error(f"获取运动数据趋势失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return {}

# 测试用户性别分布
def test_gender_distribution(token):
    print_section("测试用户性别分布")
    
    response = make_request("GET", "/api/admin/stats/users/gender_distribution", token=token)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            distribution = result.get("data", [])
            print_success("获取用户性别分布成功")
            if distribution:
                print_info("性别分布:")
                for item in distribution:
                    print_info(f"  {item.get('label')}: {item.get('count')} 人 ({item.get('percentage')}%)")
            return distribution
        else:
            print_error(f"获取用户性别分布失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return []

# 测试创建用户
def test_create_user(token):
    print_section("测试创建用户")
    
    # 生成随机用户名（避免重复）
    timestamp = int(time.time())
    username = f"test_user_{timestamp}"
    
    data = {
        "username": username,
        "password": "test12345",
        "gender": 1,
        "age": 30,
        "height": 175.0,
        "weight": 70.0,
        "email": f"{username}@example.com"
    }
    
    # 创建用户方法（通过导入API）
    import_data = {
        "file": {
            "header": ["用户名", "密码", "性别", "年龄", "身高(cm)", "体重(kg)", "邮箱"],
            "rows": [[
                username, 
                "test12345", 
                "男", 
                "30", 
                "175", 
                "70", 
                f"{username}@example.com"
            ]]
        }
    }
    
    # 模拟文件上传
    from io import StringIO
    import csv
    
    csv_content = StringIO()
    writer = csv.writer(csv_content)
    writer.writerow(["用户名", "密码", "性别", "年龄", "身高(cm)", "体重(kg)", "邮箱"])
    writer.writerow([username, "test12345", "男", "30", "175", "70", f"{username}@example.com"])
    
    csv_content.seek(0)
    files = {
        'file': (f'{username}.csv', csv_content.getvalue(), 'text/csv')
    }
    
    response = make_request("POST", "/api/admin/import/users", token=token, files=files)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            data = result.get("data", {})
            success = data.get("success", 0)
            print_success(f"创建用户成功，导入成功 {success} 条记录")
            print_info(f"用户名: {username}")
            
            # 获取用户列表，检查是否创建成功
            users = test_get_users(token)
            created_user = None
            for user in users:
                if user.get("username") == username:
                    created_user = user
                    break
            
            if created_user:
                print_success(f"已确认用户 {username} 创建成功 (ID: {created_user.get('id')})")
                return created_user
            else:
                print_error(f"未找到新创建的用户 {username}")
        else:
            print_error(f"创建用户失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return None

# 测试编辑用户
def test_update_user(token, user_id):
    print_section(f"测试编辑用户 (ID: {user_id})")
    
    data = {
        "age": 32,
        "height": 178.0,
        "weight": 72.5,
        "level": "intermediate"
    }
    
    response = make_request("PUT", f"/api/admin/user/{user_id}", token=token, data=data)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            print_success("编辑用户成功")
            print_info(f"修改内容: 年龄={data['age']}, 身高={data['height']}, 体重={data['weight']}, 等级={data['level']}")
            
            # 获取更新后的用户信息
            updated_data = test_user_detail(token, user_id)
            user_info = updated_data.get("user_info", {})
            
            # 验证更新是否成功
            success = True
            if user_info.get("age") != data["age"]:
                print_error(f"年龄更新失败: 预期 {data['age']}, 实际 {user_info.get('age')}")
                success = False
            if user_info.get("height") != data["height"]:
                print_error(f"身高更新失败: 预期 {data['height']}, 实际 {user_info.get('height')}")
                success = False
            if user_info.get("weight") != data["weight"]:
                print_error(f"体重更新失败: 预期 {data['weight']}, 实际 {user_info.get('weight')}")
                success = False
            if user_info.get("level") != data["level"]:
                print_error(f"等级更新失败: 预期 {data['level']}, 实际 {user_info.get('level')}")
                success = False
                
            if success:
                print_success("所有字段更新成功")
            
            return True
        else:
            print_error(f"编辑用户失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return False

# 测试添加体能数据
def test_add_physical_stats(token, user_id):
    print_section(f"测试添加体能数据 (用户ID: {user_id})")
    
    data = {
        "date": datetime.now().strftime("%Y-%m-%d"),
        "avg_heart_rate": 65,
        "current_heart_rate": 70,
        "resting_heart_rate": 55,
        "max_heart_rate": 150,
        "avg_blood_oxygen": 98.5,
        "health_index": 85,
        "stress_index": 25,
        "sleep_quality": 90,
        "sleep_duration": 480,
        "aerobic_capacity": 80,
        "weekly_distance": 25.5
    }
    
    response = make_request("POST", f"/api/admin/user/{user_id}/physical_stats", token=token, data=data)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            print_success("添加体能数据成功")
            print_info(f"用户ID: {user_id}, 日期: {data['date']}")
            print_info(f"健康指数: {data['health_index']}, 睡眠质量: {data['sleep_quality']}")
            return True
        else:
            print_error(f"添加体能数据失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return False

# 测试添加目标
def test_add_goal(token, user_id):
    print_section(f"测试添加进度目标 (用户ID: {user_id})")
    
    # 设置一个月后的截止日期
    deadline = (datetime.now() + timedelta(days=30)).strftime("%Y-%m-%d")
    
    data = {
        "title": "月跑量目标",
        "current_value": 15.5,
        "target_value": 50.0,
        "category": "距离",
        "deadline": deadline
    }
    
    response = make_request("POST", f"/api/admin/user/{user_id}/goals", token=token, data=data)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            print_success("添加进度目标成功")
            print_info(f"用户ID: {user_id}, 标题: {data['title']}")
            print_info(f"目标: {data['current_value']} / {data['target_value']} {data['category']}")
            print_info(f"截止日期: {data['deadline']}")
            return True
        else:
            print_error(f"添加进度目标失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return False

# 测试导出用户数据
def test_export_users(token):
    print_section("测试导出用户数据")
    
    response = make_request("GET", "/api/admin/export/users", token=token)
    
    if response and response.status_code == 200:
        content_disposition = response.headers.get('Content-Disposition', '')
        content_type = response.headers.get('Content-Type', '')
        
        # 修改检查逻辑，允许Content-Type带有字符集
        if ('text/csv' in content_type) and 'attachment' in content_disposition:
            print_success("导出用户数据成功")
            content = response.content.decode('utf-8')
            lines = content.strip().split('\n')
            print_info(f"导出文件包含 {len(lines)-1} 条用户记录")
            
            # 打印表头
            if lines:
                print_info(f"表头: {lines[0]}")
            
            # 打印前几条记录
            for i, line in enumerate(lines[1:3], 1):
                print_info(f"记录 {i}: {line}")
                
            if len(lines) > 4:
                print_info(f"... 共 {len(lines)-1} 条记录")
                
            return True
        else:
            print_error(f"响应格式不正确: Content-Type={content_type}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return False

# 测试删除用户
def test_delete_user(token, user_id):
    print_section(f"测试删除用户 (ID: {user_id})")
    
    response = make_request("DELETE", f"/api/admin/user/{user_id}", token=token)
    
    if response and response.status_code == 200:
        result = response.json()
        if result.get("code") == 200:
            print_success(f"删除用户成功 (ID: {user_id})")
            
            # 验证用户是否已删除
            verification_response = make_request("GET", f"/api/admin/user/{user_id}", token=token)
            if verification_response and verification_response.status_code == 200:
                verification_result = verification_response.json()
                if verification_result.get("code") == 404:
                    print_success("已确认用户不存在")
                    return True
                else:
                    print_error("删除操作失败: 用户仍然存在")
            else:
                print_error(f"验证请求错误: {verification_response.status_code if verification_response else 'No response'}")
        else:
            print_error(f"删除用户失败: {result.get('message')}")
    else:
        print_error(f"请求错误: {response.status_code if response else 'No response'}")
    
    return False

# 主函数
def main():
    print_info("开始测试管理员API功能")
    
    # 测试服务器是否正常运行
    response = make_request("GET", "/health")
    if not response or response.status_code != 200:
        print_error("无法连接到服务器，请确保服务器已启动")
        return
    
    print_success("服务器连接正常")
    
    # 测试管理员登录
    token = test_admin_login()
    if not token:
        print_error("管理员登录失败，无法继续测试")
        return
    
    # 测试系统概况
    test_dashboard_overview(token)
    
    # 测试用户注册统计
    test_registration_stats(token)
    
    # 测试运动类型分布
    test_workout_types(token)
    
    # 测试用户性别分布
    test_gender_distribution(token)
    
    # 测试运动数据趋势
    test_workout_trends(token)
    
    # 测试获取用户列表
    users = test_get_users(token)
    
    # 如果有用户，测试用户详情
    existing_user_id = None
    if users:
        existing_user_id = users[0].get('id')
        test_user_detail(token, existing_user_id)
        
        # 测试编辑已有用户
        test_update_user(token, existing_user_id)
        
        # 测试添加体能数据到已有用户
        test_add_physical_stats(token, existing_user_id)
        
        # 测试添加目标到已有用户
        test_add_goal(token, existing_user_id)
    
    # 测试创建新用户
    created_user = test_create_user(token)
    
    # 测试导出用户数据
    test_export_users(token)
    
    # 如果成功创建了新用户，测试删除该用户
    if created_user:
        created_user_id = created_user.get('id')
        test_delete_user(token, created_user_id)
    else:
        print_info("跳过删除用户测试，因为创建用户失败")
    
    print_section("测试完成")
    print_success("所有测试已完成")
    print_info("注意：部分测试可能因服务端配置或数据库状态而失败，请检查具体错误信息")
    print_info("如果数据库为空，某些统计相关的测试可能没有数据返回，这是正常的")

if __name__ == "__main__":
    main() 