#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""认证中间件"""

from functools import wraps
import jwt
from flask import request, jsonify
from backend.config import APP_CONFIG


def token_required(f):
    """JWT令牌验证装饰器"""

    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'code': 401, 'message': '缺少认证令牌'}), 401

        try:
            if token.startswith('Bearer '):
                token = token[7:]
            data = jwt.decode(token, APP_CONFIG['SECRET_KEY'], algorithms=['HS256'])
            current_user_id = data['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'code': 401, 'message': '令牌已过期'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'code': 401, 'message': '无效令牌'}), 401

        return f(current_user_id, *args, **kwargs)

    return decorated 