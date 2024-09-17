<script setup lang="ts">
const props = defineProps({
  authors: [Array, String],
  page: Object,
  path: String,
})

const route = useRoute()

let path = props.path || route.path

const { data: rawData }: any =
  props.authors
  ? { data: { authors: props.authors } }
  : props.page
  ? { data: { authors: props.page.authors } }
  : await useAsyncData(`tnt-byline-${path}`, () => queryContent(path).only('authors').findOne())

const data = [rawData.authors || rawData.value?.authors].flat()
</script>

<template lang="pug">
div(v-if="data")
  span.italic
    | {{ `Written by ` }}
    template(v-for="(author, index) in data")
      NuxtLink(:to="`/~authors/${_kebabCase(author)}`") {{ author }}
      template(v-if="index < data.length - 2") {{ `, ` }}
      template(v-if="index == data.length - 2") {{ ` & ` }}
</template>
