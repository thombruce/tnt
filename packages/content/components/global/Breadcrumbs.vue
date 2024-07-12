<script setup>
const { path } = useRoute()

const crumbs = computed(() => {
  const params = path.split('/').filter(item => item)

  let crumbs = []
  let p = ''
  params.forEach((param) => {
    p = `${p}/${param}`
    crumbs.push({
      path: p,
      param,
    })
  })

  return crumbs.length ? crumbs : false
})
</script>

<template lang="pug">
nav.not-prose.text-sm.space-x-2
  NuxtLink(to="/") Home
  template(v-for="crumb in crumbs" :key="crumb.path")
    span.pointer-events-none >
    NuxtLink(:to="crumb.path")
      ContentQuery(:path="crumb.path" :where="{ _path: crumb.path }")
        template(#default="{ data }")
          | {{ data[0].title }}
        template(#not-found)
          | {{ _startCase(crumb.param) }}
</template>
