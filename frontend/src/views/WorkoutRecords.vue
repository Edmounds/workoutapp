<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">运动记录分析</h1>
      </v-col>
    </v-row>

    <!-- 筛选控件 -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="d-flex align-center flex-wrap">
            <v-select
              v-model="workoutType"
              :items="workoutTypes"
              label="运动类型"
              hide-details
              class="mr-4"
              style="max-width: 180px;"
            ></v-select>

            <v-menu
              v-model="dateRangeMenu"
              :close-on-content-click="false"
              transition="scale-transition"
            >
              <template #activator="{ props }">
                <v-btn 
                  variant="outlined" 
                  color="primary" 
                  class="mr-4"
                  v-bind="props"
                >
                  {{ dateRange[0] }} 至 {{ dateRange[1] }}
                </v-btn>
              </template>
              <v-date-picker
                v-model="dateRange"
                range
                @update:model-value="dateRangeMenu = false"
              ></v-date-picker>
            </v-menu>
            
            <v-btn-toggle v-model="userFilter" mandatory class="mr-4">
              <v-btn value="all">全部用户</v-btn>
              <v-btn value="active">活跃用户</v-btn>
              <v-btn value="selected">选定用户</v-btn>
            </v-btn-toggle>

            <v-autocomplete
              v-if="userFilter === 'selected'"
              v-model="selectedUsers"
              :items="users"
              item-title="username"
              item-value="id"
              label="选择用户"
              multiple
              chips
              closable-chips
              class="mr-4"
              style="max-width: 300px;"
            ></v-autocomplete>

            <v-btn color="primary" prepend-icon="mdi-filter-variant">
              应用筛选
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 运动统计概览 -->
    <v-row class="mt-4">
      <v-col cols="12" md="3">
        <stat-card
          title="本月总运动次数"
          :value="workoutStats.totalCount"
          icon="mdi-run"
          color="primary"
          :change="workoutStats.countChange"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="本月总距离"
          :value="workoutStats.totalDistance + ' km'"
          icon="mdi-map-marker-distance"
          color="secondary"
          :change="workoutStats.distanceChange"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="本月总时长"
          :value="workoutStats.totalDuration + ' 小时'"
          icon="mdi-timer"
          color="success"
          :change="workoutStats.durationChange"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="平均配速"
          :value="workoutStats.avgPace"
          icon="mdi-speedometer"
          color="info"
          :change="workoutStats.paceChange"
          trend="down"
        />
      </v-col>
    </v-row>

    <!-- 运动类型分布 -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>运动类型分布</v-card-title>
          <v-card-text>
            <div style="height: 350px;">
              <pie-chart :chart-data="workoutTypeDistribution" :options="pieChartOptions" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>每月运动趋势</v-card-title>
          <v-card-text>
            <div style="height: 350px;">
              <line-chart :chart-data="monthlyWorkoutTrend" :options="lineChartOptions" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 运动详情图表 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>运动详情分析</span>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="detailChartType" mandatory>
              <v-btn value="distance">距离</v-btn>
              <v-btn value="duration">时长</v-btn>
              <v-btn value="pace">配速</v-btn>
              <v-btn value="heartRate">心率</v-btn>
            </v-btn-toggle>
          </v-card-title>
          <v-card-text>
            <div style="height: 400px;">
              <bar-chart 
                v-if="detailChartType === 'distance' || detailChartType === 'duration'"
                :chart-data="getDetailChartData()"
                :options="barChartOptions"
              />
              <line-chart 
                v-else
                :chart-data="getDetailChartData()"
                :options="lineChartOptions"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 活跃用户排行 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>活跃用户排行</v-card-title>
          <v-card-text>
            <v-tabs v-model="activeUserTab" color="primary">
              <v-tab value="distance">累计距离</v-tab>
              <v-tab value="workouts">运动次数</v-tab>
              <v-tab value="duration">累计时长</v-tab>
              <v-tab value="avgPace">平均配速</v-tab>
            </v-tabs>
            <v-window v-model="activeUserTab">
              <v-window-item value="distance">
                <v-table>
                  <thead>
                    <tr>
                      <th>排名</th>
                      <th>用户</th>
                      <th>累计距离</th>
                      <th>进步</th>
                      <th>运动次数</th>
                      <th>平均每次</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in topUsersByDistance" :key="user.id">
                      <td>
                        <v-avatar 
                          size="28" 
                          :color="index < 3 ? rankColors[index] : 'grey'" 
                          class="white--text"
                        >
                          {{ index + 1 }}
                        </v-avatar>
                      </td>
                      <td>{{ user.username }}</td>
                      <td>{{ user.totalDistance }} km</td>
                      <td>
                        <v-chip
                          :color="user.progress > 0 ? 'success' : 'error'"
                          size="small"
                          class="text-white"
                        >
                          {{ user.progress > 0 ? '+' : '' }}{{ user.progress }}%
                        </v-chip>
                      </td>
                      <td>{{ user.workoutCount }}</td>
                      <td>{{ (user.totalDistance / user.workoutCount).toFixed(1) }} km</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              
              <v-window-item value="workouts">
                <!-- 类似的表格结构，但显示运动次数排行 -->
              </v-window-item>
              
              <v-window-item value="duration">
                <!-- 类似的表格结构，但显示累计时长排行 -->
              </v-window-item>
              
              <v-window-item value="avgPace">
                <!-- 类似的表格结构，但显示平均配速排行 -->
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 运动记录明细表格 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>运动记录明细</span>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="搜索"
              single-line
              hide-details
              density="compact"
              style="max-width: 300px;"
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="workoutRecords"
              :search="search"
              :items-per-page="10"
              class="elevation-1"
            >
              <template #item.workoutType="{ item }">
                <v-chip
                  :color="getWorkoutTypeColor(item.raw.workoutType)"
                  text-color="white"
                  size="small"
                >
                  {{ item.raw.workoutType }}
                </v-chip>
              </template>
              <template #item.distance="{ item }">
                {{ item.raw.distance }} km
              </template>
              <template #item.duration="{ item }">
                {{ formatDuration(item.raw.duration) }}
              </template>
              <template #item.avgHeartRate="{ item }">
                <v-chip
                  :color="getHeartRateColor(item.raw.avgHeartRate)"
                  text-color="white"
                  size="small"
                >
                  {{ item.raw.avgHeartRate }} bpm
                </v-chip>
              </template>
              <template #item.actions="{ item }">
                <v-btn
                  icon
                  density="compact"
                  variant="text"
                  @click="viewWorkoutDetail(item.raw)"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                  icon
                  density="compact"
                  variant="text"
                  @click="exportWorkoutData(item.raw)"
                >
                  <v-icon>mdi-export</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 运动详情对话框 -->
    <v-dialog v-model="workoutDetailDialog" max-width="900">
      <v-card v-if="selectedWorkout">
        <v-card-title class="d-flex align-center">
          <span>{{ selectedWorkout.workoutType }}详情</span>
          <v-spacer></v-spacer>
          <v-chip color="primary">{{ formatDate(selectedWorkout.startTime) }}</v-chip>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <div class="d-flex flex-wrap">
                <div class="workout-stat-item">
                  <div class="text-h5">{{ selectedWorkout.distance }} km</div>
                  <div class="text-caption">总距离</div>
                </div>
                <div class="workout-stat-item">
                  <div class="text-h5">{{ formatDuration(selectedWorkout.duration) }}</div>
                  <div class="text-caption">总时长</div>
                </div>
                <div class="workout-stat-item">
                  <div class="text-h5">{{ selectedWorkout.avgPace }}</div>
                  <div class="text-caption">平均配速</div>
                </div>
                <div class="workout-stat-item">
                  <div class="text-h5">{{ selectedWorkout.calories }} 千卡</div>
                  <div class="text-caption">卡路里</div>
                </div>
                <div class="workout-stat-item">
                  <div class="text-h5">{{ selectedWorkout.avgHeartRate }} bpm</div>
                  <div class="text-caption">平均心率</div>
                </div>
                <div class="workout-stat-item">
                  <div class="text-h5">{{ selectedWorkout.maxHeartRate }} bpm</div>
                  <div class="text-caption">最大心率</div>
                </div>
                <div class="workout-stat-item">
                  <div class="text-h5">{{ selectedWorkout.avgStepRate }}</div>
                  <div class="text-caption">平均步频</div>
                </div>
                <div class="workout-stat-item">
                  <div class="text-h5">{{ selectedWorkout.elevationGain }} m</div>
                  <div class="text-caption">累计爬升</div>
                </div>
              </div>
              
              <v-divider class="my-4"></v-divider>
              
              <h3 class="text-h6 mb-2">配速分析</h3>
              <div style="height: 200px;">
                <line-chart 
                  :chart-data="paceAnalysisData" 
                  :options="paceChartOptions" 
                />
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <h3 class="text-h6 mb-2">心率分析</h3>
              <div style="height: 200px;">
                <line-chart 
                  :chart-data="heartRateAnalysisData" 
                  :options="heartRateChartOptions" 
                />
              </div>
              
              <v-divider class="my-4"></v-divider>
              
              <h3 class="text-h6 mb-2">心率区间分布</h3>
              <div style="height: 200px;">
                <pie-chart 
                  :chart-data="heartRateZoneData" 
                  :options="pieChartOptions" 
                />
              </div>
            </v-col>
          </v-row>
          
          <v-divider class="my-4"></v-divider>
          
          <v-row>
            <v-col cols="12">
              <h3 class="text-h6 mb-2">备注和评价</h3>
              <v-card variant="outlined" class="pa-3 bg-grey-lighten-4">
                <div v-if="selectedWorkout.notes" class="text-body-1">
                  {{ selectedWorkout.notes }}
                </div>
                <div v-else class="text-body-2 font-italic">
                  无备注
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="exportWorkoutDetail">
            导出详情
            <v-icon class="ml-1">mdi-export</v-icon>
          </v-btn>
          <v-btn color="grey" @click="workoutDetailDialog = false">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format } from 'date-fns'
import StatCard from '@/components/dashboard/StatCard.vue'
import LineChart from '@/components/charts/LineChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
import axios from 'axios'

export default {
  components: {
    StatCard,
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      workoutType: 'all',
      workoutTypes: [
        { title: '全部类型', value: 'all' },
        { title: '跑步', value: 'running' },
        { title: '骑行', value: 'cycling' },
        { title: '健走', value: 'walking' },
        { title: '游泳', value: 'swimming' },
        { title: '健身', value: 'workout' },
        { title: '球类', value: 'ballsports' },
        { title: '其他', value: 'other' }
      ],
      dateRange: [
        new Date(new Date().setDate(1)).toISOString().substr(0, 10),
        new Date().toISOString().substr(0, 10)
      ],
      dateRangeMenu: false,
      userFilter: 'all',
      selectedUsers: [],
      search: '',
      detailChartType: 'distance',
      activeUserTab: 'distance',
      workoutDetailDialog: false,
      selectedWorkout: null,
      
      users: [
        { id: 1, username: '张三' },
        { id: 2, username: '李四' },
        { id: 3, username: '王五' },
        { id: 4, username: '赵六' },
        { id: 5, username: '刘七' }
      ],
      
      workoutStats: {
        totalCount: 0,
        countChange: 0,
        totalDistance: 0,
        distanceChange: 0,
        totalDuration: 0,
        durationChange: 0,
        avgPace: '0:00/km',
        paceChange: 0
      },
      
      headers: [
        { title: '用户', key: 'username', sortable: true },
        { title: '运动类型', key: 'workoutType', sortable: true },
        { title: '日期', key: 'startTime', sortable: true },
        { title: '距离', key: 'distance', sortable: true },
        { title: '时长', key: 'duration', sortable: true },
        { title: '平均配速', key: 'avgPace', sortable: true },
        { title: '平均心率', key: 'avgHeartRate', sortable: true },
        { title: '卡路里', key: 'calories', sortable: true },
        { title: '操作', key: 'actions', sortable: false }
      ],
      
      workoutRecords: [
        {
          id: 1,
          username: '张三',
          workoutType: '跑步',
          startTime: '2025-05-13T08:30:00',
          distance: 5.2,
          duration: 1800,
          avgPace: '5:45',
          bestPace: '5:10',
          avgHeartRate: 145,
          maxHeartRate: 165,
          calories: 420,
          elevationGain: 35,
          notes: '早晨跑步，感觉良好，天气凉爽。'
        },
        {
          id: 2,
          username: '李四',
          workoutType: '骑行',
          startTime: '2025-05-12T18:15:00',
          distance: 25.8,
          duration: 3600,
          avgPace: '2:20',
          bestPace: '2:05',
          avgHeartRate: 138,
          maxHeartRate: 155,
          calories: 680,
          elevationGain: 120,
          notes: '傍晚骑行，空气清新，路况良好。'
        },
        {
          id: 3,
          username: '王五',
          workoutType: '健走',
          startTime: '2025-05-13T07:00:00',
          distance: 3.6,
          duration: 2700,
          avgPace: '7:30',
          bestPace: '7:10',
          avgHeartRate: 125,
          maxHeartRate: 135,
          calories: 280,
          elevationGain: 15,
          notes: '晨练健走，精神饱满。'
        },
        {
          id: 4,
          username: '赵六',
          workoutType: '跑步',
          startTime: '2025-05-11T16:45:00',
          distance: 8.4,
          duration: 2400,
          avgPace: '4:50',
          bestPace: '4:30',
          avgHeartRate: 156,
          maxHeartRate: 172,
          calories: 580,
          elevationGain: 45,
          notes: '下午长跑，有些疲劳，需要调整训练强度。'
        },
        {
          id: 5,
          username: '刘七',
          workoutType: '游泳',
          startTime: '2025-05-10T20:30:00',
          distance: 1.5,
          duration: 1500,
          avgPace: '10:00',
          bestPace: '9:30',
          avgHeartRate: 132,
          maxHeartRate: 145,
          calories: 320,
          elevationGain: 0,
          notes: '晚间游泳，放松身心。'
        }
      ],
      
      rankColors: ['#FFD700', '#C0C0C0', '#CD7F32'],
      
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      },
      
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      },
      
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      
      paceChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            reverse: true,
            title: {
              display: true,
              text: '配速 (min/km)'
            }
          },
          x: {
            title: {
              display: true,
              text: '距离 (km)'
            }
          }
        }
      },
      
      heartRateChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: '心率 (bpm)'
            }
          },
          x: {
            title: {
              display: true,
              text: '时间 (分钟)'
            }
          }
        }
      }
    }
  },
  computed: {
    workoutTypeDistribution() {
      return {
        labels: ['跑步', '骑行', '健走', '游泳', '健身', '球类', '其他'],
        datasets: [
          {
            backgroundColor: [
              '#f44336', '#2196f3', '#4caf50', '#ff9800', 
              '#9c27b0', '#607d8b', '#795548'
            ],
            data: [480, 350, 280, 120, 180, 90, 60]
          }
        ]
      }
    },
    
    monthlyWorkoutTrend() {
      return {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
          {
            label: '运动次数',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [120, 135, 142, 150, 165, 180, 175, 168, 155, 145, 138, 130],
            tension: 0.4
          },
          {
            label: '总距离 (x100 km)',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [52, 58, 62, 65, 72, 78, 75, 73, 68, 63, 60, 56],
            tension: 0.4
          }
        ]
      }
    },
    
    topUsersByDistance() {
      return [
        { id: 1, username: '张三', totalDistance: 385.2, progress: 12.5, workoutCount: 42 },
        { id: 2, username: '李四', totalDistance: 352.8, progress: 8.3, workoutCount: 35 },
        { id: 4, username: '赵六', totalDistance: 320.6, progress: 15.2, workoutCount: 38 },
        { id: 3, username: '王五', totalDistance: 298.7, progress: 5.1, workoutCount: 32 },
        { id: 5, username: '刘七', totalDistance: 265.2, progress: -2.3, workoutCount: 28 }
      ]
    },
    
    paceAnalysisData() {
      if (!this.selectedWorkout) return {}
      
      return {
        labels: ['0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'],
        datasets: [
          {
            label: '配速',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: ['6:15', '6:05', '5:55', '5:40', '5:35', '5:50', '6:00', '5:45', '5:35', '5:25'].map(this.paceToSeconds),
            tension: 0.4
          }
        ]
      }
    },
    
    heartRateAnalysisData() {
      if (!this.selectedWorkout) return {}
      
      return {
        labels: ['0', '5', '10', '15', '20', '25', '30'],
        datasets: [
          {
            label: '心率',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [125, 135, 142, 148, 152, 148, 145],
            tension: 0.4
          }
        ]
      }
    },
    
    heartRateZoneData() {
      return {
        labels: ['恢复区 (50-60%)', '有氧区 (60-70%)', '耐力区 (70-80%)', '无氧区 (80-90%)', '极限区 (90-100%)'],
        datasets: [
          {
            backgroundColor: ['#4caf50', '#8bc34a', '#ffc107', '#ff9800', '#f44336'],
            data: [15, 25, 35, 20, 5]
          }
        ]
      }
    }
  },
  methods: {
    formatDate(dateStr) {
      return format(new Date(dateStr), 'yyyy-MM-dd HH:mm')
    },
    
    formatDuration(seconds) {
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const remainingMinutes = minutes % 60
      
      if (hours > 0) {
        return `${hours}小时${remainingMinutes}分钟`
      }
      return `${minutes}分钟`
    },
    
    getWorkoutTypeColor(type) {
      const colorMap = {
        '跑步': 'error',
        '骑行': 'primary',
        '健走': 'success',
        '游泳': 'warning',
        '健身': 'deep-purple',
        '球类': 'blue-grey',
        '其他': 'grey'
      }
      return colorMap[type] || 'grey'
    },
    
    getHeartRateColor(rate) {
      if (rate > 160) return 'error'
      if (rate > 140) return 'warning'
      if (rate > 120) return 'success'
      return 'info'
    },
    
    getDetailChartData() {
      switch (this.detailChartType) {
        case 'distance':
          return {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [
              {
                label: '距离 (km)',
                backgroundColor: '#2196f3',
                data: [5.2, 8.5, 4.8, 7.3, 6.2, 12.5, 9.8]
              }
            ]
          }
        case 'duration':
          return {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [
              {
                label: '时长 (分钟)',
                backgroundColor: '#4caf50',
                data: [30, 45, 28, 40, 35, 65, 50]
              }
            ]
          }
        case 'pace':
          return {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [
              {
                label: '配速 (min/km)',
                backgroundColor: 'rgba(255, 152, 0, 0.2)',
                borderColor: '#ff9800',
                data: ['5:45', '5:30', '5:50', '5:35', '5:40', '5:20', '5:25'].map(this.paceToSeconds),
                tension: 0.4
              }
            ]
          }
        case 'heartRate':
          return {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [
              {
                label: '平均心率 (bpm)',
                backgroundColor: 'rgba(244, 67, 54, 0.2)',
                borderColor: '#f44336',
                data: [145, 148, 142, 146, 143, 150, 147],
                tension: 0.4
              }
            ]
          }
        default:
          return {}
      }
    },
    
    paceToSeconds(pace) {
      if (!pace) return null
      const [minutes, seconds] = pace.split(':').map(Number)
      return minutes + seconds / 60
    },
    
    viewWorkoutDetail(item) {
      // 在实际应用中，这里会通过ID获取详细数据
      this.selectedWorkout = this.workoutRecords.find(record => record.id === item.raw.id)
      this.workoutDetailDialog = true
    },
    
    exportWorkoutData(item) {
      // 导出功能实现
      console.log('导出运动数据', item.raw.id)
    },
    
    exportWorkoutDetail() {
      // 导出详情功能实现
      console.log('导出运动详情', this.selectedWorkout.id)
    },
    
    async fetchWorkoutStats() {
      try {
        const userId = this.userFilter === 'selected' && this.selectedUsers.length > 0 
          ? this.selectedUsers[0] 
          : -1
        
        const response = await axios.get(`http://127.0.0.1:5000/api/wor?id=${userId}`)
        if (response.data.code === 200) {
          const data = response.data.data
          // 使用 nextTick 确保在 DOM 更新后再更新数据
          this.$nextTick(() => {
            this.workoutStats = {
              totalCount: data.total_workouts,
              countChange: 0,
              totalDistance: (data.total_distance / 1000).toFixed(1),
              distanceChange: 0,
              totalDuration: (data.total_duration / 60).toFixed(1),
              durationChange: 0,
              avgPace: this.formatPace(data.avg_pace),
              paceChange: 0
            }
          })
        }
      } catch (error) {
        console.error('获取运动统计数据失败:', error)
      }
    },
    
    formatPace(pace) {
      if (!pace) return '0:00/km'
      const minutes = Math.floor(pace)
      const seconds = Math.round((pace - minutes) * 60)
      return `${minutes}:${seconds.toString().padStart(2, '0')}/km`
    }
  },
  watch: {
    userFilter() {
      // 添加防抖，避免频繁更新
      this.$nextTick(() => {
        this.fetchWorkoutStats()
      })
    },
    selectedUsers() {
      if (this.userFilter === 'selected') {
        // 添加防抖，避免频繁更新
        this.$nextTick(() => {
          this.fetchWorkoutStats()
        })
      }
    }
  },
  mounted() {
    // 确保组件完全挂载后再获取数据
    this.$nextTick(() => {
      this.fetchWorkoutStats()
    })
  }
}
</script>

<style scoped>
.workout-stat-item {
  width: 50%;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
</style>