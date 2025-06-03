<template>
  <div class="dashboard-view pa-4">
    <h1 class="text-h4 mb-6">系统概览</h1>
    
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="60"></v-progress-circular>
      </v-col>
    </v-row>
    
    <template v-else>
      <!-- 数据卡片 -->
      <v-row>
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="primary" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-account-group"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ overview.total_users || 0 }}</div>
                <div class="text-subtitle-2 text-grey">总用户数</div>
              </div>
            </v-card-item>
            <v-card-text class="text-right py-0">
              <span class="text-caption text-green">+{{ overview.new_users_today || 0 }} 今日新增</span>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="info" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-run"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ overview.total_workouts || 0 }}</div>
                <div class="text-subtitle-2 text-grey">总运动次数</div>
              </div>
            </v-card-item>
            <v-card-text class="text-right py-0">
              <span class="text-caption text-green">+{{ overview.workouts_today || 0 }} 今日新增</span>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="success" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-map-marker-distance"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ overview.total_distance || 0 }} km</div>
                <div class="text-subtitle-2 text-grey">总运动距离</div>
              </div>
            </v-card-item>
            <v-card-text class="text-right py-0">
              <span class="text-caption text-green">+{{ overview.distance_today || 0 }} km 今日新增</span>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" lg="3">
          <v-card class="stat-card elevation-3" rounded="lg">
            <v-card-item>
              <template v-slot:prepend>
                <v-avatar rounded color="warning" variant="tonal" class="mr-3">
                  <v-icon size="24" icon="mdi-account-clock"></v-icon>
                </v-avatar>
              </template>
              <div>
                <div class="text-h5 font-weight-bold">{{ overview.active_users_today || 0 }}</div>
                <div class="text-subtitle-2 text-grey">今日活跃用户</div>
              </div>
            </v-card-item>
            <v-card-text class="text-right py-0">
              <span class="text-caption" :class="activeRate > 10 ? 'text-green' : 'text-orange'">
                {{ activeRate }}% 活跃率
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- 图表区域 -->
      <v-row class="mt-4">
        <v-col cols="12" md="8">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title class="d-flex align-center">
              <span>用户增长趋势</span>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="userTrendPeriod" mandatory>
                <v-btn value="week" density="compact" variant="text">周</v-btn>
                <v-btn value="month" density="compact" variant="text">月</v-btn>
                <v-btn value="year" density="compact" variant="text">年</v-btn>
              </v-btn-toggle>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="userTrendData.length > 0" :option="userGrowthOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="4">
          <v-card class="elevation-3" height="400" rounded="lg">
            <v-card-title>用户性别分布</v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="genderData.length > 0" :option="genderOption" autoresize />
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
              <span>运动趋势</span>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="workoutMetric" mandatory>
                <v-btn value="workouts" density="compact" variant="text">次数</v-btn>
                <v-btn value="distance" density="compact" variant="text">距离</v-btn>
                <v-btn value="duration" density="compact" variant="text">时长</v-btn>
              </v-btn-toggle>
            </v-card-title>
            <v-card-text class="chart-container">
              <v-chart class="chart" v-if="workoutTrendData.length > 0" :option="workoutTrendOption" autoresize />
              <div v-else class="text-center pt-10">
                <p class="text-body-1">暂无数据</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- 健康数据概览 -->
      <v-row class="mt-4">
        <v-col cols="12">
          <v-card class="elevation-3" rounded="lg">
            <v-card-title>健康数据概览</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <div class="d-flex flex-column align-center">
                    <div class="health-circle primary lighten-4">
                      <span class="text-h5">{{ overview.avg_health_index || 0 }}</span>
                    </div>
                    <div class="text-subtitle-1 mt-2">平均健康指数</div>
                  </div>
                </v-col>
                
                <v-col cols="12" sm="6" md="3">
                  <div class="d-flex flex-column align-center">
                    <div class="health-circle info lighten-4">
                      <span class="text-h5">{{ overview.avg_sleep_quality || 0 }}</span>
                    </div>
                    <div class="text-subtitle-1 mt-2">平均睡眠质量</div>
                  </div>
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
import { PieChart, BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { 
  getDashboardOverview, 
  getUserGrowthTrend, 
  getWorkoutTrends, 
  getGenderDistribution, 
  getWorkoutTypesStats 
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
const overview = ref({})
const userTrendPeriod = ref('month')
const userTrendData = ref([])
const workoutMetric = ref('workouts')
const workoutTrendData = ref([])
const genderData = ref([])
const workoutTypeData = ref([])

// 计算活跃率
const activeRate = computed(() => {
  if (!overview.value.total_users || !overview.value.active_users_today) return 0
  return Math.round((overview.value.active_users_today / overview.value.total_users) * 100)
})

// 用户增长趋势图表选项
const userGrowthOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['新增用户', '累计用户'],
    right: 10,
    top: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: userTrendData.value.map(item => item.date)
  },
  yAxis: [
    {
      type: 'value',
      name: '新增用户',
      position: 'left'
    },
    {
      type: 'value',
      name: '累计用户',
      position: 'right'
    }
  ],
  series: [
    {
      name: '新增用户',
      type: 'bar',
      data: userTrendData.value.map(item => item.new_users)
    },
    {
      name: '累计用户',
      type: 'line',
      yAxisIndex: 1,
      data: userTrendData.value.map(item => item.cumulative_users),
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 3
      }
    }
  ]
}))

// 性别分布图表选项
const genderOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 10,
    top: 'center',
    data: genderData.value.map(item => item.label)
  },
  series: [
    {
      name: '性别分布',
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
      data: genderData.value.map(item => ({
        value: item.count,
        name: item.label
      })),
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      }
    }
  ]
}))

// 运动类型分布图表选项
const workoutTypeOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 'center'
  },
  series: [
    {
      name: '运动类型',
      type: 'pie',
      radius: '55%',
      center: ['40%', '50%'],
      data: workoutTypeData.value.map(item => ({
        value: item.count,
        name: item.workout_type || '未分类'
      })),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))

// 运动趋势图表选项
const workoutTrendOption = computed(() => {
  const metric = workoutMetric.value
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
      data: workoutTrendData.value.map(item => item.date),
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
        data: workoutTrendData.value.map(item => item.value),
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

// 加载数据方法
async function loadDashboardData() {
  loading.value = true
  
  try {
    // 加载概览数据
    const overviewRes = await getDashboardOverview()
    if (overviewRes.code === 200) {
      overview.value = overviewRes.data
    }
    
    // 加载用户增长趋势
    await loadUserGrowthTrend()
    
    // 加载性别分布
    const genderRes = await getGenderDistribution()
    if (genderRes.code === 200) {
      genderData.value = genderRes.data
    }
    
    // 加载运动类型分布
    const typeRes = await getWorkoutTypesStats()
    if (typeRes.code === 200) {
      workoutTypeData.value = typeRes.data
    }
    
    // 加载运动趋势
    await loadWorkoutTrend()
  } catch (error) {
    console.error('加载仪表盘数据错误:', error)
  } finally {
    loading.value = false
  }
}

// 加载用户增长趋势
async function loadUserGrowthTrend() {
  try {
    const params = {
      period: userTrendPeriod.value,
      count: 12
    }
    
    const res = await getUserGrowthTrend(params)
    if (res.code === 200) {
      userTrendData.value = res.data.data
    }
  } catch (error) {
    console.error('加载用户增长趋势错误:', error)
  }
}

// 加载运动趋势
async function loadWorkoutTrend() {
  try {
    const params = {
      period: userTrendPeriod.value,
      metric: workoutMetric.value,
      count: 12
    }
    
    const res = await getWorkoutTrends(params)
    if (res.code === 200) {
      workoutTrendData.value = res.data.data
    }
  } catch (error) {
    console.error('加载运动趋势错误:', error)
  }
}

// 监听周期变化
watch(userTrendPeriod, () => {
  loadUserGrowthTrend()
  loadWorkoutTrend()
})

// 监听指标变化
watch(workoutMetric, () => {
  loadWorkoutTrend()
})

// 页面加载时获取数据
onMounted(() => {
  loadDashboardData()
})
</script>

<style scoped>
.dashboard-view {
  width: 100%;
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

.health-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}
</style> 