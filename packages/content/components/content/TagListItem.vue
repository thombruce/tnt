<script setup>
const props = defineProps(['taxonomy', 'tag'])

const runtimeConfig = useRuntimeConfig()

const tagPath = `/~${props.taxonomy}/${_kebabCase(props.tag)}`

const { data: page } = await useAsyncData(
  `tnt-taglist-item-${props.taxonomy}-${_kebabCase(props.tag)}`,
  () => queryContent(tagPath).where({ _path: tagPath }).findOne()
)
</script>

<template lang="pug">
li.inline
  NuxtLink(:to="tagPath")
    template(v-if="page")
      | {{ page.title }}
    template(v-else)
      | {{ tag }}
</template>
