<script setup lang="ts">
const { path } = useRoute()

const crumbs = computed(() => {
  const params = path.split('/').filter(item => item)

  let crumbs = [{ path: '/', param: 'Home' }]
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
      li(v-for="crumb in crumbs" :key="crumb.path")
        Breadcrumb(:crumb="crumb")
</template>
