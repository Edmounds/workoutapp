<template>
  <div class="statistics-view pa-4">
    <h1 class="text-h4 mb-6">运动数据统计</h1>
    
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
      <!-- 运动总量数据卡片 -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="primary" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-run"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ workoutSummary.total_workouts || 0 }}</div>
                <div class="text-subtitle-2 text-grey">总运动次数</div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="info" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-map-marker-distance"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ workoutSummary.total_distance || 0 }} km</div>
                <div class="text-subtitle-2 text-grey">总运动距离</div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="success" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-clock-outline"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ formatDuration(workoutSummary.total_duration) }}</div>
                <div class="text-subtitle-2 text-grey">总运动时长</div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="warning" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-account-group"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ Math.round(workoutSummary.avg_workouts_per_user) || 0 }}</div>
                <div class="text-subtitle-2 text-grey">人均运动次数</div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- 图表区域 -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>运动类型分布</span>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="workoutTypeData.length > 0" :option="workoutTypeOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>用户年龄分布</span>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="ageData.length > 0" :option="ageOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row class="mt-4">
        <v-col cols="12">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>运动数据趋势</span>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="trendPeriod" mandatory @update:model-value="loadWorkoutTrends">
                <v-btn value="week" density="compact" variant="text">周</v-btn>
                <v-btn value="month" density="compact" variant="text">月</v-btn>
                <v-btn value="year" density="compact" variant="text">年</v-btn>
              </v-btn-toggle>
              <v-btn-toggle v-model="trendMetric" class="ml-2" mandatory @update:model-value="loadWorkoutTrends">
                <v-btn value="workouts" density="compact" variant="text">次数</v-btn>
                <v-btn value="distance" density="compact" variant="text">距离</v-btn>
                <v-btn value="duration" density="compact" variant="text">时长</v-btn>
              </v-btn-toggle>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="trendData.length > 0" :option="trendOption" autoresize />
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
              <span>用户注册趋势</span>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="registrationPeriod" mandatory @update:model-value="loadRegistrationStats">
                <v-btn value="week" density="compact" variant="text">周</v-btn>
                <v-btn value="month" density="compact" variant="text">月</v-btn>
              </v-btn-toggle>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="registrationData.length > 0" :option="registrationOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>活跃用户趋势</span>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="activePeriod" mandatory @update:model-value="loadActiveUserStats">
                <v-btn value="week" density="compact" variant="text">周</v-btn>
                <v-btn value="month" density="compact" variant="text">月</v-btn>
              </v-btn-toggle>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="activeUserData.length > 0" :option="activeUserOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
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
import { PieChart, BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { 
  getWorkoutsSummary, 
  getWorkoutTypesStats, 
  getAgeDistribution,
  getWorkoutTrends,
  getRegistrationStats,
  getActiveUserStats
} from '../api'

// 注册ECharts组件
use([
  CanvasRenderer,
  PieChart,
  BarChart,
  LineChart,
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
const workoutSummary = ref({})
const workoutTypeData = ref([])
const ageData = ref([])
const trendPeriod = ref('month')
const trendMetric = ref('workouts')
const trendData = ref([])
const registrationPeriod = ref('month')
const registrationData = ref([])
const activePeriod = ref('month')
const activeUserData = ref([])

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

// 工具函数 - 格式化时长
function formatDuration(minutes) {
  if (!minutes) return '0小时'
  const hours = Math.floor(minutes / 60)
  return `${hours}小时${minutes % 60}分钟`
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
    
    // 加载运动总量数据
    await loadWorkoutSummary(start, end)
    
    // 加载运动类型分布
    await loadWorkoutTypes(start, end)
    
    // 加载年龄分布
    await loadAgeDistribution()
    
    // 加载运动趋势
    await loadWorkoutTrends()
    
    // 加载注册统计
    await loadRegistrationStats()
    
    // 加载活跃用户统计
    await loadActiveUserStats()
  } catch (error) {
    console.error('加载统计数据错误:', error)
  } finally {
    loading.value = false
  }
}

// 加载运动总量数据
async function loadWorkoutSummary(startDate, endDate) {
  try {
    const params = {}
    if (startDate) params.start_date = startDate
    if (endDate) params.end_date = endDate
    
    const res = await getWorkoutsSummary(params)
    if (res.code === 200) {
      workoutSummary.value = res.data
    }
  } catch (error) {
    console.error('加载运动总量数据错误:', error)
  }
}

// 加载运动类型分布
async function loadWorkoutTypes(startDate, endDate) {
  try {
    const params = {}
    if (startDate) params.start_date = startDate
    if (endDate) params.end_date = endDate
    
    const res = await getWorkoutTypesStats(params)
    if (res.code === 200) {
      workoutTypeData.value = res.data
    }
  } catch (error) {
    console.error('加载运动类型分布错误:', error)
  }
}

// 加载年龄分布
async function loadAgeDistribution() {
  try {
    const res = await getAgeDistribution()
    if (res.code === 200) {
      ageData.value = res.data
    }
  } catch (error) {
    console.error('加载年龄分布错误:', error)
  }
}

// 加载运动趋势
async function loadWorkoutTrends() {
  try {
    const params = {
      period: trendPeriod.value,
      metric: trendMetric.value,
      count: 12
    }
    
    const res = await getWorkoutTrends(params)
    if (res.code === 200) {
      trendData.value = res.data.data
    }
  } catch (error) {
    console.error('加载运动趋势错误:', error)
  }
}

// 加载注册统计
async function loadRegistrationStats() {
  try {
    const params = {
      interval: registrationPeriod.value,
      count: 12
    }
    
    const res = await getRegistrationStats(params)
    if (res.code === 200) {
      registrationData.value = res.data.stats
    }
  } catch (error) {
    console.error('加载注册统计错误:', error)
  }
}

// 加载活跃用户统计
async function loadActiveUserStats() {
  try {
    const params = {
      interval: activePeriod.value,
      count: 12
    }
    
    const res = await getActiveUserStats(params)
    if (res.code === 200) {
      activeUserData.value = res.data.stats
    }
  } catch (error) {
    console.error('加载活跃用户统计错误:', error)
  }
}

// 运动类型图表选项
const workoutTypeOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'center',
    data: workoutTypeData.value.map(item => item.workout_type || '未分类')
  },
  series: [
    {
      name: '运动类型',
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
      data: workoutTypeData.value.map(item => ({
        value: item.count,
        name: item.workout_type || '未分类'
      }))
    }
  ]
}))

// 年龄分布图表选项
const ageOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: ageData.value.map(item => item.range)
  },
  yAxis: {
    type: 'value',
    name: '用户数'
  },
  series: [
    {
      name: '用户数',
      type: 'bar',
      data: ageData.value.map(item => item.count),
      itemStyle: {
        borderRadius: [4, 4, 0, 0]
      }
    }
  ]
}))

// 运动趋势图表选项
const trendOption = computed(() => {
  const metric = trendMetric.value
  let name, yAxisName
  
  if (metric === 'workouts') {
    name = '运动次数'
    yAxisName = '次数'
  } else if (metric === 'distance') {
    name = '运动距离'
    yAxisName = '距离(km)'
  } else {
    name = '运动时长'
    yAxisName = '时长(分钟)'
  }
  
  return {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: trendData.value.map(item => item.date),
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: yAxisName
    },
    series: [
      {
        name: name,
        type: 'line',
        data: trendData.value.map(item => item.value),
        areaStyle: {
          opacity: 0.3
        },
        smooth: true,
        lineStyle: {
          width: 3
        },
        symbol: 'circle',
        symbolSize: 8
      }
    ]
  }
})

// 注册趋势图表选项
const registrationOption = computed(() => ({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: registrationData.value.map(item => item.date),
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    name: '新注册用户数'
  },
  series: [
    {
      name: '新注册用户',
      type: 'line',
      data: registrationData.value.map(item => item.count),
      areaStyle: {
        opacity: 0.3
      },
      smooth: true,
      lineStyle: {
        width: 3
      },
      symbol: 'circle',
      symbolSize: 8
    }
  ]
}))

// 活跃用户图表选项
const activeUserOption = computed(() => ({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: activeUserData.value.map(item => item.date),
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    name: '活跃用户数'
  },
  series: [
    {
      name: '活跃用户',
      type: 'bar',
      data: activeUserData.value.map(item => item.active_users),
      itemStyle: {
        borderRadius: [4, 4, 0, 0]
      }
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
.statistics-view {
  width: 100%;
}

.filter-card {
  transition: all 0.3s;
}

.stat-card {
  transition: transform 0.3s;
}

.stat-card:hover {
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