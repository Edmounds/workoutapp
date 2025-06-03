#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
测试MongoDB连接
使用data_create.py中的test_connections函数
"""

from data_create import test_connections

if __name__ == "__main__":
    print("=== 🔍 测试MongoDB连接 ===")
    test_connections()
    print("=== 测试完成 ===") 