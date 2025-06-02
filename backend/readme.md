# 运动应用后端系统

一个基于Flask的运动数据管理后端系统，支持用户注册登录、运动记录管理、成就系统等功能。

## 🚀 快速开始

### 服务器信息
- **服务器地址**: 113.45.220.0
- **端口**: 5000
- **访问地址**: http://113.45.220.0:5000

### 系统要求
- Python 3.7+
- MySQL 5.7+
- 4GB+ RAM
- 10GB+ 存储空间

## 📦 安装部署

### 1. 安装Python依赖
```bash
pip3 install flask pymysql pyjwt werkzeug flask-cors
```

### 2. 数据库配置
1. 连接到MySQL服务器
2. 创建数据库：`CREATE DATABASE workout_app;`
3. 执行SQL脚本：`mysql -u cxr -p workout_app < database_setup.sql`

### 3. 启动服务器
```bash
# 方法一：使用启动脚本
chmod +x start_server.sh
./start_server.sh

# 方法二：直接启动
python3 server.py
```

## 🔧 API文档

### 基础信息
- **Base URL**: `http://113.45.220.0:5000`
- **认证方式**: JWT Bearer Token
- **Content-Type**: `application/json`

### 测试接口

#### 1. 服务器健康检查
```
GET /api/health
```
**响应示例**:
```json
{
  "code": 200,
  "message": "服务器运行正常",
  "timestamp": "2024-01-01 12:00:00",
  "version": "1.0.0"
}
```

#### 2. 简单测试
```
GET /api/test
```

#### 3. 数据库连接测试
```
GET /api/test/db
```

### 用户相关接口

#### 1. 用户注册
```
POST /api/users/register
```
**请求参数**:
```json
{
  "name": "username",
  "password": "password123",
  "nickname": "昵称(可选)"
}
```

#### 2. 用户登录
```
POST /api/users/login
```
**请求参数**:
```json
{
  "name": "username",
  "password": "password123"
}
```
**响应示例**:
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "id": 1,
    "name": "username",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "token_expire": 3600
  }
}
```

#### 3. 获取用户信息
```
GET /api/users/all/list
Authorization: Bearer <token>
```

#### 4. 更新用户信息
```
PUT /api/user/update
Authorization: Bearer <token>
```

### 运动记录接口

#### 1. 上传运动数据
```
POST /api/workout/upload
Authorization: Bearer <token>
```
**请求参数**:
```json
{
  "workout_type": "running",
  "start_time": "2024-01-01T08:00:00",
  "end_time": "2024-01-01T09:00:00",
  "duration": 60,
  "distance": 10.5,
  "avg_pace": 5.7,
  "calories": 500
}
```

#### 2. 获取运动记录
```
GET /api/user/running_records
Authorization: Bearer <token>
```

#### 3. 运动数据统计
```
GET /api/motion/data/statistics?period=week
Authorization: Bearer <token>
```

### 成就系统接口

#### 1. 获取用户成就
```
GET /api/user_achievements
Authorization: Bearer <token>
```

#### 2. 健康数据分析
```
GET /api/health/data/analysis
Authorization: Bearer <token>
```

## 🗄️ 数据库结构

### 主要数据表

1. **users** - 用户信息表
2. **workouts** - 运动记录表
3. **achievements** - 成就表
4. **user_achievements** - 用户成就表
5. **health_data** - 健康数据表
6. **personal_bests** - 个人最佳记录表

### 关键字段说明

**users表**:
- `username`: 用户名（唯一）
- `password`: 加密密码
- `total_workouts`: 总运动次数
- `total_duration`: 总运动时长（小时）
- `total_distance`: 总距离（公里）

**workouts表**:
- `workout_type`: 运动类型
- `duration`: 持续时间（分钟）
- `distance`: 距离（公里）
- `avg_pace`: 平均配速（分钟/公里）
- `calories`: 消耗卡路里

## 🔐 安全特性

1. **密码加密**: 使用Werkzeug加密存储
2. **JWT认证**: 基于Token的身份验证
3. **登录保护**: 防暴力破解机制
4. **SQL注入防护**: 使用参数化查询
5. **CORS支持**: 跨域请求处理

## 📊 监控与日志

### 日志文件
- `workout_app.log`: 应用运行日志
- 包含请求记录、错误信息、数据库操作等

### 性能监控
- 数据库连接池管理
- 请求响应时间记录
- 错误率统计

## 🛠️ 故障排查

### 常见问题

1. **数据库连接失败**
   ```bash
   # 检查数据库服务状态
   systemctl status mysql
   
   # 测试连接
   mysql -h 113.45.220.0 -u cxr -p
   ```

2. **端口被占用**
   ```bash
   # 查看端口使用情况
   netstat -tlnp | grep :5000
   
   # 释放端口
   sudo fuser -k 5000/tcp
   ```

3. **权限问题**
   ```bash
   # 给脚本执行权限
   chmod +x start_server.sh
   
   # 检查文件权限
   ls -la server.py
   ```

### 日志查看
```bash
# 实时查看日志
tail -f workout_app.log

# 查看错误日志
grep "ERROR" workout_app.log

# 查看数据库相关日志
grep "数据库" workout_app.log
```

## 🔧 配置说明

### 数据库配置
在 `server.py` 中修改数据库连接配置：
```python
db_config = {
    'host': '113.45.220.0',
    'port': 3306,
    'user': 'cxr',
    'password': 'Chenqichen666',
    'database': 'workout_app',
    'charset': 'utf8mb4'
}
```

### JWT配置
```python
app.config['SECRET_KEY'] = 'your-secret-key-here'  # 生产环境请更换
```

## 📞 技术支持

如果遇到问题，请检查：
1. 服务器状态和网络连接
2. 数据库服务是否正常
3. Python依赖包是否完整
4. 日志文件中的错误信息

## 📄 更新日志

### v1.0.0 (2024-01-01)
- ✅ 基础用户系统
- ✅ 运动记录管理
- ✅ 成就系统
- ✅ JWT认证
- ✅ 数据库优化
- ✅ 错误处理机制