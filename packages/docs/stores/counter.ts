import { useStorage } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const count = useStorage('pinia-demo-count', 0)

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
