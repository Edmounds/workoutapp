#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""辅助函数"""

import decimal
import datetime


def decimal_to_float(obj):
    """将Decimal类型转换为float类型
    
    Args:
        obj: 单个对象或包含Decimal的字典、列表
        
    Returns:
        转换后的对象
    """
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    elif isinstance(obj, dict):
        return {k: decimal_to_float(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [decimal_to_float(i) for i in obj]
    elif isinstance(obj, datetime.datetime):
        return obj.strftime('%Y-%m-%d %H:%M:%S')
    elif isinstance(obj, datetime.date):
        return obj.strftime('%Y-%m-%d')
    else:
        return obj


def format_pace(seconds_per_km):
    """将配速(秒/公里)格式化为分秒形式
    
    Args:
        seconds_per_km: 配速(秒/公里)
        
    Returns:
        str: 格式化后的配速 (如 "5'30\"")
    """
    if not seconds_per_km:
        return "--'--\""
        
    minutes = seconds_per_km // 60
    seconds = seconds_per_km % 60
    return f"{minutes}'{seconds}\"" 