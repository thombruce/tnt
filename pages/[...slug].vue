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

  article
    template(v-if="page")
      header
        h1 {{ page.title }}
        time.text-sm.text-gray-500(v-if="page.createdAt || page.created || page.date") {{ new Date(page.createdAt || page.created || page.date).toDateString() }}
        TntToc(v-if="page?.body?.toc" :page="page")

      ContentRenderer.tnt-article-body(:value="page")
        template(#empty)
          MDCRenderer(v-if="ast" :body="ast.body" :data="ast.data")/

    template(v-else)

    footer
      TntContentAttachments(v-if="page?.attachments" :attachments="page?.attachments")/
      TntContentList(v-if="page?.list !== false" :path="page?.list?.path" :sort="page?.list?.sort")/

  TntPrevNext/
</template>

<style lang="postcss">
.tnt-article-body > h1:first-child {
  @apply hidden;
}
</style>
