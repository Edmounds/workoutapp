@echo off
chcp 65001 >nul
title 运动小程序后端服务

echo ========================================
echo 🏃 运动小程序后端服务启动器
echo ========================================
echo.

echo 正在启动服务...
python start_server.py

echo.
echo 按任意键退出...
pause >nul 