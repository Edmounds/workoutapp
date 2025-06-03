import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response && error.response.status === 401) {
      // 未授权，重定向到登录页
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// 管理员登录
export function adminLogin(data) {
  return api.post('/admin/login', data)
}

// 获取所有用户列表
export function getUsers(params) {
  return api.get('/admin/users', { params })
}

// 获取用户详情
export function getUserDetail(userId) {
  return api.get(`/admin/user/${userId}`)
}

// 编辑用户信息
export function updateUser(userId, data) {
  return api.put(`/admin/user/${userId}`, data)
}

// 删除用户
export function deleteUser(userId) {
  return api.delete(`/admin/user/${userId}`)
}

// 获取用户运动记录
export function getUserRunningRecords(userId, params) {
  return api.get(`/admin/user/${userId}/running_records`, { params })
}

// 获取系统概况统计
export function getDashboardOverview() {
  return api.get('/admin/dashboard/overview')
}

// 获取用户增长趋势
export function getUserGrowthTrend(params) {
  return api.get('/admin/dashboard/user_growth', { params })
}

// 获取运动数据趋势
export function getWorkoutTrends(params) {
  return api.get('/admin/dashboard/workout_trends', { params })
}

// 获取用户注册统计
export function getRegistrationStats(params) {
  return api.get('/admin/stats/registrations', { params })
}

// 获取活跃用户统计
export function getActiveUserStats(params) {
  return api.get('/admin/stats/active_users', { params })
}

// 获取运动总量统计
export function getWorkoutsSummary(params) {
  return api.get('/admin/stats/workouts/summary', { params })
}

// 获取运动类型分布
export function getWorkoutTypesStats(params) {
  return api.get('/admin/stats/workouts/types', { params })
}

// 获取用户年龄分布
export function getAgeDistribution() {
  return api.get('/admin/stats/users/age_distribution')
}

// 获取用户性别分布
export function getGenderDistribution() {
  return api.get('/admin/stats/users/gender_distribution')
}

// 获取体能数据统计
export function getPhysicalStats(params) {
  return api.get('/admin/stats/physical', { params })
}

// 获取睡眠质量统计
export function getSleepStats(params) {
  return api.get('/admin/stats/sleep', { params })
}

// 获取DeepSeek API使用情况
export function getDeepseekApiUsage(apiKey, apiBaseUrl = 'https://api.deepseek.com') {
  return axios.create({
    baseURL: apiBaseUrl,
    timeout: 15000,
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).get('/user/balance').catch(error => {
    if (error.code === 'ECONNABORTED') {
      throw new Error('请求超时，请检查网络连接');
    } else if (error.response) {
      throw new Error(`服务器错误 (${error.response.status}): ${error.response.data?.message || '未知错误'}`);
    } else if (error.request) {
      throw new Error('无法连接到API服务器，请检查网络连接或API地址是否正确');
    } else {
      throw new Error(`请求错误: ${error.message}`);
    }
  });
}

export default api 