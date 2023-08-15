<script setup>
const { fullPath } = useRoute()

const crumbs = computed(() => {
  let params = fullPath.startsWith('/')
    ? fullPath.substring(1).split('/')
    : fullPath.split('/')
  params = params.filter(item => item)

  const crumbs = []
  let path = ''

  params.forEach((param, index) => {
    param = param.split(/[?#]/)[0]
    path = `${path}/${param}`
    crumbs.push({
      title: param,
      path: path,
    })
  })

  return crumbs.length ? crumbs : false
})
</script>

<template>
  <div v-if="crumbs" class="text-sm breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-for="crumb in crumbs" :key="crumb.path">
        <NuxtLink :to="crumb.path">{{ crumb.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
