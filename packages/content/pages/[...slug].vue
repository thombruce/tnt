<script setup lang="ts">
import { useRuntimeConfig, useContentHead, useRequestEvent } from '#imports'

const { layout } = useAppConfig()

const route = useRoute()

const { contentHead } = useRuntimeConfig().public.content
const { data: page } = await useAsyncData(`tnt-catchall-${route.path}`, () => queryContent(route.path).findOne())

// Page not found, set correct status code on SSR
if (!(page as any).value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
}

if (contentHead) {
  useContentHead(page)
}
</script>

<template lang="pug">
.prose
  NuxtLayout(:name="page?.layout || layout || 'default'")
    ContentRenderer(v-if="page" :key="page._id" :value="page")
      template(#empty="{ value }")
        DocumentDrivenEmpty(:value="value")/
    DocumentDrivenNotFound(v-else)/
</template>
