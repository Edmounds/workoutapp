<template>
  <div class="aitoken-container">
    <h1>DeepSeek API 账户余额</h1>
    
    <div class="card">
      <div class="api-key-section">
        <h2>API 密钥</h2>
        <div class="input-group">
          <input 
            v-model="apiKey" 
            type="password" 
            placeholder="输入DeepSeek API密钥" 
            class="api-input"
          />
          <button @click="toggleShowApiKey" class="toggle-btn">
            {{ showApiKey ? '隐藏' : '显示' }}
          </button>
          <button @click="fetchApiUsage" class="fetch-btn" :disabled="isLoading">
            {{ isLoading ? '加载中...' : '查询' }}
          </button>
        </div>
        <div class="key-info" v-if="apiKey">
          当前密钥: {{ showApiKey ? apiKey : maskApiKey(apiKey) }}
        </div>
        
        <div class="advanced-toggle">
          <button @click="toggleAdvancedSettings" class="advanced-btn">
            {{ showAdvanced ? '隐藏高级设置' : '显示高级设置' }}
          </button>
        </div>
        
        <div v-if="showAdvanced" class="advanced-settings">
          <div class="input-group">
            <label for="api-base-url">API基础URL:</label>
            <input 
              id="api-base-url"
              v-model="apiBaseUrl" 
              type="text" 
              placeholder="输入API基础URL" 
              class="api-input"
            />
          </div>
          <div class="settings-info">
            <p>默认URL: https://api.deepseek.com</p>
            <p>如遇连接问题，请尝试更改API地址或检查网络连接</p>
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="loading-section">
        <div class="loading-spinner"></div>
        <p>正在获取API账户余额数据...</p>
      </div>

      <div v-if="error" class="error-section">
        <p class="error-message">{{ error }}</p>
        <div class="error-suggestions" v-if="error.includes('网络错误') || error.includes('无法连接')">
          <p>可能的解决方案:</p>
          <ul>
            <li>检查您的网络连接</li>
            <li>确认API密钥是否正确</li>
            <li>尝试使用代理或VPN</li>
            <li>在高级设置中更改API地址</li>
          </ul>
        </div>
      </div>

      <div v-if="usageData && !isLoading" class="usage-section">
        <h2>账户余额信息</h2>
        
        <div class="account-status" v-if="usageData.is_available !== undefined">
          <div :class="['status-badge', usageData.is_available ? 'status-active' : 'status-inactive']">
            {{ usageData.is_available ? '账户可用' : '账户不可用' }}
          </div>
        </div>
        
        <div class="usage-cards">
          <div class="usage-card">
            <h3>总余额</h3>
            <div class="usage-value">{{ getTotalBalance() }} <span class="currency">{{ getCurrency() }}</span></div>
          </div>
          
          <div class="usage-card">
            <h3>充值余额</h3>
            <div class="usage-value">{{ getToppedUpBalance() }} <span class="currency">{{ getCurrency() }}</span></div>
          </div>
          
          <div class="usage-card">
            <h3>赠送余额</h3>
            <div class="usage-value">{{ getGrantedBalance() }} <span class="currency">{{ getCurrency() }}</span></div>
          </div>
        </div>

        <div class="usage-details">
          <h3>详细信息</h3>
          <table class="details-table">
            <tbody>
              <tr>
                <td>账户状态:</td>
                <td>{{ usageData.is_available ? '可用' : '不可用' }}</td>
              </tr>
              <tr>
                <td>货币单位:</td>
                <td>{{ getCurrency() }}</td>
              </tr>
              <tr>
                <td>上次更新时间:</td>
                <td>{{ formatDateTime(lastUpdated) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getDeepseekApiUsage } from '../api'

export default {
  name: 'AitokenView',
  setup() {
    const apiKey = ref('sk-2aee504fdb5e4c3f84205c1f398b801b')
    const showApiKey = ref(false)
    const usageData = ref(null)
    const isLoading = ref(false)
    const error = ref('')
    const lastUpdated = ref(null)
    const apiBaseUrl = ref('https://api.deepseek.com')
    const showAdvanced = ref(false)

    const fetchApiUsage = async () => {
      if (!apiKey.value) {
        error.value = '请输入API密钥'
        return
      }

      isLoading.value = true
      error.value = ''

      try {
        const response = await getDeepseekApiUsage(apiKey.value, apiBaseUrl.value)
        usageData.value = {
          is_available: response.is_available,
          balance_infos: response.balance_infos || []
        }
        lastUpdated.value = new Date()
        error.value = ''
        localStorage.setItem('deepseek_api_key', apiKey.value)
        localStorage.setItem('deepseek_api_base_url', apiBaseUrl.value)
      } catch (err) {
        console.error('获取API账户余额失败:', err)
        error.value = '获取API账户余额失败: ' + (err.message || '网络错误')
        usageData.value = null
      } finally {
        isLoading.value = false
      }
    }

    const toggleShowApiKey = () => {
      showApiKey.value = !showApiKey.value
    }

    const toggleAdvancedSettings = () => {
      showAdvanced.value = !showAdvanced.value
    }

    const maskApiKey = (key) => {
      if (!key) return ''
      return key.substring(0, 3) + '...' + key.substring(key.length - 4)
    }

    const getTotalBalance = () => {
      if (!usageData.value || !usageData.value.balance_infos || usageData.value.balance_infos.length === 0) {
        return '0.00'
      }
      return usageData.value.balance_infos[0].total_balance || '0.00'
    }

    const getGrantedBalance = () => {
      if (!usageData.value || !usageData.value.balance_infos || usageData.value.balance_infos.length === 0) {
        return '0.00'
      }
      return usageData.value.balance_infos[0].granted_balance || '0.00'
    }

    const getToppedUpBalance = () => {
      if (!usageData.value || !usageData.value.balance_infos || usageData.value.balance_infos.length === 0) {
        return '0.00'
      }
      return usageData.value.balance_infos[0].topped_up_balance || '0.00'
    }

    const getCurrency = () => {
      if (!usageData.value || !usageData.value.balance_infos || usageData.value.balance_infos.length === 0) {
        return 'CNY'
      }
      return usageData.value.balance_infos[0].currency || 'CNY'
    }

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'
      const date = new Date(dateString)
      return date.toLocaleDateString('zh-CN')
    }

    const formatDateTime = (date) => {
      if (!date) return 'N/A'
      return date.toLocaleString('zh-CN')
    }

    onMounted(() => {
      const savedApiKey = localStorage.getItem('deepseek_api_key')
      const savedBaseUrl = localStorage.getItem('deepseek_api_base_url')
      
      if (savedApiKey) {
        apiKey.value = savedApiKey
      }
      
      if (savedBaseUrl) {
        apiBaseUrl.value = savedBaseUrl
      }

      if (apiKey.value) {
        fetchApiUsage()
      }
    })

    return {
      apiKey,
      showApiKey,
      usageData,
      isLoading,
      error,
      lastUpdated,
      apiBaseUrl,
      showAdvanced,
      fetchApiUsage,
      toggleShowApiKey,
      toggleAdvancedSettings,
      maskApiKey,
      getTotalBalance,
      getGrantedBalance,
      getToppedUpBalance,
      getCurrency,
      formatDate,
      formatDateTime
    }
  }
}
</script>

<style scoped>
.aitoken-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 24px;
  text-align: center;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
}

.api-key-section {
  margin-bottom: 24px;
}

.input-group {
  display: flex;
  margin-bottom: 12px;
}

.api-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.toggle-btn, .fetch-btn {
  margin-left: 8px;
  padding: 0 16px;
  background: #4a5568;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.fetch-btn {
  background: #2c5282;
}

.toggle-btn:hover {
  background: #2d3748;
}

.fetch-btn:hover {
  background: #2b6cb0;
}

.fetch-btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.key-info {
  font-size: 14px;
  color: #718096;
  margin-top: 8px;
}

.loading-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
}

.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-section {
  padding: 16px;
  background: #fff5f5;
  border-left: 4px solid #f56565;
  color: #c53030;
  border-radius: 4px;
  margin-bottom: 24px;
}

.error-message {
  font-weight: 500;
  margin-bottom: 12px;
}

.error-suggestions {
  font-size: 14px;
  color: #742a2a;
  background: rgba(245, 101, 101, 0.1);
  padding: 12px;
  border-radius: 4px;
  margin-top: 12px;
}

.error-suggestions ul {
  margin: 8px 0 0 20px;
  padding: 0;
}

.error-suggestions li {
  margin-bottom: 4px;
}

.usage-section h2 {
  margin-bottom: 20px;
  color: #2d3748;
}

.usage-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
}

.usage-card {
  background: #f7fafc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.usage-card h3 {
  font-size: 16px;
  margin-bottom: 16px;
  color: #4a5568;
}

.usage-value {
  font-size: 32px;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 12px;
}

.currency {
  font-size: 14px;
  color: #718096;
}

.usage-details {
  background: #f7fafc;
  border-radius: 8px;
  padding: 20px;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
}

.details-table td {
  padding: 10px 0;
  border-bottom: 1px solid #edf2f7;
}

.details-table td:first-child {
  font-weight: 500;
  color: #4a5568;
  width: 40%;
}

.advanced-toggle {
  margin-top: 12px;
  text-align: right;
}

.advanced-btn {
  padding: 8px 16px;
  background: #4a5568;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.advanced-btn:hover {
  background: #2d3748;
}

.advanced-settings {
  margin-top: 12px;
  padding: 16px;
  background: #f7fafc;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.settings-info {
  font-size: 14px;
  color: #718096;
  margin-top: 12px;
}

@media (max-width: 640px) {
  .usage-cards {
    grid-template-columns: 1fr;
  }
  
  .input-group {
    flex-direction: column;
  }
  
  .toggle-btn, .fetch-btn {
    margin: 8px 0 0 0;
    width: 100%;
    padding: 10px;
  }
}

.account-status {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.status-badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
}

.status-active {
  background-color: #c6f6d5;
  color: #2f855a;
}

.status-inactive {
  background-color: #fed7d7;
  color: #c53030;
}
</style>
