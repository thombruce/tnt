<script setup lang="ts">
import type { PageCollections } from '@nuxt/content';

const { path } = useRoute()

const { collection = 'pages' } = defineProps<{
  collection?: keyof PageCollections
}>()

const { data: items } = await useAsyncData(`tntBreadcrumbs-for-${path}`, () => {
  return tntCrumbs(path, collection)
})
</script>

<template lang="pug">
div(class="flex \
          items-center \
          justify-between \
          w-full")
  UBreadcrumb(:items="items || undefined" class="my-2 px-2.5 py-1.5")/
</template>
