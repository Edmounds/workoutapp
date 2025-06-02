# 运动应用 API 文档

## 概述

这是一个基于Flask的运动数据管理后端系统，专为微信小程序设计，支持用户注册登录、运动记录管理、身体数据统计等功能。

## 服务器信息

- **服务器地址**: localhost (本地部署)
- **端口**: 5000
- **Base URL**: `http://localhost:5000`

## 数据库表结构

### 1. users - 用户表
- `id`: 用户ID（主键）
- `username`: 用户名
- `password`: 加密密码
- `email`: 邮箱
- `gender`: 性别（0:未知, 1:男, 2:女）
- `age`: 年龄
- `height`: 身高(cm)
- `weight`: 体重(kg)
- `level`: 跑步水平
- `total_workouts`: 总运动次数
- `total_duration`: 总运动时长(分钟)
- `total_distance`: 总运动距离(km)

### 2. running_records - 运动记录表
- `id`: 记录ID（主键）
- `user_id`: 用户ID
- `workout_type`: 训练类型
- `start_time`: 开始时间
- `end_time`: 结束时间
- `duration`: 持续时间(秒)
- `distance`: 距离(米)
- `avg_pace`: 平均配速(秒/公里)
- `calories`: 消耗卡路里

### 3. physical_stats - 身体数据表
- `id`: 记录ID（主键）
- `user_id`: 用户ID
- `date`: 记录日期
- `avg_heart_rate`: 平均心率
- `health_index`: 健康指数(0-100)
- `stress_index`: 压力指数(0-100)
- `sleep_quality`: 睡眠质量分数

## API 接口

### 🧪 测试接口

#### 1. 服务器健康检查
```http
GET /api/health
```

**响应示例:**
```json
{
  "code": 200,
  "message": "服务器运行正常",
  "timestamp": "2024-01-01 12:00:00",
  "version": "1.0.0"
}
```

#### 2. 简单测试
```http
GET /api/test
```

#### 3. 数据库连接测试
```http
GET /api/test/db
```

### 👤 用户相关接口

#### 1. 用户注册
```http
POST /api/users/register
Content-Type: application/json
```

**请求参数:**
```json
{
  "name": "username",
  "password": "password123",
  "nickname": "昵称(可选)"
}
```

**响应示例:**
```json
{
  "code": 201,
  "message": "用户注册成功",
  "data": {
    "id": 1,
    "username": "username",
    "created_at": "2024-01-01 12:00:00"
  }
}
```

#### 2. 用户登录
```http
POST /api/users/login
Content-Type: application/json
```

**请求参数:**
```json
{
  "name": "username",
  "password": "password123"
}
```

**响应示例:**
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "id": 1,
    "name": "username",
    "gender": 1,
    "age": 25,
    "height": 175.0,
    "weight": 70.0,
    "level": "intermediate",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "token_expire": 3600
  }
}
```

#### 3. 获取用户信息
```http
GET /api/users/all/list
Authorization: Bearer <token>
```

**响应示例:**
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "id": 1,
    "name": "username",
    "gender": 1,
    "vital_stats": {
      "age": 25,
      "height": 175.0,
      "weight": 70.0
    },
    "level": 2,
    "title": "中级跑者",
    "next_level_require": 50.0,
    "workout_records": {
      "total_count": 15,
      "total_hours": 12.5,
      "total_km": 125.5
    }
  }
}
```

### 🏃 运动记录接口

#### 1. 上传运动数据
```http
POST /api/workout/upload
Authorization: Bearer <token>
Content-Type: application/json
```

**请求参数:**
```json
{
  "workout_type": "running",
  "start_time": "2024-01-01T08:00:00",
  "end_time": "2024-01-01T09:00:00",
  "duration": 3600,
  "distance": 10.5,
  "avg_pace": 5.7,
  "best_pace": 5.2,
  "avg_heart_rate": 150,
  "max_heart_rate": 180,
  "calories": 500,
  "weather": "晴朗",
  "temperature": 22.5,
  "notes": "感觉不错"
}
```

**响应示例:**
```json
{
  "code": 200,
  "message": "运动数据上传成功",
  "data": {
    "id": 123,
    "workout_type": "running",
    "created_at": "2024-01-01T08:00:00Z"
  }
}
```

#### 2. 获取运动记录
```http
GET /api/user/running_records
Authorization: Bearer <token>
```

**响应示例:**
```json
{
  "code": 200,
  "data": [
    {
      "id": 123,
      "workout_type": "running",
      "start_time": "2024-01-01T08:00:00Z",
      "end_time": "2024-01-01T09:00:00Z",
      "duration": 3600,
      "distance": 10.5,
      "avg_pace": "05:42",
      "calories": 500,
      "weather": "晴朗",
      "temperature": 22.5
    }
  ]
}
```

#### 3. 运动数据统计
```http
GET /api/motion/data/statistics?period=week
Authorization: Bearer <token>
```

**参数:**
- `period`: 统计周期（week/month/year）

**响应示例:**
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "time_period": {
      "start_time": "2024-01-01",
      "end_time": "2024-01-07"
    },
    "statistics": {
      "motion_times": {
        "total": 5,
        "weekly_avg": 5.0
      },
      "motion_duration": {
        "total": "300分钟",
        "weekly_avg": "300.00分钟"
      },
      "motion_distance": {
        "total": "50.0公里",
        "weekly_avg": "50.00公里"
      }
    }
  }
}
```

### 📊 身体数据接口

#### 1. 获取身体数据统计
```http
GET /api/physical/stats
Authorization: Bearer <token>
```

**响应示例:**
```json
{
  "code": 200,
  "message": "获取成功",
  "data": {
    "heart_rate": {
      "current": 75,
      "avg": 72,
      "resting": 60,
      "max": 185
    },
    "step_rate": {
      "current": 180,
      "avg": 175
    },
    "blood_oxygen": 98.5,
    "pace": "05:30",
    "health_index": 85,
    "stress_index": 25,
    "sleep": {
      "quality": 82,
      "duration": 480
    },
    "aerobic_capacity": 78,
    "weekly_distance": 25.5,
    "last_update": "2024-01-01"
  }
}
```

#### 2. 更新身体数据
```http
POST /api/physical/stats
Authorization: Bearer <token>
Content-Type: application/json
```

**请求参数:**
```json
{
  "avg_heart_rate": 72,
  "current_heart_rate": 75,
  "resting_heart_rate": 60,
  "max_heart_rate": 185,
  "current_step_rate": 180,
  "avg_step_rate": 175,
  "avg_blood_oxygen": 98.5,
  "current_pace": "05:30",
  "health_index": 85,
  "stress_index": 25,
  "sleep_quality": 82,
  "sleep_duration": 480,
  "aerobic_capacity": 78,
  "weekly_distance": 25.5
}
```

## 🔐 认证说明

### JWT Token
- 所有需要认证的接口都需要在请求头中携带 `Authorization: Bearer <token>`
- Token 有效期为1小时
- Token 包含用户ID信息

### 错误处理
所有接口都遵循统一的错误格式：

```json
{
  "code": 400,
  "message": "错误描述",
  "timestamp": "2024-01-01 12:00:00"
}
```

**常见错误码:**
- `200`: 成功
- `201`: 创建成功
- `400`: 请求参数错误
- `401`: 未授权/Token无效
- `404`: 资源不存在
- `500`: 服务器内部错误

## 🚀 部署说明

### 1. 环境要求
- Python 3.7+
- MySQL 8.0+
- 4GB+ RAM

### 2. 安装依赖
```bash
pip3 install flask pymysql pyjwt werkzeug flask-cors
```

### 3. 数据库配置
```bash
# 连接MySQL (本地数据库)
mysql -h localhost -u cxr -p

# 创建数据库
CREATE DATABASE workout_app;

# 导入表结构
mysql -u cxr -p workout_app < workout_app.sql
```

### 4. 启动服务
```bash
python3 server.py
```

## 📝 前端集成说明

### 小程序配置
在小程序的`pages/mine/mine.js`中，API调用示例：

```javascript
// 用户登录
wx.request({
  url: 'http://localhost:5000/api/users/login',
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  data: {
    name: username,
    password: password
  },
  success: (res) => {
    if (res.data.code === 200) {
      // 保存token
      wx.setStorageSync('token', res.data.data.token);
      // 保存用户信息
      wx.setStorageSync('userInfo', res.data.data);
    }
  }
});

// 获取用户信息
wx.request({
  url: 'http://localhost:5000/api/users/all/list',
  method: 'GET',
  header: {
    'Authorization': `Bearer ${wx.getStorageSync('token')}`
  },
  success: (res) => {
    if (res.data.code === 200) {
      // 更新页面数据
      this.setData({
        userSportData: res.data.data.workout_records
      });
    }
  }
});
```

## 🔧 数据格式说明

### 时间格式
- 前端传输: ISO 8601 格式 (`2024-01-01T08:00:00`)
- 数据库存储: DATETIME 类型
- 响应格式: ISO 8601 格式 + Z 后缀

### 距离单位
- 前端显示: 公里(km)
- 数据库存储: 米(m)
- API传输: 根据接口而定

### 配速格式
- 显示格式: `MM:SS` (如 `05:30`)
- 数据库存储: 秒/公里 (如 `330`)

### 持续时间
- 显示格式: 分钟或小时
- 数据库存储: 秒或分钟（根据表而定）

## 📞 技术支持

如需技术支持，请检查：
1. 服务器状态: `http://localhost:5000/api/health`
2. 数据库连接: `http://localhost:5000/api/test/db`
3. 日志文件: `workout_app.log`
4. 网络连通性

---
**更新时间**: 2024-01-01  
**版本**: v1.0.0 