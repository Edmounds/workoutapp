# 运动小程序后端服务

这是一个用于跑步/健身记录的后端服务，提供用户管理、运动记录管理和体能数据统计等功能。

## 项目结构

```
backend/
  ├── app.py            # 主应用入口文件
  ├── run.py            # 启动入口
  ├── config.py         # 配置文件
  ├── utils/            # 工具模块
  │    ├── __init__.py
  │    ├── db.py        # 数据库连接工具
  │    ├── auth.py      # 认证相关工具（JWT、密码哈希等）
  │    └── helpers.py   # 辅助函数（如decimal转换等）
  ├── routes/           # 路由模块
  │    ├── __init__.py
  │    ├── users.py     # 用户相关路由
  │    ├── workouts.py  # 运动记录相关路由
  │    └── physical.py  # 体能数据相关路由
  └── middleware/       # 中间件模块
       ├── __init__.py
       └── auth.py      # 认证中间件（token验证装饰器等）
```

## 安装依赖

```bash
pip install -r requirements.txt
```

## 配置

在 `config.py` 文件中配置数据库连接信息和应用参数。

## 运行服务

```bash
python run.py
```

## API 接口

服务启动后，可以访问以下API接口：

- `POST /api/users/register` - 用户注册
- `POST /api/users/login` - 用户登录
- `GET /api/users/all/list` - 获取用户信息（需要认证）
- `PUT /api/users/update` - 更新用户信息（需要认证）
- `GET /api/user/running_records` - 获取跑步记录（需要认证）
- `POST /api/user/upload_workout` - 上传运动记录（需要认证）
- `GET /api/physical/stats` - 获取体能数据（需要认证）
- `GET /health` - 健康检查
- `GET /test/db` - 测试数据库连接 