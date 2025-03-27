<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template lang="pug">
ContentRenderer(
  v-if="page"
  :value="page"
  class="prose \
         dark:prose-invert"
)/
</template>
