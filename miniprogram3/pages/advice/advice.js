// advice.js
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');

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
    
    // 训练建议
    fitnessAdvice: {
      general_advice: '',
      weekly_plan: [],
      tips: []
    },
    
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
    }
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
    this.setData({ isLoading: true });
    
    // 获取用户信息
    const userInfoPromise = api.getUserInfo()
      .then(res => {
        if (res.code === 200) {
          this.setData({
            userInfo: res.data.user_info
          });
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
          this.setData({
            physicalStats: res.data
          });
        } else {
          util.showToast('获取体能数据失败');
        }
      })
      .catch(err => {
        console.error('获取体能数据异常:', err);
      });
    
    // 获取健身建议
    const fitnessPromise = api.getFitnessAdvice()
      .then(res => {
        if (res.code === 200) {
          this.setData({
            fitnessAdvice: res.data || this.getDefaultFitnessAdvice()
          });
        } else {
          this.setData({
            fitnessAdvice: this.getDefaultFitnessAdvice()
          });
        }
      })
      .catch(err => {
        console.error('获取健身建议异常:', err);
        this.setData({
          fitnessAdvice: this.getDefaultFitnessAdvice()
        });
      });
    
    // 获取营养建议
    const nutritionPromise = api.getNutritionAdvice()
      .then(res => {
        if (res.code === 200) {
          this.setData({
            nutritionAdvice: res.data || this.getDefaultNutritionAdvice()
          });
        } else {
          this.setData({
            nutritionAdvice: this.getDefaultNutritionAdvice()
          });
        }
      })
      .catch(err => {
        console.error('获取营养建议异常:', err);
        this.setData({
          nutritionAdvice: this.getDefaultNutritionAdvice()
        });
      });
    
    // 所有数据加载完成后
    Promise.all([userInfoPromise, statsPromise, fitnessPromise, nutritionPromise])
      .then(() => {
        this.setData({ isLoading: false });
      })
      .catch(err => {
        this.setData({ isLoading: false });
        console.error('数据加载异常:', err);
      });
  },

  /**
   * 获取默认健身建议（当API调用失败时使用）
   */
  getDefaultFitnessAdvice: function() {
    return {
      general_advice: '根据您的运动数据，我们建议您每周保持3-4次的有氧运动，并适当增加力量训练。请确保充分的休息和恢复时间。',
      weekly_plan: [
        {
          day: '周一',
          workout_type: '恢复跑',
          description: '低强度轻松跑，保持呼吸均匀',
          distance: '5',
          duration: '30',
          intensity: '低强度'
        },
        {
          day: '周三',
          workout_type: '间歇跑',
          description: '400米高强度跑 + 200米慢跑恢复，重复6-8次',
          distance: '6',
          duration: '45',
          intensity: '高强度'
        },
        {
          day: '周五',
          workout_type: '力量训练',
          description: '全身力量训练，重点锻炼核心和下肢',
          distance: '0',
          duration: '40',
          intensity: '中强度'
        },
        {
          day: '周日',
          workout_type: '长距离跑',
          description: '保持稳定配速的长跑训练',
          distance: '10',
          duration: '60',
          intensity: '中强度'
        }
      ],
      tips: [
        '确保每次运动前进行5-10分钟的热身',
        '保持每周至少一天的完全休息日',
        '逐渐增加训练量，避免突然增加运动强度',
        '注意监控心率，确保在合适的训练区间'
      ]
    };
  },

  /**
   * 获取默认营养建议（当API调用失败时使用）
   */
  getDefaultNutritionAdvice: function() {
    return {
      general_advice: '根据您的体重和运动量，我们建议您每天摄入适量的蛋白质、碳水化合物和健康脂肪。请确保多喝水，尤其是在运动前后。',
      calories: 2200,
      protein: 110,
      carbs: 275,
      fat: 60,
      breakfast: '全麦面包配鸡蛋、牛奶和水果',
      lunch: '糙米饭、烤鸡胸肉、蔬菜沙拉',
      dinner: '三文鱼、蒸蔬菜、藜麦',
      snacks: '希腊酸奶、坚果、水果',
      tips: [
        '运动前1-2小时适量进食碳水化合物',
        '运动后30分钟内补充蛋白质和碳水化合物',
        '每天饮水2000-3000毫升',
        '选择全谷物而非精制谷物',
        '控制加工食品和添加糖的摄入'
      ]
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
    this.setData({ isLoading: true });
    
    // 根据当前标签页刷新相应的建议
    if (this.data.activeTab === 'training') {
      api.getFitnessAdvice()
        .then(res => {
          if (res.code === 200) {
            this.setData({
              fitnessAdvice: res.data || this.getDefaultFitnessAdvice(),
              isLoading: false
            });
            util.showToast('训练建议已更新', 'success');
          } else {
            this.setData({ isLoading: false });
            util.showToast('获取训练建议失败');
          }
        })
        .catch(err => {
          console.error('获取健身建议异常:', err);
          this.setData({ isLoading: false });
          util.showToast('获取训练建议失败');
        });
    } else {
      api.getNutritionAdvice()
        .then(res => {
          if (res.code === 200) {
            this.setData({
              nutritionAdvice: res.data || this.getDefaultNutritionAdvice(),
              isLoading: false
            });
            util.showToast('营养建议已更新', 'success');
          } else {
            this.setData({ isLoading: false });
            util.showToast('获取营养建议失败');
          }
        })
        .catch(err => {
          console.error('获取营养建议异常:', err);
          this.setData({ isLoading: false });
          util.showToast('获取营养建议失败');
        });
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadData();
    wx.stopPullDownRefresh();
  }
}); 