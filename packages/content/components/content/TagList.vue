<script setup>
defineProps(['taxonomy'])
const { page } = useContent()
</script>

<template lang="pug">
dl
  dt {{ _startCase(taxonomy) }}
  dd
    ul
      li(v-if="typeof page[taxonomy] === 'string'")
        NuxtLink(:to="`/~${taxonomy}/${_kebabCase(page[taxonomy])}`") {{ page[taxonomy] }}
      li(v-else v-for="tag in page[taxonomy]" :key="tag")
        NuxtLink(:to="`/~${taxonomy}/${_kebabCase(tag)}`") {{ tag }}
</template>
