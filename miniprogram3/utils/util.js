/**
 * 常用工具函数
 */

/**
 * 格式化时间
 * @param {Date} date - 日期对象
 * @param {String} fmt - 格式字符串 yyyy-MM-dd HH:mm:ss
 */
function formatTime(date, fmt = 'yyyy-MM-dd HH:mm:ss') {
  if (!date) {
    date = new Date();
  }
  var o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    "S": date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 格式化步速
 * @param {Number} pace - 步速（秒/公里）
 * @return {String} - 格式化后的步速 例如 5'30"
 */
function formatPace(pace) {
  if (!pace) return '--';
  const minutes = Math.floor(pace / 60);
  const seconds = Math.floor(pace % 60);
  return `${minutes}'${seconds < 10 ? '0' + seconds : seconds}"`;
}

/**
 * 格式化距离
 * @param {Number} distance - 距离（米）
 * @param {Number} digits - 保留小数位数
 * @return {String} - 格式化后的距离
 */
function formatDistance(distance, digits = 2) {
  if (!distance) return '0';
  
  if (distance < 1000) {
    return distance.toFixed(digits) + ' m';
  } else {
    return (distance / 1000).toFixed(digits) + ' km';
  }
}

/**
 * 格式化时长
 * @param {Number} duration - 时长（秒）
 * @return {String} - 格式化后的时长
 */
function formatDuration(duration) {
  if (!duration) return '00:00:00';
  
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);
  
  const h = hours < 10 ? '0' + hours : hours;
  const m = minutes < 10 ? '0' + minutes : minutes;
  const s = seconds < 10 ? '0' + seconds : seconds;
  
  if (hours > 0) {
    return `${h}:${m}:${s}`;
  } else {
    return `${m}:${s}`;
  }
}

/**
 * 格式化心率区间
 * @param {Number} heartRate - 心率值
 * @return {String} - 心率区间名称
 */
function formatHeartRateZone(heartRate) {
  if (!heartRate) return '未知区间';
  
  if (heartRate < 130) {
    return '有氧耐力区';
  } else if (heartRate < 150) {
    return '中强度区';
  } else if (heartRate < 170) {
    return '高强度区';
  } else {
    return '极限心率区';
  }
}

/**
 * 显示消息提示框
 * @param {String} title - 提示的内容
 * @param {String} icon - 图标，有效值 "success", "error", "loading", "none"
 * @param {Number} duration - 提示的延迟时间
 */
function showToast(title, icon = 'none', duration = 1500) {
  wx.showToast({
    title,
    icon,
    duration
  });
}

/**
 * 显示模态对话框
 * @param {String} title - 标题
 * @param {String} content - 内容
 * @param {Boolean} showCancel - 是否显示取消按钮
 */
function showModal(title, content, showCancel = true) {
  return new Promise((resolve) => {
    wx.showModal({
      title,
      content,
      showCancel,
      success(res) {
        resolve(res.confirm);
      }
    });
  });
}

module.exports = {
  formatTime,
  formatPace,
  formatDistance,
  formatDuration,
  formatHeartRateZone,
  showToast,
  showModal
};
