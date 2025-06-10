/**
 * API请求工具类
 * 封装微信小程序网络请求，统一处理登录态和请求参数
 */

// API基础URL
const BASE_URL = 'http://localhost:5000'; // 根据实际后端地址修改

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
      } else {
        // 未登录，跳转到登录页
        wx.redirectTo({
          url: '/pages/login/login'
        });
        reject(new Error('未登录或登录已过期'));
        return;
      }
    }
    
    wx.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header,
      success(res) {
        // 处理特定的业务状态码
        if (res.data.code == 401) {
          // 令牌无效或已过期，跳转登录页
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
  return request('/api/users/login', 'POST', { name, password }, false);
}

/**
 * 用户注册
 * @param {Object} userData - 用户注册信息
 */
function register(userData) {
  return request('/api/users/register', 'POST', userData, false);
}

/**
 * 获取用户信息
 */
function getUserInfo() {
  return request('/api/users/all/list');
}

/**
 * 更新用户信息
 * @param {Object} userData - 用户信息
 */
function updateUserInfo(userData) {
  return request('/api/users/update', 'PUT', userData);
}

/**
 * 获取跑步记录
 */
function getRunningRecords() {
  return request('/api/user/running_records');
}

/**
 * 上传运动记录
 * @param {Object} workoutData - 运动记录数据
 */
function uploadWorkout(workoutData) {
  return request('/api/user/upload_workout', 'POST', workoutData);
}

/**
 * 获取体能数据
 */
function getPhysicalStats() {
  return request('/api/physical/stats');
}

/**
 * 获取健身建议
 */
function getFitnessAdvice() {
  // 这里需要调用DeepSeek API，模拟接口
  return request('/api/advice/fitness');
}

/**
 * 获取营养建议
 */
function getNutritionAdvice() {
  // 这里需要调用DeepSeek API，模拟接口
  return request('/api/advice/nutrition');
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