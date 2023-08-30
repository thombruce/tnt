<script setup lang="ts">
import { useRuntimeConfig } from '#app'
import { useContent, useContentHead, useRequestEvent, useRoute, useAppConfig } from '#imports'

const { contentHead } = useRuntimeConfig().public.content as any
const { page } = useContent()

const { path } = useRoute()
const { taxonomies } = useAppConfig()
const items = path.replace(/(?:^\/|\/$)/, '').split('/')

let layout = ''

if (taxonomies.includes(items[0]) && items[1]) {
  layout = 'tags'
} else if (taxonomies.includes(items[0])) {
  layout = 'taxonomy'
} else {
  layout = useContent().layout
}

// Page not found, set correct status code on SSR
if (!(page as any).value && process.server) {
  const event = useRequestEvent()
  event.res.statusCode = 404
}

if (contentHead) {
  useContentHead(page)
}
</script>

<template>
  <div class="document-driven-page">
    <NuxtLayout :name="layout as string || 'default'">
      <ContentRenderer v-if="page" :key="(page as any)._id" :value="page">
        <template #empty="{ value }">
          <DocumentDrivenEmpty :value="value" />
        </template>
      </ContentRenderer>
      <DocumentDrivenNotFound v-else />
    </NuxtLayout>
  </div>
</template>
