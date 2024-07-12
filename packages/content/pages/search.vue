<script lang="ts" setup>
const query = ref('')
const results = ref([])

const search = async () => {
  const res = await searchContent(query.value, {})
  results.value = res.value
}
</script>

<template lang="pug">
div
  TntInput(
    placeholder="Search..."
    v-model="query"
    @input="search()"
  )

  pre {{ results }}
</template>
