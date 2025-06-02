import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { title: '运动数据概览' }
  },
  {
    path: '/user-stats',
    name: 'UserStats',
    component: () => import('../views/UserStats.vue'),
    meta: { title: '用户统计' }
  },
  {
    path: '/health-metrics',
    name: 'HealthMetrics',
    component: () => import('../views/HealthMetrics.vue'),
    meta: { title: '健康指标分析' }
  },
  {
    path: '/workout-records',
    name: 'WorkoutRecords',
    component: () => import('../views/WorkoutRecords.vue'),
    meta: { title: '运动记录' }
  },
  {
    path: '/ai-token',
    name: 'AITokenManagement',
    component: () => import('../views/AITokenManagement.vue'),
    meta: { title: 'AI Token管理' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '运动手环管理系统'
  next()
})

export default router