import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', () => {
  // State
  const drawer = ref(false)

  // Actions
  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  return {
    drawer,
    toggleDrawer,
  }
})
