// stats.js
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');
// 导入自定义图表库
const Charts = require('../../utils/charts.js');

// 定义全局变量
var _self;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    currentDate: '',
    timeRange: 'week',  // 时间范围：week, month, year
    chartType: 'line',  // 图表类型：line, column, pie
    
    // 用户信息
    userInfo: {},
    
    // 体能数据
    physicalStats: {},
    
    // 运动记录
    runningRecords: [],
    
    // 原始跑步记录
    allRunningRecords: [],
    
    // 图表尺寸
    cWidth: 0,
    cHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _self = this;
    // 获取窗口尺寸用于图表绘制
    this.setData({
      currentDate: util.formatTime(new Date(), 'yyyy-MM-dd'),
      cWidth: wx.getSystemInfoSync().windowWidth,
      cHeight: 200
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.checkLoginAndLoadData();
  },

  /**
   * 检查用户是否登录
   */
  checkLoginAndLoadData: function() {
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.reLaunch({
        url: '/pages/login/login'
      });
    } else {
      this.loadData();
    }
  },

  /**
   * 加载页面所需数据
   */
  loadData: function() {
    this.setData({ isLoading: true });
    
    // 获取用户信息
    api.getUserInfo()
      .then(userInfoRes => {
        if (userInfoRes.code === 200) {
          // 确保数据类型正确
          const userInfo = userInfoRes.data.user_info;
          if (userInfo.total_distance !== undefined) {
            userInfo.total_distance = parseFloat(userInfo.total_distance) || 0;
          }
          if (userInfo.total_workouts !== undefined) {
            userInfo.total_workouts = parseInt(userInfo.total_workouts) || 0;
          }
          this.setData({ userInfo: userInfo });
        } else {
          util.showToast('获取用户信息失败');
        }
        return api.getPhysicalStats();
      })
      .then(statsRes => {
        if (statsRes.code === 200) {
          // 确保数据类型正确
          const physicalStats = statsRes.data || {};
          
          // 对所有健康指标字段进行检查和处理，确保数值字段为数字类型或默认为0
          // 血氧相关
          physicalStats.avg_blood_oxygen = parseFloat(physicalStats.avg_blood_oxygen) || 0;
          
          // 心率相关
          physicalStats.avg_heart_rate = parseInt(physicalStats.avg_heart_rate) || 0;
          physicalStats.current_heart_rate = parseInt(physicalStats.current_heart_rate) || 0;
          physicalStats.resting_heart_rate = parseInt(physicalStats.resting_heart_rate) || 0;
          physicalStats.max_heart_rate = parseInt(physicalStats.max_heart_rate) || 0;
          
          // 步频相关
          physicalStats.current_step_rate = parseInt(physicalStats.current_step_rate) || 0;
          physicalStats.avg_step_rate = parseInt(physicalStats.avg_step_rate) || 0;
          
          // 健康指数相关
          physicalStats.health_index = parseInt(physicalStats.health_index) || 0;
          physicalStats.stress_index = parseInt(physicalStats.stress_index) || 0;
          physicalStats.sleep_quality = parseInt(physicalStats.sleep_quality) || 0;
          physicalStats.sleep_duration = parseInt(physicalStats.sleep_duration) || 0;
          physicalStats.aerobic_capacity = parseInt(physicalStats.aerobic_capacity) || 0;
          
          // 距离相关
          physicalStats.weekly_distance = parseFloat(physicalStats.weekly_distance) || 0;
          
          this.setData({ physicalStats: physicalStats });
        } else {
          // 如果获取失败，设置默认的空数据
          this.setData({ 
            physicalStats: {
              avg_blood_oxygen: 0,
              avg_heart_rate: 0,
              current_heart_rate: 0,
              resting_heart_rate: 0,
              max_heart_rate: 0,
              current_step_rate: 0,
              avg_step_rate: 0,
              health_index: 0,
              stress_index: 0,
              sleep_quality: 0,
              sleep_duration: 0,
              aerobic_capacity: 0,
              weekly_distance: 0
            } 
          });
          util.showToast('获取体能数据失败');
        }
        return api.getRunningRecords();
      })
      .then(recordsRes => {
        if (recordsRes.code === 200) {
          let records = recordsRes.data || [];
          
          // 数据预处理和验证
          records = records.map(record => {
            // 确保数值字段是数字类型
            if (record.distance !== undefined) {
              record.distance = parseFloat(record.distance) || 0;
              record.distance_km = parseFloat(record.distance_km) || record.distance / 1000 || 0;
            }
            if (record.duration !== undefined) {
              record.duration = parseInt(record.duration) || 0;
              record.duration_minutes = parseFloat(record.duration_minutes) || record.duration / 60 || 0;
            }
            return record;
          });
          
          // 按时间降序排序
          records.sort(function(a, b) {
            // 确保都有start_time字段，否则可能导致排序错误
            if (!a.start_time) return 1; // 没有start_time的记录排在后面
            if (!b.start_time) return -1;
            
            // 转换为Date对象进行比较
            try {
              const dateA = new Date(a.start_time.replace(/-/g, '/'));
              const dateB = new Date(b.start_time.replace(/-/g, '/'));
              return dateB - dateA; // 降序排列，最新的在前面
            } catch (e) {
              console.error('日期排序错误:', e, a, b);
              return 0;
            }
          });
          
          console.log('排序后的跑步记录:', records);
          
          this.setData({
            allRunningRecords: records,
            isLoading: false
          });
          
          this.updateRecentRecords();
          this.updateAllCharts();
        } else {
          util.showToast('获取跑步记录失败');
          this.setData({ isLoading: false });
        }
      })
      .catch(err => {
        console.error('数据加载异常:', err);
        util.showToast('数据加载失败，请稍后重试');
        this.setData({ isLoading: false });
      });
  },

  updateRecentRecords: function() {
    const recentRecords = [];
    const allRecords = this.data.allRunningRecords;
    
    console.log('更新最近记录，可用记录数:', allRecords.length);
    
    // 先确保记录是按照开始时间从新到旧排序
    const sortedRecords = [...allRecords];
    sortedRecords.sort((a, b) => {
      if (!a.start_time) return 1;
      if (!b.start_time) return -1;
      
      try {
        const dateA = new Date(a.start_time.replace(/-/g, '/'));
        const dateB = new Date(b.start_time.replace(/-/g, '/'));
        return dateB - dateA; // 降序排列
      } catch (e) {
        console.error('最近记录排序错误:', e);
        return 0;
      }
    });
    
    // 只取前3条记录
    for (let i = 0; i < Math.min(3, sortedRecords.length); i++) {
      const record = sortedRecords[i];
      try {
        // 数据验证和转换
        const formattedRecord = {
          id: record.id,
          start_time: record.start_time ? util.formatTime(new Date(record.start_time.replace(/-/g, '/')), 'yyyy-MM-dd HH:mm') : '未知时间',
          workout_type: record.workout_type || '跑步',
          distance_km: record.distance_km || (record.distance ? (record.distance / 1000).toFixed(2) : '0'),
          duration_minutes: record.duration_minutes || (record.duration ? Math.round(record.duration / 60) : '0'),
          avg_pace_formatted: record.avg_pace_formatted || (record.avg_pace ? util.formatPace(record.avg_pace) : '--')
        };
        recentRecords.push(formattedRecord);
      } catch (error) {
        console.error('处理记录异常:', error, record);
      }
    }
    
    console.log('处理后的最近记录:', recentRecords);
    this.setData({ runningRecords: recentRecords });
  },

  /**
   * 根据时间范围获取图表数据
   * @param {Array} records - 跑步记录数组
   * @param {Number} days - 天数
   * @param {String} groupBy - 分组方式：'day' 或 'month'
   * @param {String} dataKey - 数据字段名
   * @return {Object} 图表数据对象
   */
  getDataForRange: function(records, days, groupBy, dataKey) {
    const now = new Date();
    const startDate = new Date();
    startDate.setDate(now.getDate() - days);
    
    // 过滤在时间范围内的记录
    const filteredRecords = [];
    for (let i = 0; i < records.length; i++) {
      try {
        if (!records[i].start_time) continue;
        const recordDate = new Date(records[i].start_time.replace(/-/g, '/'));
        if (recordDate >= startDate && recordDate <= now) {
          filteredRecords.push(records[i]);
        }
      } catch (e) {
        console.error('处理记录日期异常:', e, records[i]);
      }
    }
    
    // 按日期分组汇总数据
    const groupedData = {};
    for (let i = 0; i < filteredRecords.length; i++) {
      try {
        const record = filteredRecords[i];
        if (!record.start_time) continue;
        
        const recordDate = new Date(record.start_time.replace(/-/g, '/'));
        let key;
        
        if (groupBy === 'day') {
          key = util.formatTime(recordDate, 'MM-dd');
        } else {
          key = util.formatTime(recordDate, 'yyyy-MM');
        }
        
        if (!groupedData[key]) {
          groupedData[key] = { value: 0 };
        }
        
        let value = 0;
        if (dataKey in record) {
          value = Number(record[dataKey] || 0);
        }
        
        // 处理距离数据，将米转换为公里
        if (dataKey === 'distance') {
          value = value / 1000;
        }
        
        // 处理时长数据，将秒转换为分钟
        if (dataKey === 'duration') {
          value = value / 60;
        }
        
        groupedData[key].value += value;
      } catch (e) {
        console.error('分组数据异常:', e, filteredRecords[i]);
      }
    }
    
    // 格式化为图表所需数据格式
    const categories = [];
    const seriesData = [];
    const daysInScope = groupBy === 'day' ? days : 12;
    const unit = groupBy === 'day' ? 'day' : 'month';
    
    for (let i = 0; i < daysInScope; i++) {
      const date = new Date();
      if (unit === 'day') {
        date.setDate(now.getDate() - (daysInScope - 1) + i);
        categories.push(util.formatTime(date, 'MM-dd'));
      } else {
        date.setMonth(now.getMonth() - (daysInScope - 1) + i);
        categories.push(util.formatTime(date, 'MM月'));
      }
      const key = util.formatTime(date, unit === 'day' ? 'MM-dd' : 'yyyy-MM');
      seriesData.push(groupedData[key] ? Number(groupedData[key].value.toFixed(2)) : 0);
    }
    
    // 生成系列数据
    const name = dataKey === 'distance' ? '跑步距离 (km)' : 
                 dataKey === 'duration' ? '运动时长 (min)' : '消耗热量 (kcal)';
    const color = dataKey === 'distance' ? '#1976D2' : 
                  dataKey === 'duration' ? '#FF5722' : '#4CAF50';
    
    return { 
      categories: categories, 
      series: [{
        name: name,
        data: seriesData,
        color: color
      }]
    };
  },

  /**
   * 切换图表类型
   */
  switchChartType: function(e) {
    // 将bar改为column以匹配图表库的类型命名
    var type = e.currentTarget.dataset.type === 'bar' ? 'column' : e.currentTarget.dataset.type;
    this.setData({
      chartType: type
    });
    this.updateAllCharts();
  },

  /**
   * 切换时间范围
   */
  switchTimeRange: function(e) {
    this.setData({
      timeRange: e.currentTarget.dataset.range
    });
    this.updateAllCharts();
  },

  /**
   * 初始化所有图表
   */
  initAllCharts: function() {
    // 根据当前选择的时间范围初始化图表
    const chartData = this.data.chartData[this.data.timeRange];
    console.log('图表数据:', chartData);
    if (chartData && chartData.length > 0) {
      setTimeout(() => {
        this.initDistanceChart('distanceCanvas');
        this.initDurationChart('durationCanvas');
        this.initCaloriesChart('caloriesCanvas');
      }, 100);
    } else {
      console.log('暂无数据，无法初始化图表');
    }
  },

  /**
   * 初始化距离图表
   */
  initDistanceChart: function(canvasId) {
    try {
      const chartData = this.data.chartData[this.data.timeRange];
      
      // 准备图表数据
      const categories = chartData.map(item => item.label);
      const series = [{
        name: '距离(公里)',
        data: chartData.map(item => Number(item.distance_km) || 0),
        color: '#1976D2'
      }];
      
      // 图表配置
      const opts = {
        canvasId: canvasId,
        type: this.data.chartType === 'bar' ? 'column' : this.data.chartType,
        categories: categories,
        series: series,
        animation: true,
        background: '#FFFFFF',
        padding: [15, 15, 0, 15],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          title: '公里',
          format: (val) => val.toFixed(1)
        },
        dataLabel: true,
        width: wx.getSystemInfoSync().windowWidth * 0.9,
        height: 200,
        extra: {
          column: {
            width: 20
          }
        }
      };
      
      console.log('初始化距离图表:', opts);
      
      // 初始化图表
      chartUtil.initChart(canvasId, opts, this);
    } catch (error) {
      console.error('初始化距离图表错误:', error);
    }
  },
  
  /**
   * 初始化时长图表
   */
  initDurationChart: function(canvasId) {
    try {
      const chartData = this.data.chartData[this.data.timeRange];
      
      // 准备图表数据
      const categories = chartData.map(item => item.label);
      const series = [{
        name: '时长(分钟)',
        data: chartData.map(item => Number(item.duration_minutes) || 0),
        color: '#FF5722'
      }];
      
      // 图表配置
      const opts = {
        canvasId: canvasId,
        type: this.data.chartType === 'bar' ? 'column' : this.data.chartType,
        categories: categories,
        series: series,
        animation: true,
        background: '#FFFFFF',
        padding: [15, 15, 0, 15],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          title: '分钟',
          format: (val) => val.toFixed(0)
        },
        dataLabel: true,
        width: wx.getSystemInfoSync().windowWidth * 0.9,
        height: 200,
        extra: {
          column: {
            width: 20
          }
        }
      };
      
      console.log('初始化时长图表:', opts);
      
      // 初始化图表
      chartUtil.initChart(canvasId, opts, this);
    } catch (error) {
      console.error('初始化时长图表错误:', error);
    }
  },
  
  /**
   * 初始化卡路里图表
   */
  initCaloriesChart: function(canvasId) {
    try {
      const chartData = this.data.chartData[this.data.timeRange];
      
      // 准备图表数据
      const categories = chartData.map(item => item.label);
      const series = [{
        name: '卡路里(千卡)',
        data: chartData.map(item => Number(item.calories) || 0),
        color: '#4CAF50'
      }];
      
      // 图表配置
      const opts = {
        canvasId: canvasId,
        type: this.data.chartType === 'bar' ? 'column' : this.data.chartType,
        categories: categories,
        series: series,
        animation: true,
        background: '#FFFFFF',
        padding: [15, 15, 0, 15],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          title: '千卡',
          format: (val) => val.toFixed(0)
        },
        dataLabel: true,
        width: wx.getSystemInfoSync().windowWidth * 0.9,
        height: 200,
        extra: {
          column: {
            width: 20
          }
        }
      };
      
      console.log('初始化卡路里图表:', opts);
      
      // 初始化图表
      chartUtil.initChart(canvasId, opts, this);
    } catch (error) {
      console.error('初始化卡路里图表错误:', error);
    }
  },

  /**
   * 查看所有记录
   */
  viewAllRecords: function() {
    wx.navigateTo({
      url: '/pages/records/records',
      fail: function() {
        util.showToast('页面不存在');
      }
    });
  },

  /**
   * 查看记录详情
   */
  viewRecordDetail: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/recordDetail/recordDetail?id=' + id,
      fail: function() {
        util.showToast('页面不存在');
      }
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.loadData();
    wx.stopPullDownRefresh();
    util.showToast('数据已更新', 'success');
  },

  updateAllCharts: function() {
    var timeRange = this.data.timeRange;
    var allRunningRecords = this.data.allRunningRecords;
    var days, groupBy;

    switch (timeRange) {
      case 'year':
        days = 365;
        groupBy = 'month';
        break;
      case 'month':
        days = 30;
        groupBy = 'day';
        break;
      case 'week':
      default:
        days = 7;
        groupBy = 'day';
        break;
    }

    var distanceData = this.getDataForRange(allRunningRecords, days, groupBy, 'distance');
    var durationData = this.getDataForRange(allRunningRecords, days, groupBy, 'duration');
    var caloriesData = this.getDataForRange(allRunningRecords, days, groupBy, 'calories');

    // 使用自定义图表库绘制图表
    this.drawCharts(distanceData, durationData, caloriesData);
  },

  // 绘制所有图表
  drawCharts: function(distanceData, durationData, caloriesData) {
    const chartType = this.data.chartType;
    const options = {
      width: this.data.cWidth,
      height: this.data.cHeight,
      padding: [15, 15, 30, 40],
      background: '#FFFFFF',
      fontSize: 11
    };
    
    // 使用自定义图表库绘制图表
    switch(chartType) {
      case 'column':
        Charts.drawBarChart('distanceCanvas', distanceData, options, this);
        Charts.drawBarChart('durationCanvas', durationData, options, this);
        Charts.drawBarChart('caloriesCanvas', caloriesData, options, this);
        break;
      case 'pie':
        Charts.drawPieChart('distanceCanvas', distanceData, options, this);
        Charts.drawPieChart('durationCanvas', durationData, options, this);
        Charts.drawPieChart('caloriesCanvas', caloriesData, options, this);
        break;
      case 'line':
      default:
        Charts.drawLineChart('distanceCanvas', distanceData, options, this);
        Charts.drawLineChart('durationCanvas', durationData, options, this);
        Charts.drawLineChart('caloriesCanvas', caloriesData, options, this);
        break;
    }
  },

  // 图表交互事件处理
  touchDistanceChart: function(e) {
    // 这个版本的图表库不支持交互，但保留事件处理器保持接口一致
    console.log('Chart touched:', e);
  },

  touchDurationChart: function(e) {
    // 这个版本的图表库不支持交互，但保留事件处理器保持接口一致
    console.log('Chart touched:', e);
  },

  touchCaloriesChart: function(e) {
    // 这个版本的图表库不支持交互，但保留事件处理器保持接口一致
    console.log('Chart touched:', e);
  },

  onChartComplete(e) {
    console.log('图表渲染完成:', e.detail);
  }
}); 