import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  // State
  const query = ref('')

  const results = ref({})

  // Getters
  const fullResults = computed(() => results.value)

  // Actions
  async function search(queryString:string, opts?:object) {
    query.value = queryString
    
    const res = await searchContent(query.value, {})

    results.value = res
  }

  async function $reset() {
    query.value = ''
    results.value = {}
  }

  return {
    // State
    query,
    results,
    // Getters
    fullResults,
    // Actions
    search,
    $reset,
  }
})
