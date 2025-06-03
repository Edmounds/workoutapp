<template>
  <div class="user-detail-view pa-4">
    <div class="d-flex align-center mb-6">
      <v-btn icon class="mr-2" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h1 class="text-h4">用户详情</h1>
    </div>
    
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="60"></v-progress-circular>
      </v-col>
    </v-row>
    
    <template v-else-if="userDetail">
      <!-- 用户基本信息 -->
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="elevation-3" rounded="lg">
            <v-card-title class="text-h6">基本信息</v-card-title>
            
            <v-card-text>
              <div class="d-flex flex-column align-center mb-4">
                <v-avatar size="100" color="primary" class="mb-3">
                  <span class="text-h4 white--text">{{ getUserInitials(userDetail.user_info.username) }}</span>
                </v-avatar>
                <div class="text-h5">{{ userDetail.user_info.username }}</div>
                <div class="text-subtitle-1 text-grey">
                  ID: {{ userDetail.user_info.id }}
                </div>
              </div>
              
              <v-list lines="two">
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon icon="mdi-gender-male-female"></v-icon>
                  </template>
                  <v-list-item-title>性别</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip
                      :color="getGenderColor(userDetail.user_info.gender)"
                      size="small"
                      class="text-capitalize"
                    >
                      {{ getGenderText(userDetail.user_info.gender) }}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-divider></v-divider>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon icon="mdi-calendar-account"></v-icon>
                  </template>
                  <v-list-item-title>年龄</v-list-item-title>
                  <v-list-item-subtitle>{{ userDetail.user_info.age || '未设置' }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-divider></v-divider>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon icon="mdi-human-male-height"></v-icon>
                  </template>
                  <v-list-item-title>身高</v-list-item-title>
                  <v-list-item-subtitle>{{ userDetail.user_info.height || '未设置' }} cm</v-list-item-subtitle>
                </v-list-item>
                
                <v-divider></v-divider>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon icon="mdi-weight"></v-icon>
                  </template>
                  <v-list-item-title>体重</v-list-item-title>
                  <v-list-item-subtitle>{{ userDetail.user_info.weight || '未设置' }} kg</v-list-item-subtitle>
                </v-list-item>
                
                <v-divider></v-divider>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon icon="mdi-star"></v-icon>
                  </template>
                  <v-list-item-title>级别</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip
                      :color="getLevelColor(userDetail.user_info.level)"
                      size="small"
                      class="text-capitalize"
                    >
                      {{ getLevelText(userDetail.user_info.level) }}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-divider></v-divider>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon icon="mdi-email"></v-icon>
                  </template>
                  <v-list-item-title>邮箱</v-list-item-title>
                  <v-list-item-subtitle>{{ userDetail.user_info.email || '未设置' }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-divider></v-divider>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon icon="mdi-calendar"></v-icon>
                  </template>
                  <v-list-item-title>注册时间</v-list-item-title>
                  <v-list-item-subtitle>{{ formatDate(userDetail.user_info.created_at) }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="8">
          <!-- 运动数据汇总 -->
          <v-card class="elevation-3 mb-4" rounded="lg">
            <v-card-title class="text-h6">运动数据汇总</v-card-title>
            
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="4">
                  <div class="d-flex flex-column align-center">
                    <div class="stat-circle primary lighten-4 mb-2">
                      <span class="text-h5">{{ userDetail.workout_summary.total_count }}</span>
                    </div>
                    <div class="text-subtitle-1">总运动次数</div>
                  </div>
                </v-col>
                
                <v-col cols="12" sm="4">
                  <div class="d-flex flex-column align-center">
                    <div class="stat-circle info lighten-4 mb-2">
                      <span class="text-h5">{{ userDetail.workout_summary.total_hours }}</span>
                    </div>
                    <div class="text-subtitle-1">总运动时长 (小时)</div>
                  </div>
                </v-col>
                
                <v-col cols="12" sm="4">
                  <div class="d-flex flex-column align-center">
                    <div class="stat-circle success lighten-4 mb-2">
                      <span class="text-h5">{{ userDetail.workout_summary.total_km }}</span>
                    </div>
                    <div class="text-subtitle-1">总运动距离 (km)</div>
                  </div>
                </v-col>
              </v-row>
              
              <v-divider class="my-4"></v-divider>
              
              <div v-if="userDetail.workout_summary.workout_types && userDetail.workout_summary.workout_types.length > 0">
                <div class="text-subtitle-1 mb-2">运动类型分布</div>
                <v-row>
                  <v-col cols="12" md="7">
                    <v-chart :option="workoutTypeOption" height="200px" />
                  </v-col>
                  <v-col cols="12" md="5">
                    <div 
                      v-for="(type, index) in userDetail.workout_summary.workout_types" 
                      :key="index"
                      class="d-flex align-center mb-2"
                    >
                      <v-chip :color="getWorkoutTypeColor(index)" size="small" class="mr-2">
                        {{ type.workout_type || '未分类' }}
                      </v-chip>
                      <div class="text-body-2">{{ type.count }} 次</div>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div v-else class="text-center py-4">
                <p class="text-body-1">暂无运动类型数据</p>
              </div>
            </v-card-text>
          </v-card>
          
          <!-- 最新体能数据 -->
          <v-card class="elevation-3" rounded="lg">
            <v-card-title class="text-h6">最新体能数据</v-card-title>
            
            <v-card-text v-if="Object.keys(userDetail.latest_physical_stats).length > 0">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-card variant="outlined" class="stat-card">
                    <v-card-text class="text-center">
                      <div class="text-h6 primary--text">{{ userDetail.latest_physical_stats.health_index || 'N/A' }}</div>
                      <div class="text-caption">健康指数</div>
                    </v-card-text>
                  </v-card>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-card variant="outlined" class="stat-card">
                    <v-card-text class="text-center">
                      <div class="text-h6 error--text">{{ userDetail.latest_physical_stats.avg_heart_rate || 'N/A' }}</div>
                      <div class="text-caption">平均心率 (bpm)</div>
                    </v-card-text>
                  </v-card>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-card variant="outlined" class="stat-card">
                    <v-card-text class="text-center">
                      <div class="text-h6 warning--text">{{ userDetail.latest_physical_stats.resting_heart_rate || 'N/A' }}</div>
                      <div class="text-caption">静息心率 (bpm)</div>
                    </v-card-text>
                  </v-card>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-card variant="outlined" class="stat-card">
                    <v-card-text class="text-center">
                      <div class="text-h6 info--text">{{ userDetail.latest_physical_stats.avg_blood_oxygen || 'N/A' }}</div>
                      <div class="text-caption">平均血氧 (%)</div>
                    </v-card-text>
                  </v-card>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-card variant="outlined" class="stat-card">
                    <v-card-text class="text-center">
                      <div class="text-h6 success--text">{{ userDetail.latest_physical_stats.sleep_quality || 'N/A' }}</div>
                      <div class="text-caption">睡眠质量</div>
                    </v-card-text>
                  </v-card>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-card variant="outlined" class="stat-card">
                    <v-card-text class="text-center">
                      <div class="text-h6 purple--text">{{ userDetail.latest_physical_stats.aerobic_capacity || 'N/A' }}</div>
                      <div class="text-caption">有氧能力</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text v-else class="text-center py-4">
              <p class="text-body-1">暂无体能数据</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- 运动记录 -->
      <v-row class="mt-4">
        <v-col cols="12">
          <v-card class="elevation-3" rounded="lg">
            <v-card-title class="text-h6 d-flex align-center">
              <span>运动记录</span>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="recordSearch"
                prepend-inner-icon="mdi-magnify"
                label="搜索"
                density="compact"
                variant="outlined"
                hide-details
                class="search-field"
                style="max-width: 200px"
              ></v-text-field>
            </v-card-title>
            
            <v-card-text>
              <v-data-table
                :headers="recordHeaders"
                :items="runningRecords"
                :loading="recordsLoading"
                :items-per-page="5"
                :search="recordSearch"
                class="elevation-1"
              >
                <template v-slot:item.workout_type="{ item }">
                  <v-chip
                    size="small"
                    :color="getWorkoutTypeColorByName(item.workout_type)"
                  >
                    {{ item.workout_type || '未分类' }}
                  </v-chip>
                </template>
                
                <template v-slot:item.start_time="{ item }">
                  {{ formatDateTime(item.start_time) }}
                </template>
                
                <template v-slot:item.actions="{ item }">
                  <v-btn
                    icon
                    variant="text"
                    color="info"
                    size="small"
                    @click="viewRecordDetail(item)"
                  >
                    <v-icon>mdi-information</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-card-text>
            
            <v-card-actions class="justify-center">
              <v-btn
                variant="outlined"
                color="primary"
                @click="loadMoreRecords"
                :loading="loadingMore"
                :disabled="!hasMoreRecords"
              >
                {{ loadingMore ? '加载中...' : '加载更多' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
    
    <v-alert v-else type="error" class="mt-4">
      用户数据加载失败或用户不存在
    </v-alert>
    
    <!-- 运动记录详情对话框 -->
    <v-dialog v-model="recordDetailDialog" max-width="600px">
      <v-card v-if="selectedRecord">
        <v-card-title class="text-h5 pa-4">
          运动记录详情
        </v-card-title>
        
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="text-subtitle-2 text-grey">运动类型</div>
              <div class="text-body-1">{{ selectedRecord.workout_type || '未分类' }}</div>
            </v-col>
            
            <v-col cols="12" sm="6">
              <div class="text-subtitle-2 text-grey">开始时间</div>
              <div class="text-body-1">{{ formatDateTime(selectedRecord.start_time) }}</div>
            </v-col>
            
            <v-col cols="12" sm="6">
              <div class="text-subtitle-2 text-grey">运动时长</div>
              <div class="text-body-1">{{ selectedRecord.duration_minutes }} 分钟</div>
            </v-col>
            
            <v-col cols="12" sm="6">
              <div class="text-subtitle-2 text-grey">运动距离</div>
              <div class="text-body-1">{{ selectedRecord.distance_km }} 公里</div>
            </v-col>
            
            <v-col cols="12" sm="6">
              <div class="text-subtitle-2 text-grey">平均配速</div>
              <div class="text-body-1">{{ selectedRecord.avg_pace_formatted }}</div>
            </v-col>
            
            <v-col cols="12" sm="6">
              <div class="text-subtitle-2 text-grey">平均心率</div>
              <div class="text-body-1">{{ selectedRecord.avg_heart_rate || 'N/A' }} bpm</div>
            </v-col>
            
            <v-col cols="12" sm="6">
              <div class="text-subtitle-2 text-grey">消耗卡路里</div>
              <div class="text-body-1">{{ selectedRecord.calories || 'N/A' }} kcal</div>
            </v-col>
          </v-row>
        </v-card-text>
        
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="recordDetailDialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUserDetail, getUserRunningRecords } from '../api'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

// 注册ECharts组件
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

const route = useRoute()
const router = useRouter()
const userId = computed(() => route.params.id)

// 用户详情数据
const loading = ref(true)
const userDetail = ref(null)

// 运动记录数据
const recordsLoading = ref(false)
const loadingMore = ref(false)
const runningRecords = ref([])
const recordPage = ref(1)
const recordPageSize = ref(10)
const totalRecords = ref(0)
const recordSearch = ref('')
const hasMoreRecords = computed(() => {
  return runningRecords.value.length < totalRecords.value
})

// 运动记录详情
const recordDetailDialog = ref(false)
const selectedRecord = ref(null)

// 表格头部
const recordHeaders = [
  { title: '类型', key: 'workout_type', width: '120px' },
  { title: '时间', key: 'start_time', width: '180px' },
  { title: '时长(分钟)', key: 'duration_minutes', width: '120px', align: 'center' },
  { title: '距离(km)', key: 'distance_km', width: '120px', align: 'center' },
  { title: '平均配速', key: 'avg_pace_formatted', width: '120px', align: 'center' },
  { title: '平均心率', key: 'avg_heart_rate', width: '120px', align: 'center' },
  { title: '操作', key: 'actions', sortable: false, width: '80px', align: 'center' }
]

// 运动类型图表选项
const workoutTypeOption = computed(() => {
  if (!userDetail.value || !userDetail.value.workout_summary.workout_types) {
    return {}
  }
  
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: '运动类型',
        type: 'pie',
        radius: ['45%', '75%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '14',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: userDetail.value.workout_summary.workout_types.map((type, index) => ({
          value: type.count,
          name: type.workout_type || '未分类',
          itemStyle: {
            color: getWorkoutTypeColor(index)
          }
        }))
      }
    ]
  }
})

// 获取用户首字母
function getUserInitials(username) {
  if (!username) return '?'
  return username.substring(0, 1).toUpperCase()
}

// 获取性别文本
function getGenderText(gender) {
  switch (gender) {
    case 1: return '男'
    case 2: return '女'
    default: return '未设置'
  }
}

// 获取性别颜色
function getGenderColor(gender) {
  switch (gender) {
    case 1: return 'blue'
    case 2: return 'pink'
    default: return 'grey'
  }
}

// 获取等级文本
function getLevelText(level) {
  switch (level) {
    case 'beginner': return '初学者'
    case 'intermediate': return '中级'
    case 'advanced': return '高级'
    default: return level
  }
}

// 获取等级颜色
function getLevelColor(level) {
  switch (level) {
    case 'beginner': return 'green'
    case 'intermediate': return 'orange'
    case 'advanced': return 'red'
    default: return 'grey'
  }
}

// 获取运动类型颜色
function getWorkoutTypeColor(index) {
  const colors = [
    '#3f51b5', '#f44336', '#4caf50', '#ff9800', '#9c27b0', 
    '#2196f3', '#ff5722', '#009688', '#673ab7', '#e91e63'
  ]
  return colors[index % colors.length]
}

// 获取运动类型颜色 (通过名称)
function getWorkoutTypeColorByName(name) {
  const typeNames = ['跑步', '恢复跑', '长距离跑', '间歇跑', '节奏跑']
  const index = typeNames.indexOf(name)
  
  if (index >= 0) {
    return getWorkoutTypeColor(index)
  }
  return 'grey'
}

// 格式化日期
function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN')
}

// 格式化日期时间
function formatDateTime(date) {
  if (!date) return ''
  return new Date(date).toLocaleString('zh-CN')
}

// 返回上一页
function goBack() {
  router.back()
}

// 加载用户详情
async function loadUserDetail() {
  loading.value = true
  
  try {
    const res = await getUserDetail(userId.value)
    
    if (res.code === 200) {
      userDetail.value = res.data
    } else {
      console.error('获取用户详情失败:', res.message)
    }
  } catch (error) {
    console.error('加载用户详情错误:', error)
  } finally {
    loading.value = false
  }
}

// 加载用户运动记录
async function loadRunningRecords(loadMore = false) {
  if (loadMore) {
    loadingMore.value = true
  } else {
    recordsLoading.value = true
    recordPage.value = 1
    runningRecords.value = []
  }
  
  try {
    const params = {
      page: recordPage.value,
      size: recordPageSize.value
    }
    
    const res = await getUserRunningRecords(userId.value, params)
    
    if (res.code === 200) {
      if (loadMore) {
        runningRecords.value = [...runningRecords.value, ...res.data.records]
      } else {
        runningRecords.value = res.data.records
      }
      
      totalRecords.value = res.data.total
    } else {
      console.error('获取运动记录失败:', res.message)
    }
  } catch (error) {
    console.error('加载运动记录错误:', error)
  } finally {
    recordsLoading.value = false
    loadingMore.value = false
  }
}

// 加载更多记录
function loadMoreRecords() {
  recordPage.value += 1
  loadRunningRecords(true)
}

// 查看记录详情
function viewRecordDetail(record) {
  selectedRecord.value = record
  recordDetailDialog.value = true
}

// 页面加载时获取数据
onMounted(() => {
  loadUserDetail()
  loadRunningRecords()
})
</script>

<style scoped>
.user-detail-view {
  width: 100%;
}

.stat-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-circle:hover {
  transform: scale(1.05);
}

.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style> 