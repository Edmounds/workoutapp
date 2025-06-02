<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">AI Token管理</h1>
      </v-col>
    </v-row>

    <!-- AI Token配置卡片 -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>API Token设置</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="saveToken">
              <v-text-field
                v-model="token"
                label="AI API Token"
                :append-icon="showToken ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showToken ? 'text' : 'password'"
                @click:append="showToken = !showToken"
                placeholder="输入您的AI API Token"
                hint="请输入您的API Token，用于AI分析功能"
                persistent-hint
              ></v-text-field>
              
              <v-select
                v-model="provider"
                :items="providers"
                label="AI服务提供商"
                item-title="name"
                item-value="id"
                return-object
                hint="选择AI服务提供商"
                persistent-hint
                class="mt-4"
              ></v-select>

              <v-text-field
                v-model="endpoint"
                label="API端点 (可选)"
                placeholder="自定义API端点URL"
                hint="留空将使用默认端点"
                persistent-hint
                class="mt-4"
              ></v-text-field>

              <v-btn
                type="submit"
                color="primary"
                class="mt-4"
                block
              >
                保存配置
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 使用限额与统计 -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>使用统计</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="info">mdi-currency-usd</v-icon>
                </template>
                <v-list-item-title>本月消耗: {{ usage.currentMonthCost }}元</v-list-item-title>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="info">mdi-counter</v-icon>
                </template>
                <v-list-item-title>本月请求次数: {{ usage.currentMonthRequests }}次</v-list-item-title>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="info">mdi-chart-line</v-icon>
                </template>
                <v-list-item-title>平均每次请求消耗: {{ usage.averageCostPerRequest }}元</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>月度使用限额</v-card-title>
          <v-card-text>
            <v-slider
              v-model="monthlyLimit"
              :min="0"
              :max="1000"
              :step="50"
              thumb-label
              label="月度消费限额 (元)"
            ></v-slider>
            
            <div class="d-flex justify-space-between">
              <span>已使用: {{ usage.currentMonthCost }}元</span>
              <span>限额: {{ monthlyLimit }}元</span>
            </div>
            
            <v-progress-linear
              :model-value="(usage.currentMonthCost / monthlyLimit) * 100"
              color="primary"
              height="20"
              striped
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            
            <v-btn
              color="success"
              class="mt-4"
              block
              @click="saveLimit"
            >
              保存限额设置
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AITokenManagement',
  data() {
    return {
      token: '',
      showToken: false,
      provider: null,
      providers: [
        { id: 'openai', name: 'OpenAI' },
        { id: 'azure', name: 'Azure OpenAI' },
        { id: 'anthropic', name: 'Anthropic Claude' },
        { id: 'gemini', name: 'Google Gemini' }
      ],
      endpoint: '',
      monthlyLimit: 300,
      usage: {
        currentMonthCost: 85.5,
        currentMonthRequests: 426,
        averageCostPerRequest: 0.2
      }
    }
  },
  methods: {
    saveToken() {
      // 实际应用中这里会调用API保存token
      this.$nextTick(() => {
        // 显示保存成功提示
        alert('Token配置已保存')
      })
    },
    saveLimit() {
      // 实际应用中这里会调用API保存限额设置
      this.$nextTick(() => {
        // 显示保存成功提示
        alert('限额设置已保存')
      })
    }
  }
}
</script>
