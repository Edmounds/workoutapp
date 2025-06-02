#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""数据库连接工具"""

import pymysql
from backend.config import DB_CONFIG, logger


def get_db_connection():
    """获取数据库连接"""
    try:
        connection = pymysql.connect(**DB_CONFIG)
        return connection
    except Exception as e:
        logger.error(f"数据库连接失败: {e}")
        return None 