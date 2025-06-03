<template>
  <div class="users-view pa-4">
    <div class="d-flex align-center mb-6">
      <h1 class="text-h4">用户管理</h1>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchKeyword"
        prepend-inner-icon="mdi-magnify"
        label="搜索用户"
        variant="outlined"
        density="compact"
        hide-details
        class="search-field mx-2"
        style="max-width: 300px"
        @update:model-value="debouncedSearch"
      ></v-text-field>
    </div>

    <v-card class="elevation-3" rounded="lg">
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="pageSize"
        :loading="loading"
        :server-items-length="totalUsers"
        :page="page"
        :items-per-page-options="[10, 20, 50]"
        @update:page="updatePage"
        @update:items-per-page="updatePageSize"
        class="users-table"
      >
        <!-- 性别列 -->
        <template v-slot:item.gender="{ item }">
          <v-chip
            :color="getGenderColor(item.gender)"
            size="small"
            class="text-capitalize"
          >
            {{ getGenderText(item.gender) }}
          </v-chip>
        </template>
        
        <!-- 用户等级列 -->
        <template v-slot:item.level="{ item }">
          <v-chip
            :color="getLevelColor(item.level)"
            size="small"
            class="text-capitalize"
          >
            {{ getLevelText(item.level) }}
          </v-chip>
        </template>
        
        <!-- 注册时间列 -->
        <template v-slot:item.created_at="{ item }">
          {{ formatDate(item.created_at) }}
        </template>
        
        <!-- 操作列 -->
        <template v-slot:item.actions="{ item }">
          <div class="d-flex justify-end">
            <v-tooltip text="查看详情">
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  variant="text"
                  color="info"
                  size="small"
                  v-bind="props"
                  @click="viewUserDetail(item.id)"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
            
            <v-tooltip text="编辑用户">
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  variant="text"
                  color="primary"
                  size="small"
                  v-bind="props"
                  @click="editUser(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
            
            <v-tooltip text="删除用户">
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  variant="text"
                  color="error"
                  size="small"
                  v-bind="props"
                  @click="confirmDelete(item)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>
    
    <!-- 编辑用户对话框 -->
    <v-dialog v-model="editDialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h5 pa-4">
          编辑用户信息
        </v-card-title>
        
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="editedUser.username"
              label="用户名"
              :rules="[rules.required]"
              variant="outlined"
              class="mb-2"
            ></v-text-field>
            
            <v-select
              v-model="editedUser.gender"
              :items="genderOptions"
              item-title="text"
              item-value="value"
              label="性别"
              variant="outlined"
              class="mb-2"
            ></v-select>
            
            <v-text-field
              v-model.number="editedUser.age"
              label="年龄"
              type="number"
              variant="outlined"
              class="mb-2"
            ></v-text-field>
            
            <v-text-field
              v-model.number="editedUser.height"
              label="身高 (cm)"
              type="number"
              variant="outlined"
              class="mb-2"
            ></v-text-field>
            
            <v-text-field
              v-model.number="editedUser.weight"
              label="体重 (kg)"
              type="number"
              variant="outlined"
              class="mb-2"
            ></v-text-field>
            
            <v-select
              v-model="editedUser.level"
              :items="levelOptions"
              item-title="text"
              item-value="value"
              label="用户等级"
              variant="outlined"
              class="mb-2"
            ></v-select>
          </v-form>
        </v-card-text>
        
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="closeEditDialog">取消</v-btn>
          <v-btn color="primary" :disabled="!valid" @click="saveUser" :loading="saveLoading">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <!-- 删除确认对话框 -->
    <v-dialog v-model="deleteDialog" max-width="450px">
      <v-card>
        <v-card-title class="text-h5 pa-4">
          确认删除
        </v-card-title>
        
        <v-card-text>
          您确定要删除用户 "{{ userToDelete?.username }}" 吗？此操作无法撤销。
        </v-card-text>
        
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="deleteDialog = false">取消</v-btn>
          <v-btn color="error" @click="deleteUser" :loading="deleteLoading">删除</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <!-- 提示消息 -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="3000"
      location="top"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getUsers, updateUser, deleteUser as apiDeleteUser } from '../api'
import { debounce } from 'lodash-es'

const router = useRouter()
const loading = ref(false)
const users = ref([])
const totalUsers = ref(0)
const page = ref(1)
const pageSize = ref(20)
const searchKeyword = ref('')

// 编辑对话框
const editDialog = ref(false)
const valid = ref(true)
const form = ref(null)
const editedUser = reactive({
  id: null,
  username: '',
  gender: null,
  age: null,
  height: null,
  weight: null,
  level: null
})
const saveLoading = ref(false)

// 删除对话框
const deleteDialog = ref(false)
const userToDelete = ref(null)
const deleteLoading = ref(false)

// 提示消息
const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

// 表格头部
const headers = [
  { title: 'ID', key: 'id', width: '80px' },
  { title: '用户名', key: 'username' },
  { title: '性别', key: 'gender', width: '100px', align: 'center' },
  { title: '年龄', key: 'age', width: '80px', align: 'center' },
  { title: '身高(cm)', key: 'height', width: '100px', align: 'center' },
  { title: '体重(kg)', key: 'weight', width: '100px', align: 'center' },
  { title: '等级', key: 'level', width: '120px', align: 'center' },
  { title: '运动次数', key: 'total_workouts', width: '120px', align: 'center' },
  { title: '注册时间', key: 'created_at', width: '180px' },
  { title: '操作', key: 'actions', sortable: false, width: '150px', align: 'end' }
]

// 性别选项
const genderOptions = [
  { text: '未设置', value: 0 },
  { text: '男', value: 1 },
  { text: '女', value: 2 }
]

// 用户等级选项
const levelOptions = [
  { text: '初学者', value: 'beginner' },
  { text: '中级', value: 'intermediate' },
  { text: '高级', value: 'advanced' }
]

// 表单验证规则
const rules = {
  required: value => !!value || '此字段为必填项'
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

// 格式化日期
function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleString('zh-CN')
}

// 加载用户数据
async function loadUsers() {
  loading.value = true
  
  try {
    const params = {
      page: page.value,
      size: pageSize.value,
      keyword: searchKeyword.value
    }
    
    const res = await getUsers(params)
    
    if (res.code === 200) {
      users.value = res.data.users
      totalUsers.value = res.data.total
    } else {
      showSnackbar(res.message || '获取用户列表失败', 'error')
    }
  } catch (error) {
    console.error('加载用户列表错误:', error)
    showSnackbar('加载用户列表失败', 'error')
  } finally {
    loading.value = false
  }
}

// 更新页码
function updatePage(newPage) {
  page.value = newPage
  loadUsers()
}

// 更新每页显示数量
function updatePageSize(newSize) {
  pageSize.value = newSize
  loadUsers()
}

// 防抖搜索
const debouncedSearch = debounce(() => {
  page.value = 1
  loadUsers()
}, 500)

// 查看用户详情
function viewUserDetail(userId) {
  router.push(`/users/${userId}`)
}

// 编辑用户
function editUser(user) {
  Object.assign(editedUser, {
    id: user.id,
    username: user.username,
    gender: user.gender,
    age: user.age,
    height: user.height,
    weight: user.weight,
    level: user.level
  })
  
  editDialog.value = true
}

// 关闭编辑对话框
function closeEditDialog() {
  editDialog.value = false
}

// 保存用户信息
async function saveUser() {
  if (!valid.value) return
  
  saveLoading.value = true
  
  try {
    const res = await updateUser(editedUser.id, editedUser)
    
    if (res.code === 200) {
      showSnackbar('用户信息更新成功', 'success')
      editDialog.value = false
      loadUsers()
    } else {
      showSnackbar(res.message || '用户信息更新失败', 'error')
    }
  } catch (error) {
    console.error('更新用户信息错误:', error)
    showSnackbar('更新用户信息失败', 'error')
  } finally {
    saveLoading.value = false
  }
}

// 确认删除用户
function confirmDelete(user) {
  userToDelete.value = user
  deleteDialog.value = true
}

// 删除用户
async function deleteUser() {
  if (!userToDelete.value) return
  
  deleteLoading.value = true
  
  try {
    const res = await apiDeleteUser(userToDelete.value.id)
    
    if (res.code === 200) {
      showSnackbar('用户删除成功', 'success')
      deleteDialog.value = false
      loadUsers()
    } else {
      showSnackbar(res.message || '用户删除失败', 'error')
    }
  } catch (error) {
    console.error('删除用户错误:', error)
    showSnackbar('删除用户失败', 'error')
  } finally {
    deleteLoading.value = false
  }
}

// 显示提示消息
function showSnackbar(text, color = 'success') {
  snackbar.text = text
  snackbar.color = color
  snackbar.show = true
}

// 监听搜索关键字变化
watch(searchKeyword, () => {
  debouncedSearch()
})

// 页面加载时获取数据
onMounted(() => {
  loadUsers()
})
</script>

<style scoped>
.users-view {
  width: 100%;
}

.search-field {
  transition: all 0.3s;
}

.search-field:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>