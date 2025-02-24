import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  // State
  const query = ref('')

  const results = ref([] as any[])

  // Getters
  const filtered = computed(() => {
    const res = results.value.filter((value) => {
      const titles = value.id.split('#')
      if (titles.length <= 1) return true
      if (titles[0].split('/').pop() !== titles[1]) return true
    })

    return res
  })

  // Actions
  // async function search(queryString:string, opts?:object) {
  async function search() {
    const res = await searchContent(query.value, {})

    results.value = res.value
  }

  async function $reset() {
    query.value = ''
    results.value = []
  }

  return {
    // State
    query,
    results,
    // Getters
    filtered,
    // Actions
    search,
    $reset,
  }
})
