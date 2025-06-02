# 🏃 运动小程序后端服务

基于 Flask 的运动小程序后端 API 服务，提供用户认证、运动数据管理等功能。

## 🚀 快速开始

### 环境要求

- Python 3.7+
- MySQL 5.7+ 或 8.0+
- pip (Python包管理器)

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <项目地址>
   cd <项目目录>
   ```

2. **自动启动（推荐）**
   ```bash
   python start_server.py
   ```
   
   启动脚本会自动执行以下操作：
   - 检查 Python 版本
   - 安装依赖包
   - 创建/检查数据库
   - 导入数据库结构
   - 启动 Flask 服务

3. **手动启动**
   ```bash
   # 安装依赖
   pip install -r requirements.txt
   
   # 创建数据库（MySQL命令行）
   mysql -u root -p
   CREATE DATABASE workout_app CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
   
   # 导入数据库结构
   mysql -u root -p workout_app < workout_app.sql
   
   # 启动服务
   python server.py
   ```

### 数据库配置

默认数据库配置（在 `server.py` 中）：
```python
DB_CONFIG = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': 'root',
    'database': 'workout_app',
    'charset': 'utf8mb4'
}
```

如需修改数据库配置，请编辑 `server.py` 文件中的 `DB_CONFIG` 字典。

## 📋 API 接口文档

### 基础信息

- **服务地址**: `http://localhost:5000`
- **认证方式**: JWT Bearer Token
- **数据格式**: JSON

### 公开接口（无需认证）

#### 1. 健康检查
```
GET /health
```
**响应**:
```json
{
  "status": "ok",
  "message": "服务运行正常"
}
```

#### 2. 数据库连接测试
```
GET /test/db
```

#### 3. 用户注册
```
POST /api/users/register
```
**请求体**:
```json
{
  "name": "username",
  "password": "password123",
  "nickname": "用户昵称"
}
```

#### 4. 用户登录
```
POST /api/users/login
```
**请求体**:
```json
{
  "name": "username",
  "password": "password123"
}
```

**响应**:
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "id": 1,
    "username": "username",
    "nickname": "用户昵称",
    "level": "业余跑者",
    "token": "jwt_token_here"
  }
}
```

### 需要认证的接口

**请求头**: `Authorization: Bearer <token>`

#### 5. 获取用户完整信息
```
GET /api/users/all/list
```

**响应**:
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "user_info": {
      "id": 1,
      "username": "username",
      "total_workouts": 10,
      "total_duration": 300,
      "total_distance": 25.5
    },
    "workout_records": {
      "total_count": 10,
      "total_hours": 5.0,
      "total_km": 25.5
    }
  }
}
```

#### 6. 获取跑步记录
```
GET /api/user/running_records
```

#### 7. 上传运动记录
```
POST /api/user/upload_workout
```
**请求体**:
```json
{
  "workout_type": "跑步",
  "start_time": "2024-01-01 08:00:00",
  "duration": 1800,
  "distance": 5000,
  "avg_pace": 360,
  "calories": 300,
  "avg_heart_rate": 150,
  "max_heart_rate": 170,
  "notes": "晨跑记录"
}
```

#### 8. 获取体能数据
```
GET /api/physical/stats
```

## 🧪 测试

运行自动化测试：
```bash
python test_apis.py
```

测试包括：
- 健康检查
- 数据库连接
- 用户注册/登录
- 获取用户信息
- 跑步记录管理
- 体能数据获取

## 📁 项目结构

```
├── server.py              # 主服务文件
├── start_server.py        # 启动脚本
├── test_apis.py          # API测试脚本
├── requirements.txt       # Python依赖
├── workout_app.sql       # 数据库结构文件
└── README_Backend.md     # 后端文档
```

## 🔧 技术栈

- **Web框架**: Flask 2.0.1
- **数据库**: MySQL 8.0+
- **数据库驱动**: PyMySQL
- **认证**: JWT (PyJWT)
- **跨域支持**: Flask-CORS
- **密码加密**: SHA-256

## 🛠️ 开发说明

### 添加新的API接口

1. 在 `server.py` 中添加路由函数
2. 使用 `@token_required` 装饰器（如果需要认证）
3. 在 `test_apis.py` 中添加对应测试
4. 更新 API 文档

### 数据库操作

```python
def example_db_operation():
    conn = get_db_connection()
    if not conn:
        return jsonify({'code': 500, 'message': '数据库连接失败'})
    
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    result = cursor.fetchone()
    
    cursor.close()
    conn.close()
    
    return jsonify({'code': 200, 'data': result})
```

### 错误处理

- 使用 try-catch 包装所有数据库操作
- 记录详细错误日志
- 返回统一的错误响应格式

## ⚠️ 注意事项

1. **安全性**: 
   - 生产环境请修改 JWT 密钥
   - 使用更强的密码加密算法
   - 启用 HTTPS

2. **性能**:
   - 生产环境使用连接池
   - 添加缓存机制
   - 使用专业的 WSGI 服务器（如 Gunicorn）

3. **数据库**:
   - 定期备份数据
   - 监控数据库性能
   - 考虑读写分离

## 📞 支持

如遇问题，请检查：
1. MySQL 服务是否正常运行
2. 数据库配置是否正确
3. Python 依赖是否完整安装
4. 防火墙是否阻止端口 5000

## �� 许可证

MIT License 