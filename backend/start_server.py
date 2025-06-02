#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import os
import subprocess
import time
import pymysql

def check_python_version():
    """检查Python版本"""
    if sys.version_info < (3, 7):
        print("❌ Python版本过低，需要Python 3.7+")
        return False
    print(f"✅ Python版本: {sys.version}")
    return True

def install_dependencies():
    """安装依赖"""
    try:
        print("📦 安装依赖包...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ 依赖安装完成")
        return True
    except subprocess.CalledProcessError:
        print("❌ 依赖安装失败")
        return False

def check_database_connection():
    """检查数据库连接"""
    try:
        print("🔗 检查数据库连接...")
        connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='root',
            database='workout_app',
            charset='utf8mb4'
        )
        connection.close()
        print("✅ 数据库连接成功")
        return True
    except Exception as e:
        print(f"❌ 数据库连接失败: {e}")
        print("请确保:")
        print("  1. MySQL服务已启动")
        print("  2. 数据库名为: workout_app")
        print("  3. 用户名: root, 密码: root")
        print("  4. 已导入 workout_app.sql 文件")
        return False

def create_database_if_not_exists():
    """创建数据库（如果不存在）"""
    try:
        print("🗃️ 检查/创建数据库...")
        # 连接到MySQL服务器（不指定数据库）
        connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='root',
            charset='utf8mb4'
        )
        cursor = connection.cursor()
        
        # 创建数据库
        cursor.execute("CREATE DATABASE IF NOT EXISTS workout_app CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci")
        print("✅ 数据库已确保存在")
        
        cursor.close()
        connection.close()
        return True
    except Exception as e:
        print(f"❌ 创建数据库失败: {e}")
        return False

def import_sql_file():
    """导入SQL文件"""
    if not os.path.exists('workout_app.sql'):
        print("❌ 找不到 workout_app.sql 文件")
        return False
    
    try:
        print("📋 导入数据库结构...")
        with open('workout_app.sql', 'r', encoding='utf-8') as f:
            sql_content = f.read()
        
        connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='root',
            database='workout_app',
            charset='utf8mb4'
        )
        
        cursor = connection.cursor()
        
        # 分割SQL语句并执行
        sql_statements = sql_content.split(';')
        for statement in sql_statements:
            statement = statement.strip()
            if statement:
                cursor.execute(statement)
        
        connection.commit()
        cursor.close()
        connection.close()
        print("✅ 数据库结构导入成功")
        return True
    except Exception as e:
        print(f"❌ 导入数据库失败: {e}")
        return False

def start_server():
    """启动服务器"""
    try:
        print("🚀 启动Flask服务器...")
        print("按 Ctrl+C 停止服务器")
        print("-" * 50)
        
        # 启动服务器
        subprocess.call([sys.executable, "server.py"])
        
    except KeyboardInterrupt:
        print("\n👋 服务器已停止")
    except Exception as e:
        print(f"❌ 启动服务器失败: {e}")

def main():
    """主函数"""
    print("🏃 运动小程序后端服务启动器")
    print("=" * 50)
    
    # 检查Python版本
    if not check_python_version():
        return
    
    # 安装依赖
    if not install_dependencies():
        return
    
    # 创建数据库
    if not create_database_if_not_exists():
        return
    
    # 导入数据库结构
    if not import_sql_file():
        return
    
    # 检查数据库连接
    if not check_database_connection():
        return
    
    print("✅ 所有检查通过，准备启动服务器...")
    time.sleep(2)
    
    # 启动服务器
    start_server()

if __name__ == '__main__':
    main() 