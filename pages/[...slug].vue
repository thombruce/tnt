<script setup lang="ts">
const { path } = useRoute()

const { data: page } = await useAsyncData(`tnt-catchall-${path}`, () => queryContent(path).findOne())

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
        TntToc(v-if="page.body?.toc" :page="page")

      ContentRenderer.tnt-article-body(:value="page")
        template(#empty)
          TntMarkdownRenderer(v-if="page.content" :content="page.content")/

      section
        TntContentAttachments(v-if="page?.attachments" :attachments="page?.attachments")/

    template(v-else)

    footer
      TntContentList(
        v-if="page?.list !== false"
        v-bind="page?.list"
      )/
      TntPrevNext/
</template>

<style lang="postcss">
.tnt-article-body > h1:first-child {
  @apply hidden;
}
</style>
