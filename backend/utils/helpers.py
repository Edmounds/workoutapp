#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""辅助函数"""

import decimal


def decimal_to_float(obj):
    """转换Decimal为float"""
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    elif isinstance(obj, dict):
        return {k: decimal_to_float(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [decimal_to_float(item) for item in obj]
    return obj


def format_pace(seconds):
    """格式化配速（秒转为分钟:秒格式）"""
    minutes = int(seconds // 60)
    secs = int(seconds % 60)
    return f"{minutes}'{secs:02d}\"" 