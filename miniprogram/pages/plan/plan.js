// pages/plan/plan.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedPlan: 'beginner', // 默认选中初级计划
    
    // 用户状态数据
    weeklyDistance: '0.0',
    best5kmTime: '暂无记录',
    userLevelText: '初级',
    
    // AI建议内容
    aiAdviceContent: '正在加载个性化建议...',
    
    // 营养建议数据
    nutritionTips: [],
    
    // 训练计划数据（保持原有结构）
    beginnerPlan: [
      {
        day: '周一',
        type: '恢复跑',
        description: '轻松慢跑',
        detail: '30分钟，配速6\'30"-7\'00"/公里，心率区间：最大心率的65-70%'
      },
      {
        day: '周二',
        type: '休息',
        description: '休息日或交叉训练',
        detail: '可进行瑜伽、游泳等低强度训练，促进恢复'
      },
      {
        day: '周三',
        type: '间歇训练',
        description: '短间歇跑',
        detail: '热身10分钟 + 8组(1分钟快跑+2分钟慢跑) + 放松5分钟'
      },
      {
        day: '周四',
        type: '休息',
        description: '完全休息',
        detail: '给身体充分恢复时间，避免运动伤害'
      },
      {
        day: '周五',
        type: '节奏跑',
        description: '中等强度持续跑',
        detail: '25分钟，配速5\'45"-6\'15"/公里，心率区间：最大心率的75-80%'
      },
      {
        day: '周六',
        type: '休息',
        description: '休息日或交叉训练',
        detail: '可进行力量训练，重点锻炼核心和下肢力量'
      },
      {
        day: '周日',
        type: '长距离跑',
        description: '慢跑增加耐力',
        detail: '40-50分钟轻松慢跑，配速6\'30"-7\'00"/公里，心率区间：最大心率的65-70%'
      }
    ],
    intermediatePlan: [
      {
        day: '周一',
        type: '恢复跑',
        description: '轻松慢跑',
        detail: '35分钟，配速6\'00"-6\'30"/公里，心率区间：最大心率的65-70%'
      },
      {
        day: '周二',
        type: '速度训练',
        description: '400米间歇',
        detail: '热身15分钟 + 8-10组400米(配速4\'20"-4\'40"/公里，间休90秒慢跑) + 放松10分钟'
      },
      {
        day: '周三',
        type: '休息',
        description: '休息或交叉训练',
        detail: '可进行30分钟的交叉训练，如游泳、骑行或力量训练'
      },
      {
        day: '周四',
        type: '节奏跑',
        description: '中等强度持续跑',
        detail: '40分钟，配速5\'15"-5\'45"/公里，心率区间：最大心率的80-85%'
      },
      {
        day: '周五',
        type: '恢复跑',
        description: '轻松慢跑',
        detail: '30分钟，配速6\'00"-6\'30"/公里，心率区间：最大心率的65-70%'
      },
      {
        day: '周六',
        type: '长距离跑',
        description: '增强耐力',
        detail: '60-70分钟，配速5\'45"-6\'15"/公里，心率区间：最大心率的70-75%'
      },
      {
        day: '周日',
        type: '休息',
        description: '完全休息',
        detail: '给身体充分恢复时间，为下周训练做准备'
      }
    ],
    advancedPlan: [
      {
        day: '周一',
        type: '恢复跑',
        description: '轻松慢跑',
        detail: '40分钟，配速5\'30"-6\'00"/公里，心率区间：最大心率的65-70%'
      },
      {
        day: '周二',
        type: 'VO2max训练',
        description: '800-1000米间歇',
        detail: '热身15分钟 + 6组1000米(配速4\'00"-4\'15"/公里，间休2-3分钟慢跑) + 放松10分钟'
      },
      {
        day: '周三',
        type: '恢复跑',
        description: '轻松慢跑+力量训练',
        detail: '30分钟慢跑 + 30分钟下肢及核心力量训练'
      },
      {
        day: '周四',
        type: '节奏跑',
        description: '高强度持续跑',
        detail: '50分钟，配速4\'30"-5\'00"/公里，心率区间：最大心率的85-90%'
      },
      {
        day: '周五',
        type: '休息',
        description: '完全休息',
        detail: '给身体充分恢复时间，为周末高强度训练做准备'
      },
      {
        day: '周六',
        type: '速度耐力训练',
        description: '法特莱克训练',
        detail: '热身15分钟 + 20分钟交替(1分钟快跑/1分钟慢跑) + 15分钟稳定配速跑 + 放松10分钟'
      },
      {
        day: '周日',
        type: '长距离跑',
        description: '增强耐力',
        detail: '80-90分钟，配速5\'15"-5\'45"/公里，心率区间：最大心率的70-80%'
      }
    ]
  },

  /**
   * 获取用户统计数据
   */
  getUserStats: function() {
    const token = wx.getStorageSync('token');
    if (!token) {
      console.log('用户未登录');
      return;
    }

    wx.request({
      url: `${app.globalData.apiBase}/api/users/all/list`,
      method: 'GET',
      header: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log('获取用户统计数据:', res.data);
        if (res.data.code === 200 && res.data.data) {
          const userData = res.data.data;
          const userInfo = userData.user_info;
          const workoutRecords = userData.workout_records || {};

          // 设置用户等级文本
          const levelTexts = {
            'beginner': '初级',
            'intermediate': '中级', 
            'advanced': '高级'
          };

          // 与数据页面完全相同的数据处理逻辑
          const totalKm = workoutRecords.total_km || 0;
          console.log('从API获取的total_km:', totalKm);

          this.setData({
            weeklyDistance: totalKm.toFixed(1),
            userLevelText: levelTexts[userInfo.level] || '初级',
            selectedPlan: userInfo.level || 'beginner'
          });

          console.log('计划页面设置的总公里数:', totalKm.toFixed(1));

          // 获取跑步记录计算最佳成绩
          this.getRunningRecords();
        } else {
          console.log('获取用户信息失败:', res.data.message);
        }
      },
      fail: (err) => {
        console.error('获取用户统计失败:', err);
      }
    });
  },

  /**
   * 获取跑步记录并计算最佳5公里成绩
   */
  getRunningRecords: function() {
    const token = wx.getStorageSync('token');
    if (!token) return;

    wx.request({
      url: `${app.globalData.apiBase}/api/user/running_records`,
      method: 'GET',
      header: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log('获取跑步记录:', res.data);
        if (res.data.code === 200) {
          const records = res.data.data;
          
          // 查找5公里左右的最佳成绩
          let best5km = null;
          let bestTime = Infinity;

          records.forEach(record => {
            const distance = record.distance_km || 0;
            const duration = record.duration || 0;
            
            // 找距离5公里最近的记录（4-6公里范围）
            if (distance >= 4 && distance <= 6 && duration > 0) {
              // 计算5公里的预估时间
              const estimatedTime = (duration / distance) * 5;
              if (estimatedTime < bestTime) {
                bestTime = estimatedTime;
                best5km = this.formatTime(estimatedTime);
              }
            }
          });

          this.setData({
            best5kmTime: best5km || '暂无记录'
          });
        }
      },
      fail: (err) => {
        console.error('获取跑步记录失败:', err);
      }
    });
  },

  /**
   * 格式化时间（秒转换为分:秒格式）
   */
  formatTime: function(seconds) {
    if (!seconds || seconds <= 0) return '暂无记录';
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}'${secs.toString().padStart(2, '0')}"`;
  },

  /**
   * 获取营养建议
   */
  getNutritionTips: function() {
    wx.request({
      url: `${app.globalData.apiBase}/api/nutrition/tips`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log('获取营养建议:', res.data);
        if (res.data.code === 200) {
          const tipsData = res.data.data;
          
          // 获取日常和训练相关的重要建议（优先级1-2）
          let importantTips = [];
          
          Object.keys(tipsData).forEach(category => {
            const tips = tipsData[category];
            tips.forEach(tip => {
              if (tip.importance <= 2) {
                importantTips.push(tip);
              }
            });
          });

          // 最多显示4条建议
          importantTips = importantTips.slice(0, 4);

          this.setData({
            nutritionTips: importantTips
          });
        }
      },
      fail: (err) => {
        console.error('获取营养建议失败:', err);
      }
    });
  },

  /**
   * 获取AI建议
   */
  getAIAdvice: function() {
    const token = wx.getStorageSync('token');
    if (!token) {
      this.setData({
        aiAdviceContent: '请先登录查看个性化AI建议'
      });
      return;
    }

    wx.request({
      url: `${app.globalData.apiBase}/api/ai/advice`,
      method: 'GET',
      header: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log('获取AI建议:', res.data);
        if (res.data.code === 200) {
          const adviceList = res.data.data;
          
          if (adviceList && adviceList.length > 0) {
            // 显示最新的建议
            this.setData({
              aiAdviceContent: adviceList[0].advice_content
            });
          } else {
            this.setData({
              aiAdviceContent: '暂无个性化建议，系统正在根据您的运动数据生成专属建议...'
            });
          }
        }
      },
      fail: (err) => {
        console.error('获取AI建议失败:', err);
        this.setData({
          aiAdviceContent: '获取AI建议失败，请稍后重试'
        });
      }
    });
  },

  /**
   * 加载所有数据
   */
  loadAllData: function() {
    // 显示加载提示
    wx.showLoading({
      title: '加载中...'
    });

    // 获取用户统计数据
    this.getUserStats();
    
    // 获取营养建议
    this.getNutritionTips();
    
    // 获取AI建议
    this.getAIAdvice();

    // 隐藏加载提示
    setTimeout(() => {
      wx.hideLoading();
    }, 1000);
  },

  /**
   * 切换训练计划
   */
  switchPlan: function(e) {
    const plan = e.currentTarget.dataset.plan;
    this.setData({
      selectedPlan: plan
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载所有数据
    this.loadAllData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 每次显示页面时刷新数据
    this.loadAllData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 下拉刷新时重新获取数据
    this.loadAllData();
    
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '我的训练计划',
      path: 'pages/plan/plan'
    };
  }
})