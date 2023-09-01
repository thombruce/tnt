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

<template>
  <div class="breadcrumbs not-prose text-sm">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-for="crumb in crumbs" :key="crumb.path">
        <NuxtLink :to="crumb.path">
          {{ _startCase(crumb.param) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
