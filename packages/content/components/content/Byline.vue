<script setup>
const props = defineProps({
  authors: [Array, String],
  page: Object,
  path: String,
})

const route = useRoute()

let path = props.path || route.path

const { data } =
  props.authors
  ? { data: { authors: props.authors } }
  : props.page
  ? { data: props.page }
  : await useAsyncData(`tnt-byline-${path}`, () => queryContent(path).only('authors').findOne())
</script>

<template lang="pug">
div(v-if="data.authors")
  span.italic
    | {{ `Written by ` }}

    template(
      v-if="!(typeof data.authors === 'string')"
      v-for="(author, index) in data.authors"
    )
      NuxtLink(:to="`/~authors/${_kebabCase(author)}`") {{ author }}
      template(v-if="index < data.authors.length - 2") {{ `, ` }}
      template(v-if="index == data.authors.length - 2") {{ ` & ` }}

    NuxtLink(v-else :to="`/~authors/${_kebabCase(data.authors)}`") {{ data.authors }}
</template>
