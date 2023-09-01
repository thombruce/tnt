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
          <ContentQuery :path="crumb.path" :where="{ _path: crumb.path }">
            <template #default="{ data }">
              {{ data[0].title }}
            </template>
            <template #not-found>
              {{ _startCase(crumb.param) }}
            </template>
          </ContentQuery>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
