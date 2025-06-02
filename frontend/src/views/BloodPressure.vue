<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">血压监测分析</h1>
      </v-col>
    </v-row>

    <!-- 筛选器 -->
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
            
            <v-btn-toggle v-model="userSelection" mandatory class="mr-2">
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

    <!-- 血压概览卡片 -->
    <v-row class="mt-4">
      <v-col cols="12" md="3">
        <health-metric-card
          title="平均收缩压"
          :value="bloodPressureData.avgSystolic"
          unit="mmHg"
          icon="mdi-heart-pulse"
          normalRange="90-120 mmHg"
          :status="getSystolicStatus(bloodPressureData.avgSystolic)"
          :trend="bloodPressureData.systolicTrend"
          :trend-data="bloodPressureData.systolicHistory"
        />
      </v-col>
      <v-col cols="12" md="3">
        <health-metric-card
          title="平均舒张压"
          :value="bloodPressureData.avgDiastolic"
          unit="mmHg"
          icon="mdi-heart"
          normalRange="60-80 mmHg"
          :status="getDiastolicStatus(bloodPressureData.avgDiastolic)"
          :trend="bloodPressureData.diastolicTrend"
          :trend-data="bloodPressureData.diastolicHistory"
        />
      </v-col>
      <v-col cols="12" md="3">
        <health-metric-card
          title="平均脉压差"
          :value="bloodPressureData.avgPulsePressure"
          unit="mmHg"
          icon="mdi-delta"
          normalRange="30-50 mmHg"
          :status="getPulsePressureStatus(bloodPressureData.avgPulsePressure)"
          :trend="bloodPressureData.pulsePressureTrend"
          :trend-data="bloodPressureData.pulsePressureHistory"
        />
      </v-col>
      <v-col cols="12" md="3">
        <health-metric-card
          title="平均心率"
          :value="bloodPressureData.avgHeartRate"
          unit="bpm"
          icon="mdi-heart-pulse"
          normalRange="60-100 bpm"
          :status="getHeartRateStatus(bloodPressureData.avgHeartRate)"
          :trend="bloodPressureData.heartRateTrend"
          :trend-data="bloodPressureData.heartRateHistory"
        />
      </v-col>
    </v-row>

    <!-- 血压趋势图表 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>血压趋势</span>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="bloodPressureChartType" mandatory>
              <v-btn value="line">折线图</v-btn>
              <v-btn value="scatter">散点图</v-btn>
            </v-btn-toggle>
          </v-card-title>
          <v-card-text>
            <div style="height: 400px;">
              <line-chart 
                v-if="bloodPressureChartType === 'line'" 
                :chart-data="bloodPressureChartData" 
                :options="bpChartOptions" 
              />
              <line-chart 
                v-else 
                :chart-data="bloodPressureScatterData" 
                :options="scatterChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 血压分布和分级 -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>血压分级分布</v-card-title>
          <v-card-text>
            <div style="height: 350px;">
              <pie-chart 
                :chart-data="bpCategoryData" 
                :options="pieChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>异常血压分析</v-card-title>
          <v-card-text>
            <div style="height: 350px;">
              <bar-chart 
                :chart-data="abnormalBpData" 
                :options="barChartOptions" 
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 血压与活动相关性 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>血压与活动关系</v-card-title>
          <v-card-text>
            <v-tabs v-model="activityCorrelationTab" color="primary">
              <v-tab value="exercise">运动强度</v-tab>
              <v-tab value="sleep">睡眠</v-tab>
              <v-tab value="stress">压力</v-tab>
              <v-tab value="diet">饮食</v-tab>
            </v-tabs>
            <v-window v-model="activityCorrelationTab">
              <v-window-item value="exercise">
                <div style="height: 350px;" class="pt-4">
                  <line-chart 
                    :chart-data="exerciseBpCorrelation" 
                    :options="correlationChartOptions" 
                  />
                </div>
              </v-window-item>
              <v-window-item value="sleep">
                <div style="height: 350px;" class="pt-4">
                  <line-chart 
                    :chart-data="sleepBpCorrelation" 
                    :options="correlationChartOptions" 
                  />
                </div>
              </v-window-item>
              <v-window-item value="stress">
                <div style="height: 350px;" class="pt-4">
                  <line-chart 
                    :chart-data="stressBpCorrelation" 
                    :options="correlationChartOptions" 
                  />
                </div>
              </v-window-item>
              <v-window-item value="diet">
                <div style="height: 350px;" class="pt-4">
                  <line-chart 
                    :chart-data="dietBpCorrelation" 
                    :options="correlationChartOptions" 
                  />
                </div>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 建议和指导 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-icon color="primary" class="mr-2">mdi-lightbulb</v-icon>
            健康建议
          </v-card-title>
          <v-card-text>
            <v-alert
              v-for="(suggestion, index) in bloodPressureSuggestions"
              :key="index"
              :type="suggestion.type"
              :title="suggestion.title"
              :text="suggestion.text"
              class="mb-3"
              variant="tonal"
              density="compact"
            ></v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 血压记录表格 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>血压记录明细</span>
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
              :items="bloodPressureRecords"
              :search="search"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:item.systolic="{ item }">
                <v-chip
                  :color="getSystolicChipColor(item.columns.systolic)"
                  text-color="white"
                  size="small"
                >
                  {{ item.columns.systolic }} mmHg
                </v-chip>
              </template>
              <template v-slot:item.diastolic="{ item }">
                <v-chip
                  :color="getDiastolicChipColor(item.columns.diastolic)"
                  text-color="white"
                  size="small"
                >
                  {{ item.columns.diastolic }} mmHg
                </v-chip>
              </template>
              <template v-slot:item.category="{ item }">
                <v-chip
                  :color="getBpCategoryColor(item.columns.category)"
                  text-color="white"
                  size="small"
                >
                  {{ item.columns.category }}
                </v-chip>
              </template>
              <template v-slot:item.heartRate="{ item }">
                {{ item.columns.heartRate }} bpm
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn
                  icon
                  density="compact"
                  variant="text"
                  @click="viewBpDetail(item.raw)"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                  icon
                  density="compact"
                  variant="text"
                  @click="exportBpData(item.raw)"
                >
                  <v-icon>mdi-export</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 血压记录详情对话框 -->
    <v-dialog v-model="bpDetailDialog" max-width="700">
      <v-card v-if="selectedBpRecord">
        <v-card-title class="d-flex align-center">
          <span>血压记录详情</span>
          <v-spacer></v-spacer>
          <v-chip 
            :color="getBpCategoryColor(selectedBpRecord.category)"
            text-color="white"
          >
            {{ selectedBpRecord.category }}
          </v-chip>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-list>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-account</v-icon>
                  </template>
                  <v-list-item-title>用户: {{ selectedBpRecord.username }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-calendar</v-icon>
                  </template>
                  <v-list-item-title>日期: {{ formatDate(selectedBpRecord.timestamp) }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-clock</v-icon>
                  </template>
                  <v-list-item-title>时间: {{ formatTime(selectedBpRecord.timestamp) }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-arm-flex</v-icon>
                  </template>
                  <v-list-item-title>测量手臂: {{ selectedBpRecord.measurementArm }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-cellphone</v-icon>
                  </template>
                  <v-list-item-title>设备: {{ selectedBpRecord.device }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="outlined">
                <v-card-text>
                  <div class="d-flex justify-space-between">
                    <div class="text-center">
                      <div class="text-h4 font-weight-bold">{{ selectedBpRecord.systolic }}</div>
                      <div class="text-caption">收缩压 (mmHg)</div>
                    </div>
                    <div class="text-center">
                      <div class="text-h4 font-weight-bold">{{ selectedBpRecord.diastolic }}</div>
                      <div class="text-caption">舒张压 (mmHg)</div>
                    </div>
                    <div class="text-center">
                      <div class="text-h4 font-weight-bold">{{ selectedBpRecord.heartRate }}</div>
                      <div class="text-caption">心率 (bpm)</div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
              
              <div class="mt-4">
                <p class="text-subtitle-1">情境因素:</p>
                <v-chip-group>
                  <v-chip v-if="selectedBpRecord.position" color="blue-grey" text-color="white" size="small">
                    {{ selectedBpRecord.position }}
                  </v-chip>
                  <v-chip v-if="selectedBpRecord.before_meal" color="amber" text-color="white" size="small">
                    餐前
                  </v-chip>
                  <v-chip v-if="selectedBpRecord.after_exercise" color="deep-orange" text-color="white" size="small">
                    运动后
                  </v-chip>
                  <v-chip v-if="selectedBpRecord.medication" color="indigo" text-color="white" size="small">
                    服药后
                  </v-chip>
                  <v-chip v-if="selectedBpRecord.feeling" color="teal" text-color="white" size="small">
                    {{ selectedBpRecord.feeling }}
                  </v-chip>
                </v-chip-group>
              </div>
              
              <div class="mt-4" v-if="selectedBpRecord.notes">
                <p class="text-subtitle-1">备注:</p>
                <v-card variant="outlined" density="compact" class="pa-2 bg-grey-lighten-4">
                  {{ selectedBpRecord.notes }}
                </v-card>
              </div>
            </v-col>
          </v-row>
          
          <v-divider class="my-4"></v-divider>
          
          <h3 class="text-h6 mb-3">历史比较</h3>
          <div style="height: 200px;">
            <line-chart 
              :chart-data="selectedRecordHistory" 
              :options="historyChartOptions" 
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="warning" variant="text" @click="markAsAbnormal" v-if="!selectedBpRecord.isMarkedAbnormal">
            标记为异常
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="exportBpDetail">
            导出详情
            <v-icon class="ml-1">mdi-export</v-icon>
          </v-btn>
          <v-btn color="grey" @click="bpDetailDialog = false">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format } from 'date-fns'
import HealthMetricCard from '@/components/dashboard/HealthMetricCard.vue'
import LineChart from '@/components/charts/LineChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import PieChart from '@/components/charts/PieChart.vue'

export default {
  components: {
    HealthMetricCard,
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      timeRange: 'week',
      selectedDate: new Date().toISOString().substr(0, 10),
      datePickerMenu: false,
      userSelection: 'all',
      selectedUsers: [],
      search: '',
      bloodPressureChartType: 'line',
      activityCorrelationTab: 'exercise',
      bpDetailDialog: false,
      selectedBpRecord: null,
      
      userList: [
        { id: 1, username: '张三' },
        { id: 2, username: '李四' },
        { id: 3, username: '王五' },
        { id: 4, username: '赵六' }
      ],
      
      bloodPressureData: {
        avgSystolic: 119,
        systolicTrend: 'down',
        systolicHistory: [122, 120, 121, 119, 118, 119, 119],
        
        avgDiastolic: 78,
        diastolicTrend: 'down',
        diastolicHistory: [80, 79, 78, 77, 78, 79, 78],
        
        avgPulsePressure: 41,
        pulsePressureTrend: 'neutral',
        pulsePressureHistory: [42, 41, 43, 42, 40, 40, 41],
        
        avgHeartRate: 72,
        heartRateTrend: 'neutral',
        heartRateHistory: [74, 73, 72, 71, 71, 72, 72]
      },
      
      bloodPressureSuggestions: [
        { 
          type: 'info', 
          title: '饮食建议', 
          text: '保持低盐饮食，每日摄入盐分不超过5克。增加钾的摄入，如香蕉、土豆和菠菜等富含钾的食物。'
        },
        { 
          type: 'success', 
          title: '运动指导', 
          text: '每周进行150分钟中等强度有氧运动，如快走、慢跑、游泳或骑自行车。适当进行力量训练，但要避免过度用力。'
        },
        { 
          type: 'warning', 
          title: '生活习惯', 
          text: '保持充足的睡眠，减少压力，避免吸烟和过量饮酒。建议每天测量血压，并记录下来。'
        }
      ],
      
      headers: [
        { title: '用户', key: 'username', sortable: true },
        { title: '日期', key: 'timestamp', sortable: true },
        { title: '收缩压', key: 'systolic', sortable: true },
        { title: '舒张压', key: 'diastolic', sortable: true },
        { title: '分类', key: 'category', sortable: true },
        { title: '心率', key: 'heartRate', sortable: true },
        { title: '情境', key: 'context', sortable: true },
        { title: '操作', key: 'actions', sortable: false }
      ],
      
      bloodPressureRecords: [
        {
          id: 1,
          username: '张三',
          timestamp: '2025-05-13T08:30:00',
          systolic: 119,
          diastolic: 78,
          category: '正常',
          heartRate: 72,
          position: '坐姿',
          before_meal: true,
          after_exercise: false,
          medication: false,
          feeling: '放松',
          device: 'Omron HEM-7156',
          measurementArm: '左臂',
          notes: '早晨起床后测量，感觉状态良好',
          isMarkedAbnormal: false,
          context: '餐前，坐姿'
        },
        {
          id: 2,
          username: '李四',
          timestamp: '2025-05-13T07:15:00',
          systolic: 132,
          diastolic: 85,
          category: '高值',
          heartRate: 76,
          position: '坐姿',
          before_meal: true,
          after_exercise: false,
          medication: true,
          feeling: '紧张',
          device: 'Omron HEM-7156',
          measurementArm: '右臂',
          notes: '服药后测量，感觉有点紧张',
          isMarkedAbnormal: false,
          context: '餐前，服药后'
        },
        {
          id: 3,
          username: '王五',
          timestamp: '2025-05-12T19:45:00',
          systolic: 115,
          diastolic: 75,
          category: '正常',
          heartRate: 68,
          position: '坐姿',
          before_meal: false,
          after_exercise: false,
          medication: false,
          feeling: '放松',
          device: 'Omron HEM-7280T',
          measurementArm: '左臂',
          notes: '晚餐后测量，状态稳定',
          isMarkedAbnormal: false,
          context: '餐后，坐姿'
        },
        {
          id: 4,
          username: '赵六',
          timestamp: '2025-05-12T18:30:00',
          systolic: 148,
          diastolic: 92,
          category: '高血压I期',
          heartRate: 82,
          position: '坐姿',
          before_meal: false,
          after_exercise: true,
          medication: false,
          feeling: '疲劳',
          device: 'Omron HEM-7156',
          measurementArm: '左臂',
          notes: '运动后测量，感觉有些疲劳',
          isMarkedAbnormal: true,
          context: '运动后，疲劳'
        },
        {
          id: 5,
          username: '张三',
          timestamp: '2025-05-12T07:00:00',
          systolic: 118,
          diastolic: 77,
          category: '正常',
          heartRate: 70,
          position: '坐姿',
          before_meal: true,
          after_exercise: false,
          medication: false,
          feeling: '放松',
          device: 'Omron HEM-7156',
          measurementArm: '左臂',
          notes: '早晨例行测量',
          isMarkedAbnormal: false,
          context: '餐前，放松'
        }
      ],
      
      bpChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: '血压 (mmHg)'
            }
          }
        }
      },
      
      scatterChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: '舒张压 (mmHg)'
            }
          },
          x: {
            title: {
              display: true,
              text: '收缩压 (mmHg)'
            }
          }
        },
        plugins: {
          annotation: {
            annotations: {
              // 血压分类区域注释，实际应用可以添加
            }
          }
        }
      },
      
      correlationChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: '血压 (mmHg)'
            }
          },
          y1: {
            position: 'right',
            beginAtZero: true,
            title: {
              display: true,
              text: '相关因素'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        }
      },
      
      historyChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: '血压 (mmHg)'
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        }
      },
      
      barChartOptions: {
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
      },
      
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    }
  },
  computed: {
    formattedSelectedDate() {
      return format(new Date(this.selectedDate), 'yyyy-MM-dd')
    },
    
    bloodPressureChartData() {
      return {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [
          {
            label: '收缩压',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [122, 120, 121, 119, 118, 119, 119],
            tension: 0.4
          },
          {
            label: '舒张压',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [80, 79, 78, 77, 78, 79, 78],
            tension: 0.4
          }
        ]
      }
    },
    
    bloodPressureScatterData() {
      return {
        datasets: [
          {
            label: '血压值',
            backgroundColor: (ctx) => {
              const value = ctx.raw;
              if (!value) return '#2196f3';
              
              if (value.x >= 140 || value.y >= 90) return '#f44336';
              if (value.x >= 130 || value.y >= 85) return '#ff9800';
              if (value.x < 100 || value.y < 60) return '#ff9800';
              return '#4caf50';
            },
            data: [
              { x: 122, y: 80 },
              { x: 120, y: 79 },
              { x: 121, y: 78 },
              { x: 119, y: 77 },
              { x: 118, y: 78 },
              { x: 119, y: 79 },
              { x: 119, y: 78 },
              { x: 132, y: 85 },
              { x: 115, y: 75 },
              { x: 148, y: 92 },
              { x: 118, y: 77 }
            ],
            showLine: false,
            pointRadius: 6
          }
        ]
      }
    },
    
    bpCategoryData() {
      return {
        labels: ['正常血压', '正常高值', '高血压I期', '高血压II期', '高血压III期', '单纯收缩期高血压', '低血压'],
        datasets: [
          {
            backgroundColor: ['#4caf50', '#8bc34a', '#ff9800', '#f44336', '#d32f2f', '#7b1fa2', '#2196f3'],
            data: [58, 22, 12, 5, 1, 2, 0]
          }
        ]
      }
    },
    
    abnormalBpData() {
      return {
        labels: ['清晨高血压', '昼高夜低', '夜间高血压', '白大衣高血压', '隐匿性高血压', '血压波动大'],
        datasets: [
          {
            label: '异常类型人数',
            backgroundColor: '#f44336',
            data: [8, 5, 3, 7, 4, 12]
          }
        ]
      }
    },
    
    exerciseBpCorrelation() {
      return {
        labels: ['低强度', '中低强度', '中等强度', '中高强度', '高强度'],
        datasets: [
          {
            label: '收缩压',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [118, 122, 128, 135, 145],
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: '舒张压',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [78, 80, 82, 85, 88],
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: '运动时长(分钟)',
            type: 'bar',
            backgroundColor: 'rgba(76, 175, 80, 0.6)',
            data: [60, 45, 30, 20, 10],
            yAxisID: 'y1'
          }
        ]
      }
    },
    
    sleepBpCorrelation() {
      return {
        labels: ['<5小时', '5-6小时', '6-7小时', '7-8小时', '>8小时'],
        datasets: [
          {
            label: '收缩压',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [132, 128, 122, 118, 120],
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: '舒张压',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [85, 83, 80, 78, 79],
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: '睡眠质量',
            type: 'bar',
            backgroundColor: 'rgba(156, 39, 176, 0.6)',
            data: [65, 70, 78, 85, 82],
            yAxisID: 'y1'
          }
        ]
      }
    },
    
    stressBpCorrelation() {
      return {
        labels: ['非常低', '低', '中等', '高', '非常高'],
        datasets: [
          {
            label: '收缩压',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [115, 118, 122, 128, 135],
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: '舒张压',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [75, 78, 80, 83, 87],
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: '压力指数',
            type: 'bar',
            backgroundColor: 'rgba(255, 152, 0, 0.6)',
            data: [10, 25, 45, 65, 85],
            yAxisID: 'y1'
          }
        ]
      }
    },
    
    dietBpCorrelation() {
      return {
        labels: ['低盐饮食', '适中盐分', '高盐饮食', '高脂饮食', '高纤维饮食'],
        datasets: [
          {
            label: '收缩压',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [116, 120, 128, 125, 118],
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: '舒张压',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [76, 78, 84, 82, 77],
            tension: 0.4,
            yAxisID: 'y'
          }
        ]
      }
    },
    
    selectedRecordHistory() {
      if (!this.selectedBpRecord) return {}
      
      // 模拟前7天的历史记录
      return {
        labels: ['7天前', '6天前', '5天前', '4天前', '3天前', '2天前', '1天前', '当前'],
        datasets: [
          {
            label: '收缩压',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: '#f44336',
            data: [120, 122, 119, 121, 123, 120, 118, this.selectedBpRecord.systolic],
            tension: 0.4
          },
          {
            label: '舒张压',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            data: [79, 81, 78, 80, 82, 79, 77, this.selectedBpRecord.diastolic],
            tension: 0.4
          }
        ]
      }
    }
  },
  methods: {
    formatDate(dateStr) {
      return format(new Date(dateStr), 'yyyy-MM-dd')
    },
    
    formatTime(dateStr) {
      return format(new Date(dateStr), 'HH:mm')
    },
    
    getSystolicStatus(value) {
      if (value >= 140) return 'danger'
      if (value >= 130 || value < 90) return 'warning'
      return 'normal'
    },
    
    getDiastolicStatus(value) {
      if (value >= 90) return 'danger'
      if (value >= 85 || value < 60) return 'warning'
      return 'normal'
    },
    
    getPulsePressureStatus(value) {
      if (value > 60) return 'danger'
      if (value < 30 || value > 50) return 'warning'
      return 'normal'
    },
    
    getHeartRateStatus(value) {
      if (value > 100 || value < 50) return 'danger'
      if (value > 90 || value < 60) return 'warning'
      return 'normal'
    },
    
    getSystolicChipColor(value) {
      if (value >= 140) return 'error'
      if (value >= 130) return 'warning'
      if (value < 90) return 'orange'
      return 'success'
    },
    
    getDiastolicChipColor(value) {
      if (value >= 90) return 'error'
      if (value >= 85) return 'warning'
      if (value < 60) return 'orange'
      return 'success'
    },
    
    getBpCategoryColor(category) {
      const colorMap = {
        '正常': 'success',
        '高值': 'warning',
        '高血压I期': 'orange',
        '高血压II期': 'error',
        '高血压III期': 'deep-orange',
        '单纯收缩期高血压': 'purple',
        '低血压': 'blue'
      }
      return colorMap[category] || 'grey'
    },
    
    viewBpDetail(record) {
      this.selectedBpRecord = record
      this.bpDetailDialog = true
    },
    
    exportBpData(record) {
      // 导出功能实现
      console.log('导出血压数据', record.id)
    },
    
    exportBpDetail() {
      // 导出详情功能实现
      console.log('导出血压详情', this.selectedBpRecord.id)
    },
    
    markAsAbnormal() {
      // 标记为异常功能实现
      if (this.selectedBpRecord) {
        this.selectedBpRecord.isMarkedAbnormal = true
        // 实际应用中这里会调用API更新记录
      }
    }
  }
}
</script>

<style scoped>
.table-search {
  max-width: 300px;
}
</style>