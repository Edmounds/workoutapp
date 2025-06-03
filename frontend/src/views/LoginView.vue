<template>
  <div class="login-page">
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6" xl="4">
          <v-card class="login-card elevation-12" rounded="lg">
            <v-card-title class="text-center pt-8 pb-2">
              <div class="text-h3 font-weight-bold primary--text">运动手环数据管理系统</div>
            </v-card-title>
            
            <v-card-subtitle class="text-center pb-6 text-h6">
              管理员登录
            </v-card-subtitle>
            
            <v-card-text>
              <v-form ref="form" v-model="valid" @submit.prevent="login">
                <v-text-field
                  v-model="username"
                  label="用户名"
                  prepend-inner-icon="mdi-account"
                  :rules="[rules.required]"
                  variant="outlined"
                  class="mb-6"
                  autocomplete="username"
                  density="comfortable"
                  bg-color="grey-lighten-5"
                  hide-details="auto"
                ></v-text-field>
                
                <v-text-field
                  v-model="password"
                  label="密码"
                  prepend-inner-icon="mdi-lock"
                  :rules="[rules.required]"
                  variant="outlined"
                  :type="showPassword ? 'text' : 'password'"
                  :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append-inner="showPassword = !showPassword"
                  autocomplete="current-password"
                  density="comfortable"
                  bg-color="grey-lighten-5"
                  hide-details="auto"
                ></v-text-field>
                
                <v-btn
                  :loading="loading"
                  :disabled="!valid || loading"
                  color="primary"
                  size="x-large"
                  block
                  type="submit"
                  class="mt-8 py-3"
                  elevation="2"
                >
                  登录
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      top
      centered
      timeout="3000"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { adminLogin } from '../api'

const router = useRouter()
const form = ref(null)
const valid = ref(false)
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const snackbar = reactive({
  show: false,
  text: '',
  color: 'error'
})

const rules = {
  required: value => !!value || '此字段为必填项'
}

async function login() {
  if (!valid.value) return
  
  loading.value = true
  
  try {
    const data = {
      name: username.value,
      password: password.value
    }
    
    const res = await adminLogin(data)
    
    if (res.code === 200) {
      // 登录成功
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data))
      
      router.push('/')
    } else {
      // 登录失败
      snackbar.text = res.message || '登录失败，请检查用户名和密码'
      snackbar.color = 'error'
      snackbar.show = true
    }
  } catch (error) {
    console.error('登录错误:', error)
    snackbar.text = error.response?.data?.message || '登录失败，请稍后再试'
    snackbar.color = 'error'
    snackbar.show = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  background: linear-gradient(to right, #4776e6, #8e54e9);
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.login-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 16px;
  width: 100%;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.v-text-field {
  font-size: 1.1rem;
}

.v-btn {
  font-size: 1.2rem;
  letter-spacing: 1px;
}
</style> 