#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""主应用入口文件"""

from flask import Flask, jsonify
from flask_cors import CORS

from backend.config import APP_CONFIG, DB_CONFIG
from backend.routes.users import users_bp
from backend.routes.workouts import workouts_bp
from backend.routes.physical import physical_bp
from backend.utils.db import get_db_connection

# 创建应用实例
app = Flask(__name__)
app.config['SECRET_KEY'] = APP_CONFIG['SECRET_KEY']

# 启用CORS
CORS(app, supports_credentials=True, origins="*")

# 注册蓝图
app.register_blueprint(users_bp)
app.register_blueprint(workouts_bp)
app.register_blueprint(physical_bp)


# 健康检查
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok', 'message': '服务运行正常'})


# 测试数据库连接
@app.route('/test/db', methods=['GET'])
def test_db():
    conn = get_db_connection()
    if conn:
        conn.close()
        return jsonify({'status': 'ok', 'message': '数据库连接成功'})
    else:
        return jsonify({'status': 'error', 'message': '数据库连接失败'})


# 错误处理
@app.errorhandler(404)
def not_found(error):
    return jsonify({'code': 404, 'message': '接口不存在'}), 404


@app.errorhandler(500)
def internal_error(error):
    return jsonify({'code': 500, 'message': '服务器内部错误'}), 500


if __name__ == '__main__':
    print("=" * 50)
    print("🏃 运动小程序后端服务")
    print("=" * 50)
    print(f"服务器地址: http://{APP_CONFIG['HOST']}:{APP_CONFIG['PORT']}")
    print(f"数据库: {DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['database']}")
    print("API接口:")
    print("  POST /api/users/register - 用户注册")
    print("  POST /api/users/login - 用户登录")
    print("  GET  /api/users/all/list - 获取用户信息")
    print("  PUT  /api/users/update - 更新用户信息")
    print("  GET  /api/user/running_records - 获取跑步记录")
    print("  POST /api/user/upload_workout - 上传运动记录")
    print("  GET  /api/physical/stats - 获取体能数据")
    print("  GET  /health - 健康检查")
    print("  GET  /test/db - 测试数据库连接")
    print("=" * 50)

    app.run(
        host=APP_CONFIG['HOST'],
        port=APP_CONFIG['PORT'],
        debug=APP_CONFIG['DEBUG'],
        threaded=APP_CONFIG['THREADED']
    ) 