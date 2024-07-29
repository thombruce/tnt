<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(`tnt-byline-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
div
  span.italic
    | {{ `Written by ` }}

    template(
      v-if="page.authors && !(typeof page.authors === 'string')"
      v-for="(author, index) in page.authors"
    )
      NuxtLink(:to="`/~authors/${_kebabCase(author)}`") {{ author }}
      template(v-if="index < page.authors.length - 2") {{ `, ` }}
      template(v-if="index == page.authors.length - 2") {{ ` & ` }}

    NuxtLink(v-else :to="`/~authors/${_kebabCase(page.authors)}`") {{ page.authors }}
</template>
