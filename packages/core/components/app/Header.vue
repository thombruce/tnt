<script setup>
const { name } = useAppConfig()
</script>

<template lang="pug">
header
  strong
    NuxtLink(to="/") {{ name }}
  nav
    ul
      //- TNT Content: Content Navigation
      li
        NuxtLink(to="/settings")
          Icon(name="fa:cog")/
          span.sr-only Settings
</template>
