<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span class="text-h5">设备管理</span>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="搜索设备"
              single-line
              hide-details
              density="compact"
              class="mx-2"
              style="max-width: 300px"
            ></v-text-field>
            <v-btn
              color="primary"
              prepend-icon="mdi-plus"
              @click="openAddDialog"
            >
              添加设备
            </v-btn>
          </v-card-title>

          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="devices"
              :search="search"
              :loading="loading"
              :items-per-page="10"
              :items-per-page-options="[5, 10, 20, 50]"
              class="elevation-1"
            >
              <template v-slot:item.status="{ item }">
                <v-chip
                  :color="getStatusColor(item.status)"
                  size="small"
                  label
                >
                  {{ getStatusText(item.status) }}
                </v-chip>
              </template>

              <template v-slot:item.last_active="{ item }">
                {{ item.last_active ? formatDate(item.last_active) : '从未活跃' }}
              </template>

              <template v-slot:item.actions="{ item }">
                <v-tooltip text="编辑设备">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      size="small"
                      color="primary"
                      v-bind="props"
                      @click="openEditDialog(item)"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>

                <v-tooltip text="重置密钥">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      size="small"
                      color="warning"
                      class="mx-1"
                      v-bind="props"
                      @click="confirmResetSecret(item)"
                    >
                      <v-icon>mdi-key-variant</v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>

                <v-tooltip text="删除设备">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      size="small"
                      color="error"
                      v-bind="props"
                      @click="confirmDelete(item)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>设备状态统计</v-card-title>
          <v-card-text>
            <v-row v-if="stats">
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 font-weight-bold">{{ stats.total_devices }}</div>
                  <div class="text-caption text-grey">总设备数</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 font-weight-bold">{{ stats.bound_devices }}</div>
                  <div class="text-caption text-grey">已绑定</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 font-weight-bold">{{ stats.unbound_devices }}</div>
                  <div class="text-caption text-grey">未绑定</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 font-weight-bold">{{ stats.active_devices_today }}</div>
                  <div class="text-caption text-grey">今日活跃</div>
                </div>
              </v-col>
            </v-row>
            <v-skeleton-loader v-else type="article" />
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>设备类型分布</v-card-title>
          <v-card-text>
            <div v-if="stats && stats.by_type" style="height: 250px">
              <v-chart :option="chartOption" autoresize />
            </div>
            <v-skeleton-loader v-else type="image" height="250" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 添加设备对话框 -->
    <v-dialog v-model="addDialog" max-width="600px">
      <v-card>
        <v-card-title>添加新设备</v-card-title>
        <v-card-text>
          <v-form ref="addForm" v-model="validAddForm">
            <v-text-field
              v-model="newDevice.device_id"
              label="设备ID"
              required
              :rules="[v => !!v || '设备ID必填']"
            ></v-text-field>
            <v-text-field
              v-model="newDevice.secret"
              label="设备密钥"
              required
              :rules="[v => !!v || '设备密钥必填']"
            ></v-text-field>
            <v-text-field
              v-model="newDevice.device_name"
              label="设备名称"
              required
              :rules="[v => !!v || '设备名称必填']"
            ></v-text-field>
            <v-text-field
              v-model="newDevice.device_type"
              label="设备类型"
              required
              :rules="[v => !!v || '设备类型必填']"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="addDialog = false">取消</v-btn>
          <v-btn color="primary" variant="text" @click="addDevice" :loading="saving">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 编辑设备对话框 -->
    <v-dialog v-model="editDialog" max-width="600px">
      <v-card>
        <v-card-title>编辑设备</v-card-title>
        <v-card-text>
          <v-form ref="editForm" v-model="validEditForm">
            <v-text-field
              v-model="editedDevice.device_id"
              label="设备ID"
              disabled
            ></v-text-field>
            <v-text-field
              v-model="editedDevice.device_name"
              label="设备名称"
              required
              :rules="[v => !!v || '设备名称必填']"
            ></v-text-field>
            <v-text-field
              v-model="editedDevice.device_type"
              label="设备类型"
              required
              :rules="[v => !!v || '设备类型必填']"
            ></v-text-field>
            <v-select
              v-model="editedDevice.status"
              label="设备状态"
              :items="statusOptions"
              item-title="text"
              item-value="value"
              required
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="editDialog = false">取消</v-btn>
          <v-btn color="primary" variant="text" @click="updateDevice" :loading="saving">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 重置密钥结果对话框 -->
    <v-dialog v-model="resetDialog" max-width="500px">
      <v-card>
        <v-card-title>设备密钥已重置</v-card-title>
        <v-card-text>
          <p>设备ID: <strong>{{ resetDeviceId }}</strong></p>
          <p>新密钥: <strong>{{ newSecret }}</strong></p>
          <v-alert
            type="warning"
            density="compact"
            class="mt-2"
          >
            请立即保存此密钥，关闭此窗口后将无法再次查看！
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="copySecret">复制密钥</v-btn>
          <v-btn color="grey-darken-1" variant="text" @click="resetDialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 确认删除对话框 -->
    <v-dialog v-model="deleteDialog" max-width="400px">
      <v-card>
        <v-card-title>确认删除</v-card-title>
        <v-card-text>
          您确定要删除设备 <strong>{{ deleteDeviceId }}</strong> 吗？此操作不可撤销。
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="deleteDialog = false">取消</v-btn>
          <v-btn color="error" variant="text" @click="deleteDeviceConfirmed" :loading="deleting">删除</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 批量添加对话框 -->
    <v-dialog v-model="batchDialog" max-width="700px">
      <v-card>
        <v-card-title>批量添加设备</v-card-title>
        <v-card-text>
          <v-form ref="batchForm">
            <v-textarea
              v-model="batchDevices"
              label="设备数据 (JSON格式)"
              hint="请输入JSON格式的设备数据数组"
              persistent-hint
              rows="10"
            ></v-textarea>
            <v-alert
              type="info"
              density="compact"
              class="mt-2"
            >
              格式示例: [{"device_id": "DEV001", "secret": "secret1", "device_name": "设备1", "device_type": "Wristband"}, ...]
            </v-alert>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="batchDialog = false">取消</v-btn>
          <v-btn color="primary" variant="text" @click="batchAddDevices" :loading="batchSaving">添加</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 全局提示 -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="3000"
      location="top"
    >
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { 
  getDevices, 
  addDevice as apiAddDevice, 
  updateDevice as apiUpdateDevice, 
  deleteDevice as apiDeleteDevice,
  resetDeviceSecret as apiResetDeviceSecret,
  getDevicesStats,
  batchAddDevices as apiBatchAddDevices
} from '../api'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart from 'vue-echarts'

// 注册echarts组件
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

const { mobile } = useDisplay()

// Snackbar相关
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')
const showSnackbar = (text, color = 'success') => {
  snackbarText.value = text
  snackbarColor.value = color
  snackbar.value = true
}

// 数据相关
const devices = ref([])
const stats = ref(null)
const loading = ref(false)
const search = ref('')

// 表格列定义
const headers = [
  { title: '设备ID', key: 'device_id' },
  { title: '设备名称', key: 'device_name' },
  { title: '设备类型', key: 'device_type' },
  { title: '状态', key: 'status' },
  { title: '用户', key: 'username', align: 'center' },
  { title: '最后活跃', key: 'last_active' },
  { title: '操作', key: 'actions', sortable: false, align: 'center' }
]

// 状态选项
const statusOptions = [
  { text: '未绑定', value: 0 },
  { text: '已绑定', value: 1 },
  { text: '已禁用', value: 2 }
]

// 添加设备相关
const addDialog = ref(false)
const validAddForm = ref(false)
const addForm = ref(null)
const newDevice = ref({
  device_id: '',
  secret: '',
  device_name: '',
  device_type: 'Wristband'
})
const saving = ref(false)

// 编辑设备相关
const editDialog = ref(false)
const validEditForm = ref(false)
const editForm = ref(null)
const editedDevice = ref({})

// 删除设备相关
const deleteDialog = ref(false)
const deleteDeviceId = ref('')
const deleting = ref(false)

// 重置密钥相关
const resetDialog = ref(false)
const resetDeviceId = ref('')
const newSecret = ref('')

// 批量添加相关
const batchDialog = ref(false)
const batchForm = ref(null)
const batchDevices = ref('')
const batchSaving = ref(false)

// 图表选项
const chartOption = computed(() => {
  if (!stats.value || !stats.value.by_type) return {}
  
  const data = stats.value.by_type.map(item => ({
    name: item.device_type,
    value: item.count
  }))
  
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 0,
      data: data.map(item => item.name)
    },
    series: [
      {
        name: '设备类型',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  }
})

// 初始化
onMounted(async () => {
  await fetchDevices()
  await fetchStats()
})

// 获取设备列表
async function fetchDevices() {
  loading.value = true
  try {
    const res = await getDevices()
    if (res.code === 200) {
      devices.value = res.data.devices || []
    } else {
      showSnackbar(res.message || '获取设备列表失败', 'error')
    }
  } catch (error) {
    console.error('获取设备列表错误:', error)
    showSnackbar('获取设备列表失败: ' + (error.message || '未知错误'), 'error')
  } finally {
    loading.value = false
  }
}

// 获取设备统计数据
async function fetchStats() {
  try {
    const res = await getDevicesStats()
    if (res.code === 200) {
      stats.value = res.data
    }
  } catch (error) {
    console.error('获取设备统计数据错误:', error)
  }
}

// 打开添加设备对话框
function openAddDialog() {
  newDevice.value = {
    device_id: '',
    secret: '',
    device_name: '',
    device_type: 'Wristband'
  }
  addDialog.value = true
  setTimeout(() => {
    addForm.value?.reset()
  }, 0)
}

// 添加设备
async function addDevice() {
  if (!validAddForm.value) {
    return
  }
  
  saving.value = true
  try {
    const res = await apiAddDevice(newDevice.value)
    if (res.code === 201) {
      showSnackbar('设备添加成功', 'success')
      addDialog.value = false
      await fetchDevices()
      await fetchStats()
    } else {
      showSnackbar(res.message || '设备添加失败', 'error')
    }
  } catch (error) {
    console.error('添加设备错误:', error)
    showSnackbar('添加设备失败: ' + (error.message || '未知错误'), 'error')
  } finally {
    saving.value = false
  }
}

// 打开编辑设备对话框
function openEditDialog(item) {
  editedDevice.value = { ...item }
  editDialog.value = true
  setTimeout(() => {
    editForm.value?.resetValidation()
  }, 0)
}

// 更新设备信息
async function updateDevice() {
  if (!validEditForm.value) {
    return
  }
  
  saving.value = true
  try {
    const res = await apiUpdateDevice(editedDevice.value.device_id, {
      device_name: editedDevice.value.device_name,
      device_type: editedDevice.value.device_type,
      status: editedDevice.value.status
    })
    
    if (res.code === 200) {
      showSnackbar('设备信息更新成功', 'success')
      editDialog.value = false
      await fetchDevices()
    } else {
      showSnackbar(res.message || '设备信息更新失败', 'error')
    }
  } catch (error) {
    console.error('更新设备信息错误:', error)
    showSnackbar('更新设备信息失败: ' + (error.message || '未知错误'), 'error')
  } finally {
    saving.value = false
  }
}

// 确认删除设备
function confirmDelete(item) {
  deleteDeviceId.value = item.device_id
  deleteDialog.value = true
}

// 删除设备确认
async function deleteDeviceConfirmed() {
  deleting.value = true
  try {
    const res = await apiDeleteDevice(deleteDeviceId.value)
    if (res.code === 200) {
      showSnackbar('设备删除成功', 'success')
      deleteDialog.value = false
      await fetchDevices()
      await fetchStats()
    } else {
      showSnackbar(res.message || '设备删除失败', 'error')
    }
  } catch (error) {
    console.error('删除设备错误:', error)
    showSnackbar('删除设备失败: ' + (error.message || '未知错误'), 'error')
  } finally {
    deleting.value = false
  }
}

// 确认重置密钥
async function confirmResetSecret(item) {
  try {
    const res = await apiResetDeviceSecret(item.device_id)
    if (res.code === 200) {
      resetDeviceId.value = item.device_id
      newSecret.value = res.data.new_secret
      resetDialog.value = true
    } else {
      showSnackbar(res.message || '重置设备密钥失败', 'error')
    }
  } catch (error) {
    console.error('重置设备密钥错误:', error)
    showSnackbar('重置设备密钥失败: ' + (error.message || '未知错误'), 'error')
  }
}

// 复制新密钥
function copySecret() {
  navigator.clipboard.writeText(newSecret.value).then(() => {
    showSnackbar('密钥已复制到剪贴板', 'success')
  }).catch(err => {
    console.error('复制密钥失败:', err)
    showSnackbar('复制密钥失败', 'error')
  })
}

// 批量添加设备
async function batchAddDevices() {
  let devicesData
  try {
    devicesData = JSON.parse(batchDevices.value)
    if (!Array.isArray(devicesData)) {
      throw new Error('数据必须是数组格式')
    }
  } catch (error) {
    showSnackbar('无效的JSON格式: ' + error.message, 'error')
    return
  }
  
  batchSaving.value = true
  try {
    const res = await apiBatchAddDevices({ devices: devicesData })
    if (res.code === 201) {
      showSnackbar(`批量添加成功: 成功${res.data.success}个, 失败${res.data.failed}个`, 'success')
      batchDialog.value = false
      await fetchDevices()
      await fetchStats()
    } else {
      showSnackbar(res.message || '批量添加设备失败', 'error')
    }
  } catch (error) {
    console.error('批量添加设备错误:', error)
    showSnackbar('批量添加设备失败: ' + (error.message || '未知错误'), 'error')
  } finally {
    batchSaving.value = false
  }
}

// 获取状态文本
function getStatusText(status) {
  switch (status) {
    case 0: return '未绑定'
    case 1: return '已绑定'
    case 2: return '已禁用'
    default: return '未知'
  }
}

// 获取状态颜色
function getStatusColor(status) {
  switch (status) {
    case 0: return 'grey'
    case 1: return 'success'
    case 2: return 'error'
    default: return 'grey'
  }
}

// 格式化日期
function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.v-data-table :deep(th) {
  white-space: nowrap;
}
</style> 