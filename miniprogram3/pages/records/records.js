const api = require('../../utils/api.js');
const util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    records: [],
    title: '所有运动记录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadRecords();
  },

  /**
   * 加载运动记录数据
   */
  loadRecords: function () {
    this.setData({ isLoading: true });

    api.getRunningRecords()
      .then(res => {
        if (res.code === 200) {
          let records = res.data || [];
          
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
            
            // 格式化日期时间
            if (record.start_time) {
              record.formatted_time = util.formatTime(new Date(record.start_time.replace(/-/g, '/')), 'yyyy-MM-dd HH:mm');
            } else {
              record.formatted_time = '未知时间';
            }
            
            // 格式化配速
            if (!record.avg_pace_formatted && record.avg_pace) {
              record.avg_pace_formatted = util.formatPace(record.avg_pace);
            }
            
            return record;
          });
          
          // 按时间降序排序
          records.sort((a, b) => {
            if (!a.start_time) return 1;
            if (!b.start_time) return -1;
            
            try {
              const dateA = new Date(a.start_time.replace(/-/g, '/'));
              const dateB = new Date(b.start_time.replace(/-/g, '/'));
              return dateB - dateA; // 降序排列，最新的在前面
            } catch (e) {
              console.error('日期排序错误:', e);
              return 0;
            }
          });
          
          this.setData({
            records: records,
            isLoading: false
          });
        } else {
          util.showToast('获取运动记录失败');
          this.setData({ isLoading: false });
        }
      })
      .catch(err => {
        console.error('加载运动记录异常:', err);
        util.showToast('加载失败，请稍后重试');
        this.setData({ isLoading: false });
      });
  },

  /**
   * 查看记录详情
   */
  viewRecordDetail: function (e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/recordDetail/recordDetail?id=' + id,
      fail: function() {
        util.showToast('页面不存在');
      }
    });
  },

  /**
   * 返回上一页
   */
  goBack: function () {
    wx.navigateBack();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadRecords();
    wx.stopPullDownRefresh();
  }
}); 