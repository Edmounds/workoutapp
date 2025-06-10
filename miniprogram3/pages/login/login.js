// login.js
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'login',     // 当前活动标签页：login 或 register
    username: '',           // 登录用户名
    password: '',           // 登录密码
    loginError: '',         // 登录错误信息
    isLoggingIn: false,     // 登录中状态
    
    // 注册表单数据
    regUsername: '',        // 注册用户名
    regPassword: '',        // 注册密码
    regConfirmPassword: '', // 确认密码
    regEmail: '',           // 邮箱
    regAge: '',             // 年龄
    gender: '1',            // 性别，默认男性
    regHeight: '',          // 身高
    regWeight: '',          // 体重
    registerError: '',      // 注册错误信息
    isRegistering: false    // 注册中状态
  },

  /**
   * 切换标签页：登录/注册
   */
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab,
      loginError: '',
      registerError: ''
    });
  },

  /**
   * 登录相关事件处理函数
   */
  usernameInput(e) {
    this.setData({
      username: e.detail.value,
      loginError: ''
    });
  },

  passwordInput(e) {
    this.setData({
      password: e.detail.value,
      loginError: ''
    });
  },

  /**
   * 处理登录请求
   */
  handleLogin() {
    const { username, password } = this.data;
    
    // 表单验证
    if (!username.trim()) {
      this.setData({ loginError: '请输入用户名' });
      return;
    }
    if (!password.trim()) {
      this.setData({ loginError: '请输入密码' });
      return;
    }

    // 设置登录中状态
    this.setData({ isLoggingIn: true });

    // 调用登录API
    api.login(username, password)
      .then(res => {
        if (res.code === 200) {
          // 登录成功，存储token和用户信息
          wx.setStorageSync('token', res.data.token);
          wx.setStorageSync('userInfo', {
            id: res.data.id,
            username: res.data.username,
            level: res.data.level
          });
          
          // 显示成功提示并跳转
          util.showToast('登录成功', 'success');
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/stats/stats'
            });
          }, 1000);
        } else {
          // 登录失败，显示错误信息
          this.setData({ 
            loginError: res.message || '登录失败，请检查用户名和密码',
            isLoggingIn: false
          });
        }
      })
      .catch(err => {
        // 处理异常
        this.setData({
          loginError: '登录失败，请稍后再试',
          isLoggingIn: false
        });
        console.error('登录异常:', err);
      });
  },

  /**
   * 注册相关事件处理函数
   */
  regUsernameInput(e) {
    this.setData({
      regUsername: e.detail.value,
      registerError: ''
    });
  },

  regPasswordInput(e) {
    this.setData({
      regPassword: e.detail.value,
      registerError: ''
    });
  },

  regConfirmPasswordInput(e) {
    this.setData({
      regConfirmPassword: e.detail.value,
      registerError: ''
    });
  },

  regEmailInput(e) {
    this.setData({
      regEmail: e.detail.value
    });
  },

  regAgeInput(e) {
    this.setData({
      regAge: e.detail.value
    });
  },

  regGenderChange(e) {
    this.setData({
      gender: e.detail.value
    });
  },

  regHeightInput(e) {
    this.setData({
      regHeight: e.detail.value
    });
  },

  regWeightInput(e) {
    this.setData({
      regWeight: e.detail.value
    });
  },

  /**
   * 处理注册请求
   */
  handleRegister() {
    const {
      regUsername,
      regPassword,
      regConfirmPassword,
      regEmail,
      regAge,
      gender,
      regHeight,
      regWeight
    } = this.data;

    // 表单验证
    if (!regUsername.trim()) {
      this.setData({ registerError: '请输入用户名' });
      return;
    }
    if (!regPassword.trim()) {
      this.setData({ registerError: '请输入密码' });
      return;
    }
    if (regPassword !== regConfirmPassword) {
      this.setData({ registerError: '两次输入的密码不一致' });
      return;
    }
    if (!regAge) {
      this.setData({ registerError: '请输入年龄' });
      return;
    }
    if (!regHeight) {
      this.setData({ registerError: '请输入身高' });
      return;
    }
    if (!regWeight) {
      this.setData({ registerError: '请输入体重' });
      return;
    }

    // 设置注册中状态
    this.setData({ isRegistering: true });

    // 构建注册数据
    const userData = {
      name: regUsername,
      password: regPassword,
      email: regEmail || undefined,
      gender: parseInt(gender),
      age: parseInt(regAge),
      height: parseFloat(regHeight),
      weight: parseFloat(regWeight)
    };

    // 调用注册API
    api.register(userData)
      .then(res => {
        if (res.code === 201) {
          // 注册成功
          util.showToast('注册成功，请登录', 'success');
          
          // 切换到登录标签
          setTimeout(() => {
            this.setData({
              activeTab: 'login',
              isRegistering: false,
              // 预填充登录表单
              username: regUsername,
              password: ''
            });
          }, 1000);
        } else {
          // 注册失败
          this.setData({
            registerError: res.message || '注册失败，请稍后再试',
            isRegistering: false
          });
        }
      })
      .catch(err => {
        // 处理异常
        this.setData({
          registerError: '注册失败，请稍后再试',
          isRegistering: false
        });
        console.error('注册异常:', err);
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 检查是否已登录
    const token = wx.getStorageSync('token');
    if (token) {
      // 已登录，跳转到主页
      wx.switchTab({
        url: '/pages/stats/stats'
      });
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 动态设置导航栏
    wx.setNavigationBarTitle({
      title: '运动手环 - 登录/注册'
    });
  }
}); 