// recordDetail.js
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    recordId: null,
    record: null,
    title: '运动详情'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    if (id) {
      this.setData({ recordId: id });
      this.loadRecordDetail(id);
    } else {
      util.showToast('记录ID不存在');
      setTimeout(() => {
        this.goBack();
      }, 1500);
    }
  },

  /**
   * 加载记录详情
   */
  loadRecordDetail: function (id) {
    this.setData({ isLoading: true });

    api.getRunningRecords()
      .then(res => {
        if (res.code === 200) {
          const records = res.data || [];
          // 在所有记录中查找指定ID的记录
          const record = records.find(item => item.id == id);
          
          if (record) {
            // 格式化数据
            if (record.start_time) {
              record.formatted_time = util.formatTime(new Date(record.start_time.replace(/-/g, '/')), 'yyyy-MM-dd HH:mm');
            }
            if (record.end_time) {
              record.formatted_end_time = util.formatTime(new Date(record.end_time.replace(/-/g, '/')), 'yyyy-MM-dd HH:mm');
            }
            
            // 转换距离单位
            if (record.distance !== undefined) {
              record.distance_km = (record.distance / 1000).toFixed(2);
            }
            
            // 转换时长
            if (record.duration !== undefined) {
              record.duration_minutes = Math.round(record.duration / 60);
              record.formatted_duration = util.formatDuration(record.duration);
            }
            
            // 格式化配速
            if (record.avg_pace) {
              record.avg_pace_formatted = util.formatPace(record.avg_pace);
            }
            if (record.best_pace) {
              record.best_pace_formatted = util.formatPace(record.best_pace);
            }
            
            this.setData({
              record: record,
              isLoading: false
            });
          } else {
            util.showToast('找不到该记录');
            setTimeout(() => {
              this.goBack();
            }, 1500);
          }
        } else {
          util.showToast('获取记录失败');
          this.setData({ isLoading: false });
        }
      })
      .catch(err => {
        console.error('加载记录详情异常:', err);
        util.showToast('加载失败，请稍后重试');
        this.setData({ isLoading: false });
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
    if (this.data.recordId) {
      this.loadRecordDetail(this.data.recordId);
    }
    wx.stopPullDownRefresh();
  }
}); 