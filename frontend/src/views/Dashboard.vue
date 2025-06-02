<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">运动数据概览</h1>
      </v-col>
    </v-row>

    <!-- 关键指标卡片 -->
    <v-row>
      <v-col cols="12" md="3">
        <stat-card
          title="活跃用户"
          :value="userStats.activeUsers"
          icon="mdi-account-multiple"
          color="primary"
          :change="userStats.userChange"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="本周运动总时长"
          :value="userStats.totalDuration + '小时'"
          icon="mdi-clock-outline"
          color="secondary"
          :change="userStats.durationChange"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="本周总距离"
          :value="userStats.totalDistance + 'km'"
          icon="mdi-map-marker-distance"
          color="success"
          :change="userStats.distanceChange"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="平均健康指数"
          :value="userStats.avgHealthIndex"
          icon="mdi-heart-pulse"
          color="error"
          :change="userStats.healthIndexChange"
          trend="up"
        />
      </v-col>
    </v-row>

    <!-- 用户活跃度和健康指标趋势 -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>用户活跃度趋势</span>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="activityTimeRange" mandatory>
              <v-btn value="week">周</v-btn>
              <v-btn value="month">月</v-btn>
              <v-btn value="year">年</v-btn>
            </v-btn-toggle>
          </v-card-title>
          <v-card-text>
            <line-chart :chart-data="userActivityData" :options="chartOptions" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>健康指标分布</v-card-title>
          <v-card-text>
            <pie-chart :chart-data="healthMetricsData" :options="pieChartOptions" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 运动类型统计和每周数据 -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>运动类型统计</v-card-title>
          <v-card-text>
            <bar-chart :chart-data="workoutTypeData" :options="barChartOptions" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>每周运动距离</v-card-title>
          <v-card-text>
            <bar-chart :chart-data="weeklyDistanceData" :options="barChartOptions" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 最新运动记录 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>最新运动记录</v-card-title>
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>用户</th>
                  <th>运动类型</th>
                  <th>日期</th>
                  <th>时长</th>
                  <th>距离</th>
                  <th>平均心率</th>
                  <th>平均配速</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(record, index) in latestRecords" :key="index">
                  <td>{{ record.username }}</td>
                  <td>{{ record.workoutType }}</td>
                  <td>{{ formatDate(record.startTime) }}</td>
                  <td>{{ formatDuration(record.duration) }}</td>
                  <td>{{ record.distance }} km</td>
                  <td>{{ record.avgHeartRate }} bpm</td>
                  <td>{{ record.avgPace }}/km</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { format } from 'date-fns'
import axios from 'axios'
import StatCard from '@/components/dashboard/StatCard.vue'
import LineChart from '@/components/charts/LineChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import PieChart from '@/components/charts/PieChart.vue'

export default {
  name: 'DashboardView',  // 添加多词组件名
  components: {
    StatCard,
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      activityTimeRange: 'week',
      userStats: {
        activeUsers: 1248,
        userChange: 5.2,
        totalDuration: 3426,
        durationChange: 8.3,
        totalDistance: 0, // 初始值设为0
        distanceChange: 12.4,
        avgHealthIndex: 86,
        healthIndexChange: 2.1
      },
      latestRecords: [
        {
          username: '张三',
          workoutType: '跑步',
          startTime: '2025-05-12T08:30:00',
          duration: 1800,
          distance: 5.2,
          avgHeartRate: 145,
          avgPace: '5:45'
        },
        {
          username: '李四',
          workoutType: '骑行',
          startTime: '2025-05-12T18:15:00',
          duration: 3600,
          distance: 25.8,
          avgHeartRate: 138,
          avgPace: '2:20'
        },
        {
          username: '王五',
          workoutType: '健走',
          startTime: '2025-05-13T07:00:00',
          duration: 2700,
          distance: 3.6,
          avgHeartRate: 125,
          avgPace: '7:30'
        },
        {
          username: '赵六',
          workoutType: '跑步',
          startTime: '2025-05-13T06:45:00',
          duration: 2400,
          distance: 8.4,
          avgHeartRate: 156,
          avgPace: '4:50'
        },
        {
          username: '刘七',
          workoutType: '游泳',
          startTime: '2025-05-12T20:30:00',
          duration: 1500,
          distance: 1.5,
          avgHeartRate: 132,
          avgPace: '10:00'
        }
      ],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    userActivityData() {
      // 模拟数据，实际应用中应该从API获取
      return {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            label: '活跃用户',
            backgroundColor: 'rgba(63, 81, 181, 0.2)',
            borderColor: '#3f51b5',
            data: [450, 520, 480, 565, 610, 690, 580],
            tension: 0.4
          },
          {
            label: '运动时长(小时)',
            backgroundColor: 'rgba(3, 169, 244, 0.2)',
            borderColor: '#03a9f4',
            data: [120, 145, 135, 160, 175, 190, 155],
            tension: 0.4
          }
        ]
      }
    },
    healthMetricsData() {
      return {
        labels: ['极佳', '良好', '一般', '较差', '风险'],
        datasets: [
          {
            backgroundColor: ['#4caf50', '#8bc34a', '#ffc107', '#ff9800', '#f44336'],
            data: [30, 40, 20, 8, 2]
          }
        ]
      }
    },
    workoutTypeData() {
      return {
        labels: ['跑步', '骑行', '健走', '游泳', '健身', '球类', '其他'],
        datasets: [
          {
            label: '运动次数',
            backgroundColor: '#3f51b5',
            data: [320, 240, 180, 105, 160, 90, 45]
          }
        ]
      }
    },
    weeklyDistanceData() {
      return {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            label: '距离(km)',
            backgroundColor: '#03a9f4',
            data: [25.8, 30.2, 28.5, 33.1, 36.7, 42.5, 38.2]
          }
        ]
      }
    }
  },
  methods: {
    async fetchMotionData() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/motion/data/statistics?id=1')
        if (response.data.code === 200) {
          const stats = response.data.data.statistics
          
          // 处理距离数据
          const distanceStr = stats.motion_distance.total
          const distance = parseFloat(distanceStr.replace('公里', ''))
          this.userStats.totalDistance = distance

          // 处理时长数据
          const durationStr = stats.motion_duration.total
          const durationMinutes = parseFloat(durationStr.replace('分钟', ''))
          this.userStats.totalDuration = (durationMinutes / 60).toFixed(1)

          // 处理用户数据
          this.userStats.activeUsers = parseInt(stats.users.total)

          // 处理平均健康指数
          if (stats.health_index_avg !== undefined) {
            this.userStats.avgHealthIndex = parseFloat(stats.health_index_avg.toFixed(1))
          }
        }
      } catch (error) {
        console.error('获取运动数据失败:', error)
      }
    },
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
    }
  },
  mounted() {
    this.fetchMotionData()
  }
}
</script>