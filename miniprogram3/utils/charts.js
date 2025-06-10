/**
 * 简化版图表工具，专为微信小程序优化
 * 基于Canvas API实现基本图表功能
 */

/**
 * 绘制折线图
 * @param {String} canvasId - canvas元素ID
 * @param {Object} data - 图表数据，包含categories和series
 * @param {Object} options - 图表选项
 * @param {Object} page - 页面实例
 */
function drawLineChart(canvasId, data, options, page) {
  // 获取Canvas上下文
  const ctx = wx.createCanvasContext(canvasId);
  const { categories, series } = data;
  
  // 设置默认配置
  const config = {
    width: options.width || 300,
    height: options.height || 200,
    padding: options.padding || [30, 30, 30, 60],
    colors: options.colors || ['#1976D2', '#FF5722', '#4CAF50', '#FFC107'],
    background: options.background || '#FFFFFF',
    fontSize: options.fontSize || 12,
    lineWidth: options.lineWidth || 2,
    showPoints: options.showPoints !== false
  };
  
  // 绘制背景
  ctx.setFillStyle(config.background);
  ctx.fillRect(0, 0, config.width, config.height);
  
  // 计算图表区域
  const chartArea = {
    left: config.padding[3],
    top: config.padding[0],
    right: config.width - config.padding[1],
    bottom: config.height - config.padding[2]
  };
  
  // 计算最大值和最小值
  let maxValue = 0;
  let minValue = Infinity;
  
  series.forEach(item => {
    const max = Math.max(...item.data);
    const min = Math.min(...item.data);
    maxValue = Math.max(maxValue, max);
    minValue = Math.min(minValue, min);
  });
  
  // 如果最小值大于0，从0开始
  if (minValue > 0) minValue = 0;
  
  // 向上取整最大值
  maxValue = Math.ceil(maxValue * 1.1);
  
  // 计算刻度间距
  const yAxisHeight = chartArea.bottom - chartArea.top;
  const xAxisWidth = chartArea.right - chartArea.left;
  const categorySpacing = xAxisWidth / (categories.length - 1 || 1);
  
  // 绘制Y轴
  ctx.setFontSize(config.fontSize);
  ctx.setTextAlign('right');
  ctx.setTextBaseline('middle');
  ctx.setFillStyle('#666666');
  
  // Y轴刻度数量
  const yTickCount = 5;
  const yStep = (maxValue - minValue) / (yTickCount - 1);
  
  for (let i = 0; i < yTickCount; i++) {
    const y = chartArea.bottom - (i * yAxisHeight / (yTickCount - 1));
    const value = minValue + i * yStep;
    
    // 绘制网格线
    ctx.setStrokeStyle('#EEEEEE');
    ctx.beginPath();
    ctx.moveTo(chartArea.left, y);
    ctx.lineTo(chartArea.right, y);
    ctx.stroke();
    
    // 绘制刻度值
    ctx.fillText(value.toFixed(1), chartArea.left - 5, y);
  }
  
  // 绘制X轴
  ctx.setTextAlign('center');
  ctx.setTextBaseline('top');
  
  categories.forEach((category, index) => {
    const x = chartArea.left + index * categorySpacing;
    
    // 绘制刻度
    ctx.fillText(category, x, chartArea.bottom + 5);
  });
  
  // 绘制数据线
  series.forEach((serie, serieIndex) => {
    const color = serie.color || config.colors[serieIndex % config.colors.length];
    
    // 绘制线
    ctx.beginPath();
    ctx.setStrokeStyle(color);
    ctx.setLineWidth(config.lineWidth);
    
    serie.data.forEach((value, index) => {
      const x = chartArea.left + index * categorySpacing;
      const y = chartArea.bottom - ((value - minValue) / (maxValue - minValue) * yAxisHeight);
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // 绘制数据点
    if (config.showPoints) {
      serie.data.forEach((value, index) => {
        const x = chartArea.left + index * categorySpacing;
        const y = chartArea.bottom - ((value - minValue) / (maxValue - minValue) * yAxisHeight);
        
        ctx.beginPath();
        ctx.setFillStyle(color);
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
  });
  
  // 绘制图例
  if (series.length > 1) {
    const legendY = config.padding[0] / 2;
    const legendX = chartArea.left;
    const legendItemWidth = 80;
    
    series.forEach((serie, index) => {
      const color = serie.color || config.colors[index % config.colors.length];
      const x = legendX + index * legendItemWidth;
      
      // 绘制图例标记
      ctx.setFillStyle(color);
      ctx.fillRect(x, legendY - 5, 15, 2);
      
      // 绘制图例文本
      ctx.setFillStyle('#666666');
      ctx.setTextAlign('left');
      ctx.fillText(serie.name, x + 20, legendY);
    });
  }
  
  // 绘制并显示
  ctx.draw();
}

/**
 * 绘制柱状图
 * @param {String} canvasId - canvas元素ID
 * @param {Object} data - 图表数据，包含categories和series
 * @param {Object} options - 图表选项
 * @param {Object} page - 页面实例
 */
function drawBarChart(canvasId, data, options, page) {
  // 获取Canvas上下文
  const ctx = wx.createCanvasContext(canvasId);
  const { categories, series } = data;
  
  // 设置默认配置
  const config = {
    width: options.width || 300,
    height: options.height || 200,
    padding: options.padding || [30, 30, 30, 60],
    colors: options.colors || ['#1976D2', '#FF5722', '#4CAF50', '#FFC107'],
    background: options.background || '#FFFFFF',
    fontSize: options.fontSize || 12,
    barSpacing: options.barSpacing || 0.2,
  };
  
  // 绘制背景
  ctx.setFillStyle(config.background);
  ctx.fillRect(0, 0, config.width, config.height);
  
  // 计算图表区域
  const chartArea = {
    left: config.padding[3],
    top: config.padding[0],
    right: config.width - config.padding[1],
    bottom: config.height - config.padding[2]
  };
  
  // 计算最大值和最小值
  let maxValue = 0;
  let minValue = Infinity;
  
  series.forEach(item => {
    const max = Math.max(...item.data);
    const min = Math.min(...item.data);
    maxValue = Math.max(maxValue, max);
    minValue = Math.min(minValue, min);
  });
  
  // 如果最小值大于0，从0开始
  if (minValue > 0) minValue = 0;
  
  // 向上取整最大值
  maxValue = Math.ceil(maxValue * 1.1);
  
  // 计算刻度间距
  const yAxisHeight = chartArea.bottom - chartArea.top;
  const xAxisWidth = chartArea.right - chartArea.left;
  const categorySpacing = xAxisWidth / categories.length;
  const barWidth = categorySpacing * (1 - config.barSpacing) / series.length;
  
  // 绘制Y轴
  ctx.setFontSize(config.fontSize);
  ctx.setTextAlign('right');
  ctx.setTextBaseline('middle');
  ctx.setFillStyle('#666666');
  
  // Y轴刻度数量
  const yTickCount = 5;
  const yStep = (maxValue - minValue) / (yTickCount - 1);
  
  for (let i = 0; i < yTickCount; i++) {
    const y = chartArea.bottom - (i * yAxisHeight / (yTickCount - 1));
    const value = minValue + i * yStep;
    
    // 绘制网格线
    ctx.setStrokeStyle('#EEEEEE');
    ctx.beginPath();
    ctx.moveTo(chartArea.left, y);
    ctx.lineTo(chartArea.right, y);
    ctx.stroke();
    
    // 绘制刻度值
    ctx.fillText(value.toFixed(1), chartArea.left - 5, y);
  }
  
  // 绘制X轴
  ctx.setTextAlign('center');
  ctx.setTextBaseline('top');
  
  categories.forEach((category, index) => {
    const x = chartArea.left + (index + 0.5) * categorySpacing;
    
    // 绘制刻度
    ctx.fillText(category, x, chartArea.bottom + 5);
  });
  
  // 绘制数据柱
  series.forEach((serie, serieIndex) => {
    const color = serie.color || config.colors[serieIndex % config.colors.length];
    
    serie.data.forEach((value, index) => {
      // 计算柱子位置
      const x = chartArea.left + index * categorySpacing + serieIndex * barWidth + categorySpacing * config.barSpacing / 2;
      const barHeight = (value - minValue) / (maxValue - minValue) * yAxisHeight;
      const y = chartArea.bottom - barHeight;
      
      // 绘制柱子
      ctx.setFillStyle(color);
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // 在柱子上方显示数值
      if (value > 0) {
        ctx.setFillStyle('#666666');
        ctx.setTextAlign('center');
        ctx.setTextBaseline('bottom');
        ctx.fillText(value.toFixed(1), x + barWidth / 2, y - 2);
      }
    });
  });
  
  // 绘制图例
  if (series.length > 1) {
    const legendY = config.padding[0] / 2;
    const legendX = chartArea.left;
    const legendItemWidth = 80;
    
    series.forEach((serie, index) => {
      const color = serie.color || config.colors[index % config.colors.length];
      const x = legendX + index * legendItemWidth;
      
      // 绘制图例标记
      ctx.setFillStyle(color);
      ctx.fillRect(x, legendY - 5, 15, 10);
      
      // 绘制图例文本
      ctx.setFillStyle('#666666');
      ctx.setTextAlign('left');
      ctx.fillText(serie.name, x + 20, legendY);
    });
  }
  
  // 绘制并显示
  ctx.draw();
}

/**
 * 绘制饼图
 * @param {String} canvasId - canvas元素ID
 * @param {Object} data - 图表数据，包含series数组
 * @param {Object} options - 图表选项
 * @param {Object} page - 页面实例
 */
function drawPieChart(canvasId, data, options, page) {
  // 获取Canvas上下文
  const ctx = wx.createCanvasContext(canvasId);
  const { series } = data;
  
  // 确保series是数组
  if (!Array.isArray(series) || series.length === 0) {
    console.error('饼图数据必须是非空数组');
    return;
  }
  
  // 使用series的第一个数据项
  const seriesData = series[0].data || [];
  
  // 设置默认配置
  const config = {
    width: options.width || 300,
    height: options.height || 200,
    padding: options.padding || [30, 30, 30, 30],
    colors: options.colors || ['#1976D2', '#FF5722', '#4CAF50', '#FFC107', '#9C27B0', '#3F51B5', '#00BCD4', '#795548'],
    background: options.background || '#FFFFFF',
    fontSize: options.fontSize || 12,
    radius: Math.min(options.width, options.height) / 3,
    innerRadius: options.innerRadius || 0,  // 0表示实心圆，>0表示环形图
  };
  
  // 绘制背景
  ctx.setFillStyle(config.background);
  ctx.fillRect(0, 0, config.width, config.height);
  
  // 计算圆心
  const centerX = config.width / 2;
  const centerY = config.height / 2;
  
  // 计算总和
  const total = seriesData.reduce((sum, item) => sum + item, 0);
  
  if (total === 0) {
    console.error('饼图数据总和为0');
    return;
  }
  
  // 绘制饼图
  let startAngle = -Math.PI / 2;  // 从12点钟方向开始
  
  seriesData.forEach((value, index) => {
    const color = config.colors[index % config.colors.length];
    const angle = (value / total) * 2 * Math.PI;
    
    // 绘制扇形
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, config.radius, startAngle, startAngle + angle);
    ctx.closePath();
    ctx.setFillStyle(color);
    ctx.fill();
    
    // 绘制标签连线和文本
    const midAngle = startAngle + angle / 2;
    const labelRadius = config.radius * 1.2;
    const x1 = centerX + Math.cos(midAngle) * config.radius;
    const y1 = centerY + Math.sin(midAngle) * config.radius;
    const x2 = centerX + Math.cos(midAngle) * labelRadius;
    const y2 = centerY + Math.sin(midAngle) * labelRadius;
    
    // 绘制连线
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.setStrokeStyle('#AAAAAA');
    ctx.stroke();
    
    // 绘制标签
    const percentage = ((value / total) * 100).toFixed(1) + '%';
    ctx.setFontSize(config.fontSize);
    ctx.setTextAlign(Math.cos(midAngle) > 0 ? 'left' : 'right');
    ctx.setTextBaseline('middle');
    ctx.setFillStyle('#666666');
    ctx.fillText(percentage, x2 + (Math.cos(midAngle) > 0 ? 5 : -5), y2);
    
    // 更新起始角度
    startAngle += angle;
  });
  
  // 如果是环形图，绘制中心空白
  if (config.innerRadius > 0) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, config.innerRadius, 0, 2 * Math.PI);
    ctx.setFillStyle(config.background);
    ctx.fill();
  }
  
  // 绘制图例
  const legendY = config.height - config.padding[2] / 2;
  const legendX = config.padding[3];
  const legendItemWidth = (config.width - config.padding[1] - config.padding[3]) / Math.min(4, seriesData.length);
  
  for (let i = 0; i < seriesData.length; i++) {
    const color = config.colors[i % config.colors.length];
    const x = legendX + (i % 4) * legendItemWidth;
    const y = legendY + Math.floor(i / 4) * 20;
    
    // 绘制图例标记
    ctx.setFillStyle(color);
    ctx.fillRect(x, y - 5, 10, 10);
    
    // 绘制图例文本
    ctx.setFillStyle('#666666');
    ctx.setTextAlign('left');
    ctx.fillText(series[0].name + ' ' + ((seriesData[i] / total) * 100).toFixed(1) + '%', x + 15, y);
  }
  
  // 绘制并显示
  ctx.draw();
}

// 兼容uCharts API
// 导出接口
module.exports = {
  drawLineChart,
  drawBarChart,
  drawPieChart,
  
  // 下面是兼容uCharts接口的函数
  drawCharts: function(type, data, options, page) {
    switch(type) {
      case 'line':
        drawLineChart(options.canvasId, data, options, page);
        break;
      case 'column':
        drawBarChart(options.canvasId, data, options, page);
        break;
      case 'pie':
        drawPieChart(options.canvasId, data, options, page);
        break;
      default:
        console.error('不支持的图表类型:', type);
    }
  }
}; 