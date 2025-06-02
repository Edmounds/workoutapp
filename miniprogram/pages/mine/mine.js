// pages/mine/mine.js

// 全局错误处理，忽略 autofillHideDropdown 相关错误
const originalConsoleError = console.error;
console.error = function(...args) {
  const errorMessage = args.join(' ');
  if (errorMessage.includes('autofillHideDropdown')) {
    // 忽略 autofillHideDropdown 相关错误
    return;
  }
  originalConsoleError.apply(console, args);
};

Page({
  data: {
    userInfo: null,
    hasUserInfo: false,
    isLoggedIn: false,
    userSportData: {
      totalWorkouts: 0,
      totalDuration: 0,
      totalDistance: 0
    },
    achievements: [
      { id: 0, name: '马拉松完赛', icon: 'https://example.com/marathon.png', unlocked: false },
      { id: 1, name: '连续训练30天', icon: 'https://example.com/streak.png', unlocked: false },
      { id: 2, name: '速度之星', icon: 'https://example.com/speed.png', unlocked: false },
      { id: 3, name: '年度榜首', icon: 'https://example.com/leader.png', unlocked: false }
    ],
    trainingHistory: [],
    // 登录相关字段
    showLoginModal: false,
    showRegisterModal: false,
    username: '',
    password: '',
    registerUsername: '',
    registerPassword: '',
    passwordTip: '', // 添加密码提示信息
    runningRecords: [], // 添加跑步记录数组
  },
  
  onLoad: function (options) {
    // 检查用户是否已登录
    this.checkLoginStatus();
  },
  
  onShow: function () {
    // 每次页面显示时检查登录状态
    this.checkLoginStatus();
    
    // 如果用户已登录，获取最新数据
    if (this.data.isLoggedIn) {
      this.getUserSportData();
      this.getRunningRecords();
    }
  },
  
  // 下拉刷新处理函数
  onPullDownRefresh: function () {
    // 如果用户已登录，获取最新数据
    if (this.data.isLoggedIn) {
      Promise.all([
        this.getUserSportData(),
        this.getRunningRecords()
      ]).then(() => {
        wx.stopPullDownRefresh();
      }).catch(() => {
        wx.stopPullDownRefresh();
      });
    } else {
      wx.stopPullDownRefresh();
    }
  },
  
  // 检查用户登录状态
  checkLoginStatus: function () {
    const token = wx.getStorageSync('token');
    const userInfo = wx.getStorageSync('userInfo');
    
    if (token && userInfo) {
      this.setData({
        isLoggedIn: true,
        userInfo: userInfo,
        hasUserInfo: true
      });
    } else {
      this.setData({
        isLoggedIn: false,
        userInfo: null,
        hasUserInfo: false
      });
    }
  },
  
  // 使用账号密码登录
  handleLogin: function () {
    this.showLogin();
  },
  
  // 退出登录
  handleLogout: function () {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除本地存储的登录信息
          wx.removeStorageSync('token');
          wx.removeStorageSync('userInfo');
          
          this.setData({
            isLoggedIn: false,
            userInfo: null,
            hasUserInfo: false,
            userSportData: {
              totalWorkouts: 0,
              totalDuration: 0,
              totalDistance: 0
            },
            trainingHistory: [],
            runningRecords: []
          });
          
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          });
        }
      }
    });
  },
  
  // 获取用户运动数据
  getUserSportData: function () {
    const token = wx.getStorageSync('token');
    
    if (!token) {
      return Promise.reject('未登录');
    }
    
    wx.showLoading({
      title: '加载数据',
    });
    
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://localhost:5000/api/users/all/list',
        method: 'GET',
        header: {
          'Authorization': `Bearer ${token}`
        },
        success: (res) => {
          if (res.data.code === 200) {
            const userData = res.data.data;
            const workoutRecords = userData.workout_records || {};
            
            // 更新用户运动数据
            this.setData({
              userSportData: {
                totalWorkouts: workoutRecords.total_count || 0,
                totalDuration: workoutRecords.total_hours || 0,
                totalDistance: workoutRecords.total_km || 0
              }
            });
            resolve();
          } else {
            wx.showToast({
              title: '获取数据失败',
              icon: 'none'
            });
            reject();
          }
        },
        fail: () => {
          wx.showToast({
            title: '网络错误',
            icon: 'none'
          });
          reject();
        },
        complete: () => {
          wx.hideLoading();
        }
      });
    });
  },
  
  // 获取跑步记录
  getRunningRecords: function() {
    const token = wx.getStorageSync('token');
    
    if (!token) {
      return Promise.reject('未登录');
    }
    
    wx.showLoading({
      title: '加载中',
    });
    
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://localhost:5000/api/user/running_records',
        method: 'GET',
        header: {
          'Authorization': `Bearer ${token}`
        },
        success: (res) => {
          if (res.data.code === 200) {
            this.setData({
              runningRecords: res.data.data || []
            });
            resolve();
          } else {
            wx.showToast({
              title: '获取记录失败',
              icon: 'none'
            });
            reject();
          }
        },
        fail: () => {
          wx.showToast({
            title: '网络错误',
            icon: 'none'
          });
          reject();
        },
        complete: () => {
          wx.hideLoading();
        }
      });
    });
  },
  
  // 导航到设置页面
  navigateToSettings: function (e) {
    const type = e.currentTarget.dataset.type;
    if (type === 'profile') {
      wx.navigateTo({
        url: '../profile/profile',
      });
    } else if (type === 'notification') {
      wx.navigateTo({
        url: '../notification/notification',
      });
    } else if (type === 'feedback') {
      wx.navigateTo({
        url: '../feedback/feedback',
      });
    } else if (type === 'about') {
      wx.navigateTo({
        url: '../about/about',
      });
    }
  },
  
  // 查看训练详情
  viewTrainingDetail: function (e) {
    const index = e.currentTarget.dataset.index;
    const training = this.data.trainingHistory[index];
    
    wx.navigateTo({
      url: `../training-detail/training-detail?id=${training._id}`,
    });
  },
  
  // 点击登录按钮显示登录模态框
  showLogin: function() {
    this.setData({
      showLoginModal: true
    });
  },
  
  // 关闭登录模态框
  closeLoginModal: function() {
    this.setData({
      showLoginModal: false,
      username: '',
      password: ''
    });
  },
  
  // 显示注册模态框
  showRegister: function() {
    this.setData({
      showLoginModal: false,
      showRegisterModal: true
    });
  },
  
  // 关闭注册模态框
  closeRegisterModal: function() {
    this.setData({
      showRegisterModal: false,
      registerUsername: '',
      registerPassword: '',
      passwordTip: ''
    });
  },
  
  // 输入框事件处理
  inputUsername: function(e) {
    this.setData({
      username: e.detail.value
    });
  },
  
  inputPassword: function(e) {
    this.setData({
      password: e.detail.value
    });
  },
  
  inputRegisterUsername: function(e) {
    this.setData({
      registerUsername: e.detail.value
    });
  },
  
  inputRegisterPassword: function(e) {
    const password = e.detail.value;
    this.setData({
      registerPassword: password
    });
    
    // 添加密码复杂度检查
    this.checkPasswordStrength(password);
  },
  
  // 检查密码强度
  checkPasswordStrength: function(password) {
    let tip = '';
    
    if (!password) {
      this.setData({ passwordTip: '' });
      return;
    }
    
    // 密码长度检查
    if (password.length < 8) {
      tip = '密码长度需至少8位';
      this.setData({ passwordTip: tip });
      return;
    }
    
    // 检查是否包含数字
    const hasNumber = /\d/.test(password);
    // 检查是否包含小写字母
    const hasLowerCase = /[a-z]/.test(password);
    // 检查是否包含大写字母
    const hasUpperCase = /[A-Z]/.test(password);
    // 检查是否包含特殊字符
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    // 根据密码强度显示不同提示
    if (hasNumber && hasLowerCase && hasUpperCase && hasSpecialChar) {
      tip = '密码强度: 非常强';
    } else if ((hasNumber && hasLowerCase && hasUpperCase) || 
              (hasNumber && hasSpecialChar) || 
              (hasLowerCase && hasSpecialChar) || 
              (hasUpperCase && hasSpecialChar)) {
      tip = '密码强度: 强';
    } else if (hasNumber || hasLowerCase || hasUpperCase || hasSpecialChar) {
      tip = '密码强度: 弱，建议包含数字、大小写字母和特殊符号';
    } else {
      tip = '密码过于简单，请使用字母、数字和特殊符号的组合';
    }
    
    this.setData({ passwordTip: tip });
  },
  
  // 账号密码登录
  handleAccountLogin: function() {
    const { username, password } = this.data;
    
    // 简单验证
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      });
      return;
    }
    
    wx.showLoading({
      title: '登录中',
    });
    
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
      success: (result) => {
        if (result.data.code === 200) {
          // 存储token和用户信息
          wx.setStorageSync('token', result.data.data.token);
          wx.setStorageSync('userInfo', result.data.data);
          
          this.setData({
            isLoggedIn: true,
            userInfo: result.data.data,
            hasUserInfo: true,
            showLoginModal: false,
            username: '',
            password: ''
          });
          
          // 获取用户运动数据
          this.getUserSportData();
          this.getRunningRecords();
          
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
        } else {
          wx.showToast({
            title: result.data.message || '登录失败',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  },
  
  // 注册账号
  handleRegister: function() {
    const { registerUsername, registerPassword } = this.data;
    
    // 强化验证
    if (!registerUsername || !registerPassword) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      });
      return;
    }
    
    // 密码复杂度验证
    if (registerPassword.length < 8) {
      wx.showToast({
        title: '密码长度需至少8位',
        icon: 'none'
      });
      return;
    }
    
    // 检查密码复杂度
    const hasNumber = /\d/.test(registerPassword);
    const hasLetter = /[a-zA-Z]/.test(registerPassword);
    
    if (!hasNumber || !hasLetter) {
      wx.showToast({
        title: '密码必须包含字母和数字',
        icon: 'none'
      });
      return;
    }
    
    wx.showLoading({
      title: '注册中',
    });
    
    wx.request({
      url: 'http://localhost:5000/api/users/register',
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        name: registerUsername,
        password: registerPassword
      },
      success: (result) => {
        if (result.data.code === 201) {
          wx.showToast({
            title: '注册成功，请登录',
            icon: 'success'
          });
          
          // 关闭注册框，打开登录框
          this.setData({
            showRegisterModal: false,
            showLoginModal: true,
            username: registerUsername,
            password: registerPassword,
            registerUsername: '',
            registerPassword: '',
            passwordTip: ''
          });
        } else {
          wx.showToast({
            title: result.data.message || '注册失败',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  },
  
  // 阻止事件冒泡
  stopPropagation: function(e) {
    // 阻止点击事件冒泡，防止点击模态框内容时关闭模态框
    return false;
  },
})