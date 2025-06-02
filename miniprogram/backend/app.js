const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const cors = require('cors');
const bcrypt = require('bcrypt');

// 创建Express应用
const app = express();
const port = 3000;

// 中间件
app.use(bodyParser.json());
app.use(cors());

// MongoDB连接
mongoose.connect('mongodb://localhost:27017/workout_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB连接成功');
}).catch(err => {
  console.error('MongoDB连接失败', err);
});

// MySQL连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password', // 注意：生产环境应使用环境变量
  database: 'health_app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 测试MySQL连接
async function testMySQLConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('MySQL连接成功');
    connection.release();
  } catch (err) {
    console.error('MySQL连接失败', err);
  }
}

testMySQLConnection();

// JWT密钥
const JWT_SECRET = 'your_jwt_secret_key'; // 注意：生产环境应使用环境变量
const SALT_ROUNDS = 10; // bcrypt加密轮数

// 定义MongoDB数据模型
// 健康数据原始记录模型
const deviceDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // MongoDB的用户ID
  mysqlUserId: { type: Number }, // MySQL的用户ID
  username: { type: String }, // 冗余存储用户名
  deviceId: { type: String }, // 设备标识
  timestamp: { type: Date, default: Date.now },
  date: String, // YYYY-MM-DD
  timeOfDay: String, // HH:MM:SS
  
  // 心率数据 - 详细时间序列
  heartRate: [{
    value: Number,
    timestamp: Date
  }],
  
  // 步频数据
  stepRate: [{
    value: Number,
    timestamp: Date
  }],
  
  // 步数数据
  steps: [{
    value: Number,
    timestamp: Date
  }],
  
  // 血氧数据
  bloodOxygen: [{
    value: Number,
    timestamp: Date
  }],
  
  // 详细活动数据
  activities: [{
    type: String, // 活动类型：步行、跑步、骑行等
    startTime: Date,
    endTime: Date,
    duration: Number, // 以秒为单位
    distance: Number, // 以米为单位
    pace: [{
      value: Number,
      timestamp: Date
    }],
    heartRate: [{
      value: Number,
      timestamp: Date
    }],
    location: [{
      latitude: Number,
      longitude: Number,
      elevation: Number,
      timestamp: Date
    }],
    calories: Number
  }],
  
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
});

// 健康指标每小时汇总模型
const healthSummarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  mysqlUserId: { type: Number },
  username: { type: String },
  date: String, // YYYY-MM-DD
  hour: Number, // 0-23
  avgHeartRate: Number,
  maxHeartRate: Number,
  minHeartRate: Number,
  avgStepRate: Number,
  totalSteps: Number,
  avgBloodOxygen: Number,
  healthIndex: Number,
  stressIndex: Number,
  createTime: { type: Date, default: Date.now }
});

// 用户临时数据模型 (用于迁移期间)
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  nickname: String,
  avatarUrl: String,
  mysqlId: { type: Number }, // 对应MySQL中的ID
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
});

// 兼容旧模型（为了迁移期间使用）
const healthDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.Mixed }, // 可能是ObjectId或字符串
  timestamp: { type: Date, default: Date.now },
  date: String,
  heartRateData: [Number],
  stepRateData: [Number],
  paceData: [Number],
  weekData: [Number],
  bloodOxygen: Number,
  healthIndex: Number,
  stressIndex: Number,
  currentHeartRate: Number,
  currentStepRate: Number,
  metrics: [{
    type: String,
    value: Number,
    timestamp: Date
  }],
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
});

const sportDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.Mixed },
  totalWorkouts: { type: Number, default: 0 },
  totalDuration: { type: Number, default: 0 },
  totalDistance: { type: Number, default: 0 },
  achievements: [{
    id: Number,
    name: String,
    icon: String,
    unlocked: { type: Boolean, default: false }
  }],
  history: [{
    type: String,
    date: String,
    details: String,
    createTime: { type: Date, default: Date.now }
  }],
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
});

// 初始化MongoDB模型
const User = mongoose.model('User', userSchema);
const DeviceData = mongoose.model('DeviceData', deviceDataSchema);
const HealthSummary = mongoose.model('HealthSummary', healthSummarySchema);
const HealthData = mongoose.model('HealthData', healthDataSchema, 'user_health_data');
const SportData = mongoose.model('SportData', sportDataSchema);

// MySQL数据访问函数
const mysqlDB = {
  // 用户相关
  async createUser(username, hashedPassword, nickname, avatarUrl) {
    const sql = `
      INSERT INTO users (username, password, nickname, avatar_url) 
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [username, hashedPassword, nickname || username, avatarUrl]);
    return result.insertId;
  },
  
  async getUserById(id) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },
  
  async getUserByUsername(username) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
  },
  
  // 运动数据相关
  async getDailySportSummary(userId, date) {
    const [rows] = await pool.execute(
      'SELECT * FROM daily_sport_summary WHERE user_id = ? AND date = ?', 
      [userId, date]
    );
    return rows[0];
  },
  
  async createDailySportSummary(data) {
    const {
      userId, date, avgHeartRate, maxHeartRate, minHeartRate, avgStepRate,
      totalSteps, totalDistance, totalDuration, caloriesBurned, 
      bloodOxygen, healthIndex, stressIndex
    } = data;
    
    const sql = `
      INSERT INTO daily_sport_summary 
      (user_id, date, avg_heart_rate, max_heart_rate, min_heart_rate, avg_step_rate,
       total_steps, total_distance, total_duration, calories_burned, 
       blood_oxygen, health_index, stress_index) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await pool.execute(sql, [
      userId, date, avgHeartRate, maxHeartRate, minHeartRate, avgStepRate,
      totalSteps, totalDistance, totalDuration, caloriesBurned, 
      bloodOxygen, healthIndex, stressIndex
    ]);
    
    return result.insertId;
  },
  
  async updateDailySportSummary(id, data) {
    const fields = Object.keys(data).map(key => {
      // 将驼峰命名转换为下划线命名
      const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
      return `${snakeKey} = ?`;
    });
    
    const values = [...Object.values(data), id];
    
    const sql = `UPDATE daily_sport_summary SET ${fields.join(', ')} WHERE id = ?`;
    const [result] = await pool.execute(sql, values);
    
    return result.affectedRows;
  },
  
  // 成就相关
  async getUserAchievements(userId) {
    const sql = `
      SELECT a.id, a.name, a.description, a.icon_url, ua.unlocked_time 
      FROM achievements a
      JOIN user_achievements ua ON a.id = ua.achievement_id
      WHERE ua.user_id = ?
    `;
    const [rows] = await pool.execute(sql, [userId]);
    return rows;
  },
  
  async unlockAchievement(userId, achievementId) {
    const sql = `
      INSERT INTO user_achievements (user_id, achievement_id) 
      VALUES (?, ?) 
      ON DUPLICATE KEY UPDATE unlocked_time = CURRENT_TIMESTAMP
    `;
    const [result] = await pool.execute(sql, [userId, achievementId]);
    return result.affectedRows;
  },
  
  // 运动记录相关
  async addWorkout(data) {
    const {
      userId, workoutTypeId, date, duration, distance, 
      avgPace, avgHeartRate, caloriesBurned, notes
    } = data;
    
    const sql = `
      INSERT INTO workouts 
      (user_id, workout_type_id, date, duration, distance, 
       avg_pace, avg_heart_rate, calories_burned, notes) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await pool.execute(sql, [
      userId, workoutTypeId, date, duration, distance, 
      avgPace, avgHeartRate, caloriesBurned, notes
    ]);
    
    return result.insertId;
  },
  
  async getWorkouts(userId, limit = 10, offset = 0) {
    const sql = `
      SELECT w.*, wt.name as workout_type, wt.icon_url 
      FROM workouts w
      JOIN workout_types wt ON w.workout_type_id = wt.id
      WHERE w.user_id = ?
      ORDER BY w.date DESC, w.create_time DESC
      LIMIT ? OFFSET ?
    `;
    
    const [rows] = await pool.execute(sql, [userId, limit, offset]);
    return rows;
  },
  
  // 数据库初始化
  async initializeDatabase() {
    try {
      // 检查是否需要创建表
      const tablesExist = await this.checkTablesExist();
      
      if (!tablesExist) {
        console.log('MySQL表不存在，正在创建...');
        await this.createTables();
      }
      
      // 检查并创建workout_types表的基础数据
      const [workoutTypes] = await pool.execute('SELECT COUNT(*) as count FROM workout_types');
      
      if (workoutTypes[0].count === 0) {
        // 初始化运动类型
        const types = [
          ['跑步', 'https://example.com/running.png'],
          ['步行', 'https://example.com/walking.png'],
          ['骑行', 'https://example.com/cycling.png'],
          ['游泳', 'https://example.com/swimming.png'],
          ['力量训练', 'https://example.com/strength.png'],
          ['瑜伽', 'https://example.com/yoga.png']
        ];
        
        for (const [name, iconUrl] of types) {
          await pool.execute(
            'INSERT INTO workout_types (name, icon_url) VALUES (?, ?)',
            [name, iconUrl]
          );
        }
        
        console.log('初始化运动类型完成');
      }
      
      // 检查并创建achievements表的基础数据
      const [achievements] = await pool.execute('SELECT COUNT(*) as count FROM achievements');
      
      if (achievements[0].count === 0) {
        // 初始化成就
        const achievementList = [
          ['马拉松完赛', '跑步累计距离超过42.195公里', 'https://example.com/marathon.png'],
          ['连续训练30天', '连续30天有记录运动数据', 'https://example.com/streak.png'],
          ['速度之星', '5公里跑步速度达到5分钟/公里以下', 'https://example.com/speed.png'],
          ['年度榜首', '年度运动时长进入前10%', 'https://example.com/leader.png']
        ];
        
        for (const [name, description, iconUrl] of achievementList) {
          await pool.execute(
            'INSERT INTO achievements (name, description, icon_url) VALUES (?, ?, ?)',
            [name, description, iconUrl]
          );
        }
        
        console.log('初始化成就完成');
      }
      
      console.log('MySQL数据库初始化完成');
    } catch (err) {
      console.error('初始化MySQL数据库失败:', err);
    }
  },
  
  async checkTablesExist() {
    try {
      // 查询users表是否存在
      const [rows] = await pool.execute(`
        SELECT COUNT(*) as count 
        FROM information_schema.tables 
        WHERE table_schema = 'health_app' 
        AND table_name = 'users'
      `);
      
      return rows[0].count > 0;
    } catch (err) {
      console.error('检查表是否存在失败:', err);
      return false;
    }
  },
  
  async createTables() {
    try {
      // 创建users表
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE,
          nickname VARCHAR(50),
          avatar_url VARCHAR(255),
          create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
          update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
      `);
      
      // 创建daily_sport_summary表
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS daily_sport_summary (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT NOT NULL,
          date DATE NOT NULL,
          avg_heart_rate FLOAT,
          max_heart_rate INT,
          min_heart_rate INT,
          avg_step_rate FLOAT,
          total_steps INT,
          total_distance FLOAT,
          total_duration INT,
          calories_burned INT,
          blood_oxygen FLOAT,
          health_index INT,
          stress_index INT,
          create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
          update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id),
          UNIQUE KEY unique_user_date (user_id, date)
        )
      `);
      
      // 创建achievements表
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS achievements (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          description TEXT,
          icon_url VARCHAR(255),
          create_time DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      // 创建user_achievements表
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS user_achievements (
          user_id INT NOT NULL,
          achievement_id INT NOT NULL,
          unlocked_time DATETIME DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (user_id, achievement_id),
          FOREIGN KEY (user_id) REFERENCES users(id),
          FOREIGN KEY (achievement_id) REFERENCES achievements(id)
        )
      `);
      
      // 创建workout_types表
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS workout_types (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          icon_url VARCHAR(255),
          create_time DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      // 创建workouts表
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS workouts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT NOT NULL,
          workout_type_id INT NOT NULL,
          date DATE NOT NULL,
          duration INT,
          distance FLOAT,
          avg_pace FLOAT,
          avg_heart_rate FLOAT,
          calories_burned INT,
          notes TEXT,
          create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
          update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id),
          FOREIGN KEY (workout_type_id) REFERENCES workout_types(id)
        )
      `);
      
      console.log('MySQL表创建成功');
      return true;
    } catch (err) {
      console.error('创建MySQL表失败:', err);
      return false;
    }
  }
};

// 中间件：验证TOKEN
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, message: '未提供认证令牌' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: '令牌无效或已过期' });
    }
    req.user = user;
    next();
  });
};

// 数据同步助手函数
const dataSync = {
  // 将MongoDB中的数据同步到MySQL
  async syncDataToMySQL(mongoUserId, mysqlUserId) {
    try {
      // 获取MongoDB中的运动数据
      const sportData = await SportData.findOne({ userId: mongoUserId });
      
      if (!sportData) {
        console.log(`用户 ${mongoUserId} 没有运动数据，跳过同步`);
        return;
      }
      
      // 获取今天的日期
      const today = new Date();
      const dateString = today.toISOString().split('T')[0];
      
      // 检查MySQL中是否已有今天的运动数据
      const existingSummary = await mysqlDB.getDailySportSummary(mysqlUserId, dateString);
      
      if (existingSummary) {
        // 更新现有汇总
        await mysqlDB.updateDailySportSummary(existingSummary.id, {
          totalWorkouts: sportData.totalWorkouts,
          totalDuration: sportData.totalDuration,
          totalDistance: sportData.totalDistance
        });
      } else {
        // 创建新的汇总
        await mysqlDB.createDailySportSummary({
          userId: mysqlUserId,
          date: dateString,
          totalSteps: 0, // 填充默认值
          totalDistance: sportData.totalDistance,
          totalDuration: sportData.totalDuration,
          caloriesBurned: 0 // 填充默认值
        });
      }
      
      // 同步成就
      if (sportData.achievements) {
        for (const achievement of sportData.achievements) {
          if (achievement.unlocked) {
            await mysqlDB.unlockAchievement(mysqlUserId, achievement.id);
          }
        }
      }
      
      console.log(`用户 ${mongoUserId} 数据同步到MySQL完成`);
    } catch (err) {
      console.error(`数据同步到MySQL失败:`, err);
    }
  },
  
  // 根据原始数据生成小时汇总
  async generateHourlySummary(userId, mysqlUserId, username, date) {
    try {
      // 转换日期格式
      const targetDate = new Date(date);
      const startTime = new Date(targetDate);
      startTime.setHours(0, 0, 0, 0);
      const endTime = new Date(targetDate);
      endTime.setHours(23, 59, 59, 999);
      
      // 获取用户当天所有的原始设备数据
      const deviceData = await DeviceData.find({
        $or: [
          { userId: userId },
          { mysqlUserId: mysqlUserId },
          { username: username }
        ],
        timestamp: { $gte: startTime, $lte: endTime }
      });
      
      if (!deviceData || deviceData.length === 0) {
        console.log(`用户 ${username} 在 ${date} 没有原始设备数据`);
        return;
      }
      
      // 按小时分组数据
      const hourlyData = new Array(24).fill().map(() => ({
        heartRates: [],
        stepRates: [],
        steps: [],
        bloodOxygens: []
      }));
      
      // 汇总每个设备数据
      for (const data of deviceData) {
        // 处理心率数据
        for (const hr of data.heartRate || []) {
          if (hr.timestamp && hr.value) {
            const hour = new Date(hr.timestamp).getHours();
            hourlyData[hour].heartRates.push(hr.value);
          }
        }
        
        // 处理步频数据
        for (const sr of data.stepRate || []) {
          if (sr.timestamp && sr.value) {
            const hour = new Date(sr.timestamp).getHours();
            hourlyData[hour].stepRates.push(sr.value);
          }
        }
        
        // 处理步数数据
        for (const s of data.steps || []) {
          if (s.timestamp && s.value) {
            const hour = new Date(s.timestamp).getHours();
            hourlyData[hour].steps.push(s.value);
          }
        }
        
        // 处理血氧数据
        for (const bo of data.bloodOxygen || []) {
          if (bo.timestamp && bo.value) {
            const hour = new Date(bo.timestamp).getHours();
            hourlyData[hour].bloodOxygens.push(bo.value);
          }
        }
      }
      
      // 为每个小时生成汇总
      for (let hour = 0; hour < 24; hour++) {
        const hourData = hourlyData[hour];
        
        // 只有在有数据的情况下才创建汇总
        if (hourData.heartRates.length === 0 && hourData.steps.length === 0) {
          continue;
        }
        
        // 计算平均值、最大值和最小值
        const avgHeartRate = hourData.heartRates.length > 0 ? 
          hourData.heartRates.reduce((sum, val) => sum + val, 0) / hourData.heartRates.length : 0;
          
        const maxHeartRate = hourData.heartRates.length > 0 ? 
          Math.max(...hourData.heartRates) : 0;
          
        const minHeartRate = hourData.heartRates.length > 0 ? 
          Math.min(...hourData.heartRates) : 0;
          
        const avgStepRate = hourData.stepRates.length > 0 ? 
          hourData.stepRates.reduce((sum, val) => sum + val, 0) / hourData.stepRates.length : 0;
          
        const totalSteps = hourData.steps.length > 0 ? 
          hourData.steps.reduce((sum, val) => sum + val, 0) : 0;
          
        const avgBloodOxygen = hourData.bloodOxygens.length > 0 ? 
          hourData.bloodOxygens.reduce((sum, val) => sum + val, 0) / hourData.bloodOxygens.length : 0;
        
        // 创建或更新小时汇总
        await HealthSummary.findOneAndUpdate(
          {
            userId: userId,
            mysqlUserId: mysqlUserId,
            username: username,
            date: date,
            hour: hour
          },
          {
            avgHeartRate,
            maxHeartRate,
            minHeartRate,
            avgStepRate,
            totalSteps,
            avgBloodOxygen,
            // 健康指数和压力指数可以基于心率、步数等计算得出
            healthIndex: Math.round(((avgHeartRate / 100) * 0.3 + (avgBloodOxygen / 100) * 0.7) * 100),
            stressIndex: Math.round((maxHeartRate - minHeartRate) / 2)
          },
          { upsert: true, new: true }
        );
      }
      
      console.log(`用户 ${username} 在 ${date} 的小时汇总数据生成完成`);
    } catch (err) {
      console.error(`生成小时汇总失败:`, err);
    }
  },
  
  // 根据小时汇总生成每日汇总并同步到MySQL
  async generateDailySummary(userId, mysqlUserId, username, date) {
    try {
      // 获取指定日期的所有小时汇总
      const hourSummaries = await HealthSummary.find({
        $or: [
          { userId: userId },
          { mysqlUserId: mysqlUserId },
          { username: username }
        ],
        date: date
      });
      
      if (!hourSummaries || hourSummaries.length === 0) {
        console.log(`用户 ${username} 在 ${date} 没有小时汇总数据`);
        return;
      }
      
      // 计算日汇总
      const heartRates = hourSummaries.flatMap(h => h.avgHeartRate ? [h.avgHeartRate] : []);
      const maxHeartRates = hourSummaries.flatMap(h => h.maxHeartRate ? [h.maxHeartRate] : []);
      const minHeartRates = hourSummaries.flatMap(h => h.minHeartRate ? [h.minHeartRate] : []);
      const stepRates = hourSummaries.flatMap(h => h.avgStepRate ? [h.avgStepRate] : []);
      const steps = hourSummaries.map(h => h.totalSteps || 0);
      const bloodOxygens = hourSummaries.flatMap(h => h.avgBloodOxygen ? [h.avgBloodOxygen] : []);
      const healthIndices = hourSummaries.flatMap(h => h.healthIndex ? [h.healthIndex] : []);
      const stressIndices = hourSummaries.flatMap(h => h.stressIndex ? [h.stressIndex] : []);
      
      const avgHeartRate = heartRates.length > 0 ? 
        heartRates.reduce((sum, val) => sum + val, 0) / heartRates.length : 0;
        
      const maxHeartRate = maxHeartRates.length > 0 ? 
        Math.max(...maxHeartRates) : 0;
        
      const minHeartRate = minHeartRates.length > 0 ? 
        Math.min(...minHeartRates) : 0;
        
      const avgStepRate = stepRates.length > 0 ? 
        stepRates.reduce((sum, val) => sum + val, 0) / stepRates.length : 0;
        
      const totalSteps = steps.reduce((sum, val) => sum + val, 0);
      
      const avgBloodOxygen = bloodOxygens.length > 0 ? 
        bloodOxygens.reduce((sum, val) => sum + val, 0) / bloodOxygens.length : 0;
        
      const healthIndex = healthIndices.length > 0 ? 
        Math.round(healthIndices.reduce((sum, val) => sum + val, 0) / healthIndices.length) : 0;
        
      const stressIndex = stressIndices.length > 0 ? 
        Math.round(stressIndices.reduce((sum, val) => sum + val, 0) / stressIndices.length) : 0;
      
      // 计算粗略的消耗卡路里 (示例计算方法)
      const caloriesBurned = Math.round(totalSteps * 0.05);
      
      // 同步到MySQL的daily_sport_summary表
      if (mysqlUserId) {
        const existingSummary = await mysqlDB.getDailySportSummary(mysqlUserId, date);
        
        // 从SportData获取总运动距离和时长
        const sportData = await SportData.findOne({ userId });
        const totalDistance = sportData ? sportData.totalDistance : 0;
        const totalDuration = sportData ? sportData.totalDuration : 0;
        
        if (existingSummary) {
          // 更新现有记录
          await mysqlDB.updateDailySportSummary(existingSummary.id, {
            avgHeartRate,
            maxHeartRate,
            minHeartRate,
            avgStepRate,
            totalSteps,
            bloodOxygen: avgBloodOxygen,
            healthIndex,
            stressIndex,
            caloriesBurned,
            totalDistance,
            totalDuration
          });
        } else {
          // 创建新记录
          await mysqlDB.createDailySportSummary({
            userId: mysqlUserId,
            date,
            avgHeartRate,
            maxHeartRate,
            minHeartRate,
            avgStepRate,
            totalSteps,
            totalDistance,
            totalDuration,
            caloriesBurned,
            bloodOxygen: avgBloodOxygen,
            healthIndex,
            stressIndex
          });
        }
        
        console.log(`用户 ${username} 在 ${date} 的日汇总数据已同步到MySQL`);
      }
    } catch (err) {
      console.error(`生成日汇总并同步到MySQL失败:`, err);
    }
  }
};

// 登录接口
app.post('/api/login', async (req, res) => {
  try {
    console.log('接收到登录请求, 参数:', req.body);
    
    const { username, password } = req.body;
    
    // 简单验证
    if (!username || !password) {
      console.log('登录失败: 用户名或密码为空');
      return res.status(400).json({ 
        success: false, 
        message: '请提供用户名和密码' 
      });
    }
    
    // 首先尝试从MySQL中查找用户
    let mysqlUser = null;
    try {
      mysqlUser = await mysqlDB.getUserByUsername(username);
    } catch (err) {
      console.log('MySQL查询失败，使用MongoDB作为备选:', err.message);
    }
    
    if (mysqlUser) {
      // 验证密码
      const passwordMatch = await bcrypt.compare(password, mysqlUser.password);
      if (!passwordMatch) {
        return res.status(401).json({ 
          success: false, 
          message: '密码错误' 
        });
      }
      
      // 生成JWT令牌（使用MySQL用户ID）
      const token = jwt.sign({ 
        id: mysqlUser.id, 
        username: mysqlUser.username,
        source: 'mysql' 
      }, JWT_SECRET, { expiresIn: '30d' });
      
      console.log('MySQL用户登录成功, 用户:', username);
      
      return res.json({
        success: true,
        token,
        userInfo: {
          nickname: mysqlUser.nickname,
          avatarUrl: mysqlUser.avatar_url
        },
        message: '登录成功'
      });
    }
    
    // 如果在MySQL中未找到用户，尝试MongoDB (兼容旧系统)
    const mongoUser = await User.findOne({ username });
    if (!mongoUser) {
      return res.status(401).json({ 
        success: false, 
        message: '用户不存在' 
      });
    }
    
    // 对于MongoDB存储的用户，检查密码
    // 注意：MongoDB中存储的密码可能是明文的（旧系统），或者使用bcrypt加密（新系统）
    let passwordMatch = false;
    if (mongoUser.password.startsWith('$2')) {
      // 如果密码以$2开头，说明是bcrypt加密的
      passwordMatch = await bcrypt.compare(password, mongoUser.password);
    } else {
      // 旧系统可能使用明文密码
      passwordMatch = (mongoUser.password === password);
    }
    
    if (!passwordMatch) {
      return res.status(401).json({ 
        success: false, 
        message: '密码错误' 
      });
    }
    
    // 生成JWT令牌（使用MongoDB用户ID）
    const token = jwt.sign({ 
      id: mongoUser._id, 
      username: mongoUser.username,
      source: 'mongodb'
    }, JWT_SECRET, { expiresIn: '30d' });
    
    console.log('MongoDB用户登录成功, 用户:', username);
    
    // 考虑将MongoDB用户迁移到MySQL（可选的迁移逻辑）
    try {
      if (!mongoUser.mysqlId) {
        // 如果用户还没有对应的MySQL ID，创建一个MySQL用户
        const hashedPassword = mongoUser.password.startsWith('$2') 
          ? mongoUser.password 
          : await bcrypt.hash(password, SALT_ROUNDS);
          
        const mysqlId = await mysqlDB.createUser(
          username, 
          hashedPassword, 
          mongoUser.nickname, 
          mongoUser.avatarUrl
        );
        
        // 更新MongoDB用户的mysqlId字段
        mongoUser.mysqlId = mysqlId;
        await mongoUser.save();
        
        console.log(`用户 ${username} 已迁移到MySQL，ID: ${mysqlId}`);
      }
    } catch (migrationErr) {
      console.error('用户迁移失败:', migrationErr);
      // 迁移失败不影响登录过程
    }
    
    res.json({
      success: true,
      token,
      userInfo: {
        nickname: mongoUser.nickname,
        avatarUrl: mongoUser.avatarUrl
      },
      message: '登录成功'
    });
  } catch (error) {
    console.error('登录错误', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
});

// 注册接口
app.post('/api/register', async (req, res) => {
  try {
    const { username, password, nickname, email } = req.body;
    
    // 验证输入
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: '请提供用户名和密码' 
      });
    }
    
    // 增加密码复杂度验证
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: '密码长度需至少8位'
      });
    }
    
    // 检查密码是否包含数字
    const hasNumber = /\d/.test(password);
    // 检查密码是否包含字母
    const hasLetter = /[a-zA-Z]/.test(password);
    
    if (!hasNumber || !hasLetter) {
      return res.status(400).json({
        success: false,
        message: '密码必须包含字母和数字'
      });
    }
    
    // 首先检查MySQL中用户是否存在
    let mysqlUserExists = false;
    try {
      const existingMysqlUser = await mysqlDB.getUserByUsername(username);
      mysqlUserExists = !!existingMysqlUser;
    } catch (err) {
      console.log('MySQL查询失败:', err.message);
    }
    
    if (mysqlUserExists) {
      return res.status(400).json({ 
        success: false, 
        message: '用户名已存在' 
      });
    }
    
    // 检查MongoDB中用户是否存在
    const existingMongoUser = await User.findOne({ username });
    if (existingMongoUser) {
      return res.status(400).json({ 
        success: false, 
        message: '用户名已存在' 
      });
    }
    
    // 加密密码
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    
    // 在MySQL中创建用户
    const mysqlUserId = await mysqlDB.createUser(
      username, 
      hashedPassword, 
      nickname || username, 
      'https://example.com/default-avatar.jpg' // 默认头像
    );
    
    // 在MySQL中初始化成就
    const achievements = await pool.execute('SELECT id FROM achievements');
    for (const achievement of achievements[0]) {
      await pool.execute(
        'INSERT INTO user_achievements (user_id, achievement_id, unlocked_time) VALUES (?, ?, NULL)',
        [mysqlUserId, achievement.id]
      );
    }
    
    // 为了兼容性，也在MongoDB中创建用户
    const mongoUser = new User({
      username,
      password: hashedPassword,
      nickname: nickname || username,
      avatarUrl: 'https://example.com/default-avatar.jpg',
      mysqlId: mysqlUserId
    });
    await mongoUser.save();
    
    // 创建空的运动数据记录
    const sportData = new SportData({
      userId: mongoUser._id,
      achievements: [
        { id: 1, name: '马拉松完赛', icon: 'https://example.com/marathon.png', unlocked: false },
        { id: 2, name: '连续训练30天', icon: 'https://example.com/streak.png', unlocked: false },
        { id: 3, name: '速度之星', icon: 'https://example.com/speed.png', unlocked: false },
        { id: 4, name: '年度榜首', icon: 'https://example.com/leader.png', unlocked: false }
      ]
    });
    await sportData.save();
    
    res.status(201).json({
      success: true,
      message: '注册成功'
    });
  } catch (error) {
    console.error('注册错误', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
});

// 获取用户运动数据
app.get('/api/sportdata', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const source = req.user.source || 'mongodb'; // 默认为mongodb
    
    if (source === 'mysql') {
      // 从MySQL中获取运动数据
      const workouts = await mysqlDB.getWorkouts(userId);
      const achievements = await mysqlDB.getUserAchievements(userId);
      
      // 计算汇总数据
      let totalWorkouts = workouts.length;
      let totalDuration = 0;
      let totalDistance = 0;
      
      for (const workout of workouts) {
        totalDuration += workout.duration || 0;
        totalDistance += workout.distance || 0;
      }
      
      // 将成就格式化为前端期望的格式
      const formattedAchievements = achievements.map(a => ({
        id: a.id,
        name: a.name,
        icon: a.icon_url,
        unlocked: !!a.unlocked_time
      }));
      
      // 将运动记录格式化为前端期望的格式
      const history = workouts.map(w => ({
        type: w.workout_type,
        date: w.date,
        details: `${w.duration}分钟 · ${w.distance ? w.distance + '公里' : ''} ${w.notes || ''}`,
        createTime: w.create_time
      }));
      
      return res.json({
        success: true,
        data: {
          totalWorkouts,
          totalDuration,
          totalDistance,
          achievements: formattedAchievements,
          history
        }
      });
    } else {
      // 从MongoDB中获取运动数据 (兼容旧系统)
      const sportData = await SportData.findOne({ userId });
      
      if (!sportData) {
        return res.status(404).json({ success: false, message: '未找到运动数据' });
      }
      
      res.json({
        success: true,
        data: {
          totalWorkouts: sportData.totalWorkouts,
          totalDuration: sportData.totalDuration,
          totalDistance: sportData.totalDistance,
          achievements: sportData.achievements,
          history: sportData.history
        }
      });
    }
  } catch (error) {
    console.error('获取运动数据错误', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
});

// 添加运动记录
app.post('/api/workout', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const source = req.user.source || 'mongodb';
    const { type, duration, distance, notes, workoutTypeId } = req.body;
    
    // 格式化当前日期
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    
    if (source === 'mysql') {
      // 在MySQL中添加运动记录
      const typeId = workoutTypeId || 1; // 默认为跑步(1)
      
      // 计算配速 (分钟/公里)
      const avgPace = distance ? duration / distance : null;
      
      // 添加到MySQL
      await mysqlDB.addWorkout({
        userId,
        workoutTypeId: typeId,
        date: dateString,
        duration: Number(duration) || 0,
        distance: Number(distance) || 0,
        avgPace,
        avgHeartRate: null, // 这里可能需要从设备数据中获取
        caloriesBurned: Math.round((Number(duration) || 0) * 7), // 粗略估算
        notes
      });
      
      // 检查并解锁成就
      await checkAndUnlockAchievements(userId);
      
      return res.json({
        success: true,
        message: '添加运动记录成功'
      });
    } else {
      // 在MongoDB中添加运动记录 (兼容旧系统)
      const sportData = await SportData.findOne({ userId });
      
      if (!sportData) {
        return res.status(404).json({ success: false, message: '未找到运动数据' });
      }
      
      // 添加新的运动记录
      sportData.history.unshift({
        type,
        date: dateString,
        details: `${duration}分钟 · ${distance ? distance + '公里' : ''} ${notes || ''}`,
        createTime: new Date()
      });
      
      // 更新总计数据
      sportData.totalWorkouts += 1;
      sportData.totalDuration += Number(duration) || 0;
      sportData.totalDistance += Number(distance) || 0;
      sportData.updateTime = new Date();
      
      // 检查成就
      // 示例：如果运动距离超过42.195公里，解锁马拉松成就
      if (sportData.totalDistance >= 42.195 && !sportData.achievements[0].unlocked) {
        sportData.achievements[0].unlocked = true;
      }
      
      // 示例：如果总运动次数达到30次，解锁连续训练30天成就
      if (sportData.totalWorkouts >= 30 && !sportData.achievements[1].unlocked) {
        sportData.achievements[1].unlocked = true;
      }
      
      await sportData.save();
      
      // 如果用户有MySQL ID，尝试将数据同步到MySQL
      const mongoUser = await User.findById(userId);
      if (mongoUser && mongoUser.mysqlId) {
        try {
          await dataSync.syncDataToMySQL(userId, mongoUser.mysqlId);
        } catch (syncErr) {
          console.error('数据同步到MySQL失败:', syncErr);
          // 同步失败不影响主流程
        }
      }
      
      res.json({
        success: true,
        message: '添加运动记录成功'
      });
    }
  } catch (error) {
    console.error('添加运动记录错误', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
});

// 获取用户健康数据
app.get('/api/healthdata', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const source = req.user.source || 'mongodb';
    
    if (source === 'mysql') {
      // 从MySQL中获取健康数据摘要
      const mysqlUser = await mysqlDB.getUserById(userId);
      
      if (!mysqlUser) {
        return res.status(404).json({ success: false, message: '未找到用户信息' });
      }
      
      // 获取今天的日期
      const today = new Date();
      const dateString = today.toISOString().split('T')[0];
      
      // 获取今天的汇总数据
      const summary = await mysqlDB.getDailySportSummary(userId, dateString);
      
      if (!summary) {
        // 如果今天没有数据，尝试从MongoDB获取原始数据并生成
        let mongoUser;
        try {
          mongoUser = await User.findOne({ mysqlId: userId });
        } catch (err) {
          console.error('MongoDB查询失败:', err);
        }
        
        if (mongoUser) {
          try {
            // 生成今天的汇总数据
            await dataSync.generateHourlySummary(
              mongoUser._id,
              userId,
              mongoUser.username,
              dateString
            );
            
            // 生成并同步日汇总
            await dataSync.generateDailySummary(
              mongoUser._id,
              userId,
              mongoUser.username,
              dateString
            );
            
            // 再次尝试获取汇总
            const newSummary = await mysqlDB.getDailySportSummary(userId, dateString);
            if (newSummary) {
              return generateHealthResponse(newSummary);
            }
          } catch (syncErr) {
            console.error('生成汇总数据失败:', syncErr);
          }
        }
        
        // 使用示例数据作为备选
        return res.json({
          success: true,
          data: generateDefaultHealthData()
        });
      }
      
      return generateHealthResponse(summary);
    } else {
      // 从MongoDB中获取健康数据 (兼容旧系统)
      const mongoUser = await User.findById(userId);
      
      if (!mongoUser) {
        return res.status(404).json({ success: false, message: '未找到用户信息' });
      }
      
      // 查询最新的一条健康数据
      const healthData = await HealthData.findOne({ userId })
        .sort({ timestamp: -1 })
        .limit(1);
      
      if (!healthData) {
        // 尝试使用username作为备选查询方式（兼容旧数据）
        const backupData = await HealthData.findOne({ userId: mongoUser.username })
          .sort({ timestamp: -1 })
          .limit(1);
        
        if (!backupData) {
          return res.status(404).json({ success: false, message: '未找到健康数据' });
        }
        
        res.json({
          success: true,
          data: {
            date: backupData.date,
            heartRateData: backupData.heartRateData,
            stepRateData: backupData.stepRateData,
            paceData: backupData.paceData,
            weekData: backupData.weekData,
            bloodOxygen: backupData.bloodOxygen,
            healthIndex: backupData.healthIndex,
            stressIndex: backupData.stressIndex,
            currentHeartRate: backupData.currentHeartRate,
            currentStepRate: backupData.currentStepRate,
            metrics: backupData.metrics
          }
        });
        return;
      }
      
      res.json({
        success: true,
        data: {
          date: healthData.date,
          heartRateData: healthData.heartRateData,
          stepRateData: healthData.stepRateData,
          paceData: healthData.paceData,
          weekData: healthData.weekData,
          bloodOxygen: healthData.bloodOxygen,
          healthIndex: healthData.healthIndex,
          stressIndex: healthData.stressIndex,
          currentHeartRate: healthData.currentHeartRate,
          currentStepRate: healthData.currentStepRate,
          metrics: healthData.metrics
        }
      });
    }
  } catch (error) {
    console.error('获取健康数据错误', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
  
  // 工具函数：根据MySQL汇总数据生成健康数据响应
  function generateHealthResponse(summary) {
    // 生成模拟的图表数据
    const heartRateData = generateMockChartData(60, 120);
    const stepRateData = generateMockChartData(60, 120);
    const paceData = generateMockChartData(4, 8);
    const weekData = [60, 75, 65, 70, 90, 80, 85]; // 一周的示例数据
    
    return res.json({
      success: true,
      data: {
        date: summary.date,
        heartRateData: heartRateData,
        stepRateData: stepRateData,
        paceData: paceData,
        weekData: weekData,
        bloodOxygen: summary.blood_oxygen || 98,
        healthIndex: summary.health_index || 85,
        stressIndex: summary.stress_index || 30,
        currentHeartRate: summary.avg_heart_rate || 75,
        currentStepRate: summary.avg_step_rate || 100,
        metrics: [
          { type: '平均心率', value: summary.avg_heart_rate || 75, timestamp: new Date() },
          { type: '最大心率', value: summary.max_heart_rate || 110, timestamp: new Date() },
          { type: '最低心率', value: summary.min_heart_rate || 60, timestamp: new Date() },
          { type: '总步数', value: summary.total_steps || 8000, timestamp: new Date() }
        ]
      }
    });
  }
  
  // 工具函数：生成模拟的图表数据
  function generateMockChartData(min, max, length = 24) {
    const data = [];
    for (let i = 0; i < length; i++) {
      data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
  }
  
  // 工具函数：生成默认健康数据
  function generateDefaultHealthData() {
    return {
      date: new Date().toISOString().split('T')[0],
      heartRateData: generateMockChartData(60, 120),
      stepRateData: generateMockChartData(60, 120),
      paceData: generateMockChartData(4, 8),
      weekData: [60, 75, 65, 70, 90, 80, 85],
      bloodOxygen: 98,
      healthIndex: 85,
      stressIndex: 30,
      currentHeartRate: 75,
      currentStepRate: 100,
      metrics: [
        { type: '平均心率', value: 75, timestamp: new Date() },
        { type: '最大心率', value: 110, timestamp: new Date() },
        { type: '最低心率', value: 60, timestamp: new Date() },
        { type: '总步数', value: 8000, timestamp: new Date() }
      ]
    };
  }
});

// 获取历史健康数据
app.get('/api/healthdata/history', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const source = req.user.source || 'mongodb';
    const { days = 7 } = req.query; // 默认获取7天的数据
    
    if (source === 'mysql') {
      // 从MySQL中获取历史健康数据
      const mysqlUser = await mysqlDB.getUserById(userId);
      
      if (!mysqlUser) {
        return res.status(404).json({ success: false, message: '未找到用户信息' });
      }
      
      // 计算日期范围
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - parseInt(days));
      
      // 查询指定日期范围内的日汇总数据
      const [summaries] = await pool.execute(`
        SELECT * FROM daily_sport_summary
        WHERE user_id = ? AND date BETWEEN ? AND ?
        ORDER BY date ASC
      `, [
        userId, 
        startDate.toISOString().split('T')[0],
        endDate.toISOString().split('T')[0]
      ]);
      
      if (!summaries || summaries.length === 0) {
        return res.status(404).json({ success: false, message: '未找到历史健康数据' });
      }
      
      // 提取历史数据中的关键指标
      const historyData = summaries.map(data => ({
        date: data.date,
        currentHeartRate: data.avg_heart_rate,
        currentStepRate: data.avg_step_rate,
        healthIndex: data.health_index,
        stressIndex: data.stress_index,
        bloodOxygen: data.blood_oxygen
      }));
      
      res.json({
        success: true,
        data: historyData
      });
    } else {
      // 从MongoDB中获取历史健康数据 (兼容旧系统)
      const mongoUser = await User.findById(userId);
      
      if (!mongoUser) {
        return res.status(404).json({ success: false, message: '未找到用户信息' });
      }
      
      // 计算日期范围
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - parseInt(days));
      
      // 查询日期范围内的健康数据，使用userId字段
      let healthDataHistory = await HealthData.find({ 
        userId: userId,
        timestamp: { $gte: startDate, $lte: endDate }
      }).sort({ timestamp: 1 });
      
      // 如果没有找到数据，尝试使用username作为备选查询方式（兼容旧数据）
      if (!healthDataHistory || healthDataHistory.length === 0) {
        healthDataHistory = await HealthData.find({ 
          userId: mongoUser.username,
          timestamp: { $gte: startDate, $lte: endDate }
        }).sort({ timestamp: 1 });
        
        if (!healthDataHistory || healthDataHistory.length === 0) {
          return res.status(404).json({ success: false, message: '未找到历史健康数据' });
        }
      }
      
      // 提取历史数据中的关键指标
      const historyData = healthDataHistory.map(data => ({
        date: data.date,
        currentHeartRate: data.currentHeartRate,
        currentStepRate: data.currentStepRate,
        healthIndex: data.healthIndex,
        stressIndex: data.stressIndex,
        bloodOxygen: data.bloodOxygen
      }));
      
      res.json({
        success: true,
        data: historyData
      });
    }
  } catch (error) {
    console.error('获取历史健康数据错误', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
});

// 设备数据上传接口
app.post('/api/device/data', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const source = req.user.source || 'mongodb';
    const { 
      heartRate, stepRate, steps, bloodOxygen, 
      activities, deviceId, timestamp
    } = req.body;
    
    // 确保用户存在
    let mysqlUserId = null;
    let mongoUserId = null;
    let username = null;
    
    if (source === 'mysql') {
      // MySQL用户
      mysqlUserId = userId;
      const mysqlUser = await mysqlDB.getUserById(userId);
      
      if (!mysqlUser) {
        return res.status(404).json({ success: false, message: '未找到用户信息' });
      }
      
      username = mysqlUser.username;
      
      // 查找对应的MongoDB用户
      const mongoUser = await User.findOne({ mysqlId: userId });
      if (mongoUser) {
        mongoUserId = mongoUser._id;
      }
    } else {
      // MongoDB用户
      mongoUserId = userId;
      const mongoUser = await User.findById(userId);
      
      if (!mongoUser) {
        return res.status(404).json({ success: false, message: '未找到用户信息' });
      }
      
      username = mongoUser.username;
      mysqlUserId = mongoUser.mysqlId;
    }
    
    // 准备设备数据
    const now = timestamp ? new Date(timestamp) : new Date();
    const dateString = now.toISOString().split('T')[0];
    const timeString = now.toTimeString().split(' ')[0];
    
    // 创建新的设备数据记录
    const deviceData = new DeviceData({
      userId: mongoUserId,
      mysqlUserId,
      username,
      deviceId: deviceId || 'unknown',
      timestamp: now,
      date: dateString,
      timeOfDay: timeString,
      heartRate: heartRate || [],
      stepRate: stepRate || [],
      steps: steps || [],
      bloodOxygen: bloodOxygen || [],
      activities: activities || []
    });
    
    await deviceData.save();
    
    // 触发数据处理
    try {
      // 生成小时汇总
      await dataSync.generateHourlySummary(
        mongoUserId,
        mysqlUserId,
        username,
        dateString
      );
      
      // 生成日汇总
      await dataSync.generateDailySummary(
        mongoUserId,
        mysqlUserId,
        username,
        dateString
      );
    } catch (syncErr) {
      console.error('数据汇总生成失败:', syncErr);
      // 汇总失败不影响主流程
    }
    
    res.json({
      success: true,
      message: '设备数据上传成功'
    });
  } catch (error) {
    console.error('设备数据上传错误', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
});

// 成就相关工具函数
async function checkAndUnlockAchievements(userId) {
  try {
    // 获取所有未解锁的成就
    const [lockedAchievements] = await pool.execute(`
      SELECT a.id, a.name, a.description 
      FROM achievements a
      LEFT JOIN user_achievements ua ON a.id = ua.achievement_id AND ua.user_id = ?
      WHERE ua.unlocked_time IS NULL
    `, [userId]);
    
    if (!lockedAchievements || lockedAchievements.length === 0) {
      return; // 没有未解锁的成就
    }
    
    // 获取用户的运动数据
    const [userWorkouts] = await pool.execute(`
      SELECT * FROM workouts WHERE user_id = ?
    `, [userId]);
    
    const [sportSummary] = await pool.execute(`
      SELECT SUM(total_distance) as total_distance, COUNT(*) as total_days
      FROM daily_sport_summary
      WHERE user_id = ?
    `, [userId]);
    
    // 计算总运动距离
    const totalDistance = sportSummary[0]?.total_distance || 0;
    const totalDays = sportSummary[0]?.total_days || 0;
    
    // 检查每个成就条件并解锁
    for (const achievement of lockedAchievements) {
      let shouldUnlock = false;
      
      switch (achievement.id) {
        case 1: // 马拉松完赛
          shouldUnlock = totalDistance >= 42.195;
          break;
        case 2: // 连续训练30天
          shouldUnlock = totalDays >= 30;
          break;
        case 3: // 速度之星
          // 查找5公里以上且速度达标的跑步记录
          const [fastRuns] = await pool.execute(`
            SELECT * FROM workouts w
            JOIN workout_types wt ON w.workout_type_id = wt.id
            WHERE w.user_id = ? AND wt.name = '跑步' 
            AND w.distance >= 5 AND w.avg_pace < 5
          `, [userId]);
          shouldUnlock = fastRuns.length > 0;
          break;
        case 4: // 年度榜首 (这个需要更复杂的逻辑，这里简化为总运动时长超过500分钟)
          const [totalDuration] = await pool.execute(`
            SELECT SUM(duration) as total_duration FROM workouts
            WHERE user_id = ? AND date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)
          `, [userId]);
          shouldUnlock = (totalDuration[0]?.total_duration || 0) > 500;
          break;
      }
      
      if (shouldUnlock) {
        await mysqlDB.unlockAchievement(userId, achievement.id);
        console.log(`用户 ${userId} 解锁成就: ${achievement.name}`);
      }
    }
  } catch (error) {
    console.error('检查成就失败:', error);
  }
}

// 用于测试的示例数据生成（开发环境使用）
async function createSampleData() {
  try {
    // 先初始化MySQL数据库
    await mysqlDB.initializeDatabase();
    
    // 检查是否已有测试数据
    const userCount = await User.countDocuments();
    
    if (userCount === 0) {
      console.log('创建示例数据...');
      
      // 加密测试密码
      const hashedPassword = await bcrypt.hash('123456', SALT_ROUNDS);
      
      // 创建MySQL测试用户
      const mysqlUserId = await mysqlDB.createUser(
        'test',
        hashedPassword,
        '测试用户',
        'https://example.com/avatar.jpg'
      );
      
      // 创建MongoDB测试用户
      const testUser = new User({
        username: 'test',
        password: hashedPassword,
        nickname: '测试用户',
        avatarUrl: 'https://example.com/avatar.jpg',
        mysqlId: mysqlUserId
      });
      
      await testUser.save();
      
      // 创建测试用户的运动数据
      const testSportData = new SportData({
        userId: testUser._id,
        totalWorkouts: 167,
        totalDuration: 892,
        totalDistance: 1243,
        achievements: [
          { id: 1, name: '马拉松完赛', icon: 'https://example.com/marathon.png', unlocked: true },
          { id: 2, name: '连续训练30天', icon: 'https://example.com/streak.png', unlocked: true },
          { id: 3, name: '速度之星', icon: 'https://example.com/speed.png', unlocked: false },
          { id: 4, name: '年度榜首', icon: 'https://example.com/leader.png', unlocked: false }
        ]
      });
      
      // 添加历史记录数据
      testSportData.history.push({
        type: '5公里跑步训练',
        date: '2025-04-29',
        details: '27分35秒 · 配速 5分31秒/km',
        createTime: new Date()
      });
      
      testSportData.history.push({
        type: '力量训练',
        date: '2025-04-28',
        details: '45分钟 · 核心训练',
        createTime: new Date(Date.now() - 24 * 60 * 60 * 1000)
      });
      
      testSportData.history.push({
        type: '10公里长跑',
        date: '2025-04-26',
        details: '58分12秒 · 配速 5分49秒/km',
        createTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
      });
      
      await testSportData.save();
      
      // 在MySQL中同时创建对应的运动记录
      await pool.execute(`
        INSERT INTO workouts 
        (user_id, workout_type_id, date, duration, distance, avg_pace, calories_burned, notes)
        VALUES
        (?, 1, ?, 27.58, 5, 5.52, 193, '5公里跑步训练'),
        (?, 5, ?, 45, 0, NULL, 315, '核心训练'),
        (?, 1, ?, 58.2, 10, 5.82, 407, '10公里长跑')
      `, [
        mysqlUserId, '2025-04-29',
        mysqlUserId, '2025-04-28',
        mysqlUserId, '2025-04-26'
      ]);
      
      // 解锁测试用户的成就
      await pool.execute(`
        INSERT INTO user_achievements (user_id, achievement_id, unlocked_time)
        VALUES
        (?, 1, CURRENT_TIMESTAMP),
        (?, 2, CURRENT_TIMESTAMP),
        (?, 3, NULL),
        (?, 4, NULL)
      `, [mysqlUserId, mysqlUserId, mysqlUserId, mysqlUserId]);
      
      // 创建测试用户的每日汇总数据
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      await pool.execute(`
        INSERT INTO daily_sport_summary
        (user_id, date, avg_heart_rate, max_heart_rate, min_heart_rate, 
         avg_step_rate, total_steps, total_distance, total_duration, 
         calories_burned, blood_oxygen, health_index, stress_index)
        VALUES
        (?, ?, 72, 145, 55, 112, 12540, 5, 27.58, 610, 98, 89, 35),
        (?, ?, 68, 128, 58, 104, 8750, 0, 45, 430, 97, 86, 28)
      `, [
        mysqlUserId, today.toISOString().split('T')[0],
        mysqlUserId, yesterday.toISOString().split('T')[0]
      ]);
      
      // 创建测试设备数据
      const deviceData = new DeviceData({
        userId: testUser._id,
        mysqlUserId,
        username: 'test',
        deviceId: 'test-device-001',
        timestamp: new Date(),
        date: today.toISOString().split('T')[0],
        timeOfDay: today.toTimeString().split(' ')[0],
        heartRate: [
          { value: 72, timestamp: new Date(today - 3600000) },
          { value: 75, timestamp: new Date(today - 3000000) },
          { value: 68, timestamp: new Date(today - 2400000) }
        ],
        stepRate: [
          { value: 110, timestamp: new Date(today - 3600000) },
          { value: 115, timestamp: new Date(today - 3000000) },
          { value: 105, timestamp: new Date(today - 2400000) }
        ],
        steps: [
          { value: 4500, timestamp: new Date(today - 3600000) },
          { value: 6000, timestamp: new Date(today - 3000000) },
          { value: 8000, timestamp: new Date(today - 2400000) }
        ],
        bloodOxygen: [
          { value: 98, timestamp: new Date(today - 3600000) },
          { value: 97, timestamp: new Date(today - 3000000) },
          { value: 98, timestamp: new Date(today - 2400000) }
        ]
      });
      
      await deviceData.save();
      
      console.log('示例数据创建完成');
    }
  } catch (error) {
    console.error('创建示例数据失败', error);
  }
}

// 启动服务器
app.listen(port, () => {
  console.log(`运动数据服务器运行在 http://localhost:${port}`);
});

// 如果是开发环境，创建示例数据
if (process.env.NODE_ENV !== 'production') {
  setTimeout(createSampleData, 3000); // 等待数据库连接后创建示例数据
}