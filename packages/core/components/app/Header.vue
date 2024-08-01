<script setup>
const { name } = useAppConfig()
</script>

<template lang="pug">
header.sticky.top-0
  nav.tnt-container.flex.space-x-5.justify-between
    ul.flex-0
      //- TNT Content: Content Navigation
      li
        strong
          NuxtLink(to="/") {{ name }}
    ul.flex-0
      li
        DarkmodeToggle
      li
        NuxtLink(to="/settings" no-prefetch)
          Icon(name="fa:cog")/
          span.sr-only Settings
</template>
