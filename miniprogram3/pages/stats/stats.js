// stats.js
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');

// 引入图表绘制库（wxcharts）
// 注意：需要先引入wxcharts库，这里假设已经安装
let wxCharts = null;
try {
  wxCharts = require('../../utils/wxcharts.js');
} catch (error) {
  console.error('请先安装wxcharts库，或者引入正确的路径');
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    currentDate: '',
    timeRange: 'week',  // 时间范围：week, month, year
    
    // 用户信息
    userInfo: {},
    
    // 体能数据
    physicalStats: {},
    
    // 运动记录
    runningRecords: [],
    
    // 图表数据
    chartData: {
      week: [],
      month: [],
      year: []
    },
    
    // 图表实例
    runningChart: null
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
    
    // 获取跑步记录
    const recordsPromise = api.getRunningRecords()
      .then(res => {
        if (res.code === 200) {
          // 只显示最近3条数据
          const recentRecords = res.data.slice(0, 3);
          
          this.setData({
            runningRecords: recentRecords
          });
          
          // 处理图表数据
          this.processChartData(res.data);
        } else {
          util.showToast('获取跑步记录失败');
        }
      })
      .catch(err => {
        console.error('获取跑步记录异常:', err);
      });
    
    // 所有数据加载完成后
    Promise.all([userInfoPromise, statsPromise, recordsPromise])
      .then(() => {
        this.setData({ isLoading: false });
        this.initChart();
      })
      .catch(err => {
        this.setData({ isLoading: false });
        console.error('数据加载异常:', err);
      });
  },

  /**
   * 处理图表数据
   * @param {Array} records - 跑步记录数组
   */
  processChartData: function(records) {
    if (!records || records.length === 0) return;
    
    // 按日期排序
    records.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
    
    // 当前日期
    const now = new Date();
    
    // 处理周数据（最近7天）
    const weekData = this.getDataForRange(records, 7);
    
    // 处理月数据（最近30天）
    const monthData = this.getDataForRange(records, 30);
    
    // 处理年数据（最近12个月）
    const yearData = this.getDataForRange(records, 365, 'month');
    
    this.setData({
      'chartData.week': weekData,
      'chartData.month': monthData,
      'chartData.year': yearData
    });
  },

  /**
   * 根据时间范围获取图表数据
   * @param {Array} records - 跑步记录数组
   * @param {Number} days - 天数
   * @param {String} groupBy - 分组方式：'day' 或 'month'
   * @return {Object} 图表数据对象
   */
  getDataForRange: function(records, days, groupBy = 'day') {
    const now = new Date();
    const startDate = new Date();
    startDate.setDate(now.getDate() - days);
    
    // 过滤在时间范围内的记录
    const filteredRecords = records.filter(record => {
      const recordDate = new Date(record.start_time);
      return recordDate >= startDate && recordDate <= now;
    });
    
    // 按日期分组汇总数据
    const groupedData = {};
    filteredRecords.forEach(record => {
      const recordDate = new Date(record.start_time);
      let key;
      
      if (groupBy === 'day') {
        key = util.formatTime(recordDate, 'MM-dd');
      } else {
        key = util.formatTime(recordDate, 'yyyy-MM');
      }
      
      if (!groupedData[key]) {
        groupedData[key] = {
          distance: 0,
          count: 0
        };
      }
      
      groupedData[key].distance += record.distance_km || 0;
      groupedData[key].count += 1;
    });
    
    // 格式化为图表所需数据格式
    const categories = [];
    const distanceSeries = [];
    
    // 确保有完整的数据点
    if (groupBy === 'day') {
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(now.getDate() - (days - 1) + i);
        const key = util.formatTime(date, 'MM-dd');
        
        categories.push(key);
        distanceSeries.push((groupedData[key] && groupedData[key].distance) || 0);
      }
    } else {
      for (let i = 0; i < 12; i++) {
        const date = new Date();
        date.setMonth(now.getMonth() - (11 - i));
        const key = util.formatTime(date, 'yyyy-MM');
        
        categories.push(util.formatTime(date, 'MM月'));
        distanceSeries.push((groupedData[key] && groupedData[key].distance) || 0);
      }
    }
    
    return {
      categories,
      series: [{
        name: '里程(km)',
        data: distanceSeries,
        color: '#6200EE'
      }]
    };
  },

  /**
   * 初始化图表
   */
  initChart: function() {
    if (!wxCharts) {
      console.error('wxCharts 未正确加载');
      return;
    }
    
    const data = this.data.chartData[this.data.timeRange];
    if (!data || !data.categories || data.categories.length === 0) {
      console.log('没有足够的图表数据');
      return;
    }
    
    try {
      // 图表配置
      const chartConfig = {
        canvasId: 'runningChart',
        type: 'line',
        categories: data.categories,
        series: data.series,
        width: wx.getSystemInfoSync().windowWidth * 0.88,
        height: 200,
        dataLabel: false,
        dataPointShape: true,
        legend: false,
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          title: '里程(km)',
          format: (val) => val.toFixed(1)
        },
        extra: {
          lineStyle: 'curve'
        }
      };
      
      // 创建图表实例
      this.runningChart = new wxCharts(chartConfig);
    } catch (error) {
      console.error('创建图表失败:', error);
    }
  },

  /**
   * 切换时间范围
   */
  switchTimeRange: function(e) {
    const range = e.currentTarget.dataset.range;
    this.setData({ timeRange: range });
    
    // 更新图表
    if (this.runningChart) {
      const data = this.data.chartData[range];
      if (data && data.categories) {
        this.runningChart.updateData({
          categories: data.categories,
          series: data.series
        });
      }
    }
  },

  /**
   * 查看所有记录
   */
  viewAllRecords: function() {
    wx.navigateTo({
      url: '/pages/records/records'
    });
  },

  /**
   * 查看记录详情
   */
  viewRecordDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/record-detail/record-detail?id=${id}`
    });
  },

  /**
   * 图表触摸事件处理
   */
  touchHandler: function(e) {
    if (this.runningChart) {
      this.runningChart.showToolTip(e, {
        format: (item, category) => {
          return category + ': ' + item.data + 'km'
        }
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