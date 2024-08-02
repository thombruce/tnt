<script setup>
const props = defineProps([
  'crumb'
])

const runtimeConfig = useRuntimeConfig()

const { data: page } = runtimeConfig.public?.content
  ? await useAsyncData(
    `tnt-breadcrumb-${props.crumb.path}`,
    () => queryContent(props.crumb.path).where({ _path: props.crumb.path }).findOne()
  )
  : null
</script>

<template lang="pug">
NuxtLink(v-if="page" :to="page._path")
  | {{ page.title }}
NuxtLink(v-else :to="crumb.path")
  | {{ _startCase(crumb.param) }}
</template>
