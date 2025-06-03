<template>
  <v-app>
    <template v-if="$route.path !== '/login'">
      <app-navigation-drawer />
      <v-app-bar class="app-bar" flat>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-bold">
          运动手环数据管理系统
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>
    </template>

    <v-main>
      <v-container fluid class="pa-0 fill-height">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>

    <v-footer app class="d-flex justify-center py-2">
      <span class="text-caption text-grey">
        &copy; {{ new Date().getFullYear() }} - 运动手环数据管理系统
      </span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from './store/app'
import AppNavigationDrawer from './components/AppNavigationDrawer.vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

function toggleDrawer() {
  appStore.toggleDrawer()
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<style scoped>
.app-bar {
  transition: all 0.3s ease;
}
</style> 