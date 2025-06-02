#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""认证相关工具"""

import hashlib
import jwt
import datetime
from backend.config import APP_CONFIG


def hash_password(password):
    """密码哈希"""
    return hashlib.sha256(password.encode()).hexdigest()


def generate_token(user_id):
    """生成JWT令牌"""
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7)
    }
    return jwt.encode(payload, APP_CONFIG['SECRET_KEY'], algorithm='HS256') 