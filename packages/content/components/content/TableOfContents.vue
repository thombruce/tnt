<script setup lang="ts">
const props = defineProps({
  toc: Object,
  page: Object,
  path: String,
})

const route = useRoute()

let path = props.path || route.path

const { data: rawData }: any =
  props.toc
  ? { data: { body: { toc: props.toc } } }
  : props.page
  ? { data: { body: { toc: props.page.body.toc } } }
  : await useAsyncData(`tnt-toc-${path}`, () => queryContent(path).findOne())

const data = rawData.body?.toc || rawData.value?.body?.toc
</script>

<template lang="pug">
.tnt-toc(v-if="data?.links")
  h2 Table of Contents
  ol
    li(v-for="link in data.links" :key="link.text")
      a(:href="`#${link.id}`")
        | {{ link.text }}
</template>
