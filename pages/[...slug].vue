<script setup lang="ts">
const { path } = useRoute()

const { data: page } = await useAsyncData(`tnt-catchall-${path}`, () => queryContent(path).findOne())

defineOgImageComponent('NuxtSeo',
  {
    // theme: '#ff0000',
    colorMode: 'dark'
  }
)
</script>

<template lang="pug">
NuxtLayout(:name="page?.layout || 'default'")
  template(v-if="page")
    ContentRenderer(:value="page")
      template(#empty)
        template(v-if="['yml', 'yaml'].includes(page._extension)") {{ page.description }}
  template(v-else)
</template>
