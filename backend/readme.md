# 运动手环管理系统后端

## 简介

运动手环管理系统后端服务，提供用户认证、运动数据记录、体能数据统计等API接口。

## 功能特点

- 用户注册与登录
- 运动记录上传与查询
- 体能数据统计与分析
- 管理员功能：用户管理、数据统计、数据导出

## 开发环境

- Python 3.8+
- Flask 2.0+
- MySQL 8.0+

## 安装与部署

1. 克隆代码库

```bash
git clone https://github.com/yourusername/workout-app-backend.git
cd workout-app-backend
```

2. 安装依赖

```bash
pip install -r requirements.txt
```

3. 配置数据库

在 `config.py` 中配置数据库连接信息。

4. 初始化数据库

运行 `workout_app.sql` 脚本创建数据库表。
运行 `sql/admin_users.sql` 脚本创建管理员表。

5. 启动服务

```bash
python run.py
```

## API文档

详细API文档请参考 [api.md](api.md)

### 主要API

#### 用户相关

- `POST /api/users/register` - 用户注册
- `POST /api/users/login` - 用户登录
- `GET /api/users/all/list` - 获取用户信息
- `PUT /api/users/update` - 更新用户信息

#### 运动数据相关

- `GET /api/user/running_records` - 获取跑步记录
- `POST /api/user/upload_workout` - 上传运动记录

#### 体能数据相关

- `GET /api/physical/stats` - 获取体能数据

#### 管理员功能

- `POST /api/admin/login` - 管理员登录
- `GET /api/admin/users` - 获取所有用户列表
- `GET /api/admin/stats/registrations` - 用户注册统计
- `GET /api/admin/stats/active_users` - 活跃用户统计
- `GET /api/admin/stats/workouts/summary` - 运动总量统计
- `GET /api/admin/stats/workouts/types` - 运动类型分布
- `GET /api/admin/dashboard/overview` - 系统概况统计
- `GET /api/admin/dashboard/user_growth` - 用户增长趋势
- `GET /api/admin/dashboard/workout_trends` - 运动数据趋势
- `GET /api/admin/user/{user_id}` - 获取用户详细信息
- `PUT /api/admin/user/{user_id}` - 编辑用户信息
- `DELETE /api/admin/user/{user_id}` - 删除用户
- `GET /api/admin/export/users` - 导出用户数据
- `POST /api/admin/import/users` - 批量导入用户

## 管理员功能说明

系统提供了完整的管理后台API，包括：

1. **用户管理**：查看、编辑、删除用户
2. **数据统计**：注册趋势、活跃用户、运动量统计
3. **数据分析**：用户年龄/性别分布、体能指标分析
4. **数据导入导出**：支持CSV格式的数据导入导出

### 默认管理员账号

- 用户名：admin
- 密码：admin

首次使用请及时修改默认密码。 