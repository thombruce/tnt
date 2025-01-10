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

  template(v-if="page")
    ContentRenderer(:value="page")
      template(#empty)
        template(v-if="['yml', 'yaml'].includes(page._extension)") {{ page.description }}

  template(v-else)

  TntContentList(v-if="page?.list !== false" :path="page?.list?.path" :sort="page?.list?.sort")/

  TntPrevNext/
</template>
