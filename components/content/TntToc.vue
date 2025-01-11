<script setup lang="ts">
const props = defineProps({
  page: Object,
})

const { path } = useRoute()

const { data: rawData }: any =
  props.page?.body
  ? { data: { body: { toc: props.page.body.toc } } }
  : await useAsyncData(`tnt-toc-${path}`, () => queryContent(path).findOne())

const data = rawData.body?.toc || rawData.value?.body?.toc
</script>

<template lang="pug">
nav(v-if="data?.links?.length")
  ol
    li(v-for="link in data.links" :key="link.text")
      a(:href="`#${link.id}`")
        | {{ link.text }}
</template>
