#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""配置文件"""

import logging
import os
from dotenv import load_dotenv

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 加载环境变量
load_dotenv()

# 应用配置
APP_CONFIG = {
    'SECRET_KEY': 'workout-app-secret-key-2024',
    'DEBUG': True,
    'HOST': '0.0.0.0',
    'PORT': 5000,
    'THREADED': True
}

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

# 数据库连接池配置
POOL_CONFIG = {
    'pool_name': 'workout_pool',
    'pool_size': 5,
    'pool_reset_session': True
}

# 数据库重试配置
DB_RETRY_CONFIG = {
    'max_retries': 3,
    'retry_delay': 1  # 秒
} 