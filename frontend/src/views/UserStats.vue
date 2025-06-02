<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">用户数据统计</h1>
      </v-col>
    </v-row>

    <!-- 筛选器 -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="d-flex align-center flex-wrap">
            <v-select
              v-model="timeRange"
              :items="timeRanges"
              label="时间范围"
              hide-details
              class="mr-4"
              style="max-width: 150px;"
            ></v-select>

            <v-select
              v-model="ageGroup"
              :items="ageGroups"
              label="年龄段"
              hide-details
              class="mr-4"
              style="max-width: 150px;"
            ></v-select>

            <v-select
              v-model="gender"
              :items="genders"
              label="性别"
              hide-details
              class="mr-4"
              style="max-width: 150px;"
            ></v-select>

            <v-select
              v-model="activityLevel"
              :items="activityLevels"
              label="活跃度"
              hide-details
              class="mr-4"
              style="max-width: 150px;"
            ></v-select>

            <v-btn color="primary" prepend-icon="mdi-filter-variant">
              应用筛选
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 用户增长统计 -->
    <v-row class="mt-4">
      <v-col cols="12" md="3">
        <stat-card
          title="总用户数"
          :value="userStats.totalUsers"
          icon="mdi-account-group"
          color="primary"
          :change="userStats.userGrowth"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="活跃用户"
          :value="userStats.activeUsers"
          icon="mdi-account-check"
          color="success"
          :change="userStats.activeGrowth"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="新增用户"
          :value="userStats.newUsers"
          icon="mdi-account-plus"
          color="info"
          :change="userStats.newUserGrowth"
          trend="up"
        />
      </v-col>
      <v-col cols="12" md="3">
        <stat-card
          title="流失用户"
          :value="userStats.churnUsers"
          icon="mdi-account-minus"
          color="error"
          :change="userStats.churnRate"
          trend="down"
        />
      </v-col>
    </v-row>

    <!-- 用户分布 -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>年龄分布</v-card-title>
          <v-card-text>
            <div style="height: 350px;">
              <bar-chart 
                :chart-data="ageDistribution" 
                :options="barChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>性别分布</v-card-title>
          <v-card-text style="height: 350px;">
            <div class="d-flex align-center justify-center h-100">
              <v-row>
                <v-col cols="6" class="text-center">
                  <v-progress-circular
                    size="150"
                    width="15"
                    color="primary"
                    :model-value="genderDistribution.male"
                  >
                    <div class="text-h5">{{ genderDistribution.male }}%</div>
                    <div class="text-caption">男性</div>
                  </v-progress-circular>
                </v-col>
                <v-col cols="6" class="text-center">
                  <v-progress-circular
                    size="150"
                    width="15"
                    color="error"
                    :model-value="genderDistribution.female"
                  >
                    <div class="text-h5">{{ genderDistribution.female }}%</div>
                    <div class="text-caption">女性</div>
                  </v-progress-circular>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 用户增长趋势 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>用户增长趋势</span>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="userGrowthChartType" mandatory>
              <v-btn value="total">总用户</v-btn>
              <v-btn value="active">活跃用户</v-btn>
              <v-btn value="new">新增用户</v-btn>
            </v-btn-toggle>
          </v-card-title>
          <v-card-text>
            <div style="height: 400px;">
              <line-chart 
                :chart-data="getUserGrowthData()" 
                :options="lineChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 活跃度分析 -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>活跃度分布</v-card-title>
          <v-card-text>
            <div style="height: 350px;">
              <pie-chart 
                :chart-data="activityDistribution" 
                :options="pieChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>周活跃趋势</v-card-title>
          <v-card-text>
            <div style="height: 350px;">
              <bar-chart 
                :chart-data="weeklyActiveData" 
                :options="barChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 用户健康指标统计 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>用户健康指标汇总</v-card-title>
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>健康指标</th>
                  <th>平均值</th>
                  <th>最小值</th>
                  <th>最大值</th>
                  <th>标准差</th>
                  <th>异常用户比例</th>
                  <th>趋势</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in healthMetrics" :key="item.metric">
                  <td>{{ item.metric }}</td>
                  <td>{{ item.avg }} {{ item.unit }}</td>
                  <td>{{ item.min }} {{ item.unit }}</td>
                  <td>{{ item.max }} {{ item.unit }}</td>
                  <td>{{ item.stdDev }}</td>
                  <td>
                    <v-progress-linear
                      :model-value="item.abnormalPercentage"
                      :color="getAbnormalColor(item.abnormalPercentage)"
                      height="20"
                      striped
                    >
                      <template #default>
                        <span class="text-white">{{ item.abnormalPercentage }}%</span>
                      </template>
                    </v-progress-linear>
                  </td>
                  <td>
                    <v-icon
                      :color="item.trend === 'up' ? 'success' : (item.trend === 'down' ? 'error' : 'grey')"
                    >
                      {{ item.trend === 'up' ? 'mdi-arrow-up' : (item.trend === 'down' ? 'mdi-arrow-down' : 'mdi-minus') }}
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 用户列表 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>用户列表</span>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="搜索用户"
              single-line
              hide-details
              density="compact"
              style="max-width: 300px;"
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="users"
              :search="search"
              :items-per-page="10"
              class="elevation-1"
            >
              <template #item.avatar="{ item }">
                <v-avatar size="32">
                  <v-img v-if="item.raw && item.raw.avatar" :src="item.raw.avatar" :alt="item.raw.username"></v-img>
                  <v-icon v-else>mdi-account</v-icon>
                </v-avatar>
              </template>
              <template #item.activityLevel="{ item }">
                <v-chip
                  :color="getActivityLevelColor(item.raw.activityLevel)"
                  text-color="white"
                  size="small"
                >
                  {{ item.raw.activityLevel }}
                </v-chip>
              </template>
              <template #item.healthIndex="{ item }">
                <v-progress-linear
                  :model-value="item.raw.healthIndex"
                  :color="getHealthIndexColor(item.raw.healthIndex)"
                  height="20"
                  striped
                >
                  <template #default>
                    <span class="text-white">{{ item.raw.healthIndex }}</span>
                  </template>
                </v-progress-linear>
              </template>
              <template #item.actions="{ item }">
                <v-btn
                  icon
                  density="compact"
                  variant="text"
                  @click="viewUserDetail(item.raw)"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                  icon
                  density="compact"
                  variant="text"
                  @click="exportUserData(item.raw)"
                >
                  <v-icon>mdi-export</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 用户详情对话框 -->
    <v-dialog v-model="userDetailDialog" max-width="900">
      <v-card v-if="selectedUser">
        <v-card-title class="d-flex align-center">
          <v-avatar size="40" class="mr-3">
            <v-img v-if="selectedUser.avatar" :src="selectedUser.avatar" :alt="selectedUser.username"></v-img>
            <v-icon v-else>mdi-account</v-icon>
          </v-avatar>
          <span>{{ selectedUser.username }} 的详细信息</span>
          <v-spacer></v-spacer>
          <v-chip
            :color="getActivityLevelColor(selectedUser.activityLevel)"
            text-color="white"
          >
            {{ selectedUser.activityLevel }}
          </v-chip>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-list>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-account</v-icon>
                  </template>
                  <v-list-item-title>用户ID: {{ selectedUser.id }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-gender-male-female</v-icon>
                  </template>
                  <v-list-item-title>性别: {{ selectedUser.gender }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-calendar</v-icon>
                  </template>
                  <v-list-item-title>年龄: {{ selectedUser.age }}岁</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-ruler</v-icon>
                  </template>
                  <v-list-item-title>身高: {{ selectedUser.height }}cm</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-weight</v-icon>
                  </template>
                  <v-list-item-title>体重: {{ selectedUser.weight }}kg</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-calendar-plus</v-icon>
                  </template>
                  <v-list-item-title>注册时间: {{ selectedUser.createdAt }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-calendar-check</v-icon>
                  </template>
                  <v-list-item-title>最近活跃: {{ selectedUser.lastActive }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <h3 class="text-h6 mb-3">运动统计</h3>
              <div class="d-flex flex-wrap">
                <div class="user-stat-item">
                  <div class="text-h5">{{ selectedUser.totalWorkouts }}</div>
                  <div class="text-caption">总运动次数</div>
                </div>
                <div class="user-stat-item">
                  <div class="text-h5">{{ selectedUser.totalDistance }} km</div>
                  <div class="text-caption">总运动距离</div>
                </div>
                <div class="user-stat-item">
                  <div class="text-h5">{{ selectedUser.totalDuration }} 小时</div>
                  <div class="text-caption">总运动时长</div>
                </div>
                <div class="user-stat-item">
                  <div class="text-h5">{{ selectedUser.avgPace }}</div>
                  <div class="text-caption">平均配速</div>
                </div>
                <div class="user-stat-item">
                  <div class="text-h5">{{ selectedUser.level }}</div>
                  <div class="text-caption">用户等级</div>
                </div>
                <div class="user-stat-item">
                  <div class="text-h5">{{ selectedUser.achievements }}</div>
                  <div class="text-caption">获得成就</div>
                </div>
              </div>
              
              <h3 class="text-h6 mt-4 mb-3">健康指标</h3>
              <v-table dense>
                <tbody>
                  <tr>
                    <td>平均心率</td>
                    <td>{{ selectedUser.avgHeartRate }} bpm</td>
                  </tr>
                  <tr>
                    <td>静息心率</td>
                    <td>{{ selectedUser.restingHeartRate }} bpm</td>
                  </tr>
                  <tr>
                    <td>平均血氧</td>
                    <td>{{ selectedUser.avgBloodOxygen }}%</td>
                  </tr>
                  <tr>
                    <td>健康指数</td>
                    <td>{{ selectedUser.healthIndex }}</td>
                  </tr>
                  <tr>
                    <td>压力指数</td>
                    <td>{{ selectedUser.stressIndex }}</td>
                  </tr>
                  <tr>
                    <td>睡眠质量</td>
                    <td>{{ selectedUser.sleepQuality }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
          
          <v-divider class="my-4"></v-divider>
          
          <h3 class="text-h6 mb-3">运动趋势</h3>
          <div style="height: 200px;">
            <line-chart 
              :chart-data="userWorkoutTrend" 
              :options="lineChartOptions" 
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="exportUserDetail">
            导出用户详情
            <v-icon class="ml-1">mdi-export</v-icon>
          </v-btn>
          <v-btn color="grey" @click="userDetailDialog = false">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
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
      timeRange: 'month',
      timeRanges: [
        { title: '本周', value: 'week' },
        { title: '本月', value: 'month' },
        { title: '本季度', value: 'quarter' },
        { title: '本年', value: 'year' },
        { title: '全部', value: 'all' }
      ],
      ageGroup: 'all',
      ageGroups: [
        { title: '全部年龄', value: 'all' },
        { title: '18岁以下', value: 'under18' },
        { title: '18-24岁', value: '18-24' },
        { title: '25-34岁', value: '25-34' },
        { title: '35-44岁', value: '35-44' },
        { title: '45-54岁', value: '45-54' },
        { title: '55岁以上', value: 'above55' }
      ],
      gender: 'all',
      genders: [
        { title: '全部性别', value: 'all' },
        { title: '男', value: 'male' },
        { title: '女', value: 'female' }
      ],
      activityLevel: 'all',
      activityLevels: [
        { title: '全部活跃度', value: 'all' },
        { title: '非常活跃', value: 'very_active' },
        { title: '活跃', value: 'active' },
        { title: '一般', value: 'moderate' },
        { title: '较少活跃', value: 'less_active' },
        { title: '不活跃', value: 'inactive' }
      ],
      search: '',
      userGrowthChartType: 'total',
      userDetailDialog: false,
      selectedUser: null,
      
      userStats: {
        totalUsers: 12684,
        userGrowth: 8.5,
        activeUsers: 8735,
        activeGrowth: 12.3,
        newUsers: 1247,
        newUserGrowth: 5.8,
        churnUsers: 342,
        churnRate: -2.1
      },
      
      headers: [
        { title: '头像', key: 'avatar', sortable: false },
        { title: '用户名', key: 'username', sortable: true },
        { title: '性别', key: 'gender', sortable: true },
        { title: '年龄', key: 'age', sortable: true },
        { title: '活跃度', key: 'activityLevel', sortable: true },
        { title: '注册时间', key: 'createdAt', sortable: true },
        { title: '最近活跃', key: 'lastActive', sortable: true },
        { title: '健康指数', key: 'healthIndex', sortable: true },
        { title: '操作', key: 'actions', sortable: false }
      ],
      
      healthMetrics: [
        { 
          metric: '心率', 
          avg: 78, 
          min: 52, 
          max: 182, 
          stdDev: 12.5, 
          abnormalPercentage: 8.2, 
          trend: 'neutral',
          unit: 'bpm' 
        },
        { 
          metric: '血氧', 
          avg: 97.3, 
          min: 92.1, 
          max: 99.8, 
          stdDev: 1.2, 
          abnormalPercentage: 3.5, 
          trend: 'up',
          unit: '%' 
        },
        { 
          metric: '健康指数', 
          avg: 84.2, 
          min: 42, 
          max: 98, 
          stdDev: 8.7, 
          abnormalPercentage: 15.3, 
          trend: 'up',
          unit: '' 
        },
        { 
          metric: '压力指数', 
          avg: 28.4, 
          min: 5, 
          max: 85, 
          stdDev: 15.2, 
          abnormalPercentage: 24.5, 
          trend: 'down',
          unit: '' 
        },
        { 
          metric: '睡眠质量', 
          avg: 79.6, 
          min: 35, 
          max: 95, 
          stdDev: 10.8, 
          abnormalPercentage: 18.7, 
          trend: 'neutral',
          unit: '' 
        }
      ],
      
      users: [
        {
          id: 1,
          username: '张三',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
          gender: '男',
          age: 34,
          activityLevel: '非常活跃',
          createdAt: '2024-03-15',
          lastActive: '2025-05-13',
          healthIndex: 92,
          height: 175,
          weight: 68,
          totalWorkouts: 246,
          totalDistance: 1842.5,
          totalDuration: 215.8,
          avgPace: '5:20/km',
          level: 'Lv.8 跑者',
          achievements: 25,
          avgHeartRate: 72,
          restingHeartRate: 62,
          avgBloodOxygen: 98.2,
          stressIndex: 15,
          sleepQuality: 88
        },
        {
          id: 2,
          username: '李四',
          avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
          gender: '男',
          age: 28,
          activityLevel: '活跃',
          createdAt: '2024-05-21',
          lastActive: '2025-05-12',
          healthIndex: 85,
          height: 182,
          weight: 75,
          totalWorkouts: 168,
          totalDistance: 1254.2,
          totalDuration: 157.6,
          avgPace: '5:45/km',
          level: 'Lv.6 跑者',
          achievements: 18,
          avgHeartRate: 75,
          restingHeartRate: 64,
          avgBloodOxygen: 97.8,
          stressIndex: 22,
          sleepQuality: 82
        },
        {
          id: 3,
          username: '王五',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
          gender: '男',
          age: 42,
          activityLevel: '一般',
          createdAt: '2024-08-08',
          lastActive: '2025-05-10',
          healthIndex: 78,
          height: 178,
          weight: 82,
          totalWorkouts: 95,
          totalDistance: 542.8,
          totalDuration: 85.4,
          avgPace: '6:35/km',
          level: 'Lv.4 跑者',
          achievements: 10,
          avgHeartRate: 78,
          restingHeartRate: 68,
          avgBloodOxygen: 96.5,
          stressIndex: 32,
          sleepQuality: 75
        },
        {
          id: 4,
          username: '赵六',
          avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
          gender: '男',
          age: 24,
          activityLevel: '非常活跃',
          createdAt: '2024-04-12',
          lastActive: '2025-05-13',
          healthIndex: 95,
          height: 180,
          weight: 70,
          totalWorkouts: 220,
          totalDistance: 1650.5,
          totalDuration: 185.2,
          avgPace: '5:05/km',
          level: 'Lv.7 跑者',
          achievements: 22,
          avgHeartRate: 68,
          restingHeartRate: 58,
          avgBloodOxygen: 98.5,
          stressIndex: 12,
          sleepQuality: 90
        },
        {
          id: 5,
          username: '钱七',
          avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
          gender: '女',
          age: 31,
          activityLevel: '活跃',
          createdAt: '2024-06-25',
          lastActive: '2025-05-12',
          healthIndex: 88,
          height: 165,
          weight: 55,
          totalWorkouts: 175,
          totalDistance: 1120.6,
          totalDuration: 148.3,
          avgPace: '5:55/km',
          level: 'Lv.6 跑者',
          achievements: 16,
          avgHeartRate: 76,
          restingHeartRate: 65,
          avgBloodOxygen: 97.5,
          stressIndex: 18,
          sleepQuality: 86
        }
      ],
      
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
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
      
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      },
      genderDistribution: {
        male: 0,
        female: 0
      }
    }
  },
  computed: {
    ageDistribution() {
      return {
        labels: ['18岁以下', '18-24岁', '25-34岁', '35-44岁', '45-54岁', '55岁以上'],
        datasets: [
          {
            label: '用户数量',
            backgroundColor: '#3f51b5',
            data: [856, 2584, 4216, 3125, 1450, 453]
          }
        ]
      }
    },
    
    activityDistribution() {
      return {
        labels: ['非常活跃', '活跃', '一般', '较少活跃', '不活跃'],
        datasets: [
          {
            backgroundColor: ['#4caf50', '#8bc34a', '#ffc107', '#ff9800', '#f44336'],
            data: [15, 35, 30, 12, 8]
          }
        ]
      }
    },
    
    weeklyActiveData() {
      return {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            label: '活跃用户数',
            backgroundColor: '#03a9f4',
            data: [4520, 4350, 4480, 4650, 5120, 6850, 6540]
          }
        ]
      }
    },
    
    userWorkoutTrend() {
      if (!this.selectedUser) return {}
      
      return {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [
          {
            label: '运动次数',
            backgroundColor: 'rgba(63, 81, 181, 0.2)',
            borderColor: '#3f51b5',
            data: [22, 28, 35, 42, 38],
            tension: 0.4
          },
          {
            label: '运动时长 (小时)',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [18.5, 24.2, 32.6, 38.5, 35.2],
            tension: 0.4
          }
        ]
      }
    }
  },
  methods: {
    async fetchUserStats() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/usersnsys')
        if (response.data.code === 200) {
          const data = response.data.data
          this.userStats.totalUsers = data.total_users
          this.userStats.activeUsers = data.active_users
          this.userStats.newUsers = data.new_users
          this.userStats.churnUsers = data.lost_users
        }
      } catch (error) {
        console.error('获取用户统计数据失败:', error)
      }
    },
    getUserGrowthData() {
      switch (this.userGrowthChartType) {
        case 'total':
          return {
            labels: ['1月', '2月', '3月', '4月', '5月'],
            datasets: [
              {
                label: '总用户数',
                backgroundColor: 'rgba(63, 81, 181, 0.2)',
                borderColor: '#3f51b5',
                data: [9850, 10450, 11240, 11980, 12684],
                tension: 0.4
              }
            ]
          }
        case 'active':
          return {
            labels: ['1月', '2月', '3月', '4月', '5月'],
            datasets: [
              {
                label: '活跃用户',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderColor: '#4caf50',
                data: [6250, 6820, 7380, 7950, 8735],
                tension: 0.4
              }
            ]
          }
        case 'new':
          return {
            labels: ['1月', '2月', '3月', '4月', '5月'],
            datasets: [
              {
                label: '新增用户',
                backgroundColor: 'rgba(3, 169, 244, 0.2)',
                borderColor: '#03a9f4',
                data: [920, 1120, 1080, 1175, 1247],
                tension: 0.4
              }
            ]
          }
        default:
          return {}
      }
    },
    
    getActivityLevelColor(level) {
      const colorMap = {
        '非常活跃': 'success',
        '活跃': 'light-green',
        '一般': 'warning',
        '较少活跃': 'orange',
        '不活跃': 'error'
      }
      return colorMap[level] || 'grey'
    },
    
    getHealthIndexColor(value) {
      if (value >= 90) return 'success'
      if (value >= 80) return 'light-green'
      if (value >= 70) return 'warning'
      if (value >= 60) return 'orange'
      return 'error'
    },
    
    getAbnormalColor(percentage) {
      if (percentage < 5) return 'success'
      if (percentage < 10) return 'light-green'
      if (percentage < 20) return 'warning'
      if (percentage < 30) return 'orange'
      return 'error'
    },
    
    viewUserDetail(user) {
      // 确保传入的user是一个有效对象
      if (user && typeof user === 'object') {
        this.selectedUser = { ...user }
        this.userDetailDialog = true
      } else {
        console.error('Invalid user object:', user)
      }
    },
    
    exportUserData(user) {
      // 导出功能实现
      console.log('导出用户数据', user.id)
    },
    
    exportUserDetail() {
      // 导出详情功能实现
      console.log('导出用户详情', this.selectedUser.id)
    },
    async fetchGenderDistribution() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/usergp')
        if (response.data.code === 200) {
          const malePercentage = response.data.data
          this.genderDistribution = {
            male: malePercentage,
            female: (100 - malePercentage).toFixed(1)
          }
        }
      } catch (error) {
        console.error('获取性别分布数据失败:', error)
      }
    }
  },
  mounted() {
    this.fetchUserStats()
    this.fetchGenderDistribution()
  }
}
</script>

<style scoped>
.user-stat-item {
  width: 50%;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
</style>