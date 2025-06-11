/**
 * DeepSeek API工具类
 * 直接在前端调用DeepSeek API获取AI建议
 */

// 引入markdown解析器
const markdown = require('./markdown.js');

// DeepSeek API配置
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const DEEPSEEK_MODEL = "deepseek-chat"; // 根据实际使用的模型名称修改
const DEEPSEEK_API_KEY = "sk-2aee504fdb5e4c3f84205c1f398b801b"; // 固定的API密钥

// 缓存键名
const FITNESS_ADVICE_CACHE_KEY = 'fitness_advice_cache';
const NUTRITION_ADVICE_CACHE_KEY = 'nutrition_advice_cache';

/**
 * 获取API Key
 */
function getApiKey() {
  return DEEPSEEK_API_KEY;
}

/**
 * 设置API Key (此方法保留但不再需要)
 * @param {String} apiKey - DeepSeek API密钥
 */
function setApiKey(apiKey) {
  // 不再需要设置API密钥
  console.log('使用预设的API密钥，无需设置');
}

/**
 * 获取缓存的数据
 * @param {String} cacheKey - 缓存键名
 */
function getCachedData(cacheKey) {
  return wx.getStorageSync(cacheKey);
}

/**
 * 设置缓存数据
 * @param {String} cacheKey - 缓存键名
 * @param {Object} data - 要缓存的数据
 */
function setCachedData(cacheKey, data) {
  wx.setStorageSync(cacheKey, data);
}

/**
 * 清除缓存数据
 * @param {String} cacheKey - 缓存键名
 */
function clearCache(cacheKey) {
  wx.removeStorageSync(cacheKey);
}

/**
 * 获取健身建议（优先使用缓存）
 * @param {Object} runningData - 跑步数据
 * @param {Boolean} forceRefresh - 是否强制刷新
 */
function getFitnessAdvice(runningData, forceRefresh = false) {
  // 检查是否有缓存，且不是强制刷新
  const cachedAdvice = getCachedData(FITNESS_ADVICE_CACHE_KEY);
  if (cachedAdvice && !forceRefresh) {
    return Promise.resolve({
      code: 200,
      data: cachedAdvice
    });
  }

  const apiKey = getApiKey();

  // 构建提示词
  const prompt = `作为一个专业的跑步教练，请根据以下跑步数据提供详细的训练建议：

跑步数据：
- 每日平均跑步距离：${runningData.daily_distance || 0}公里
- 每周总跑步距离：${runningData.weekly_distance || 0}公里
- 最大心率：${runningData.max_heart_rate || 0}次/分钟
- 平均心率：${runningData.avg_heart_rate || 0}次/分钟

请提供：
1. 针对性的训练计划建议（包括强度分配、恢复建议等）
2. 如何根据当前数据优化训练效果
3. 每周训练计划安排

请用中文回答，并确保建议具体且可执行。`;

  return callDeepSeekApi(prompt)
    .then(response => {
      // 解析API响应，提取建议内容
      const advice = parseTrainingAdvice(response);
      // 缓存结果
      setCachedData(FITNESS_ADVICE_CACHE_KEY, advice);
      return {
        code: 200,
        data: advice
      };
    })
    .catch(err => {
      console.error('获取健身建议失败:', err);
      return {
        code: 500,
        msg: '获取健身建议失败: ' + (err.message || '未知错误')
      };
    });
}

/**
 * 获取营养建议（优先使用缓存）
 * @param {Object} runningData - 跑步数据
 * @param {Boolean} forceRefresh - 是否强制刷新
 */
function getNutritionAdvice(runningData, forceRefresh = false) {
  // 检查是否有缓存，且不是强制刷新
  const cachedAdvice = getCachedData(NUTRITION_ADVICE_CACHE_KEY);
  if (cachedAdvice && !forceRefresh) {
    return Promise.resolve({
      code: 200,
      data: cachedAdvice
    });
  }

  const apiKey = getApiKey();

  // 构建提示词
  const prompt = `作为一个专业的营养师，请根据以下跑步数据提供详细的营养摄入建议：

跑步数据：
- 每日平均跑步距离：${runningData.daily_distance || 0}公里
- 每周总跑步距离：${runningData.weekly_distance || 0}公里
- 最大心率：${runningData.max_heart_rate || 0}次/分钟
- 平均心率：${runningData.avg_heart_rate || 0}次/分钟

请提供：
1. 详细的营养摄入建议（包括每日所需热量、蛋白质、碳水化合物和脂肪的摄入量）
2. 适合跑步者的饮食安排（早餐、午餐、晚餐和加餐建议）
3. 补充营养和水分的最佳时间点

请用中文回答，并确保建议具体且可执行。`;

  return callDeepSeekApi(prompt)
    .then(response => {
      // 解析API响应，提取建议内容
      const advice = parseNutritionAdvice(response);
      // 缓存结果
      setCachedData(NUTRITION_ADVICE_CACHE_KEY, advice);
      return {
        code: 200,
        data: advice
      };
    })
    .catch(err => {
      console.error('获取营养建议失败:', err);
      return {
        code: 500,
        msg: '获取营养建议失败: ' + (err.message || '未知错误')
      };
    });
}

/**
 * 刷新所有建议（强制重新获取）
 * @param {Object} runningData - 跑步数据
 */
function refreshAllAdvice(runningData) {
  // 清除所有缓存
  clearCache(FITNESS_ADVICE_CACHE_KEY);
  clearCache(NUTRITION_ADVICE_CACHE_KEY);
  
  // 重新获取所有建议
  return Promise.all([
    getFitnessAdvice(runningData, true),
    getNutritionAdvice(runningData, true)
  ]).then(([fitnessResponse, nutritionResponse]) => {
    return {
      code: 200,
      data: {
        fitness: fitnessResponse.data,
        nutrition: nutritionResponse.data
      }
    };
  }).catch(err => {
    console.error('刷新建议失败:', err);
    return {
      code: 500,
      msg: '刷新建议失败: ' + (err.message || '未知错误')
    };
  });
}

/**
 * 调用DeepSeek API
 * @param {String} prompt - 提示词
 */
function callDeepSeekApi(prompt) {
  const apiKey = getApiKey();
  
  return new Promise((resolve, reject) => {
    wx.request({
      url: DEEPSEEK_API_URL,
      method: 'POST',
      header: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      data: {
        "model": DEEPSEEK_MODEL,
        "messages": [
          {"role": "user", "content": prompt}
        ],
        "temperature": 0.7
      },
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(new Error(`API请求失败: ${res.statusCode}`));
        }
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

/**
 * 解析训练建议响应
 * @param {Object} response - API响应
 */
function parseTrainingAdvice(response) {
  try {
    // 从API响应中提取内容
    const content = response.choices[0].message.content;
    
    // 使用markdown解析器处理内容
    const generalAdvice = markdown.toText(markdown.extractSection(content, '训练建议') || 
                                        markdown.extractSection(content, '针对性建议') || 
                                        markdown.extractSection(content, '总体建议'));
    
    // 提取每周训练计划
    const weeklyPlanSection = markdown.extractSection(content, '每周训练计划') || 
                              markdown.extractSection(content, '周计划') || 
                              markdown.extractSection(content, '训练计划');
    
    const weeklyPlan = extractWeeklyPlan(weeklyPlanSection || content);
    
    // 提取训练提示
    const tipsSection = markdown.extractSection(content, '提示') || 
                       markdown.extractSection(content, '建议') || 
                       markdown.extractSection(content, '注意事项');
    
    const tips = extractTips(tipsSection || content);
    
    return {
      general_advice: generalAdvice || '根据您的运动数据，我们建议您合理安排训练计划，注意休息。',
      weekly_plan: weeklyPlan,
      tips: tips
    };
  } catch (err) {
    console.error('解析训练建议失败:', err);
    // 返回默认建议
    return {
      general_advice: '根据您的运动数据，我们建议您每周保持3-4次的有氧运动，并适当增加力量训练。',
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
        }
      ],
      tips: [
        '确保每次运动前进行5-10分钟的热身',
        '保持每周至少一天的完全休息日'
      ]
    };
  }
}

/**
 * 解析营养建议响应
 * @param {Object} response - API响应
 */
function parseNutritionAdvice(response) {
  try {
    // 从API响应中提取内容
    const content = response.choices[0].message.content;
    
    // 使用markdown解析器处理内容
    const generalAdvice = markdown.toText(markdown.extractSection(content, '营养建议') || 
                                        markdown.extractSection(content, '总体建议') || 
                                        markdown.extractSection(content, '饮食建议'));
    
    // 从内容中提取热量和营养素信息
    const caloriesMatch = content.match(/热量[：:]\s*(\d+)/);
    const proteinMatch = content.match(/蛋白质[：:]\s*(\d+)/);
    const carbsMatch = content.match(/碳水化合物[：:]\s*(\d+)/);
    const fatMatch = content.match(/脂肪[：:]\s*(\d+)/);
    
    // 提取饮食安排
    const breakfastSection = markdown.extractSection(content, '早餐');
    const lunchSection = markdown.extractSection(content, '午餐');
    const dinnerSection = markdown.extractSection(content, '晚餐');
    const snacksSection = markdown.extractSection(content, '加餐') || markdown.extractSection(content, '零食');
    
    // 提取提示
    const tipsSection = markdown.extractSection(content, '提示') || 
                       markdown.extractSection(content, '建议') || 
                       markdown.extractSection(content, '注意事项');
    
    const tips = extractTips(tipsSection || content);
    
    return {
      general_advice: generalAdvice || '根据您的运动量，合理的营养摄入对提高运动表现至关重要。',
      calories: caloriesMatch ? parseInt(caloriesMatch[1]) : 2200,
      protein: proteinMatch ? parseInt(proteinMatch[1]) : 110,
      carbs: carbsMatch ? parseInt(carbsMatch[1]) : 275,
      fat: fatMatch ? parseInt(fatMatch[1]) : 60,
      breakfast: markdown.toText(breakfastSection) || '全麦面包配鸡蛋、牛奶和水果',
      lunch: markdown.toText(lunchSection) || '糙米饭、烤鸡胸肉、蔬菜沙拉',
      dinner: markdown.toText(dinnerSection) || '三文鱼、蒸蔬菜、藜麦',
      snacks: markdown.toText(snacksSection) || '希腊酸奶、坚果、水果',
      tips: tips
    };
  } catch (err) {
    console.error('解析营养建议失败:', err);
    // 返回默认建议
    return {
      general_advice: '根据您的体重和运动量，我们建议您每天摄入适量的蛋白质、碳水化合物和健康脂肪。',
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
        '运动后30分钟内补充蛋白质和碳水化合物'
      ]
    };
  }
}

/**
 * 提取每周训练计划
 * @param {String} text - 文本内容
 */
function extractWeeklyPlan(text) {
  // 简单示例，实际实现可能需要更复杂的解析逻辑
  const weekdays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const plan = [];
  
  weekdays.forEach(day => {
    const dayIndex = text.indexOf(day);
    if (dayIndex !== -1) {
      // 提取这一天的训练内容
      const nextDayIndex = findNextDayIndex(text, dayIndex, weekdays);
      const dayContent = text.substring(dayIndex, nextDayIndex !== -1 ? nextDayIndex : dayIndex + 100);
      
      // 解析训练类型和描述
      const workoutType = extractWorkoutType(dayContent);
      const description = extractDescription(dayContent);
      
      plan.push({
        day: day,
        workout_type: workoutType || '常规训练',
        description: description || '根据个人情况调整训练强度',
        distance: estimateDistance(dayContent),
        duration: estimateDuration(dayContent),
        intensity: estimateIntensity(dayContent)
      });
    }
  });
  
  return plan.length > 0 ? plan : [
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
    }
  ];
}

/**
 * 提取建议提示
 * @param {String} text - 文本内容
 */
function extractTips(text) {
  // 查找可能的提示部分
  const tipsSection = text.match(/提示|注意事项|建议|tips/i);
  if (!tipsSection) return ['确保充分热身和拉伸', '注意补充水分'];
  
  // 从提示部分开始，按行分割，提取每一条提示
  const startIndex = tipsSection.index;
  const tipsText = text.substring(startIndex);
  const lines = tipsText.split('\n').filter(line => line.trim());
  
  // 过滤出看起来像提示的行（例如，以数字、破折号或星号开头）
  const tipLines = lines.filter(line => 
    /^\d+[\.\)、]|^[-*•]|^[【\[]/.test(line.trim())
  );
  
  // 清理提示文本
  const tips = tipLines.map(line => 
    line.replace(/^\d+[\.\)、]|^[-*•]|^[【\[].*?[】\]]/, '').trim()
  ).filter(tip => tip.length > 5);
  
  return tips.length > 0 ? tips : ['确保充分热身和拉伸', '注意补充水分'];
}

// 辅助函数
function findNextDayIndex(text, currentDayIndex, weekdays) {
  let minIndex = text.length;
  weekdays.forEach(day => {
    const index = text.indexOf(day, currentDayIndex + 2);
    if (index !== -1 && index < minIndex) {
      minIndex = index;
    }
  });
  return minIndex === text.length ? -1 : minIndex;
}

function extractWorkoutType(text) {
  const types = ['恢复跑', '间歇跑', '长距离跑', '力量训练', '高强度间歇', '慢跑', '休息'];
  for (const type of types) {
    if (text.includes(type)) {
      return type;
    }
  }
  return '常规训练';
}

function extractDescription(text) {
  // 简单提取描述，实际可能需要更复杂的逻辑
  const lines = text.split('\n');
  if (lines.length > 1) {
    return lines[1].trim();
  }
  return text.substring(text.indexOf(':') + 1 || text.indexOf('：') + 1).trim();
}

function estimateDistance(text) {
  const distanceMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:公里|km|千米)/i);
  return distanceMatch ? distanceMatch[1] : '5';
}

function estimateDuration(text) {
  const durationMatch = text.match(/(\d+)\s*(?:分钟|min)/i);
  return durationMatch ? durationMatch[1] : '30';
}

function estimateIntensity(text) {
  if (text.includes('高强度')) return '高强度';
  if (text.includes('中强度')) return '中强度';
  if (text.includes('低强度') || text.includes('恢复')) return '低强度';
  return '中强度';
}

module.exports = {
  getApiKey,
  setApiKey,
  getFitnessAdvice,
  getNutritionAdvice,
  refreshAllAdvice,
  clearCache
}; 