// advice.js
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');
const deepseek = require('../../utils/deepseek.js');
const markdown = require('../../utils/markdown.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    currentDate: '',
    activeTab: 'training',  // 当前活动标签：training 或 nutrition
    
    // 用户信息
    userInfo: {},
    
    // 体能数据
    physicalStats: {},
    
    // 错误信息
    fitnessAdviceError: null,
    nutritionAdviceError: null,
    
    // 训练建议
    fitnessAdvice: {
      general_advice: '',
      weekly_plan: [],
      tips: []
    },
    
    // 训练建议富文本节点
    fitnessAdviceNodes: [],
    
    // 营养建议
    nutritionAdvice: {
      general_advice: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      breakfast: '',
      lunch: '',
      dinner: '',
      snacks: '',
      tips: []
    },
    
    // 营养建议富文本节点
    nutritionAdviceNodes: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置当前日期
    this.setData({
      currentDate: util.formatTime(new Date(), 'yyyy-MM-dd')
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.checkLogin();
    this.loadData();
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
   * 加载页面所需数据
   */
  loadData: function() {
    this.setData({ 
      isLoading: true,
      fitnessAdviceError: null,
      nutritionAdviceError: null
    });
    
    // 获取用户信息
    const userInfoPromise = api.getUserInfo()
      .then(res => {
        if (res.code === 200) {
          this.setData({
            userInfo: res.data.user_info
          });
          console.log('用户信息获取成功:', res.data);
        } else {
          util.showToast('获取用户信息失败');
        }
      })
      .catch(err => {
        console.error('获取用户信息异常:', err);
      });
    
    // 获取体能数据
    const statsPromise = api.getPhysicalStats()
      .then(res => {
        if (res.code === 200) {
          // 确保所有数值字段都是数字类型
          const physicalStats = res.data || {};
          
          // 确保数值字段为数字类型或默认为0
          physicalStats.avg_blood_oxygen = parseFloat(physicalStats.avg_blood_oxygen) || 0;
          physicalStats.avg_heart_rate = parseInt(physicalStats.avg_heart_rate) || 0;
          physicalStats.current_heart_rate = parseInt(physicalStats.current_heart_rate) || 0;
          physicalStats.resting_heart_rate = parseInt(physicalStats.resting_heart_rate) || 0;
          physicalStats.max_heart_rate = parseInt(physicalStats.max_heart_rate) || 0;
          physicalStats.health_index = parseInt(physicalStats.health_index) || 0;
          physicalStats.stress_index = parseInt(physicalStats.stress_index) || 0;
          physicalStats.sleep_quality = parseInt(physicalStats.sleep_quality) || 0;
          physicalStats.daily_distance = parseFloat(physicalStats.daily_distance) || 0;
          physicalStats.weekly_distance = parseFloat(physicalStats.weekly_distance) || 0;
          
          this.setData({
            physicalStats: physicalStats
          });
          
          console.log('体能数据获取成功:', physicalStats);
          return physicalStats; // 返回处理后的体能数据，用于后续AI建议
        } else {
          // 如果获取失败，设置默认的空数据
          const defaultStats = {
            avg_blood_oxygen: 0,
            avg_heart_rate: 0,
            current_heart_rate: 0,
            resting_heart_rate: 0,
            max_heart_rate: 0,
            health_index: 0,
            stress_index: 0,
            sleep_quality: 0,
            daily_distance: 0,
            weekly_distance: 0
          };
          
          this.setData({
            physicalStats: defaultStats
          });
          
          util.showToast('获取体能数据失败');
          return defaultStats;
        }
      })
      .catch(err => {
        console.error('获取体能数据异常:', err);
        return null;
      });
    
    // 获取健身建议和营养建议（使用体能数据）
    statsPromise.then(physicalStats => {
      if (!physicalStats) {
        // 如果没有体能数据，使用默认数据
        physicalStats = {
          daily_distance: 0,
          weekly_distance: 0,
          max_heart_rate: 0,
          avg_heart_rate: 0
        };
      }
      
      // 提取跑步数据
      const runningData = {
        daily_distance: physicalStats.daily_distance || 0,
        weekly_distance: physicalStats.weekly_distance || 0,
        max_heart_rate: physicalStats.max_heart_rate || 0,
        avg_heart_rate: physicalStats.avg_heart_rate || 0
      };
      
      // 获取健身建议（直接调用DeepSeek API）
      const fitnessPromise = deepseek.getFitnessAdvice(runningData)
        .then(res => {
          if (res.code === 200 && res.data) {
            // 处理返回的建议
            const fitnessAdvice = res.data;
            
            // 解析general_advice为富文本节点
            const fitnessAdviceNodes = markdown.parse(fitnessAdvice.general_advice);
            
            this.setData({
              fitnessAdvice: fitnessAdvice,
              fitnessAdviceNodes: fitnessAdviceNodes,
              fitnessAdviceError: null
            });
            
            console.log('健身建议获取成功:', res.data);
          } else {
            this.setData({
              fitnessAdvice: {},
              fitnessAdviceNodes: [],
              fitnessAdviceError: '获取健身建议失败，请稍后重试。'
            });
          }
        })
        .catch(err => {
          console.error('获取健身建议异常:', err);
          this.setData({
            fitnessAdvice: {},
            fitnessAdviceNodes: [],
            fitnessAdviceError: '获取健身建议失败，请检查网络连接。'
          });
        });
      
      // 获取营养建议（直接调用DeepSeek API）
      const nutritionPromise = deepseek.getNutritionAdvice(runningData)
        .then(res => {
          if (res.code === 200 && res.data) {
            // 处理返回的建议
            const nutritionAdvice = res.data;
            
            // 解析general_advice为富文本节点
            const nutritionAdviceNodes = markdown.parse(nutritionAdvice.general_advice);
            
            this.setData({
              nutritionAdvice: nutritionAdvice,
              nutritionAdviceNodes: nutritionAdviceNodes,
              nutritionAdviceError: null
            });
            
            console.log('营养建议获取成功:', res.data);
          } else {
            this.setData({
              nutritionAdvice: {},
              nutritionAdviceNodes: [],
              nutritionAdviceError: '获取营养建议失败，请稍后重试。'
            });
          }
        })
        .catch(err => {
          console.error('获取营养建议异常:', err);
          this.setData({
            nutritionAdvice: {},
            nutritionAdviceNodes: [],
            nutritionAdviceError: '获取营养建议失败，请检查网络连接。'
          });
        });
      
      // 所有数据加载完成后
      Promise.all([userInfoPromise, fitnessPromise, nutritionPromise])
        .then(() => {
          this.setData({ isLoading: false });
        })
        .catch(err => {
          this.setData({ isLoading: false });
          console.error('数据加载异常:', err);
        });
    });
  },

  /**
   * 获取默认健身建议（当API调用失败时使用）
   */
  getDefaultFitnessAdvice: function() {
    return {
      general_advice: '',
      weekly_plan: [],
      tips: []
    };
  },

  /**
   * 获取默认营养建议（当API调用失败时使用）
   */
  getDefaultNutritionAdvice: function() {
    return {
      general_advice: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      breakfast: '',
      lunch: '',
      dinner: '',
      snacks: '',
      tips: []
    };
  },

  /**
   * 切换标签页：训练计划/营养建议
   */
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },

  /**
   * 刷新建议
   */
  refreshAdvice: function() {
    // 显示加载中提示
    wx.showLoading({
      title: '获取最新建议...'
    });
    
    // 重新加载数据
    this.loadData();
    
    // 隐藏加载提示
    setTimeout(function() {
      wx.hideLoading();
    }, 2000);
  },

  /**
   * 设置API密钥
   */
  setApiKey: function() {
    wx.showToast({
      title: '已使用内置API密钥',
      icon: 'success',
      duration: 2000
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadData();
    wx.stopPullDownRefresh();
  }
}); 