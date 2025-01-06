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
nav.pb-4.not-prose
  ul
    li.inline(v-for="(crumb, index) in crumbs" :key="crumb.path")
      Icon.text-sm.mr-2(v-if="index === 0" name="fa6-solid:house")
      Icon.text-sm.mx-2(v-else-if="index > 0" name="fa6-solid:angle-right")

      ContentQuery(:path="crumb.path" find="one")
        template(#default="{ data }")
          NuxtLink(:to="data._path") {{ data.title }}
        template(#empty)
          NuxtLink(:to="crumb.path") {{ crumb.param }}
        template(#not-found)
          NuxtLink(:to="crumb.path") {{ crumb.param }}
</template>
