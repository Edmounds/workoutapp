/*
 * charts for WeChat small app v1.0
 *
 * 简化版图表库，用于解决报错问题
 */

function wxCharts(config) {
  this.config = config;
  this.chartData = config.series;
  this.categories = config.categories;
}

wxCharts.prototype.updateData = function(data) {
  this.chartData = data.series;
  this.categories = data.categories;
};

wxCharts.prototype.showToolTip = function(e, options) {
  // 简单实现，不做实际操作
  console.log('显示提示', e);
};

module.exports = wxCharts; 