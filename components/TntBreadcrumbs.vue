<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const { path } = useRoute()

const { data: items } = await useAsyncData(`tntBreadcrumbs`, () => {
  return tntCrumbs(path)
})
</script>

<template lang="pug">
div(class="flex \
          items-center \
          justify-between \
          w-full")
  UBreadcrumb(:items="items || undefined" class="my-2 px-2.5 py-1.5")/
</template>
