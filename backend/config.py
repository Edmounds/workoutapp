import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 数据库配置
DB_CONFIG = {
    'host': os.getenv('DB_HOST', 'localhost'),
    'user': os.getenv('DB_USER', 'root'),
    'password': os.getenv('DB_PASSWORD', ''),
    'port': int(os.getenv('DB_PORT', 3306)),
    'charset': 'utf8mb4',
    'database': os.getenv('DB_NAME', 'workout_app'),
    'connect_timeout': 10,
    'pool_size': 5,
    'pool_name': 'workout_pool',
    'autocommit': True,
    'use_pure': True,
    'get_warnings': True,
    'raise_on_warnings': True,
    'connection_timeout': 10,
    'pool_reset_session': True
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