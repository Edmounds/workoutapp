#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import secrets
import string

def generate_secret_key(length=64):
    """生成安全的随机密钥"""
    alphabet = string.ascii_letters + string.digits + "!@#$%^&*()_+-="
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def main():
    print("🔐 SECRET_KEY 生成器")
    print("=" * 50)
    
    # 生成不同长度的密钥
    keys = {
        32: generate_secret_key(32),
        64: generate_secret_key(64),
        128: generate_secret_key(128)
    }
    
    print("生成的安全密钥：")
    print()
    
    for length, key in keys.items():
        print(f"长度 {length} 位:")
        print(f"  {key}")
        print()
    
    print("推荐使用 64 位长度的密钥")
    print()
    print("使用方法：")
    print("1. 开发环境：直接替换 server.py 中的默认密钥")
    print("2. 生产环境：设置环境变量")
    print("   Windows: set FLASK_SECRET_KEY=your_secret_key_here")
    print("   Linux/Mac: export FLASK_SECRET_KEY=your_secret_key_here")
    print()
    print("⚠️  重要：密钥更换后，所有现有的JWT token都会失效")

if __name__ == '__main__':
    main() 