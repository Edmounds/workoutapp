# 跑步健康应用 API 文档

本文档提供了跑步健康应用的后端API接口说明。

## 目录

1. [用户相关](#1-用户相关)
2. [管理员相关](#2-管理员相关)
3. [设备相关](#3-设备相关)
4. [体能数据相关](#4-体能数据相关)
5. [运动记录相关](#5-运动记录相关)

## 1. 用户相关

### 1.1 用户注册

- **URL**: `/api/users/register`
- **方法**: POST
- **请求参数**:

| 参数名   | 类型   | 必填 | 描述         |
|---------|--------|-----|--------------|
| name    | string | 是  | 用户名       |
| password| string | 是  | 密码         |
| email   | string | 否  | 邮箱         |
| gender  | number | 否  | 性别(0-未知,1-男,2-女) |
| age     | number | 否  | 年龄         |
| height  | number | 否  | 身高(cm)     |
| weight  | number | 否  | 体重(kg)     |

- **响应示例**:

```json
{
    "code": 201,
    "message": "注册成功",
    "data": {
        "id": 1,
        "username": "test_user"
    }
}
```

### 1.2 用户登录

- **URL**: `/api/users/login`
- **方法**: POST
- **请求参数**:

| 参数名   | 类型   | 必填 | 描述    |
|---------|--------|-----|---------|
| name    | string | 是  | 用户名  |
| password| string | 是  | 密码    |

- **响应示例**:

```json
{
    "code": 200,
    "message": "登录成功",
    "data": {
        "id": 1,
        "username": "test_user",
        "level": "初级跑者",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
    }
}
```

### 1.3 获取用户完整信息

- **URL**: `/api/users/all/list`
- **方法**: GET
- **请求头**: Authorization: Bearer {token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "user_info": {
            "id": 1,
            "username": "test_user",
            "gender": 1,
            "age": 28,
            "height": 175,
            "weight": 70,
            "level": "初级跑者",
            "total_workouts": 15,
            "total_duration": 450,
            "total_distance": 35.5
        },
        "workout_records": {
            "total_count": 15,
            "total_hours": 7.5,
            "total_km": 35.5
        }
    }
}
```

### 1.4 更新用户信息

- **URL**: `/api/users/update`
- **方法**: PUT
- **请求头**: Authorization: Bearer {token}
- **请求参数**:

| 参数名  | 类型   | 必填 | 描述         |
|--------|--------|-----|--------------|
| gender | number | 否  | 性别(0-未知,1-男,2-女) |
| age    | number | 否  | 年龄         |
| height | number | 否  | 身高(cm)     |
| weight | number | 否  | 体重(kg)     |

- **响应示例**:

```json
{
    "code": 200,
    "message": "用户信息更新成功"
}
```

## 2. 管理员相关

### 2.1 管理员登录

- **URL**: `/api/admin/login`
- **方法**: POST
- **请求参数**:

| 参数名   | 类型   | 必填 | 描述    |
|---------|--------|-----|---------|
| name    | string | 是  | 用户名  |
| password| string | 是  | 密码    |

- **响应示例**:

```json
{
    "code": 200,
    "message": "登录成功",
    "data": {
        "id": 1,
        "username": "admin",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
        "role": "admin"
    }
}
```

### 2.2 获取所有用户列表

- **URL**: `/api/admin/users`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名   | 类型   | 必填 | 描述           |
|---------|--------|-----|----------------|
| page    | number | 否  | 页码(默认1)     |
| size    | number | 否  | 每页数量(默认20)|
| keyword | string | 否  | 搜索关键词      |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "total": 100,
        "page": 1,
        "size": 20,
        "users": [
            {
                "id": 1,
                "username": "test_user",
                "gender": 1,
                "age": 28,
                "height": 175,
                "weight": 70,
                "level": "初级跑者",
                "total_workouts": 15,
                "total_distance": 35.5,
                "created_at": "2023-01-01 12:00:00"
            },
            // 更多用户...
        ]
    }
}
```

### 2.3 获取用户注册统计数据

- **URL**: `/api/admin/stats/registrations`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                   |
|------------|--------|-----|------------------------|
| start_date | string | 否  | 开始日期(YYYY-MM-DD)   |
| end_date   | string | 否  | 结束日期(YYYY-MM-DD)   |
| interval   | string | 否  | 统计间隔(day/week/month)|

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "total": 500,
        "stats": [
            {
                "date": "2023-01",
                "count": 50
            },
            {
                "date": "2023-02",
                "count": 65
            }
            // 更多数据...
        ]
    }
}
```

### 2.4 获取活跃用户统计数据

- **URL**: `/api/admin/stats/active_users`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                   |
|------------|--------|-----|------------------------|
| start_date | string | 否  | 开始日期(YYYY-MM-DD)   |
| end_date   | string | 否  | 结束日期(YYYY-MM-DD)   |
| interval   | string | 否  | 统计间隔(day/week/month)|

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "stats": [
            {
                "date": "2023-01-01",
                "active_users": 30
            },
            {
                "date": "2023-01-02",
                "active_users": 25
            }
            // 更多数据...
        ]
    }
}
```

### 2.5 获取运动总量统计

- **URL**: `/api/admin/stats/workouts/summary`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                 |
|------------|--------|-----|----------------------|
| start_date | string | 否  | 开始日期(YYYY-MM-DD) |
| end_date   | string | 否  | 结束日期(YYYY-MM-DD) |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "total_workouts": 1500,
        "total_distance": 7500.5,
        "total_duration": 450000,
        "avg_distance_per_user": 15.0,
        "avg_workouts_per_user": 3.0
    }
}
```

### 2.6 获取运动类型分布统计

- **URL**: `/api/admin/stats/workouts/types`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                 |
|------------|--------|-----|----------------------|
| start_date | string | 否  | 开始日期(YYYY-MM-DD) |
| end_date   | string | 否  | 结束日期(YYYY-MM-DD) |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": [
        {
            "workout_type": "跑步",
            "count": 850,
            "percentage": 56.7
        },
        {
            "workout_type": "健走",
            "count": 450,
            "percentage": 30.0
        }
        // 更多数据...
    ]
}
```

### 2.7 获取指定用户详细信息

- **URL**: `/api/admin/user/{user_id}`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "user_info": {
            "id": 1,
            "username": "test_user",
            "gender": 1,
            "age": 28,
            "height": 175,
            "weight": 70,
            "level": "初级跑者",
            "email": "test@example.com",
            "total_workouts": 15,
            "total_duration": 450,
            "total_distance": 35.5,
            "created_at": "2023-01-01 12:00:00",
            "updated_at": "2023-02-01 12:00:00"
        },
        "workout_summary": {
            "total_count": 15,
            "total_hours": 7.5,
            "total_km": 35.5,
            "workout_types": [
                {
                    "workout_type": "跑步",
                    "count": 10
                },
                {
                    "workout_type": "健走",
                    "count": 5
                }
            ]
        },
        "latest_physical_stats": {
            "avg_heart_rate": 75,
            "resting_heart_rate": 65,
            "avg_blood_oxygen": 98.5,
            "health_index": 85,
            "sleep_quality": 80,
            "aerobic_capacity": 75
        }
    }
}
```

### 2.8 管理员编辑用户信息

- **URL**: `/api/admin/user/{user_id}`
- **方法**: PUT
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名    | 类型   | 必填 | 描述         |
|----------|--------|-----|--------------|
| username | string | 否  | 用户名       |
| gender   | number | 否  | 性别         |
| age      | number | 否  | 年龄         |
| height   | number | 否  | 身高(cm)     |
| weight   | number | 否  | 体重(kg)     |
| level    | string | 否  | 用户等级     |

- **响应示例**:

```json
{
    "code": 200,
    "message": "用户信息更新成功"
}
```

### 2.9 删除用户

- **URL**: `/api/admin/user/{user_id}`
- **方法**: DELETE
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "用户删除成功"
}
```

### 2.10 获取用户运动记录

- **URL**: `/api/admin/user/{user_id}/running_records`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名       | 类型   | 必填 | 描述                |
|-------------|--------|-----|---------------------|
| page        | number | 否  | 页码(默认1)          |
| size        | number | 否  | 每页数量(默认20)     |
| start_date  | string | 否  | 开始日期(YYYY-MM-DD) |
| end_date    | string | 否  | 结束日期(YYYY-MM-DD) |
| workout_type| string | 否  | 运动类型             |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "total": 15,
        "page": 1,
        "size": 20,
        "records": [
            {
                "id": 1,
                "workout_type": "跑步",
                "start_time": "2023-02-01 12:00:00",
                "duration_minutes": 30.5,
                "distance_km": 5.2,
                "avg_pace_formatted": "5'45\"",
                "avg_heart_rate": 145,
                "calories": 320
            }
            // 更多记录...
        ]
    }
}
```

### 2.11 获取系统概况统计

- **URL**: `/api/admin/dashboard/overview`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "total_users": 500,
        "new_users_today": 15,
        "active_users_today": 120,
        "total_workouts": 1500,
        "workouts_today": 85,
        "total_distance": 7500.5,
        "distance_today": 350.2,
        "avg_health_index": 82.5,
        "avg_sleep_quality": 78.3
    }
}
```

### 2.12 获取用户增长趋势

- **URL**: `/api/admin/dashboard/user_growth`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名  | 类型   | 必填 | 描述                 |
|--------|--------|-----|----------------------|
| period | string | 否  | 统计周期(week/month/year)|
| count  | number | 否  | 返回数据点数量(默认12) |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "period": "month",
        "data": [
            {
                "date": "2023-01",
                "new_users": 50,
                "cumulative_users": 50
            },
            {
                "date": "2022-12",
                "new_users": 45,
                "cumulative_users": 95
            }
            // 更多数据...
        ]
    }
}
```

### 2.13 获取运动数据趋势

- **URL**: `/api/admin/dashboard/workout_trends`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名  | 类型   | 必填 | 描述                    |
|--------|--------|-----|-------------------------|
| period | string | 否  | 统计周期(week/month/year)|
| count  | number | 否  | 返回数据点数量(默认12)   |
| metric | string | 否  | 统计指标(workouts/distance/duration)|

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "period": "month",
        "metric": "workouts",
        "data": [
            {
                "date": "2023-01",
                "value": 150
            },
            {
                "date": "2022-12",
                "value": 135
            }
            // 更多数据...
        ]
    }
}
```

### 2.14 获取用户年龄分布统计

- **URL**: `/api/admin/stats/users/age_distribution`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": [
        {
            "range": "<=18",
            "count": 50,
            "percentage": 10.0
        },
        {
            "range": "19-25",
            "count": 150,
            "percentage": 30.0
        }
        // 更多数据...
    ]
}
```

### 2.15 获取用户性别分布统计

- **URL**: `/api/admin/stats/users/gender_distribution`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": [
        {
            "gender": 1,
            "label": "男",
            "count": 300,
            "percentage": 60.0
        },
        {
            "gender": 2,
            "label": "女",
            "count": 180,
            "percentage": 36.0
        },
        {
            "gender": 0,
            "label": "未知",
            "count": 20,
            "percentage": 4.0
        }
    ]
}
```

### 2.16 获取用户体能数据统计

- **URL**: `/api/admin/stats/physical`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                 |
|------------|--------|-----|----------------------|
| metric     | string | 否  | 指标(health_index/stress_index/sleep_quality/aerobic_capacity)|
| start_date | string | 否  | 开始日期(YYYY-MM-DD) |
| end_date   | string | 否  | 结束日期(YYYY-MM-DD) |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "metric": "health_index",
        "avg_value": 82.5,
        "min_value": 60.0,
        "max_value": 95.0,
        "distribution": [
            {
                "range": "0-20",
                "count": 5,
                "percentage": 1.0
            },
            {
                "range": "21-40",
                "count": 15,
                "percentage": 3.0
            },
            {
                "range": "41-60",
                "count": 50,
                "percentage": 10.0
            },
            {
                "range": "61-80",
                "count": 230,
                "percentage": 46.0
            },
            {
                "range": "81-100",
                "count": 200,
                "percentage": 40.0
            }
        ]
    }
}
```

### 2.17 获取用户睡眠质量统计

- **URL**: `/api/admin/stats/sleep`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                 |
|------------|--------|-----|----------------------|
| start_date | string | 否  | 开始日期(YYYY-MM-DD) |
| end_date   | string | 否  | 结束日期(YYYY-MM-DD) |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "avg_sleep_quality": 78.5,
        "avg_sleep_duration": 420.0,
        "quality_distribution": [
            {
                "range": "0-20",
                "count": 10,
                "percentage": 2.0
            },
            {
                "range": "21-40",
                "count": 25,
                "percentage": 5.0
            },
            {
                "range": "41-60",
                "count": 75,
                "percentage": 15.0
            },
            {
                "range": "61-80",
                "count": 240,
                "percentage": 48.0
            },
            {
                "range": "81-100",
                "count": 150,
                "percentage": 30.0
            }
        ],
        "duration_distribution": [
            {
                "range": "<6小时",
                "count": 50,
                "percentage": 10.0
            },
            {
                "range": "6-7小时",
                "count": 150,
                "percentage": 30.0
            },
            {
                "range": "7-8小时",
                "count": 200,
                "percentage": 40.0
            },
            {
                "range": "8-9小时",
                "count": 80,
                "percentage": 16.0
            },
            {
                "range": ">9小时",
                "count": 20,
                "percentage": 4.0
            }
        ]
    }
}
```

### 2.18 为用户添加体能数据

- **URL**: `/api/admin/user/{user_id}/physical_stats`
- **方法**: POST
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名             | 类型   | 必填 | 描述                |
|-------------------|--------|-----|---------------------|
| date              | string | 是  | 日期(YYYY-MM-DD)    |
| avg_heart_rate    | number | 否  | 平均心率            |
| current_heart_rate| number | 否  | 当前心率            |
| resting_heart_rate| number | 否  | 静息心率            |
| max_heart_rate    | number | 否  | 最大心率            |
| avg_blood_oxygen  | number | 否  | 平均血氧            |
| health_index      | number | 否  | 健康指数(0-100)     |
| stress_index      | number | 否  | 压力指数(0-100)     |
| sleep_quality     | number | 否  | 睡眠质量(0-100)     |
| sleep_duration    | number | 否  | 睡眠时长(分钟)      |
| aerobic_capacity  | number | 否  | 有氧能力(0-100)     |
| weekly_distance   | number | 否  | 周跑量(公里)        |

- **响应示例**:

```json
{
    "code": 200,
    "message": "体能数据添加成功"
}
```

### 2.19 为用户添加进度目标

- **URL**: `/api/admin/user/{user_id}/goals`
- **方法**: POST
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名       | 类型   | 必填 | 描述                 |
|-------------|--------|-----|----------------------|
| title       | string | 是  | 目标标题             |
| current_value| number | 是  | 当前值               |
| target_value| number | 是  | 目标值               |
| category    | string | 是  | 类别(distance/time/count)|
| deadline    | string | 否  | 截止日期(YYYY-MM-DD) |

- **响应示例**:

```json
{
    "code": 200,
    "message": "进度目标添加成功"
}
```

### 2.20 导出用户数据

- **URL**: `/api/admin/export/users`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                 |
|------------|--------|-----|----------------------|
| start_date | string | 否  | 开始日期(YYYY-MM-DD) |
| end_date   | string | 否  | 结束日期(YYYY-MM-DD) |

- **响应**: 返回CSV文件下载

### 2.21 导入用户数据

- **URL**: `/api/admin/import/users`
- **方法**: POST
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**: 
  - 文件上传，Content-Type: multipart/form-data
  - 字段名: file (CSV文件)

- **响应示例**:

```json
{
    "code": 200,
    "message": "导入成功",
    "data": {
        "total": 100,
        "success": 95,
        "failed": 5,
        "errors": [
            {
                "row": 2,
                "error": "用户名已存在"
            },
            {
                "row": 5,
                "error": "年龄必须是有效数字"
            }
        ]
    }
}
```

### 2.22 获取所有设备列表

- **URL**: `/api/admin/devices`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名   | 类型   | 必填 | 描述               |
|---------|--------|-----|-------------------|
| page    | number | 否  | 页码(默认1)        |
| size    | number | 否  | 每页数量(默认20)   |
| status  | number | 否  | 状态(0-未绑定,1-已绑定,2-禁用)|
| keyword | string | 否  | 搜索关键词         |

- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "total": 50,
        "page": 1,
        "size": 20,
        "devices": [
            {
                "id": 1,
                "device_id": "D123456",
                "device_name": "智能手环",
                "device_type": "wristband",
                "status": 1,
                "user_id": 5,
                "username": "test_user",
                "last_active": "2023-02-01 12:00:00",
                "created_at": "2023-01-01 10:00:00"
            },
            // 更多设备...
        ]
    }
}
```

### 2.23 添加新设备

- **URL**: `/api/admin/devices`
- **方法**: POST
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述        |
|------------|--------|-----|-------------|
| device_id  | string | 是  | 设备ID      |
| secret     | string | 是  | 设备密钥    |
| device_name| string | 是  | 设备名称    |
| device_type| string | 是  | 设备类型    |

- **响应示例**:

```json
{
    "code": 201,
    "message": "设备添加成功",
    "data": {
        "id": 1,
        "device_id": "D123456"
    }
}
```

### 2.24 批量添加设备

- **URL**: `/api/admin/devices/batch`
- **方法**: POST
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

```json
{
    "devices": [
        {
            "device_id": "D123456",
            "secret": "xxxxxxxxxxx",
            "device_name": "智能手环",
            "device_type": "wristband"
        },
        {
            "device_id": "D654321",
            "secret": "xxxxxxxxxxx",
            "device_name": "智能手表",
            "device_type": "watch"
        }
    ]
}
```

- **响应示例**:

```json
{
    "code": 201,
    "message": "批量添加成功",
    "data": {
        "total": 2,
        "success": 2,
        "failed": 0
    }
}
```

### 2.25 修改设备信息

- **URL**: `/api/admin/devices/{device_id}`
- **方法**: PUT
- **请求头**: Authorization: Bearer {admin_token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述                      |
|------------|--------|-----|---------------------------|
| device_name| string | 否  | 设备名称                  |
| device_type| string | 否  | 设备类型                  |
| status     | number | 否  | 状态(0-未绑定,1-已绑定,2-禁用)|

- **响应示例**:

```json
{
    "code": 200,
    "message": "设备信息更新成功"
}
```

### 2.26 删除设备

- **URL**: `/api/admin/devices/{device_id}`
- **方法**: DELETE
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "设备删除成功"
}
```

### 2.27 重置设备密钥

- **URL**: `/api/admin/devices/{device_id}/reset_secret`
- **方法**: POST
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "设备密钥重置成功",
    "data": {
        "device_id": "D123456",
        "new_secret": "xxxxxxxxxxxxxxxx"
    }
}
```

### 2.28 获取设备统计数据

- **URL**: `/api/admin/stats/devices`
- **方法**: GET
- **请求头**: Authorization: Bearer {admin_token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "total_devices": 50,
        "bound_devices": 35,
        "unbound_devices": 12,
        "disabled_devices": 3,
        "active_devices_today": 28,
        "active_devices_week": 42,
        "by_type": [
            {
                "device_type": "wristband",
                "count": 30,
                "percentage": 60.0
            },
            {
                "device_type": "watch",
                "count": 15,
                "percentage": 30.0
            },
            {
                "device_type": "phone",
                "count": 5,
                "percentage": 10.0
            }
        ]
    }
}
```

## 3. 设备相关

### 3.1 绑定设备

- **URL**: `/api/devices/bind`
- **方法**: POST
- **请求头**: Authorization: Bearer {token}
- **请求参数**:

| 参数名    | 类型   | 必填 | 描述        |
|----------|--------|-----|-------------|
| device_id| string | 是  | 设备ID      |
| secret   | string | 是  | 设备密钥    |

- **响应示例**:

```json
{
    "code": 200,
    "message": "设备绑定成功",
    "data": {
        "device_id": "D123456",
        "device_name": "智能手环",
        "device_type": "wristband",
        "status": 1
    }
}
```

### 3.2 解绑设备

- **URL**: `/api/devices/unbind`
- **方法**: POST
- **请求头**: Authorization: Bearer {token}
- **请求参数**:

| 参数名    | 类型   | 必填 | 描述    |
|----------|--------|-----|---------|
| device_id| string | 是  | 设备ID  |

- **响应示例**:

```json
{
    "code": 200,
    "message": "设备解绑成功"
}
```

### 3.3 获取绑定设备列表

- **URL**: `/api/devices/list`
- **方法**: GET
- **请求头**: Authorization: Bearer {token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": [
        {
            "id": 1,
            "device_id": "D123456",
            "device_name": "智能手环",
            "device_type": "wristband",
            "status": 1,
            "last_active": "2023-02-01 12:00:00"
        },
        {
            "id": 2,
            "device_id": "D654321",
            "device_name": "智能手表",
            "device_type": "watch",
            "status": 1,
            "last_active": "2023-02-01 10:30:00"
        }
    ]
}
```

### 3.4 设备认证

- **URL**: `/api/devices/auth`
- **方法**: POST
- **请求参数**:

| 参数名    | 类型   | 必填 | 描述      |
|----------|--------|-----|-----------|
| device_id| string | 是  | 设备ID    |
| secret   | string | 是  | 设备密钥  |

- **响应示例**:

```json
{
    "code": 200,
    "message": "认证成功",
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
        "expires_in": 3600,
        "user_id": 1,
        "username": "test_user"
    }
}
```

### 3.5 设备上传数据

- **URL**: `/api/devices/upload_data`
- **方法**: POST
- **请求头**: Authorization: Bearer {device_token}
- **请求参数**:

| 参数名    | 类型   | 必填 | 描述                           |
|----------|--------|-----|--------------------------------|
| data_type| string | 是  | 数据类型(workout/health_stats) |
| timestamp| string | 否  | 时间戳                         |
| data     | object | 是  | 数据内容                       |

- **workout数据格式**:

```json
{
    "data_type": "workout",
    "timestamp": "2023-02-01 12:00:00",
    "data": {
        "workout_type": "跑步",
        "duration": 1800,
        "distance": 5000,
        "avg_pace": 360,
        "calories": 350,
        "avg_heart_rate": 145,
        "max_heart_rate": 165
    }
}
```

- **health_stats数据格式**:

```json
{
    "data_type": "health_stats",
    "data": {
        "avg_heart_rate": 72,
        "resting_heart_rate": 65,
        "avg_blood_oxygen": 98.5,
        "health_index": 85,
        "sleep_quality": 80,
        "sleep_duration": 480,
        "aerobic_capacity": 75
    }
}
```

- **响应示例**:

```json
{
    "code": 200,
    "message": "数据上传成功"
}
```

### 3.6 更新设备信息

- **URL**: `/api/devices/update`
- **方法**: PUT
- **请求头**: Authorization: Bearer {token}
- **请求参数**:

| 参数名      | 类型   | 必填 | 描述      |
|------------|--------|-----|-----------|
| device_id  | string | 是  | 设备ID    |
| device_name| string | 是  | 设备名称  |

- **响应示例**:

```json
{
    "code": 200,
    "message": "设备信息更新成功"
}
```

## 4. 体能数据相关

### 4.1 获取体能数据

- **URL**: `/api/physical/stats`
- **方法**: GET
- **请求头**: Authorization: Bearer {token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": {
        "avg_heart_rate": 75,
        "current_heart_rate": 72,
        "resting_heart_rate": 65,
        "max_heart_rate": 160,
        "current_step_rate": 160,
        "avg_step_rate": 165,
        "avg_blood_oxygen": 98.5,
        "current_pace": "5'30\"",
        "best_pace": "5'10\"",
        "max_pace": "5'50\"",
        "avgHeartRate": 75,
        "avgStepRate": 165,
        "avgPace": "5'30\"",
        "health_index": 85,
        "stress_index": 25,
        "sleep_quality": 80,
        "sleep_duration": 480,
        "aerobic_capacity": 75,
        "weekly_distance": 25.0
    }
}
```

## 5. 运动记录相关

### 5.1 获取运动记录

- **URL**: `/api/user/running_records`
- **方法**: GET
- **请求头**: Authorization: Bearer {token}
- **响应示例**:

```json
{
    "code": 200,
    "message": "获取成功",
    "data": [
        {
            "id": 1,
            "workout_type": "跑步",
            "start_time": "2023-02-01 12:00:00",
            "end_time": "2023-02-01 12:30:00",
            "duration": 1800,
            "distance": 5000,
            "distance_km": 5.0,
            "avg_pace": 360,
            "avg_pace_formatted": "6'00\"",
            "best_pace": 330,
            "avg_heart_rate": 145,
            "max_heart_rate": 165,
            "avg_step_rate": 170,
            "calories": 350,
            "elevation_gain": 25,
            "weather": "晴",
            "temperature": 22,
            "notes": "今天感觉不错",
            "duration_minutes": 30.0
        },
        // 更多记录...
    ]
}
```

### 5.2 上传运动记录

- **URL**: `/api/user/upload_workout`
- **方法**: POST
- **请求头**: Authorization: Bearer {token}
- **请求参数**:

| 参数名          | 类型   | 必填 | 描述            |
|----------------|--------|-----|-----------------|
| workout_type   | string | 否  | 运动类型(默认跑步)|
| start_time     | string | 是  | 开始时间        |
| duration       | number | 是  | 持续时间(秒)    |
| distance       | number | 是  | 距离(米)        |
| avg_pace       | number | 否  | 平均配速(秒/公里)|
| calories       | number | 否  | 消耗卡路里      |
| avg_heart_rate | number | 否  | 平均心率        |
| max_heart_rate | number | 否  | 最大心率        |
| notes          | string | 否  | 备注            |

- **响应示例**:

```json
{
    "code": 200,
    "message": "运动记录上传成功"
}
``` 