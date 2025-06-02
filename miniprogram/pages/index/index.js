const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

import * as echarts from '../../components/ec-canvas/echarts';

// 生成随机心率数据
function generateHeartRateData(min, max, length = 10) {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// 生成过去7天的日期标签
function getLast7Days() {
  const days = [];
  const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const date = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date(date);
    d.setDate(date.getDate() - i);
    days.push(dayNames[d.getDay()]);
  }
  return days;
}

// 后端API地址 - 修改为正确的服务器地址
const API_BASE_URL = 'http://localhost:5000/api';

Page({
  data: {
    forceUseOldCanvas: false, // 添加强制使用旧版Canvas控制属性
    // 用户统计数据
    userStats: {
      totalKm: 0,
      totalCount: 0,
      totalHours: 0
    },
    // 健康分析数据
    healthScore: 80,
    heartRateData: generateHeartRateData(60, 160),
    stepRateData: [90, 120, 115, 95, 130, 110, 120, 125, 100, 105],
    paceData: [5.6, 5.2, 5.4, 5.3, 5.1, 5.7, 5.4, 5.2, 5.5, 5.4],
    weekData: [30, 45, 75, 60, 80, 70, 65],
    weekDays: getLast7Days(),
    // 当前值（用于数据列表显示）
    currentHeartRate: 102,
    currentStepRate: 118,
    currentPace: "5'24\"",
    // 平均值（用于图表下方显示）
    avgHeartRate: 85,
    avgStepRate: 165,
    avgPace: "5'45\"",
    bloodOxygen: 98,
    healthIndex: 87,
    stressIndex: 23,
    progressList: [
      { title: '配速', value: "5'24\"", unit: '', color: '#2da7ff' },
      { title: '步频', value: 118, unit: '步/分钟', color: '#ff4d8d' },
      { title: '心率', value: 102, unit: 'bpm', color: '#00bcd4' }
    ],
    // 最近训练记录
    recentWorkouts: [],
    ecHeartLine: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
        canvas.setChart(chart);
        
        const heartRateData = generateHeartRateData(60, 160);
        
        chart.setOption({
          grid: { left: 0, right: 0, top: 0, bottom: 0 },
          xAxis: { type: 'category', show: false, data: ['','','','','','','','','',''] },
          yAxis: { type: 'value', show: false, min: 50, max: 180 },
          series: [{
            data: heartRateData,
            type: 'line',
            smooth: true,
            areaStyle: { color: 'rgba(255,77,141,0.2)' },
            lineStyle: { color: '#ff4d8d', width: 3 }
          }]
        });
        return chart;
      }
    },
    ecStepLine: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
        canvas.setChart(chart);
        chart.setOption({
          grid: { left: 0, right: 0, top: 0, bottom: 0 },
          xAxis: { type: 'category', show: false, data: ['','','','','','','','','',''] },
          yAxis: { type: 'value', show: false, min: 80, max: 140 },
          series: [{
            data: [90, 120, 115, 95, 130, 110, 120, 125, 100, 105],
            type: 'line',
            smooth: true,
            areaStyle: { color: 'rgba(45,167,255,0.2)' },
            lineStyle: { color: '#2da7ff', width: 3 }
          }]
        });
        return chart;
      }
    },
    ecPaceLine: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
        canvas.setChart(chart);
        chart.setOption({
          grid: { left: 0, right: 0, top: 0, bottom: 0 },
          xAxis: { type: 'category', show: false, data: ['','','','','','','','','',''] },
          yAxis: { type: 'value', show: false, min: 4.8, max: 5.9, inverse: true },
          series: [{
            data: [5.6, 5.2, 5.4, 5.3, 5.1, 5.7, 5.4, 5.2, 5.5, 5.4],
            type: 'line',
            smooth: true,
            areaStyle: { color: 'rgba(0,188,212,0.2)' },
            lineStyle: { color: '#00bcd4', width: 3 }
          }]
        });
        return chart;
      }
    },
    ecHealthCircle: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
        canvas.setChart(chart);
        chart.setOption({
          series: [{
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            label: { show: true, position: 'center', formatter: '{b|87%}\n{a|运动健康指数}', rich: { b: { fontSize: 28, color: '#fff', fontWeight: 'bold' }, a: { fontSize: 14, color: '#fff' } } },
            data: [
              { value: 87, name: '', itemStyle: { color: '#2da7ff' } },
              { value: 13, name: '', itemStyle: { color: '#222' } }
            ]
          }]
        });
        return chart;
      }
    },
    ecStressCircle: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
        canvas.setChart(chart);
        chart.setOption({
          series: [{
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            label: { show: true, position: 'center', formatter: '{b|23%}\n{a|运动压力指数}', rich: { b: { fontSize: 28, color: '#fff', fontWeight: 'bold' }, a: { fontSize: 14, color: '#fff' } } },
            data: [
              { value: 23, name: '', itemStyle: { color: '#bfa77a' } },
              { value: 77, name: '', itemStyle: { color: '#222' } }
            ]
          }]
        });
        return chart;
      }
    },
    ecOxygenCircle: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
        canvas.setChart(chart);
        chart.setOption({
          series: [{
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            label: { show: true, position: 'center', formatter: '{b|98%}\n{a|血氧饱和度}', rich: { b: { fontSize: 28, color: '#fff', fontWeight: 'bold' }, a: { fontSize: 14, color: '#fff' } } },
            data: [
              { value: 98, name: '', itemStyle: { color: '#ff7c1c' } },
              { value: 2, name: '', itemStyle: { color: '#222' } }
            ]
          }]
        });
        return chart;
      }
    },
    ecWeekBar: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
        canvas.setChart(chart);
        
        const days = getLast7Days();
        
        chart.setOption({
          grid: { left: 0, right: 10, top: 10, bottom: 20 },
          xAxis: { 
            type: 'category', 
            show: true, 
            data: days,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#888', fontSize: 10 }
          },
          yAxis: { type: 'value', show: false, max: 100 },
          series: [{
            data: [30, 45, 75, 60, 80, 70, 65],
            type: 'bar',
            barWidth: 10,
            itemStyle: { 
              color: function(params) {
                // 高亮今天的数据
                return params.dataIndex === 6 ? '#39c0ff' : '#2d8dde';
              },
              borderRadius: [3, 3, 0, 0]
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}分钟',
              fontSize: 8,
              color: '#ccc'
            }
          }]
        });
        return chart;
      }
    }
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // 检测微信环境并设置Canvas渲染模式
    const systemInfo = wx.getSystemInfoSync();
    const isDevTools = systemInfo.platform === 'devtools';
    
    // 开发者工具中强制使用旧Canvas模式以解决滚动问题
    if (isDevTools) {
      this.setData({
        forceUseOldCanvas: true
      });
    }
    
    // 检查登录状态
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.showModal({
        title: '提示',
        content: '请先登录以获取完整功能',
        showCancel: true,
        cancelText: '稍后',
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/mine/mine'
            });
          }
        }
      });
    }
    
    // 页面加载时获取所有数据
    this.fetchUserInfo();
    this.fetchMotionStatistics();
    this.fetchHealthData();
    this.fetchRecentWorkouts();
  },
  
  // 获取用户信息和运动统计
  fetchUserInfo() {
    const token = wx.getStorageSync('token');
    
    if (!token) {
      console.log('未登录，跳过用户信息获取');
      return;
    }
    
    wx.request({
      url: `${API_BASE_URL}/users/all/list`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      success: (res) => {
        if (res.data.code === 200 && res.data.data) {
          const userData = res.data.data;
          const workoutRecords = userData.workout_records || {};
          
          console.log('数据页面从API获取的total_km:', workoutRecords.total_km);
          
          this.setData({
            userStats: {
              totalKm: workoutRecords.total_km || 0,
              totalCount: workoutRecords.total_count || 0,
              totalHours: workoutRecords.total_hours || 0
            }
          });
          
          console.log('数据页面设置的总公里数:', workoutRecords.total_km || 0);
          console.log('成功获取用户信息');
        } else {
          console.log('获取用户信息失败:', res.data.message);
        }
      },
      fail: (err) => {
        console.error('请求用户信息出错:', err);
      }
    });
  },
  
  // 获取运动数据统计
  fetchMotionStatistics() {
    const token = wx.getStorageSync('token');
    
    if (!token) {
      console.log('未登录，跳过运动统计获取');
      return;
    }
    
    // 使用跑步记录数据来计算运动统计
    wx.request({
      url: `${API_BASE_URL}/user/running_records`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      success: (res) => {
        if (res.data.code === 200 && res.data.data) {
          const records = res.data.data;
          
          // 计算本周运动数据
          const weekData = this.calculateWeeklyData(records);
          
          this.setData({
            weekData: weekData
          });
          
          // 更新本周运动柱状图
          this.updateWeekBarChart(weekData);
          
          console.log('成功计算运动统计');
        } else {
          console.log('获取跑步记录失败:', res.data.message);
          // 使用默认数据
          this.setData({
            weekData: [30, 45, 75, 60, 80, 70, 65]
          });
        }
      },
      fail: (err) => {
        console.error('请求跑步记录出错:', err);
        // 使用默认数据
        this.setData({
          weekData: [30, 45, 75, 60, 80, 70, 65]
        });
      }
    });
  },
  
  // 获取最近训练记录
  fetchRecentWorkouts() {
    const token = wx.getStorageSync('token');
    
    if (!token) {
      console.log('未登录，跳过训练记录获取');
      return;
    }
    
    wx.request({
      url: `${API_BASE_URL}/user/running_records`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      success: (res) => {
        if (res.data.code === 200 && res.data.data) {
          const rawWorkouts = res.data.data.slice(0, 2); // 只取最近2条记录
          
          // 格式化训练记录数据
          const formattedWorkouts = rawWorkouts.map(workout => ({
            id: workout.id,
            workout_type: workout.workout_type || '跑步',
            start_time: this.formatDateTime(workout.start_time),
            duration: workout.duration_minutes ? `${workout.duration_minutes}分钟` : 
                     workout.duration ? `${Math.round(workout.duration / 60)}分钟` : '未知',
            distance: workout.distance_km ? `${workout.distance_km}公里` : 
                     workout.distance ? `${(workout.distance / 1000).toFixed(1)}公里` : '未知',
            note: `${workout.duration_minutes || Math.round((workout.duration || 0) / 60)}分钟 · ${
              workout.distance_km ? `${workout.distance_km}公里` : 
              workout.distance ? `${(workout.distance / 1000).toFixed(1)}公里` : '未知距离'
            }${workout.avg_pace_formatted ? ` · 配速 ${workout.avg_pace_formatted}` : ''}`
          }));
          
          this.setData({
            recentWorkouts: formattedWorkouts
          });
          
          console.log('成功获取训练记录');
        } else {
          console.log('获取训练记录失败:', res.data.message);
        }
      },
      fail: (err) => {
        console.error('请求训练记录出错:', err);
      }
    });
  },
  
  // 格式化日期时间
  formatDateTime(dateTimeStr) {
    if (!dateTimeStr) return '未知时间';
    
    try {
      const date = new Date(dateTimeStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    } catch (error) {
      console.error('日期格式化错误:', error);
      return dateTimeStr;
    }
  },
  
  fetchHealthData() {
    const token = wx.getStorageSync('token');
    
    if (!token) {
      console.log('未登录，使用模拟数据');
      this.setDemoData();
      return;
    }
    
    wx.showLoading({
      title: '加载数据中',
    });
    
    // 调用后端API获取体能数据
    wx.request({
      url: `${API_BASE_URL}/physical/stats`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      success: (res) => {
        if (res.data.code === 200 && res.data.data) {
          const physicalData = res.data.data;
          
          // 更新健康分析数据
          this.setData({
            currentHeartRate: physicalData.current_heart_rate || 102,
            currentStepRate: physicalData.current_step_rate || 118,
            currentPace: physicalData.current_pace || "5'24\"",
            // 设置平均值 - 使用后端返回的真实平均值
            avgHeartRate: physicalData.avgHeartRate || physicalData.avg_heart_rate || 85,
            avgStepRate: physicalData.avgStepRate || physicalData.avg_step_rate || 165,
            avgPace: physicalData.avgPace || "5'45\"", // 使用后端返回的真正平均配速
            bestPace: physicalData.best_pace || "5'10\"", // 添加最佳配速
            bloodOxygen: Math.round(physicalData.avg_blood_oxygen || 98),
            healthIndex: physicalData.health_index || 87,
            stressIndex: physicalData.stress_index || 23
          });
          
          // 根据真实数据生成图表数据
          const avgHR = physicalData.avg_heart_rate || 102;
          const heartRateData = generateHeartRateData(avgHR - 20, avgHR + 20);
          
          const avgStepRate = physicalData.avg_step_rate || 118;
          const stepRateData = generateHeartRateData(avgStepRate - 20, avgStepRate + 20, 10);
          
          // 根据当前配速生成配速数据
          const currentPaceValue = this.parseTimeToMinutes(physicalData.current_pace) || 5.4;
          const paceData = Array.from({ length: 10 }, () => 
            currentPaceValue + (Math.random() - 0.5) * 0.8
          );
          
          // 计算进度百分比 - 显示最大值
          const progressList = [
            { 
              title: '最大配速', 
              value: physicalData.best_pace || "4'50\"", // 使用最快配速（最佳配速）
              unit: '', 
              color: '#2da7ff' 
            },
            { 
              title: '最大心率', 
              value: physicalData.max_heart_rate || 185, // 使用最大心率
              unit: 'bpm', 
              color: '#00bcd4' 
            }
          ];
          
          this.setData({
            heartRateData,
            stepRateData,
            paceData,
            progressList
          });
          
          // 更新图表
          this.updateHealthCharts({
            health_score: physicalData.health_index,
            analysis: {
              heart_rate: {
                avg: avgHR
              }
            }
          });
          
          console.log('成功获取体能数据');
        } else {
          console.log('获取体能数据失败:', res.data.message);
          this.setDemoData();
        }
      },
      fail: (err) => {
        console.error('请求体能数据出错:', err);
        this.setDemoData();
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  },
  
  // 生成本周运动数据分布
  generateWeekData(weeklyTotal) {
    // 模拟一周7天的运动时长分布
    const baseDistribution = [0.1, 0.15, 0.2, 0.12, 0.18, 0.15, 0.1]; // 周一到周日的比例
    return baseDistribution.map(ratio => Math.round(weeklyTotal * ratio));
  },
  
  // 解析时间字符串 "5'30\"" 转换为分钟数 5.5
  parseTimeToMinutes(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') return null;
    
    // 匹配格式 "5'30\""
    const match = timeStr.match(/(\d+)'(\d+)"/);
    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseInt(match[2]);
      return minutes + seconds / 60.0;
    }
    return null;
  },
  
  // 计算一周运动数据
  calculateWeeklyData(records) {
    if (!records || records.length === 0) {
      return [0, 0, 0, 0, 0, 0, 0]; // 一周7天都为0
    }
    
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    // 初始化一周数据 [周一, 周二, ..., 周日]
    const weekData = [0, 0, 0, 0, 0, 0, 0];
    
    records.forEach(record => {
      if (!record.start_time) return;
      
      const recordDate = new Date(record.start_time);
      if (recordDate >= oneWeekAgo && recordDate <= now) {
        // 获取星期几 (0=周日, 1=周一, ..., 6=周六)
        const dayOfWeek = recordDate.getDay();
        // 转换为数组索引 (0=周一, ..., 6=周日)
        const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        
        // 累加当天的运动时长（转换为分钟）
        const duration = record.duration_minutes || (record.duration ? record.duration / 60 : 0);
        weekData[dayIndex] += Math.round(duration);
      }
    });
    
    return weekData;
  },
  
  // 更新本周运动柱状图
  updateWeekBarChart(weekData) {
    const ecWeekBarComponent = this.selectComponent('#week-bar');
    if (ecWeekBarComponent && ecWeekBarComponent.chart) {
      ecWeekBarComponent.chart.setOption({
        series: [{
          data: weekData
        }]
      });
    }
  },
  
  // 更新健康相关图表
  updateHealthCharts(healthData) {
    // 使用平均心率生成图表数据
    const avgHeartRate = healthData.analysis?.heart_rate?.avg || this.data.avgHeartRate || 85;
    const heartRateData = generateHeartRateData(
      avgHeartRate - 20,
      avgHeartRate + 20
    );
    
    const avgStepRate = this.data.avgStepRate || 165;
    const stepRateData = generateHeartRateData(avgStepRate - 20, avgStepRate + 20, 10);
    
    // 根据平均配速生成配速数据
    const avgPaceValue = this.parseTimeToMinutes(this.data.avgPace) || 5.75;
    const paceData = Array.from({ length: 10 }, () => 
      avgPaceValue + (Math.random() - 0.5) * 0.8
    );
    
    this.setData({
      heartRateData,
      stepRateData,
      paceData
    });
    
    // 更新各个图表
    this.updateHeartRateChart(heartRateData);
    this.updateStepRateChart(stepRateData);
    this.updatePaceChart(paceData);
    this.updateHealthCircleChart(healthData.health_score || 87);
    this.updateStressCircleChart(100 - (healthData.health_score || 80));
  },
  
  // 更新心率图表
  updateHeartRateChart(data) {
    const ecHeartLineComponent = this.selectComponent('#heart-line');
    if (ecHeartLineComponent && ecHeartLineComponent.chart) {
      ecHeartLineComponent.chart.setOption({
        series: [{
          data: data
        }]
      });
    }
  },
  
  // 更新步频图表
  updateStepRateChart(data) {
    const ecStepLineComponent = this.selectComponent('#step-line');
    if (ecStepLineComponent && ecStepLineComponent.chart) {
      ecStepLineComponent.chart.setOption({
        series: [{
          data: data
        }]
      });
    }
  },
  
  // 更新配速图表
  updatePaceChart(data) {
    const ecPaceLineComponent = this.selectComponent('#pace-line');
    if (ecPaceLineComponent && ecPaceLineComponent.chart) {
      ecPaceLineComponent.chart.setOption({
        series: [{
          data: data
        }]
      });
    }
  },
  
  // 更新健康指数环形图
  updateHealthCircleChart(healthScore) {
    const ecHealthCircleComponent = this.selectComponent('#health-circle');
    if (ecHealthCircleComponent && ecHealthCircleComponent.chart) {
      ecHealthCircleComponent.chart.setOption({
        series: [{
          label: {
            formatter: `{b|${healthScore}%}\n{a|运动健康指数}`
          },
          data: [
            { value: healthScore },
            { value: 100 - healthScore }
          ]
        }]
      });
    }
  },
  
  // 更新压力指数环形图
  updateStressCircleChart(stressScore) {
    const ecStressCircleComponent = this.selectComponent('#stress-circle');
    if (ecStressCircleComponent && ecStressCircleComponent.chart) {
      ecStressCircleComponent.chart.setOption({
        series: [{
          label: {
            formatter: `{b|${stressScore}%}\n{a|运动压力指数}`
          },
          data: [
            { value: stressScore },
            { value: 100 - stressScore }
          ]
        }]
      });
    }
  },
  
  setDemoData() {
    // 使用模拟数据（当无法获取真实数据时）
    const heartRateData = generateHeartRateData(60, 160);
    const currentHeartRate = heartRateData[heartRateData.length - 1];
    
    this.setData({
      heartRateData,
      currentHeartRate,
      // 设置平均值
      avgHeartRate: Math.round(heartRateData.reduce((sum, rate) => sum + rate, 0) / heartRateData.length),
      avgStepRate: 165,
      avgPace: "5'45\"",
      progressList: [
        { title: '配速', value: "5'24\"", unit: '', color: '#2da7ff' },
        { title: '步频', value: 118, unit: '步/分钟', color: '#ff4d8d' },
        { title: '心率', value: 102, unit: 'bpm', color: '#00bcd4' }
      ],
      userStats: {
        totalKm: 1243,
        totalCount: 167,
        totalHours: 892
      }
    });
  },
  
  refreshData() {
    // 刷新所有数据，调用API获取最新数据
    this.fetchUserInfo();
    this.fetchMotionStatistics();
    this.fetchHealthData();
    this.fetchRecentWorkouts();
  },
  
  onPullDownRefresh() {
    // 下拉刷新功能
    this.refreshData();
    wx.stopPullDownRefresh();
  },
  
  // 监听页面滚动，确保图表正常显示
  onPageScroll(e) {
    // 在开发者工具中，滚动时可能需要重新渲染图表
    const isDevTools = wx.getSystemInfoSync().platform === 'devtools';
    if (isDevTools && this.chartRefreshTimer) {
      clearTimeout(this.chartRefreshTimer);
    }
    
    // 延迟200ms刷新图表，避免频繁刷新
    this.chartRefreshTimer = setTimeout(() => {
      // 如果存在图表实例，可以尝试重新渲染
      if (this.chart) {
        this.chart.resize();
      }
    }, 200);
  }
})
