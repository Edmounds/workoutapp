# 运动手环管理系统API文档

## 用户认证相关

### 用户注册
- **URL**: `/api/users/register`
- **方法**: `POST`
- **描述**: 注册新用户
- **请求体**:
  ```json
  {
    "name": "用户名",
    "password": "密码",
    "email": "邮箱（可选）",
    "gender": 1,  // 0:未知, 1:男, 2:女
    "age": 25,    // 年龄
    "height": 175.5, // 身高(cm)
    "weight": 65.0   // 体重(kg)
  }
  ```
- **响应**:
  ```json
  {
    "code": 201,
    "message": "注册成功",
    "data": {
      "id": 1,
      "username": "用户名"
    }
  }
  ```

### 用户登录
- **URL**: `/api/users/login`
- **方法**: `POST`
- **描述**: 用户登录获取令牌
- **请求体**:
  ```json
  {
    "name": "用户名",
    "password": "密码"
  }
  ```
- **响应**:
  ```json
  {
    "code": 200,
    "message": "登录成功",
    "data": {
      "id": 1,
      "username": "用户名",
      "level": "初级跑者",
      "token": "jwt令牌"
    }
  }
  ```

### 管理员登录
- **URL**: `/api/admin/login`
- **方法**: `POST`
- **描述**: 管理员登录获取令牌
- **请求体**:
  ```json
  {
    "name": "管理员用户名",
    "password": "密码"
  }
  ```
- **响应**:
  ```json
  {
    "code": 200,
    "message": "登录成功",
    "data": {
      "id": 1,
      "username": "管理员用户名",
      "token": "jwt令牌",
      "role": "admin"
    }
  }
  ```

## 用户数据相关

### 获取用户信息
- **URL**: `/api/users/all/list`
- **方法**: `GET`
- **描述**: 获取当前登录用户的完整信息
- **请求头**: `Authorization: Bearer {token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "user_info": {
        "id": 1,
        "username": "用户名",
        "gender": 1,
        "age": 25,
        "height": 175.5,
        "weight": 65.0,
        "level": "初级跑者",
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

### 更新用户信息
- **URL**: `/api/users/update`
- **方法**: `PUT`
- **描述**: 更新当前登录用户的信息
- **请求头**: `Authorization: Bearer {token}`
- **请求体**:
  ```json
  {
    "gender": 1,
    "age": 26,
    "height": 176.0,
    "weight": 66.0
  }
  ```
- **响应**:
  ```json
  {
    "code": 200,
    "message": "用户信息更新成功"
  }
  ```

## 运动数据相关

### 获取跑步记录
- **URL**: `/api/user/running_records`
- **方法**: `GET`
- **描述**: 获取当前登录用户的跑步记录
- **请求头**: `Authorization: Bearer {token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": [
      {
        "id": 1,
        "workout_type": "恢复跑",
        "start_time": "2025-05-23 11:50:12",
        "end_time": "2025-05-23 12:21:10",
        "duration": 1858,
        "duration_minutes": 31.0,
        "distance": 3332.83,
        "distance_km": 3.33,
        "avg_pace": 557,
        "avg_pace_formatted": "9'17\"",
        "best_pace": 535,
        "avg_heart_rate": 112,
        "max_heart_rate": 142,
        "avg_step_rate": 165,
        "calories": 223,
        "elevation_gain": 6.23,
        "weather": "阴天",
        "temperature": 24.2,
        "notes": "今天的恢复跑训练，感觉很棒！"
      }
    ]
  }
  ```

### 上传运动记录
- **URL**: `/api/user/upload_workout`
- **方法**: `POST`
- **描述**: 上传用户运动记录
- **请求头**: `Authorization: Bearer {token}`
- **请求体**:
  ```json
  {
    "workout_type": "跑步",
    "start_time": "2025-06-01 08:00:00",
    "duration": 1800,  // 秒
    "distance": 5000,  // 米
    "avg_pace": 360,   // 秒/公里
    "calories": 350,
    "avg_heart_rate": 128,
    "max_heart_rate": 152,
    "notes": "晨跑很舒服"
  }
  ```
- **响应**:
  ```json
  {
    "code": 200,
    "message": "运动记录上传成功"
  }
  ```

### 获取体能数据
- **URL**: `/api/physical/stats`
- **方法**: `GET`
- **描述**: 获取当前登录用户的体能数据
- **请求头**: `Authorization: Bearer {token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "avg_heart_rate": 120,
      "current_heart_rate": 75,
      "resting_heart_rate": 60,
      "max_heart_rate": 160,
      "current_step_rate": 165,
      "avg_step_rate": 170,
      "avg_blood_oxygen": 98.5,
      "current_pace": "5'30\"",
      "best_pace": "5'10\"",
      "health_index": 85,
      "stress_index": 25,
      "sleep_quality": 80,
      "sleep_duration": 480,
      "aerobic_capacity": 75,
      "weekly_distance": 25.0
    }
  }
  ```

## 系统健康检查

### 健康检查
- **URL**: `/health`
- **方法**: `GET`
- **描述**: 检查系统运行状态
- **响应**:
  ```json
  {
    "status": "ok",
    "message": "服务运行正常"
  }
  ```

### 测试数据库连接
- **URL**: `/test/db`
- **方法**: `GET`
- **描述**: 测试数据库连接是否正常
- **响应**:
  ```json
  {
    "status": "ok",
    "message": "数据库连接正常"
  }
  ```

## 管理员功能API

### 获取所有用户列表
- **URL**: `/api/admin/users`
- **方法**: `GET`
- **描述**: 获取所有用户列表（分页）
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `page`: 页码（默认1）
  - `size`: 每页数量（默认20）
  - `keyword`: 搜索关键词（可选）
- **响应**:
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
          "username": "用户名",
          "gender": 1,
          "age": 25,
          "level": "初级跑者",
          "total_workouts": 10,
          "total_distance": 25.5,
          "created_at": "2025-05-01 08:00:00"
        }
      ]
    }
  }
  ```

### 用户注册统计
- **URL**: `/api/admin/stats/registrations`
- **方法**: `GET`
- **描述**: 获取用户注册统计数据
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `start_date`: 开始日期（格式：YYYY-MM-DD）
  - `end_date`: 结束日期（格式：YYYY-MM-DD）
  - `interval`: 统计间隔（day/week/month，默认day）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "total": 100,
      "stats": [
        {
          "date": "2025-05-01",
          "count": 5
        },
        {
          "date": "2025-05-02",
          "count": 3
        }
      ]
    }
  }
  ```

### 活跃用户统计
- **URL**: `/api/admin/stats/active_users`
- **方法**: `GET`
- **描述**: 获取活跃用户统计数据
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `start_date`: 开始日期（格式：YYYY-MM-DD）
  - `end_date`: 结束日期（格式：YYYY-MM-DD）
  - `interval`: 统计间隔（day/week/month，默认day）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "stats": [
        {
          "date": "2025-05-01",
          "active_users": 20
        },
        {
          "date": "2025-05-02",
          "active_users": 25
        }
      ]
    }
  }
  ```

### 运动总量统计
- **URL**: `/api/admin/stats/workouts/summary`
- **方法**: `GET`
- **描述**: 获取所有用户运动总量统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `start_date`: 开始日期（格式：YYYY-MM-DD）
  - `end_date`: 结束日期（格式：YYYY-MM-DD）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "total_workouts": 500,
      "total_distance": 2500.5,
      "total_duration": 15000,
      "avg_distance_per_user": 25.0,
      "avg_workouts_per_user": 5.0
    }
  }
  ```

### 运动类型分布统计
- **URL**: `/api/admin/stats/workouts/types`
- **方法**: `GET`
- **描述**: 获取运动类型分布统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `start_date`: 开始日期（格式：YYYY-MM-DD）
  - `end_date`: 结束日期（格式：YYYY-MM-DD）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": [
      {
        "workout_type": "恢复跑",
        "count": 150,
        "percentage": 30.0
      },
      {
        "workout_type": "长距离跑",
        "count": 100,
        "percentage": 20.0
      },
      {
        "workout_type": "间歇跑",
        "count": 80,
        "percentage": 16.0
      },
      {
        "workout_type": "跑步",
        "count": 170,
        "percentage": 34.0
      }
    ]
  }
  ```

### 用户体能数据统计
- **URL**: `/api/admin/stats/physical`
- **方法**: `GET`
- **描述**: 获取用户体能数据统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `metric`: 统计指标（health_index/stress_index/sleep_quality/aerobic_capacity）
  - `start_date`: 开始日期（格式：YYYY-MM-DD）
  - `end_date`: 结束日期（格式：YYYY-MM-DD）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "metric": "health_index",
      "avg_value": 75.5,
      "min_value": 50,
      "max_value": 95,
      "distribution": [
        {
          "range": "0-20",
          "count": 5,
          "percentage": 5.0
        },
        {
          "range": "21-40",
          "count": 10,
          "percentage": 10.0
        },
        {
          "range": "41-60",
          "count": 15,
          "percentage": 15.0
        },
        {
          "range": "61-80",
          "count": 40,
          "percentage": 40.0
        },
        {
          "range": "81-100",
          "count": 30,
          "percentage": 30.0
        }
      ]
    }
  }
  ```

### 睡眠质量统计
- **URL**: `/api/admin/stats/sleep`
- **方法**: `GET`
- **描述**: 获取用户睡眠质量统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `start_date`: 开始日期（格式：YYYY-MM-DD）
  - `end_date`: 结束日期（格式：YYYY-MM-DD）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "avg_sleep_quality": 78.5,
      "avg_sleep_duration": 450,
      "quality_distribution": [
        {
          "range": "0-20",
          "count": 2,
          "percentage": 2.0
        },
        {
          "range": "21-40",
          "count": 5,
          "percentage": 5.0
        },
        {
          "range": "41-60",
          "count": 15,
          "percentage": 15.0
        },
        {
          "range": "61-80",
          "count": 45,
          "percentage": 45.0
        },
        {
          "range": "81-100",
          "count": 33,
          "percentage": 33.0
        }
      ],
      "duration_distribution": [
        {
          "range": "<6小时",
          "count": 10,
          "percentage": 10.0
        },
        {
          "range": "6-7小时",
          "count": 30,
          "percentage": 30.0
        },
        {
          "range": "7-8小时",
          "count": 40,
          "percentage": 40.0
        },
        {
          "range": "8-9小时",
          "count": 15,
          "percentage": 15.0
        },
        {
          "range": ">9小时",
          "count": 5,
          "percentage": 5.0
        }
      ]
    }
  }
  ```

### 目标完成率统计
- **URL**: `/api/admin/stats/goals`
- **方法**: `GET`
- **描述**: 获取用户目标完成率统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `start_date`: 开始日期（格式：YYYY-MM-DD）
  - `end_date`: 结束日期（格式：YYYY-MM-DD）
  - `category`: 目标类别（可选）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "total_goals": 150,
      "completed_goals": 90,
      "completion_rate": 60.0,
      "by_category": [
        {
          "category": "距离",
          "total": 100,
          "completed": 65,
          "completion_rate": 65.0
        },
        {
          "category": "时间",
          "total": 50,
          "completed": 25,
          "completion_rate": 50.0
        }
      ]
    }
  }
  ```

### 用户详细信息
- **URL**: `/api/admin/user/{user_id}`
- **方法**: `GET`
- **描述**: 获取指定用户的详细信息
- **请求头**: `Authorization: Bearer {admin_token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "user_info": {
        "id": 1,
        "username": "用户名",
        "gender": 1,
        "age": 25,
        "height": 175.5,
        "weight": 65.0,
        "level": "初级跑者",
        "email": "user@example.com",
        "total_workouts": 10,
        "total_duration": 300,
        "total_distance": 25.5,
        "created_at": "2025-05-01 08:00:00",
        "updated_at": "2025-06-01 09:00:00"
      },
      "workout_summary": {
        "total_count": 10,
        "total_hours": 5.0,
        "total_km": 25.5,
        "workout_types": [
          {
            "type": "恢复跑",
            "count": 4
          },
          {
            "type": "长距离跑",
            "count": 2
          },
          {
            "type": "间歇跑",
            "count": 1
          },
          {
            "type": "跑步",
            "count": 3
          }
        ]
      },
      "latest_physical_stats": {
        "avg_heart_rate": 120,
        "resting_heart_rate": 60,
        "avg_blood_oxygen": 98.5,
        "health_index": 85,
        "sleep_quality": 80,
        "aerobic_capacity": 75
      }
    }
  }
  ```

### 编辑用户信息
- **URL**: `/api/admin/user/{user_id}`
- **方法**: `PUT`
- **描述**: 管理员编辑用户信息
- **请求头**: `Authorization: Bearer {admin_token}`
- **请求体**:
  ```json
  {
    "username": "新用户名",
    "gender": 1,
    "age": 26,
    "height": 176.0,
    "weight": 66.0,
    "level": "intermediate"
  }
  ```
- **响应**:
  ```json
  {
    "code": 200,
    "message": "用户信息更新成功"
  }
  ```

### 删除用户
- **URL**: `/api/admin/user/{user_id}`
- **方法**: `DELETE`
- **描述**: 删除指定用户
- **请求头**: `Authorization: Bearer {admin_token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "用户删除成功"
  }
  ```

### 用户运动记录
- **URL**: `/api/admin/user/{user_id}/running_records`
- **方法**: `GET`
- **描述**: 获取指定用户的运动记录
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `page`: 页码（默认1）
  - `size`: 每页数量（默认20）
  - `start_date`: 开始日期（可选）
  - `end_date`: 结束日期（可选）
  - `workout_type`: 运动类型（可选）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "total": 25,
      "page": 1,
      "size": 20,
      "records": [
        {
          "id": 1,
          "workout_type": "恢复跑",
          "start_time": "2025-05-23 11:50:12",
          "duration_minutes": 31.0,
          "distance_km": 3.33,
          "avg_pace_formatted": "9'17\"",
          "avg_heart_rate": 112,
          "calories": 223
        }
      ]
    }
  }
  ```

### 系统概况统计
- **URL**: `/api/admin/dashboard/overview`
- **方法**: `GET`
- **描述**: 获取系统概况统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "total_users": 100,
      "new_users_today": 5,
      "active_users_today": 25,
      "total_workouts": 1500,
      "workouts_today": 50,
      "total_distance": 7500.5,
      "distance_today": 250.5,
      "avg_health_index": 82.5,
      "avg_sleep_quality": 78.5
    }
  }
  ```

### 用户增长趋势
- **URL**: `/api/admin/dashboard/user_growth`
- **方法**: `GET`
- **描述**: 获取用户增长趋势
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `period`: 时间段（week/month/year，默认month）
  - `count`: 返回数据点数量（默认12）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "period": "month",
      "data": [
        {
          "date": "2025-01",
          "new_users": 15,
          "cumulative_users": 15
        },
        {
          "date": "2025-02",
          "new_users": 10,
          "cumulative_users": 25
        }
      ]
    }
  }
  ```

### 运动数据趋势
- **URL**: `/api/admin/dashboard/workout_trends`
- **方法**: `GET`
- **描述**: 获取运动数据趋势
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `period`: 时间段（week/month/year，默认month）
  - `count`: 返回数据点数量（默认12）
  - `metric`: 指标（workouts/distance/duration，默认workouts）
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": {
      "period": "month",
      "metric": "workouts",
      "data": [
        {
          "date": "2025-01",
          "value": 120
        },
        {
          "date": "2025-02",
          "value": 150
        }
      ]
    }
  }
  ```

### 年龄分布统计
- **URL**: `/api/admin/stats/users/age_distribution`
- **方法**: `GET`
- **描述**: 获取用户年龄分布统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": [
      {
        "range": "<=18",
        "count": 5,
        "percentage": 5.0
      },
      {
        "range": "19-25",
        "count": 25,
        "percentage": 25.0
      },
      {
        "range": "26-35",
        "count": 40,
        "percentage": 40.0
      },
      {
        "range": "36-45",
        "count": 20,
        "percentage": 20.0
      },
      {
        "range": ">=46",
        "count": 10,
        "percentage": 10.0
      }
    ]
  }
  ```

### 性别分布统计
- **URL**: `/api/admin/stats/users/gender_distribution`
- **方法**: `GET`
- **描述**: 获取用户性别分布统计
- **请求头**: `Authorization: Bearer {admin_token}`
- **响应**:
  ```json
  {
    "code": 200,
    "message": "获取成功",
    "data": [
      {
        "gender": 0,
        "label": "未知",
        "count": 10,
        "percentage": 10.0
      },
      {
        "gender": 1,
        "label": "男",
        "count": 60,
        "percentage": 60.0
      },
      {
        "gender": 2,
        "label": "女",
        "count": 30,
        "percentage": 30.0
      }
    ]
  }
  ```

### 添加体能数据
- **URL**: `/api/admin/user/{user_id}/physical_stats`
- **方法**: `POST`
- **描述**: 为用户添加体能数据
- **请求头**: `Authorization: Bearer {admin_token}`
- **请求体**:
  ```json
  {
    "date": "2025-06-01",
    "avg_heart_rate": 65,
    "current_heart_rate": 70,
    "resting_heart_rate": 55,
    "max_heart_rate": 150,
    "avg_blood_oxygen": 98.5,
    "health_index": 85,
    "stress_index": 25,
    "sleep_quality": 90,
    "sleep_duration": 480,
    "aerobic_capacity": 80,
    "weekly_distance": 25.5
  }
  ```
- **响应**:
  ```json
  {
    "code": 200,
    "message": "体能数据添加成功"
  }
  ```

### 添加进度目标
- **URL**: `/api/admin/user/{user_id}/goals`
- **方法**: `POST`
- **描述**: 为用户添加进度目标
- **请求头**: `Authorization: Bearer {admin_token}`
- **请求体**:
  ```json
  {
    "title": "月跑量目标",
    "current_value": 15.5,
    "target_value": 50.0,
    "category": "距离",
    "deadline": "2025-06-30"
  }
  ```
- **响应**:
  ```json
  {
    "code": 200,
    "message": "进度目标添加成功"
  }
  ```

### 数据导出
- **URL**: `/api/admin/export/users`
- **方法**: `GET`
- **描述**: 导出用户数据（CSV格式）
- **请求头**: `Authorization: Bearer {admin_token}`
- **查询参数**:
  - `start_date`: 开始日期（可选）
  - `end_date`: 结束日期（可选）
- **响应**: CSV文件下载

### 批量导入
- **URL**: `/api/admin/import/users`
- **方法**: `POST`
- **描述**: 批量导入用户数据
- **请求头**: `Authorization: Bearer {admin_token}`
- **请求体**: 
  - Content-Type: multipart/form-data
  - file: CSV文件
- **响应**:
  ```json
  {
    "code": 200,
    "message": "导入成功",
    "data": {
      "total": 10,
      "success": 8,
      "failed": 2,
      "errors": [
        {
          "row": 3,
          "error": "用户名已存在"
        },
        {
          "row": 5,
          "error": "邮箱格式无效"
        }
      ]
    }
  }
  ```