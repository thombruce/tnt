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
  : { data: { title: _startCase(props.crumb.param), _path: props.crumb.path } }
</script>

<template lang="pug">
NuxtLink(:to="page._path")
  | {{ page.title }}
</template>
