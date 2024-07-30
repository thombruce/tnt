<script setup>
const { name } = useAppConfig()
</script>

<template lang="pug">
header.sticky.top-0
  .tnt-container.flex.space-x-5.justify-between
    strong.flex-0
      NuxtLink(to="/") {{ name }}
    nav.flex-0
      ul
        ContentNavigation(v-slot="{ navigation }")
          li(v-for="link of navigation" :key="link._path")
            NuxtLink(:to="link._path") {{ link.title }}
        li
          NuxtLink(to="/search" no-prefetch)
            Icon(name="fa:search")/
            span.sr-only Search
        li
          DarkmodeToggle
        li
          NuxtLink(to="/settings" no-prefetch)
            Icon(name="fa:cog")/
            span.sr-only Settings
</template>
