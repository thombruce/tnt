<script setup>
const props = defineProps({
  page: Object,
})

const route = useRoute()
const { data: page } = props.page
  ? { data: props.page }
  : await useAsyncData(`tnt-byline-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
//- TODO: v-if in root of child component is a bad pattern
div(v-if="page.authors")
  span.italic
    | {{ `Written by ` }}

    template(
      v-if="!(typeof page.authors === 'string')"
      v-for="(author, index) in page.authors"
    )
      NuxtLink(:to="`/~authors/${_kebabCase(author)}`") {{ author }}
      template(v-if="index < page.authors.length - 2") {{ `, ` }}
      template(v-if="index == page.authors.length - 2") {{ ` & ` }}

    NuxtLink(v-else :to="`/~authors/${_kebabCase(page.authors)}`") {{ page.authors }}
</template>
