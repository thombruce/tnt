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
          Icon(name="fa:cog")
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