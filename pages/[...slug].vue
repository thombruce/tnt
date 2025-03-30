<script lang="ts" setup>
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const layout = (page.value?.layout || 'default') as LayoutKey
</script>

<template lang="pug">
NuxtLayout(:name="layout")
  ContentRenderer(
    v-if="page"
    :value="page"
    class="prose \
          dark:prose-invert"
  )/
</template>
