<script setup>
const { name } = useAppConfig()
</script>

<template lang="pug">
header
  strong
    NuxtLink(to="/") {{ name }}
  nav
    ul
      ContentNavigation(v-slot="{ navigation }")
        li(v-for="link of navigation" :key="link._path")
          NuxtLink(:to="link._path") {{ link.title }}
      li
        NuxtLink(to="/search" no-prefetch)
          Icon(name="fa:search")/
          span.sr-only Search
      li
        NuxtLink(to="/settings" no-prefetch)
          Icon(name="fa:cog")/
          span.sr-only Settings
</template>

<style lang="postcss" scoped>
header {
  @apply mb-4;
}

header > nav > ul {
  @apply space-x-4;
}

header > nav > ul > li {
  @apply inline;
}
</style>
