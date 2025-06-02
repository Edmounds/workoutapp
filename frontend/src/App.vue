<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>运动手环数据管理系统</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar size="36">
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="管理员"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>个人资料</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>设置</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>退出登录</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-title class="text-h6">
          运动数据管理
        </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path" link>
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <span class="text-caption">&copy; {{ new Date().getFullYear() }} - 运动手环数据管理系统</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true,
      menuItems: [
        { title: '数据概览', icon: 'mdi-view-dashboard', path: '/' },
        { title: '用户统计', icon: 'mdi-account-group', path: '/user-stats' },
        { title: '健康指标', icon: 'mdi-heart-pulse', path: '/health-metrics' },
        { title: '运动记录', icon: 'mdi-run', path: '/workout-records' },
        { title: 'AI Token管理', icon: 'mdi-api', path: '/ai-token' }
      ]
    }
  }
}
</script>

<style>
.v-application {
  font-family: "Roboto", sans-serif;
}
</style>
