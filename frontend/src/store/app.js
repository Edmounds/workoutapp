import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const drawer = ref(false)
  const loading = ref(false)
  const snackbar = ref({
    show: false,
    text: '',
    color: 'success'
  })

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  function setDrawer(value) {
    drawer.value = value
  }

  function setLoading(value) {
    loading.value = value
  }

  function showSnackbar(text, color = 'success') {
    snackbar.value = {
      show: true,
      text,
      color
    }
    
    setTimeout(() => {
      snackbar.value.show = false
    }, 3000)
  }

  return {
    drawer,
    loading,
    snackbar,
    toggleDrawer,
    setDrawer,
    setLoading,
    showSnackbar
  }
}) 