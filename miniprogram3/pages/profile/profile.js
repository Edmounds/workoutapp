// profile.js
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');
const deepseek = require('../../utils/deepseek.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    isSaving: false,
    showEditModal: false,
    showApiKeyModal: false,
    apiKey: '',
    
    // 用户信息
    userInfo: {},
    
    // 编辑表单数据
    editForm: {
      gender: 1,
      age: '',
      height: '',
      weight: ''
    },
    
    // BMI值
    bmi: '',
    
    // 总运动时长
    formattedDuration: '0h 0m',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 模拟成就数据
    this.setData({
      achievements: [
        {
          id: 1,
          title: '初级跑者',
          description: '累计跑步里程达到10公里',
          date: '2023-05-15'
        },
        {
          id: 2,
          title: '坚持不懈',
          description: '连续7天记录运动数据',
          date: '2023-05-22'
        }
      ]
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.checkLogin();
    this.loadUserInfo();
    // 加载API密钥
    this.loadApiKey();
  },

  /**
   * 检查用户是否登录
   */
  checkLogin: function() {
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.redirectTo({
        url: '/pages/login/login'
      });
    }
  },

  /**
   * 计算格式化后的总时长
   */
  formatTotalDuration: function(seconds) {
    if (!seconds) return '0h';
    // 确保seconds是数字类型
    seconds = parseInt(seconds) || 0;
    // 转换为小时和分钟
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0 && minutes > 0) {
      return `${hours}h ${minutes}m`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${minutes}m`;
    }
  },

  /**
   * 加载用户信息
   */
  loadUserInfo: function() {
    this.setData({ isLoading: true });
    
    api.getUserInfo()
      .then(res => {
        if (res.code === 200) {
          const userInfo = res.data.user_info;
          console.log('用户信息获取成功:', res.data);
          
          // 确保total_distance和total_workouts是数字而不是字符串
          if (userInfo.total_distance !== undefined) {
            userInfo.total_distance = parseFloat(userInfo.total_distance) || 0;
          }
          
          if (userInfo.total_workouts !== undefined) {
            userInfo.total_workouts = parseInt(userInfo.total_workouts) || 0;
          }
          
          // 确保total_duration是数字
          if (userInfo.total_duration !== undefined) {
            userInfo.total_duration = parseInt(userInfo.total_duration) || 0;
          }
          
          // 计算BMI
          let bmi = '';
          if (userInfo.height && userInfo.weight) {
            const heightInMeters = userInfo.height / 100;
            bmi = (userInfo.weight / (heightInMeters * heightInMeters)).toFixed(1);
          }
          
          // 计算格式化后的总时长
          const formattedDuration = this.formatTotalDuration(userInfo.total_duration);
          
          this.setData({
            userInfo,
            bmi,
            formattedDuration,
            editForm: {
              gender: userInfo.gender || 1,
              age: userInfo.age || '',
              height: userInfo.height || '',
              weight: userInfo.weight || ''
            },
            isLoading: false
          });
          
          console.log('处理后的用户信息:', {
            total_distance: userInfo.total_distance,
            total_workouts: userInfo.total_workouts,
            total_duration: userInfo.total_duration
          });
        } else {
          this.setData({ isLoading: false });
          util.showToast('获取用户信息失败');
        }
      })
      .catch(err => {
        this.setData({ isLoading: false });
        console.error('获取用户信息异常:', err);
        util.showToast('获取用户信息失败');
      });
  },

  /**
   * 打开编辑个人信息弹窗
   */
  editProfile: function() {
    this.setData({
      showEditModal: true,
      editForm: {
        gender: this.data.userInfo.gender || 1,
        age: this.data.userInfo.age || '',
        height: this.data.userInfo.height || '',
        weight: this.data.userInfo.weight || ''
      }
    });
  },

  /**
   * 关闭编辑个人信息弹窗
   */
  closeEditModal: function() {
    this.setData({
      showEditModal: false
    });
  },

  /**
   * 性别选择变化
   */
  genderChange: function(e) {
    this.setData({
      'editForm.gender': parseInt(e.detail.value)
    });
  },

  /**
   * 年龄输入
   */
  ageInput: function(e) {
    this.setData({
      'editForm.age': e.detail.value
    });
  },

  /**
   * 身高输入
   */
  heightInput: function(e) {
    this.setData({
      'editForm.height': e.detail.value
    });
  },

  /**
   * 体重输入
   */
  weightInput: function(e) {
    this.setData({
      'editForm.weight': e.detail.value
    });
  },

  /**
   * 保存个人信息
   */
  saveProfile: function() {
    const { gender, age, height, weight } = this.data.editForm;
    
    // 表单验证
    if (!age) {
      util.showToast('请输入年龄');
      return;
    }
    if (!height) {
      util.showToast('请输入身高');
      return;
    }
    if (!weight) {
      util.showToast('请输入体重');
      return;
    }
    
    // 设置保存中状态
    this.setData({ isSaving: true });
    
    // 构建更新数据
    const userData = {
      gender: parseInt(gender),
      age: parseInt(age),
      height: parseFloat(height),
      weight: parseFloat(weight)
    };
    
    // 调用更新API
    api.updateUserInfo(userData)
      .then(res => {
        if (res.code === 200) {
          // 更新成功
          util.showToast('个人信息更新成功', 'success');
          
          // 重新加载用户信息
          this.loadUserInfo();
          
          // 关闭弹窗
          this.setData({
            showEditModal: false,
            isSaving: false
          });
        } else {
          this.setData({ isSaving: false });
          util.showToast(res.message || '更新失败，请稍后再试');
        }
      })
      .catch(err => {
        this.setData({ isSaving: false });
        console.error('更新用户信息异常:', err);
        util.showToast('更新失败，请稍后再试');
      });
  },

  /**
   * 加载API密钥
   */
  loadApiKey: function() {
    const apiKey = deepseek.getApiKey();
    this.setData({
      apiKey: apiKey || ''
    });
  },

  /**
   * 设置API密钥
   */
  setApiKey: function() {
    this.setData({
      showApiKeyModal: true
    });
  },

  /**
   * 关闭API密钥设置弹窗
   */
  closeApiKeyModal: function() {
    this.setData({
      showApiKeyModal: false
    });
  },

  /**
   * API密钥输入变化
   */
  apiKeyInput: function(e) {
    this.setData({
      apiKey: e.detail.value
    });
  },

  /**
   * 保存API密钥
   */
  saveApiKey: function() {
    const { apiKey } = this.data;
    if (!apiKey) {
      util.showToast('请输入DeepSeek API密钥');
      return;
    }
    
    // 保存API密钥
    deepseek.setApiKey(apiKey);
    
    // 提示保存成功
    util.showToast('API密钥设置成功', 'success');
    
    // 关闭弹窗
    this.setData({
      showApiKeyModal: false
    });
  },

  /**
   * 导航到设置页面
   */
  navigateToSettings: function() {
    this.setApiKey();
  },

  /**
   * 导航到隐私页面
   */
  navigateToPrivacy: function() {
    util.showToast('暂未开放');
  },

  /**
   * 导航到关于页面
   */
  navigateToAbout: function() {
    util.showToast('暂未开放');
  },

  /**
   * 处理退出登录
   */
  handleLogout: function() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除本地存储的登录信息
          wx.removeStorageSync('token');
          wx.removeStorageSync('userInfo');
          
          // 重定向到登录页
          wx.reLaunch({
            url: '/pages/login/login'
          });
        }
      }
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadUserInfo();
    wx.stopPullDownRefresh();
  },

  /**
   * 格式化运动时长
   * @param {number} durationInSeconds - 总秒数
   */
  formatDuration: function(durationInSeconds) {
    if (!durationInSeconds) return '0h 0m';
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  },
}); 