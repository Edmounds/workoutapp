/**
 * API请求工具类
 * 封装微信小程序网络请求，统一处理登录态和请求参数
 */

// API基础URL
const BASE_URL = 'https://www.edmounds.top'; // 根据实际后端地址修改

/**
 * 发起网络请求
 * @param {String} url - 请求路径
 * @param {String} method - 请求方法 GET/POST/PUT/DELETE等
 * @param {Object} data - 请求数据
 * @param {Boolean} needToken - 是否需要携带令牌
 */
function request(url, method = 'GET', data = {}, needToken = true) {
  return new Promise((resolve, reject) => {
    // 判断是否需要携带令牌
    let header = {
      'Content-Type': 'application/json'
    };
    
    if (needToken) {
      // 从本地存储获取令牌
      const token = wx.getStorageSync('token');
      if (token) {
        header['Authorization'] = `Bearer ${token}`;
        console.log('请求携带token:', token);
      } else {
        // 未登录，跳转到登录页
        console.log('未检测到token，准备跳转登录页');
        wx.redirectTo({
          url: '/pages/login/login'
        });
        reject(new Error('未登录或登录已过期'));
        return;
      }
    }
    
    const fullUrl = `${BASE_URL}${url}`;
    console.log(`发起请求: ${method} ${fullUrl}`, data);
    
    wx.request({
      url: fullUrl,
      method,
      data,
      header,
      success(res) {
        console.log(`请求成功: ${method} ${url}`, res);
        
        // 如果是获取用户信息或运动记录的请求，打印详细数据以便调试
        if (url.includes('/api/users/all/list') || url.includes('/api/user/running_records')) {
          console.log('原始响应数据:', JSON.stringify(res.data));
          if (res.data && res.data.data) {
            // 检查用户信息
            if (res.data.data.user_info) {
              console.log('用户信息:', JSON.stringify(res.data.data.user_info));
            }
            // 检查运动记录
            if (Array.isArray(res.data.data)) {
              console.log('运动记录数量:', res.data.data.length);
              if (res.data.data.length > 0) {
                console.log('首条记录示例:', JSON.stringify(res.data.data[0]));
              }
            }
          }
        }
        
        // 处理特定的业务状态码
        if (res.data.code == 401) {
          // 令牌无效或已过期，跳转登录页
          console.error('令牌已过期，需要重新登录');
          wx.removeStorageSync('token');
          wx.removeStorageSync('userInfo');
          wx.redirectTo({
            url: '/pages/login/login'
          });
          reject(new Error('登录已过期，请重新登录'));
          return;
        }
        resolve(res.data);
      },
      fail(err) {
        // 网络错误等异常情况
        console.error(`请求失败: ${method} ${url}`, err);
        wx.showToast({
          title: '网络请求失败',
          icon: 'none',
          duration: 2000
        });
        reject(err);
      }
    });
  });
}

/**
 * 用户登录
 * @param {String} name - 用户名
 * @param {String} password - 密码
 */
function login(name, password) {
  console.log('尝试登录:', name);
  return request('/api/users/login', 'POST', { name, password }, false);
}

/**
 * 用户注册
 * @param {Object} userData - 用户注册信息
 */
function register(userData) {
  console.log('尝试注册:', userData.name);
  return request('/api/users/register', 'POST', userData, false);
}

/**
 * 获取用户信息
 */
function getUserInfo() {
  console.log('尝试获取用户信息');
  
  // 调试：检查本地缓存的用户信息
  const localUserInfo = wx.getStorageSync('userInfo');
  console.log('本地缓存的用户信息:', localUserInfo);
  
  // 确保网络请求不会被缓存
  const timestamp = new Date().getTime();
  return request(`/api/users/all/list?_t=${timestamp}`);
  
  /* 
  // 模拟数据实现，仅用于开发测试
  // 生成用户特定的ID，防止不同用户间数据混用
  const userId = localUserInfo ? localUserInfo.id : null;
  
  // 如果没有登录信息，返回空数据
  if (!userId) {
    return Promise.resolve({
      code: 200,
      message: '获取成功',
      data: {
        user_info: {
          id: 0,
          username: '未登录用户',
          gender: 0,
          age: 0,
          height: 0,
          weight: 0,
          level: '初级跑者',
          total_workouts: 0,
          total_duration: 0,
          total_distance: 0
        },
        workout_records: {
          total_count: 0,
          total_hours: 0,
          total_km: 0
        }
      }
    });
  }
  
  // 使用模拟数据，加入用户ID确保每个用户有自己的数据
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '获取成功',
        data: {
          user_info: {
            id: userId,
            username: localUserInfo.username,
            gender: 1,
            age: 28,
            height: 175,
            weight: 70,
            level: '初级跑者',
            total_workouts: 15,
            total_duration: 450,
            total_distance: 35.5
          },
          workout_records: {
            total_count: 15,
            total_hours: 7.5,
            total_km: 35.5
          }
        }
      });
    }, 300);
  });
  */
}

/**
 * 更新用户信息
 * @param {Object} userData - 用户信息
 */
function updateUserInfo(userData) {
  console.log('尝试更新用户信息:', userData);
  return request('/api/users/update', 'PUT', userData);
  
  /*
  // 模拟更新成功
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '用户信息更新成功'
      });
    }, 300);
  });
  */
}

/**
 * 获取跑步记录
 */
function getRunningRecords() {
  console.log('尝试获取跑步记录');
  
  // 确保网络请求不会被缓存
  const timestamp = new Date().getTime();
  return request(`/api/user/running_records?_t=${timestamp}`);
  
  /*
  // 模拟数据实现，仅用于开发测试
  // 获取当前登录用户信息
  const localUserInfo = wx.getStorageSync('userInfo');
  const userId = localUserInfo ? localUserInfo.id : null;
  
  // 如果没有登录信息，返回空记录
  if (!userId) {
    return Promise.resolve({
      code: 200,
      message: '获取成功',
      data: []
    });
  }
  
  // 使用模拟数据进行测试，根据用户ID生成不同的记录
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '获取成功',
        data: mockRunningRecords(userId)
      });
    }, 300);
  });
  */
}

/**
 * 上传运动记录
 * @param {Object} workoutData - 运动记录数据
 */
function uploadWorkout(workoutData) {
  console.log('尝试上传运动记录:', workoutData);
  return request('/api/user/upload_workout', 'POST', workoutData);
  
  /*
  // 模拟上传成功
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '运动记录上传成功'
      });
    }, 300);
  });
  */
}

/**
 * 获取体能数据
 */
function getPhysicalStats() {
  console.log('尝试获取体能数据');
  
  // 确保网络请求不会被缓存
  const timestamp = new Date().getTime();
  return request(`/api/physical/stats?_t=${timestamp}`);
  
  /*
  // 模拟数据实现，仅用于开发测试
  // 获取当前登录用户信息
  const localUserInfo = wx.getStorageSync('userInfo');
  const userId = localUserInfo ? localUserInfo.id : null;
  
  // 如果没有登录信息，返回空数据
  if (!userId) {
    return Promise.resolve({
      code: 200,
      message: '获取成功',
      data: {
        avg_heart_rate: 0,
        current_heart_rate: 0,
        resting_heart_rate: 0,
        max_heart_rate: 0,
        current_step_rate: 0,
        avg_step_rate: 0,
        avg_blood_oxygen: 0,
        current_pace: "--",
        health_index: 0,
        stress_index: 0,
        sleep_quality: 0,
        sleep_duration: 0,
        aerobic_capacity: 0,
        weekly_distance: 0
      }
    });
  }
  
  // 使用模拟数据进行测试，加入用户ID确保每个用户有自己的数据
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '获取成功',
        data: mockPhysicalStats(userId)
      });
    }, 300);
  });
  */
}

/**
 * 获取健身建议
 */
function getFitnessAdvice() {
  console.log('尝试获取健身建议');
  return request('/api/advice/fitness');
  
  /*
  // 模拟获取建议
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '获取成功',
        data: {
          title: '健身建议',
          content: '根据您的运动数据，我们建议您每周跑步3-4次，每次30-45分钟。',
          tips: ['适当增加有氧运动时间', '注意跑步姿势', '合理安排休息日']
        }
      });
    }, 300);
  });
  */
}

/**
 * 获取营养建议
 */
function getNutritionAdvice() {
  console.log('尝试获取营养建议');
  return request('/api/advice/nutrition');
  
  /*
  // 模拟获取建议
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '获取成功',
        data: {
          title: '营养建议',
          content: '基于您的运动量，建议每日摄入蛋白质70-80克，碳水化合物250-300克。',
          tips: ['增加蛋白质摄入', '补充足够的水分', '运动前后摄入适量碳水化合物']
        }
      });
    }, 300);
  });
  */
}

/**
 * 创建模拟的跑步记录（用于测试）
 * @param {Number} userId - 用户ID，用于生成特定用户的数据
 */
function mockRunningRecords(userId) {
  const now = new Date();
  const seed = userId || 0; // 使用用户ID作为随机种子
  
  // 根据用户ID调整数据，确保不同用户看到不同的记录
  return [
    {
      id: 1 + seed,
      user_id: userId,
      workout_type: '跑步',
      start_time: formatDate(now, -30), // 现在减去30分钟
      end_time: formatDate(now),
      duration: 1800 + (seed % 10) * 60,
      distance: 5000 + (seed % 5) * 500,
      avg_pace: 360 - (seed % 30),
      best_pace: 330 - (seed % 30),
      avg_heart_rate: 145 + (seed % 10),
      max_heart_rate: 165 + (seed % 10),
      avg_step_rate: 170 + (seed % 5),
      calories: 350 + (seed % 20) * 10
    },
    {
      id: 2 + seed,
      user_id: userId,
      workout_type: '长跑',
      start_time: formatDate(subtractDays(now, 1), -60), // 昨天
      end_time: formatDate(subtractDays(now, 1)),
      duration: 3600 + (seed % 10) * 60,
      distance: 8000 + (seed % 5) * 500,
      avg_pace: 450 - (seed % 30),
      best_pace: 420 - (seed % 30),
      avg_heart_rate: 150 + (seed % 10),
      max_heart_rate: 170 + (seed % 10),
      avg_step_rate: 165 + (seed % 5),
      calories: 600 + (seed % 20) * 10
    },
    {
      id: 3 + seed,
      user_id: userId,
      workout_type: '健走',
      start_time: formatDate(subtractDays(now, 3), -45), // 3天前
      end_time: formatDate(subtractDays(now, 3)),
      duration: 2700 + (seed % 10) * 60,
      distance: 4000 + (seed % 5) * 500,
      avg_pace: 675 - (seed % 30),
      best_pace: 650 - (seed % 30),
      avg_heart_rate: 125 + (seed % 10),
      max_heart_rate: 140 + (seed % 10),
      avg_step_rate: 150 + (seed % 5),
      calories: 250 + (seed % 20) * 10
    },
    {
      id: 4 + seed,
      user_id: userId,
      workout_type: '间歇跑',
      start_time: formatDate(subtractDays(now, 5), -40), // 5天前
      end_time: formatDate(subtractDays(now, 5)),
      duration: 2400 + (seed % 10) * 60,
      distance: 6000 + (seed % 5) * 500,
      avg_pace: 400 - (seed % 30),
      best_pace: 380 - (seed % 30),
      avg_heart_rate: 155 + (seed % 10),
      max_heart_rate: 175 + (seed % 10),
      avg_step_rate: 175 + (seed % 5),
      calories: 430 + (seed % 20) * 10
    },
    {
      id: 5 + seed,
      user_id: userId,
      workout_type: '恢复跑',
      start_time: formatDate(subtractDays(now, 7), -30), // 7天前
      end_time: formatDate(subtractDays(now, 7)),
      duration: 1500 + (seed % 10) * 60,
      distance: 3000 + (seed % 5) * 500,
      avg_pace: 500 - (seed % 30),
      best_pace: 480 - (seed % 30),
      avg_heart_rate: 130 + (seed % 10),
      max_heart_rate: 145 + (seed % 10),
      avg_step_rate: 160 + (seed % 5),
      calories: 220 + (seed % 20) * 10
    }
  ];
}

/**
 * 创建模拟的体能数据（用于测试）
 * @param {Number} userId - 用户ID，用于生成特定用户的数据
 */
function mockPhysicalStats(userId) {
  const seed = userId || 0; // 使用用户ID作为随机种子
  
  // 根据用户ID调整数据，确保不同用户看到不同的数据
  return {
    avg_heart_rate: 75 + (seed % 10),
    current_heart_rate: 72 + (seed % 10),
    resting_heart_rate: 65 + (seed % 5),
    max_heart_rate: 160 + (seed % 15),
    current_step_rate: 160 + (seed % 10),
    avg_step_rate: 165 + (seed % 10),
    avg_blood_oxygen: 98.5 - (seed % 2) * 0.5,
    current_pace: "5'" + (30 + seed % 30) + "\"",
    health_index: 85 - (seed % 15),
    stress_index: 25 + (seed % 15),
    sleep_quality: 80 - (seed % 10),
    sleep_duration: 480 - (seed % 60),
    aerobic_capacity: 75 + (seed % 15),
    weekly_distance: 25.0 + (seed % 10) * 1.5
  };
}

/**
 * 格式化日期（用于模拟数据）
 */
function formatDate(date, addMinutes = 0) {
  if (addMinutes) {
    date = new Date(date.getTime() + addMinutes * 60 * 1000);
  }
  return date.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * 从指定日期减去天数（用于模拟数据）
 */
function subtractDays(date, days) {
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
}

// 导出API函数
module.exports = {
  login,
  register,
  getUserInfo,
  updateUserInfo,
  getRunningRecords,
  uploadWorkout,
  getPhysicalStats,
  getFitnessAdvice,
  getNutritionAdvice
}; 