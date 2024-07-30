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
        //- TNT Content: Content Navigation
        li
          DarkmodeToggle
        li
          NuxtLink(to="/settings")
            Icon(name="fa:cog")/
            span.sr-only Settings
</template>
