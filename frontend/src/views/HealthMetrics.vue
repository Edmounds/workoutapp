<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">健康指标分析</h1>
      </v-col>
    </v-row>

    <!-- 时间筛选器 -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="d-flex align-center flex-wrap">
            <span class="mr-4">数据周期：</span>
            <v-btn-toggle v-model="timeRange" mandatory class="mr-4">
              <v-btn value="day">日</v-btn>
              <v-btn value="week">周</v-btn>
              <v-btn value="month">月</v-btn>
              <v-btn value="year">年</v-btn>
            </v-btn-toggle>
            
            <v-menu
              v-model="datePickerMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ props }">
                <v-btn 
                  variant="outlined" 
                  color="primary" 
                  class="ml-2"
                  v-bind="props"
                >
                  {{ formattedSelectedDate }}
                </v-btn>
              </template>
              <v-date-picker
                v-model="selectedDate"
                @update:model-value="datePickerMenu = false"
              ></v-date-picker>
            </v-menu>

            <v-spacer></v-spacer>
            
            <v-btn-toggle v-model="userSelection" mandatory>
              <v-btn value="all">全部用户</v-btn>
              <v-btn value="selected">选定用户</v-btn>
            </v-btn-toggle>
            <v-autocomplete
              v-if="userSelection === 'selected'"
              v-model="selectedUsers"
              :items="userList"
              item-title="username"
              item-value="id"
              label="选择用户"
              chips
              multiple
              clearable
              class="ml-2"
              style="max-width: 300px;"
            ></v-autocomplete>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 健康指标卡片 -->
    <v-row class="mt-4">
      <v-col cols="12" md="3">
        <health-metric-card
          title="平均心率"
          :value="healthData.avgHeartRate"
          unit="bpm"
          icon="mdi-heart-pulse"
          normalRange="60-100 bpm"
          :status="getHeartRateStatus(healthData.avgHeartRate)"
          :trend="healthData.heartRateTrend"
          :trend-data="healthData.heartRateHistory"
        />
      </v-col>
      <v-col cols="12" md="3">
        <health-metric-card
          title="平均血氧"
          :value="healthData.avgBloodOxygen"
          unit="%"
          icon="mdi-water-percent"
          normalRange="95-100%"
          :status="getBloodOxygenStatus(healthData.avgBloodOxygen)"
          :trend="healthData.bloodOxygenTrend"
          :trend-data="healthData.bloodOxygenHistory"
        />
      </v-col>
      <v-col cols="12" md="3">
        <health-metric-card
          title="健康指数"
          :value="healthData.healthIndex"
          unit="分"
          icon="mdi-shield-check"
          normalRange="80-100分"
          :status="getHealthIndexStatus(healthData.healthIndex)"
          :trend="healthData.healthIndexTrend"
          :trend-data="healthData.healthIndexHistory"
        />
      </v-col>
      <v-col cols="12" md="3">
        <health-metric-card
          title="压力指数"
          :value="healthData.stressIndex"
          unit="分"
          icon="mdi-head-cog"
          normalRange="0-30分"
          :status="getStressIndexStatus(healthData.stressIndex)"
          :trend="healthData.stressIndexTrend"
          :trend-data="healthData.stressIndexHistory"
        />
      </v-col>
    </v-row>

    <!-- 详细健康数据图表 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>心率详情</span>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="heartRateChartType" mandatory>
              <v-btn value="line">折线图</v-btn>
              <v-btn value="bar">柱状图</v-btn>
            </v-btn-toggle>
          </v-card-title>
          <v-card-text>
            <div style="height: 400px;">
              <line-chart 
                v-if="heartRateChartType === 'line'" 
                :chart-data="heartRateChartData" 
                :options="heartRateChartOptions" 
              />
              <bar-chart 
                v-else 
                :chart-data="heartRateBarChartData" 
                :options="heartRateChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>血氧水平趋势</v-card-title>
          <v-card-text>
            <div style="height: 300px;">
              <line-chart 
                :chart-data="bloodOxygenChartData" 
                :options="lineChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>压力指数趋势</v-card-title>
          <v-card-text>
            <div style="height: 300px;">
              <line-chart 
                :chart-data="stressIndexChartData" 
                :options="lineChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>健康指标异常用户统计</v-card-title>
          <v-card-text>
            <div style="height: 300px;">
              <bar-chart 
                :chart-data="healthAnomalyData" 
                :options="anomalyChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 健康数据表格 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>健康数据明细</span>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="搜索"
              single-line
              hide-details
              density="compact"
              class="table-search"
              style="max-width: 300px;"
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="healthRecords"
              :search="search"
              :items-per-page="10"
              class="elevation-1"
            >
              <template #item.avgHeartRate="{ item }">
                <v-chip
                  :color="getHeartRateStatusColor(item.raw.avgHeartRate)"
                  text-color="white"
                  size="small"
                >
                  {{ item.raw.avgHeartRate }} bpm
                </v-chip>
              </template>
              <template #item.avgBloodOxygen="{ item }">
                <v-chip
                  :color="getBloodOxygenStatusColor(item.raw.avgBloodOxygen)"
                  text-color="white"
                  size="small"
                >
                  {{ item.raw.avgBloodOxygen }}%
                </v-chip>
              </template>
              <template #item.healthIndex="{ item }">
                <v-progress-linear
                  :model-value="item.raw.healthIndex"
                  :color="getHealthIndexStatusColor(item.raw.healthIndex)"
                  height="20"
                  striped
                >
                  <template #default>
                    <span class="text-white">{{ item.raw.healthIndex }}</span>
                  </template>
                </v-progress-linear>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { format } from 'date-fns'
import HealthMetricCard from '@/components/dashboard/HealthMetricCard.vue'
import LineChart from '@/components/charts/LineChart.vue'
import BarChart from '@/components/charts/BarChart.vue'

export default {
  components: {
    HealthMetricCard,
    LineChart,
    BarChart
  },
  data() {
    return {
      timeRange: 'week',
      selectedDate: new Date().toISOString().substr(0, 10),
      datePickerMenu: false,
      userSelection: 'all',
      selectedUsers: [],
      search: '',
      heartRateChartType: 'line',
      
      userList: [
        { id: 1, username: '张三' },
        { id: 2, username: '李四' },
        { id: 3, username: '王五' },
        { id: 4, username: '赵六' }
      ],
      
      healthData: {
        avgHeartRate: 78,
        heartRateTrend: 'neutral',
        heartRateHistory: [75, 77, 76, 78, 79, 78, 78],
        
        avgBloodOxygen: 97.5,
        bloodOxygenTrend: 'up',
        bloodOxygenHistory: [96.8, 97.0, 97.2, 97.3, 97.5, 97.5, 97.5],
        
        healthIndex: 86,
        healthIndexTrend: 'up',
        healthIndexHistory: [82, 83, 84, 84, 85, 85, 86],
        
        stressIndex: 25,
        stressIndexTrend: 'down',
        stressIndexHistory: [32, 30, 28, 27, 26, 25, 25]
      },
      
      headers: [
        { title: '用户', key: 'username', sortable: true },
        { title: '日期', key: 'date', sortable: true },
        { title: '平均心率', key: 'avgHeartRate', sortable: true },
        { title: '最大心率', key: 'maxHeartRate', sortable: true },
        { title: '静息心率', key: 'restingHeartRate', sortable: true },
        { title: '平均血氧', key: 'avgBloodOxygen', sortable: true },
        { title: '健康指数', key: 'healthIndex', sortable: true },
        { title: '压力指数', key: 'stressIndex', sortable: true },
        { title: '睡眠质量', key: 'sleepQuality', sortable: true }
      ],
      
      healthRecords: [
        {
          username: '张三',
          date: '2025-05-13',
          avgHeartRate: 78,
          maxHeartRate: 142,
          restingHeartRate: 62,
          avgBloodOxygen: 97.5,
          healthIndex: 86,
          stressIndex: 25,
          sleepQuality: 92
        },
        {
          username: '李四',
          date: '2025-05-13',
          avgHeartRate: 82,
          maxHeartRate: 156,
          restingHeartRate: 65,
          avgBloodOxygen: 96.8,
          healthIndex: 82,
          stressIndex: 35,
          sleepQuality: 78
        },
        {
          username: '王五',
          date: '2025-05-13',
          avgHeartRate: 68,
          maxHeartRate: 132,
          restingHeartRate: 58,
          avgBloodOxygen: 98.2,
          healthIndex: 90,
          stressIndex: 18,
          sleepQuality: 88
        },
        {
          username: '赵六',
          date: '2025-05-13',
          avgHeartRate: 95,
          maxHeartRate: 165,
          restingHeartRate: 72,
          avgBloodOxygen: 94.5,
          healthIndex: 75,
          stressIndex: 42,
          sleepQuality: 65
        },
        {
          username: '刘七',
          date: '2025-05-12',
          avgHeartRate: 72,
          maxHeartRate: 138,
          restingHeartRate: 60,
          avgBloodOxygen: 97.0,
          healthIndex: 88,
          stressIndex: 22,
          sleepQuality: 85
        }
      ],
      
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      },
      
      heartRateChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: '心率 (bpm)'
            }
          }
        }
      },
      
      anomalyChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: '用户数量'
            }
          }
        }
      }
    }
  },
  computed: {
    formattedSelectedDate() {
      return format(new Date(this.selectedDate), 'yyyy-MM-dd')
    },
    
    heartRateChartData() {
      return {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
        datasets: [
          {
            label: '平均心率',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [65, 62, 85, 92, 88, 78, 70],
            tension: 0.4
          },
          {
            label: '运动心率',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [null, null, 125, 138, 132, null, null],
            tension: 0.4
          }
        ]
      }
    },
    
    heartRateBarChartData() {
      return {
        labels: ['静息心率', '平均心率', '运动心率', '最大心率'],
        datasets: [
          {
            label: '心率数据',
            backgroundColor: ['#66bb6a', '#42a5f5', '#ffa726', '#ef5350'],
            data: [62, 78, 128, 156]
          }
        ]
      }
    },
    
    bloodOxygenChartData() {
      return {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            label: '平均血氧',
            backgroundColor: 'rgba(3, 169, 244, 0.2)',
            borderColor: '#03a9f4',
            data: [96.8, 97.0, 97.2, 97.3, 97.5, 97.5, 97.5],
            tension: 0.4
          }
        ]
      }
    },
    
    stressIndexChartData() {
      return {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            label: '压力指数',
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            borderColor: '#ff9800',
            data: [32, 30, 28, 27, 26, 25, 25],
            tension: 0.4
          }
        ]
      }
    },
    
    healthAnomalyData() {
      return {
        labels: ['心率偏高', '心率偏低', '血氧偏低', '压力过高', '睡眠不足', '健康指数低'],
        datasets: [
          {
            label: '异常用户数',
            backgroundColor: '#f44336',
            data: [24, 12, 18, 36, 45, 28]
          }
        ]
      }
    }
  },
  methods: {
    getHeartRateStatus(value) {
      if (value > 100 || value < 50) return 'danger'
      if (value > 90 || value < 60) return 'warning'
      return 'normal'
    },
    
    getBloodOxygenStatus(value) {
      if (value < 90) return 'danger'
      if (value < 95) return 'warning'
      return 'normal'
    },
    
    getHealthIndexStatus(value) {
      if (value < 60) return 'danger'
      if (value < 80) return 'warning'
      return 'normal'
    },
    
    getStressIndexStatus(value) {
      if (value > 50) return 'danger'
      if (value > 30) return 'warning'
      return 'normal'
    },
    
    getHeartRateStatusColor(value) {
      if (value > 100 || value < 50) return 'error'
      if (value > 90 || value < 60) return 'warning'
      return 'success'
    },
    
    getBloodOxygenStatusColor(value) {
      if (value < 90) return 'error'
      if (value < 95) return 'warning'
      return 'success'
    },
    
    getHealthIndexStatusColor(value) {
      if (value < 60) return 'error'
      if (value < 80) return 'warning'
      return 'success'
    }
  }
}
</script>

<style scoped>
.table-search {
  max-width: 300px;
}
</style>