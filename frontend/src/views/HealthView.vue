<template>
  <div class="health-view pa-4">
    <h1 class="text-h4 mb-6">健康数据分析</h1>
    
    <!-- 筛选器 -->
    <v-card class="filter-card mb-6 elevation-3" rounded="lg">
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="dateRange"
              :items="dateRangeOptions"
              label="日期范围"
              variant="outlined"
              density="compact"
              hide-details
              @update:model-value="applyFilters"
            ></v-select>
          </v-col>
          
          <v-col cols="12" sm="6" md="3" v-if="showCustomDate">
            <v-text-field
              v-model="startDate"
              label="开始日期"
              type="date"
              variant="outlined"
              density="compact"
              hide-details
            ></v-text-field>
          </v-col>
          
          <v-col cols="12" sm="6" md="3" v-if="showCustomDate">
            <v-text-field
              v-model="endDate"
              label="结束日期"
              type="date"
              variant="outlined"
              density="compact"
              hide-details
            ></v-text-field>
          </v-col>
          
          <v-col cols="12" sm="6" md="3" class="d-flex align-center" v-if="showCustomDate">
            <v-btn color="primary" @click="applyFilters" class="ml-auto">应用筛选</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="60"></v-progress-circular>
      </v-col>
    </v-row>
    
    <template v-else>
      <!-- 健康指标概览卡片 -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" lg="3">
          <v-card class="health-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="primary" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-heart-pulse"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ physicalStats.avg_value || 0 }}</div>
                <div class="text-subtitle-2 text-grey">平均健康指数</div>
              </div>
            </v-card-item>
            <v-card-text class="pt-0">
              <v-tooltip text="健康指数反映整体健康状况，100分为最佳">
                <template v-slot:activator="{ props }">
                  <div v-bind="props" class="d-flex align-center">
                    <span class="text-caption text-grey-darken-1 mr-1">
                      最低: {{ physicalStats.min_value || 0 }} | 最高: {{ physicalStats.max_value || 0 }}
                    </span>
                    <v-icon size="16" color="grey-darken-1">mdi-information-outline</v-icon>
                  </div>
                </template>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="health-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="info" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-sleep"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ sleepStats.avg_sleep_quality || 0 }}</div>
                <div class="text-subtitle-2 text-grey">平均睡眠质量</div>
              </div>
            </v-card-item>
            <v-card-text class="pt-0">
              <v-tooltip text="睡眠质量指数，100分为最佳">
                <template v-slot:activator="{ props }">
                  <div v-bind="props" class="d-flex align-center">
                    <span class="text-caption text-grey-darken-1 mr-1">
                      平均时长: {{ formatSleepDuration(sleepStats.avg_sleep_duration) }}
                    </span>
                    <v-icon size="16" color="grey-darken-1">mdi-information-outline</v-icon>
                  </div>
                </template>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="health-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="success" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-lungs"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ physicalStats.avg_value || 0 }}</div>
                <div class="text-subtitle-2 text-grey">有氧能力</div>
              </div>
            </v-card-item>
            <v-card-text class="pt-0">
              <v-tooltip text="有氧能力评估，反映身体的耐力水平">
                <template v-slot:activator="{ props }">
                  <div v-bind="props" class="d-flex align-center">
                    <span class="text-caption text-grey-darken-1 mr-1">
                      基于长期运动数据分析
                    </span>
                    <v-icon size="16" color="grey-darken-1">mdi-information-outline</v-icon>
                  </div>
                </template>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="health-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="warning" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-water-percent"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ bloodOxygenStats || '0%' }}</div>
                <div class="text-subtitle-2 text-grey">平均血氧水平</div>
              </div>
            </v-card-item>
            <v-card-text class="pt-0">
              <v-tooltip text="血氧饱和度，正常值为95%-100%">
                <template v-slot:activator="{ props }">
                  <div v-bind="props" class="d-flex align-center">
                    <span class="text-caption text-grey-darken-1 mr-1">
                      健康范围: 95% - 100%
                    </span>
                    <v-icon size="16" color="grey-darken-1">mdi-information-outline</v-icon>
                  </div>
                </template>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- 图表区域 -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>健康指数分布</span>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="healthMetric" mandatory @update:model-value="loadPhysicalStats">
                <v-btn value="health_index" density="compact" variant="text">健康指数</v-btn>
                <v-btn value="aerobic_capacity" density="compact" variant="text">有氧能力</v-btn>
              </v-btn-toggle>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="physicalStats.distribution" :option="healthDistributionOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>睡眠质量分布</span>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="sleepStats.quality_distribution" :option="sleepQualityOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row class="mt-4">
        <v-col cols="12" md="6">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>睡眠时长分布</span>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="sleepStats.duration_distribution" :option="sleepDurationOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>心率分布</span>
            </v-card-title>
            <v-card-text class="chart-container">
              <div v-if="heartRateData.length > 0" class="heart-rate-chart">
                <v-chart class="chart" :option="heartRateOption" autoresize />
              </div>
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- 健康建议 -->
      <v-row class="mt-4">
        <v-col cols="12">
          <v-card class="elevation-3" rounded="lg">
            <v-card-title>健康建议</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="4">
                  <v-card variant="outlined" class="pa-3 mb-3 mb-md-0">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="primary" class="mr-2">mdi-heart-pulse</v-icon>
                      <div class="text-subtitle-1 font-weight-bold">心率管理</div>
                    </div>
                    <p class="text-body-2">
                      根据数据分析，建议用户保持适度的有氧运动，每周至少进行150分钟中等强度活动，有助于维持健康心率水平。监测静息心率变化，若发现明显波动应及时咨询医生。
                    </p>
                  </v-card>
                </v-col>
                
                <v-col cols="12" md="4">
                  <v-card variant="outlined" class="pa-3 mb-3 mb-md-0">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="info" class="mr-2">mdi-sleep</v-icon>
                      <div class="text-subtitle-1 font-weight-bold">睡眠优化</div>
                    </div>
                    <p class="text-body-2">
                      数据显示，用户平均睡眠时长为{{ formatSleepDuration(sleepStats.avg_sleep_duration) }}。建议保持规律作息，睡前减少屏幕使用时间，创造安静、舒适的睡眠环境，有助于提高睡眠质量。
                    </p>
                  </v-card>
                </v-col>
                
                <v-col cols="12" md="4">
                  <v-card variant="outlined" class="pa-3">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="success" class="mr-2">mdi-run</v-icon>
                      <div class="text-subtitle-1 font-weight-bold">运动建议</div>
                    </div>
                    <p class="text-body-2">
                      基于当前有氧能力水平，建议进行混合训练模式，包括间歇跑和中长距离跑，循序渐进提高训练强度。确保每周有1-2天休息日，让身体得到充分恢复。
                    </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart, GaugeChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { getPhysicalStats, getSleepStats } from '../api'

// 注册ECharts组件
use([
  CanvasRenderer,
  PieChart,
  BarChart,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

// 状态变量
const loading = ref(true)
const dateRange = ref('last30days')
const startDate = ref('')
const endDate = ref('')
const healthMetric = ref('health_index')
const physicalStats = ref({})
const sleepStats = ref({})
const heartRateData = ref([]) // 模拟数据，实际应该从API获取

// 模拟心率数据
function generateHeartRateData() {
  return [
    { value: 5, name: '<60 bpm' },
    { value: 15, name: '60-70 bpm' },
    { value: 40, name: '70-80 bpm' },
    { value: 25, name: '80-90 bpm' },
    { value: 10, name: '90-100 bpm' },
    { value: 5, name: '>100 bpm' }
  ]
}

// 血氧水平（模拟数据，实际应该从API获取）
const bloodOxygenStats = computed(() => {
  return '97.5%'
})

// 日期范围选项
const dateRangeOptions = [
  { title: '最近7天', value: 'last7days' },
  { title: '最近30天', value: 'last30days' },
  { title: '最近90天', value: 'last90days' },
  { title: '今年', value: 'thisyear' },
  { title: '自定义', value: 'custom' }
]

// 计算属性
const showCustomDate = computed(() => dateRange.value === 'custom')

// 格式化睡眠时长
function formatSleepDuration(minutes) {
  if (!minutes) return '0小时0分钟'
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}小时${mins}分钟`
}

// 获取日期范围
function getDateRange() {
  const now = new Date()
  let start = new Date()
  let end = new Date()
  
  switch (dateRange.value) {
    case 'last7days':
      start.setDate(now.getDate() - 7)
      break
    case 'last30days':
      start.setDate(now.getDate() - 30)
      break
    case 'last90days':
      start.setDate(now.getDate() - 90)
      break
    case 'thisyear':
      start = new Date(now.getFullYear(), 0, 1)
      break
    case 'custom':
      if (startDate.value) start = new Date(startDate.value)
      if (endDate.value) end = new Date(endDate.value)
      break
  }
  
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0]
  }
}

// 应用筛选器
function applyFilters() {
  loadData()
}

// 加载数据
async function loadData() {
  loading.value = true
  
  try {
    const { startDate: start, endDate: end } = getDateRange()
    
    // 加载体能数据统计
    await loadPhysicalStats(start, end)
    
    // 加载睡眠质量统计
    await loadSleepStats(start, end)
    
    // 加载心率数据（这里使用模拟数据）
    heartRateData.value = generateHeartRateData()
  } catch (error) {
    console.error('加载健康数据错误:', error)
  } finally {
    loading.value = false
  }
}

// 加载体能数据统计
async function loadPhysicalStats(startDate, endDate) {
  try {
    const params = {
      metric: healthMetric.value
    }
    if (startDate) params.start_date = startDate
    if (endDate) params.end_date = endDate
    
    const res = await getPhysicalStats(params)
    if (res.code === 200) {
      physicalStats.value = res.data
    }
  } catch (error) {
    console.error('加载体能数据统计错误:', error)
  }
}

// 加载睡眠质量统计
async function loadSleepStats(startDate, endDate) {
  try {
    const params = {}
    if (startDate) params.start_date = startDate
    if (endDate) params.end_date = endDate
    
    const res = await getSleepStats(params)
    if (res.code === 200) {
      sleepStats.value = res.data
    }
  } catch (error) {
    console.error('加载睡眠质量统计错误:', error)
  }
}

// 健康指数分布图表选项
const healthDistributionOption = computed(() => {
  if (!physicalStats.value || !physicalStats.value.distribution) return {}
  
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: physicalStats.value.distribution.map(item => item.range)
    },
    series: [
      {
        name: physicalStats.value.metric === 'health_index' ? '健康指数' : '有氧能力',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: physicalStats.value.distribution.map(item => ({
          value: item.count,
          name: item.range
        }))
      }
    ]
  }
})

// 睡眠质量分布图表选项
const sleepQualityOption = computed(() => {
  if (!sleepStats.value || !sleepStats.value.quality_distribution) return {}
  
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: sleepStats.value.quality_distribution.map(item => item.range)
    },
    series: [
      {
        name: '睡眠质量',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: sleepStats.value.quality_distribution.map(item => ({
          value: item.count,
          name: item.range
        }))
      }
    ]
  }
})

// 睡眠时长分布图表选项
const sleepDurationOption = computed(() => {
  if (!sleepStats.value || !sleepStats.value.duration_distribution) return {}
  
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: sleepStats.value.duration_distribution.map(item => item.range)
    },
    yAxis: {
      type: 'value',
      name: '人数'
    },
    series: [
      {
        name: '睡眠时长',
        type: 'bar',
        data: sleepStats.value.duration_distribution.map(item => item.count),
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        }
      }
    ]
  }
})

// 心率分布图表选项
const heartRateOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'center',
    data: heartRateData.value.map(item => item.name)
  },
  series: [
    {
      name: '心率分布',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: heartRateData.value.map(item => ({
        value: item.value,
        name: item.name
      })),
      color: ['#4caf50', '#8bc34a', '#cddc39', '#ffc107', '#ff9800', '#f44336']
    }
  ]
}))

// 监听日期范围变化
watch(dateRange, (newVal) => {
  if (newVal !== 'custom') {
    applyFilters()
  }
})

// 页面加载时获取数据
onMounted(() => {
  loadData()
})
</script>

<style scoped>
.health-view {
  width: 100%;
}

.filter-card {
  transition: all 0.3s;
}

.health-card {
  transition: transform 0.3s;
}

.health-card:hover {
  transform: translateY(-5px);
}

.chart-container {
  height: 320px;
  position: relative;
}

.chart {
  height: 100%;
  width: 100%;
}
</style> 