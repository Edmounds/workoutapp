#!/usr/bin/env python3
"""
部署脚本 - 将Flask应用部署到云服务器
"""

import os
import sys
import subprocess

def check_requirements():
    """检查部署要求"""
    print("检查部署要求...")
    
    # 检查必要文件
    required_files = ['server.py', 'requirements.txt']
    missing_files = []
    
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print(f"缺少必要文件: {missing_files}")
        return False
    
    print("✓ 所有必要文件存在")
    return True

def create_requirements():
    """创建requirements.txt文件"""
    requirements = """Flask==2.3.3
PyMySQL==1.1.0
Flask-CORS==4.0.0
PyJWT==2.8.0
Werkzeug==2.3.7
"""
    
    with open('requirements.txt', 'w') as f:
        f.write(requirements)
    
    print("✓ 已创建 requirements.txt")

def create_systemd_service():
    """创建systemd服务文件"""
    service_content = """[Unit]
Description=Workout App Flask Server
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/workout-app
Environment=PATH=/usr/bin:/usr/local/bin
ExecStart=/usr/bin/python3 /root/workout-app/server.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
"""
    
    with open('workout-app.service', 'w') as f:
        f.write(service_content)
    
    print("✓ 已创建 workout-app.service")

def create_deploy_script():
    """创建云端部署脚本"""
    deploy_script = """#!/bin/bash
# 云端部署脚本

echo "开始部署 Workout App..."

# 创建应用目录
mkdir -p /root/workout-app
cd /root/workout-app

# 安装Python3和pip
apt update
apt install -y python3 python3-pip

# 安装依赖
pip3 install -r requirements.txt

# 复制服务文件
cp workout-app.service /etc/systemd/system/

# 重新加载systemd
systemctl daemon-reload

# 启用并启动服务
systemctl enable workout-app
systemctl start workout-app

# 检查服务状态
systemctl status workout-app

echo "部署完成！"
echo "服务状态: systemctl status workout-app"
echo "查看日志: journalctl -u workout-app -f"
"""
    
    with open('deploy.sh', 'w') as f:
        f.write(deploy_script)
    
    os.chmod('deploy.sh', 0o755)
    print("✓ 已创建 deploy.sh")

def main():
    print("=== Workout App 部署工具 ===\n")
    
    if not check_requirements():
        print("创建缺少的文件...")
        create_requirements()
    
    create_systemd_service()
    create_deploy_script()
    
    print("\n=== 部署说明 ===")
    print("1. 将以下文件上传到云服务器 113.45.220.0:")
    print("   - server.py")
    print("   - requirements.txt")
    print("   - workout-app.service")
    print("   - deploy.sh")
    
    print("\n2. 在云服务器上执行:")
    print("   chmod +x deploy.sh")
    print("   ./deploy.sh")
    
    print("\n3. 管理服务:")
    print("   启动: systemctl start workout-app")
    print("   停止: systemctl stop workout-app")
    print("   重启: systemctl restart workout-app")
    print("   状态: systemctl status workout-app")
    print("   日志: journalctl -u workout-app -f")
    
    print("\n4. 防火墙设置:")
    print("   ufw allow 5000")
    
    print("\n=== 本地开发模式 ===")
    print("如果要在本地开发，请:")
    print("1. 修改小程序中的API地址为: http://localhost:5000")
    print("2. 运行: python server.py")

if __name__ == '__main__':
    main() 