import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// 开启调试模式
const isDebug = process.env.VUE_APP_DEBUG === 'true'
console.log('Debug mode:', isDebug ? 'enabled' : 'disabled')

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#3f51b5',
          secondary: '#03a9f4',
          accent: '#ff4081',
          error: '#f44336',
          warning: '#ff9800',
          info: '#2196f3',
          success: '#4caf50',
        }
      }
    }
  }
})

const app = createApp(App)

// 配置Vue应用的性能和调试选项
app.config.performance = isDebug // 开启性能追踪
app.config.warnHandler = function(msg, instance, trace) {
  console.warn('[Vue警告]:', msg)
  console.log('警告组件:', instance)
  console.log('组件追踪:', trace)
}
app.config.errorHandler = function(err, instance, info) {
  console.error('[Vue错误]:', err)
  console.log('错误组件:', instance)
  console.log('错误信息:', info)
}

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
