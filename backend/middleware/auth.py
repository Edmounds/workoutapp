#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""认证中间件"""

import jwt
from functools import wraps
from flask import request, jsonify
from datetime import datetime, timedelta
from ..config import APP_CONFIG, logger


def token_required(f):
    """用户认证装饰器"""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        # 从请求头获取token
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]

        if not token:
            return jsonify({'code': 401, 'message': '缺少授权令牌'}), 401

        try:
            # 解码令牌
            data = jwt.decode(token, APP_CONFIG['SECRET_KEY'], algorithms=['HS256'])
            current_user_id = data['user_id']
            
            # 检查是否是管理员令牌
            if data.get('is_admin', False):
                return jsonify({'code': 403, 'message': '权限不足，需要用户权限'}), 403
                
            # 检查令牌是否过期
            exp = data.get('exp')
            if exp and datetime.utcnow() > datetime.utcfromtimestamp(exp):
                return jsonify({'code': 401, 'message': '令牌已过期'}), 401

        except jwt.ExpiredSignatureError:
            return jsonify({'code': 401, 'message': '令牌已过期'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'code': 401, 'message': '无效的令牌'}), 401
        except Exception as e:
            logger.error(f"令牌验证错误: {e}")
            return jsonify({'code': 401, 'message': '令牌验证失败'}), 401

        return f(current_user_id, *args, **kwargs)

    return decorated


def admin_token_required(f):
    """管理员认证装饰器"""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        # 从请求头获取token
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]

        if not token:
            return jsonify({'code': 401, 'message': '缺少授权令牌'}), 401

        try:
            # 解码令牌
            data = jwt.decode(token, APP_CONFIG['SECRET_KEY'], algorithms=['HS256'])
            current_admin_id = data['user_id']
            
            # 检查是否是管理员令牌
            if not data.get('is_admin', False):
                return jsonify({'code': 403, 'message': '权限不足，需要管理员权限'}), 403
                
            # 检查令牌是否过期
            exp = data.get('exp')
            if exp and datetime.utcnow() > datetime.utcfromtimestamp(exp):
                return jsonify({'code': 401, 'message': '令牌已过期'}), 401

        except jwt.ExpiredSignatureError:
            return jsonify({'code': 401, 'message': '令牌已过期'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'code': 401, 'message': '无效的令牌'}), 401
        except Exception as e:
            logger.error(f"令牌验证错误: {e}")
            return jsonify({'code': 401, 'message': '令牌验证失败'}), 401

        return f(current_admin_id, *args, **kwargs)

    return decorated 