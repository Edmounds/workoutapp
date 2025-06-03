<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    @mouseenter="rail = false"
    @mouseleave="rail = true"
    elevation="2"
    temporary
  >
    <v-list-item
      prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v.png"
      :title="user.username || '管理员'"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.path"
        :active="isActive(item.path)"
        rounded="lg"
        class="mb-1"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../store/app'

const route = useRoute()
const appStore = useAppStore()
const rail = ref(true)

const drawer = computed({
  get: () => appStore.drawer,
  set: (value) => appStore.setDrawer(value)
})

const user = computed(() => {
  const userStr = localStorage.getItem('user')
  return userStr ? JSON.parse(userStr) : {}
})

const menuItems = [
  { title: '概览仪表板', icon: 'mdi-view-dashboard', path: '/' },
  { title: '用户管理', icon: 'mdi-account-group', path: '/users' },
  { title: '运动统计', icon: 'mdi-chart-line', path: '/statistics' },
  { title: '健康数据', icon: 'mdi-heart-pulse', path: '/health' },
  { title: 'API使用统计', icon: 'mdi-key-variant', path: '/aitoken' }
]

function isActive(path) {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<style scoped>
.v-navigation-drawer {
  transition: all 0.3s ease-in-out;
}
</style> 