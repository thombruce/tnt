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
.tnt-breadcrumbs.not-prose
  nav
    ul
      li
        NuxtLink(to="/") Home
      li(v-for="crumb in crumbs" :key="crumb.path")
        NuxtLink(:to="crumb.path")
          | {{ _startCase(crumb.param) }}
</template>
