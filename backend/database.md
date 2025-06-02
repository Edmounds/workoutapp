用户是唯一的，mysql和mongodb都通过同一个用户名来进行搜索数据
例如用户edmounds。

mysql是用来存储用户名字、邮箱、密码，以及经过处理之后的运动数据，比如今天的平均心率、总运动距离.
mongodb是用来存储设备产生的运动数据


// 用户设备数据集合 MongoDB 
{
  "_id": ObjectId(),
  "userId": ObjectId(),  // 对应MySQL中的用户ID
  "username": "String",  // 用户名，冗余存储便于查询
  "deviceId": "String",  // 设备标识
  "timestamp": ISODate(),
  "date": "YYYY-MM-DD",
  "timeOfDay": "HH:MM:SS",
  
  // 心率数据 - 详细时间序列
  "heartRate": [
    { "value": Number, "timestamp": ISODate() }
  ],
  
  // 步频数据
  "stepRate": [
    { "value": Number, "timestamp": ISODate() }
  ],
  
  // 步数数据
  "steps": [
    { "value": Number, "timestamp": ISODate() }
  ],
  
  // 血氧数据
  "bloodOxygen": [
    { "value": Number, "timestamp": ISODate() }
  ],
  
  // 详细活动数据
  "activities": [
    {
      "type": "String",  // 活动类型：步行、跑步、骑行等
      "startTime": ISODate(),
      "endTime": ISODate(),
      "duration": Number,  // 以秒为单位
      "distance": Number,  // 以米为单位
      "pace": [
        { "value": Number, "timestamp": ISODate() }
      ],
      "heartRate": [
        { "value": Number, "timestamp": ISODate() }
      ],
      "location": [
        {
          "latitude": Number,
          "longitude": Number,
          "elevation": Number,
          "timestamp": ISODate()
        }
      ],
      "calories": Number
    }
  ],
  
  "createTime": ISODate(),
  "updateTime": ISODate()
}

// 健康指标汇总集合 - 每小时汇总
{
  "_id": ObjectId(),
  "userId": ObjectId(),
  "username": "String",
  "date": "YYYY-MM-DD",
  "hour": Number,  // 0-23
  "avgHeartRate": Number,
  "maxHeartRate": Number,
  "minHeartRate": Number,
  "avgStepRate": Number,
  "totalSteps": Number,
  "avgBloodOxygen": Number,
  "healthIndex": Number,
  "stressIndex": Number,
  "createTime": ISODate()
}

//MySQL
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    nickname VARCHAR(50),
    avatar_url VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 运动数据汇总表（每日汇总）
CREATE TABLE daily_sport_summary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    avg_heart_rate FLOAT,
    max_heart_rate INT,
    min_heart_rate INT,
    avg_step_rate FLOAT,
    total_steps INT,
    total_distance FLOAT,
    total_duration INT,  -- 以分钟为单位
    calories_burned INT,
    blood_oxygen FLOAT,
    health_index INT,
    stress_index INT,
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE KEY unique_user_date (user_id, date)
);

-- 成就表
CREATE TABLE achievements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon_url VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 用户成就关联表
CREATE TABLE user_achievements (
    user_id INT NOT NULL,
    achievement_id INT NOT NULL,
    unlocked_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, achievement_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (achievement_id) REFERENCES achievements(id)
);

-- 运动类型表
CREATE TABLE workout_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    icon_url VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 用户运动记录表（每次运动）
CREATE TABLE workouts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    workout_type_id INT NOT NULL,
    date DATE NOT NULL,
    duration INT,  -- 以分钟为单位
    distance FLOAT,
    avg_pace FLOAT,
    avg_heart_rate FLOAT,
    calories_burned INT,
    notes TEXT,
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (workout_type_id) REFERENCES workout_types(id)
);

数据流设计
设备数据流：

设备 -> MongoDB（原始数据）
数据处理服务 -> MongoDB（处理后的小时统计数据）
数据处理服务 -> MySQL（处理后的每日统计数据）
用户数据流：

用户注册/登录 -> MySQL（用户信息）
用户运动记录 -> MySQL（运动记录）
用户成就解锁 -> MySQL（成就记录）
数据同步策略
设备数据同步：

设备收集的数据首先存储到MongoDB
定时任务（如每小时）处理原始数据并生成汇总
每日定时任务计算日汇总数据并存入MySQL
用户唯一性保证：

使用用户ID作为两个数据库的关联键
MySQL中使用users表作为主用户表
MongoDB中的userId字段引用MySQL的用户ID
保留username字段在MongoDB中用于兼容性和快速查询
优势分析
性能优化：

MySQL处理结构化数据和关系查询
MongoDB处理大量时序数据和非结构化数据
扩展性：

可根据业务增长轻松水平扩展MongoDB
用户核心数据保持在MySQL中确保可靠性
查询效率：

常用数据汇总在MySQL中，方便快速查询
详细原始数据在MongoDB中，支持复杂分析
数据安全：

核心用户数据在关系型数据库中更安全
大数据存储在MongoDB中更灵活