<script setup>
defineProps(['taxonomy', 'tag'])
</script>

<template lang="pug">
li.inline
  NuxtLink(:to="`/~${taxonomy}/${_kebabCase(tag)}`")
    ContentQuery(:path="`/~${taxonomy}/${_kebabCase(tag)}`" :where="{ _path: `/~${taxonomy}/${_kebabCase(tag)}` }")
      template(#default="{ data }")
        | {{ data[0].title }}
      template(#not-found)
        | {{ tag }}
</template>
