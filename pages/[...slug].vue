<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

const { path } = useRoute()

const { data: page } = await useAsyncData(`tnt-catchall-${path}`, () => queryContent(path).findOne())

// Abstract Syntax Tree for page.content; used for YAML pages or other data types.
const { data: ast } = page.value?.content ? await useAsyncData(`tnt-catchall-ast-${path}`, () => parseMarkdown(page.value?.content)) : { data: false }

defineOgImageComponent('TNT',
  {
    title: page.value?.title || null,
    description: page.value?.description || null,
    icon: page.value?.icon || null,
    // siteName: name,
    colorMode: 'dark',
    theme: '#dc2626'
  }
)
</script>

<template lang="pug">
NuxtLayout(:name="page?.layout || 'default'")
  TntBreadcrumbs/

  template(v-if="page")
    ContentRenderer(:value="page")
      template(#empty)
        MDCRenderer(v-if="ast" :body="ast.body" :data="ast.data")/

  template(v-else)

  TntContentList(v-if="page?.list !== false" :path="page?.list?.path" :sort="page?.list?.sort")/

  TntPrevNext/
</template>
