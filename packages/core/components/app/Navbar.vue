<script setup>
const appConfig = useAppConfig()
</script>

<template lang="pug">
div.w-full.navbar.sticky.top-0.z-40
  div.flex-1.px-2.mx-2
    NuxtLink.btn.btn-ghost.normal-case.text-xl(to="/") {{ appConfig.name }}

  div(class="flex-none hidden lg:block")
    ul.menu.menu-horizontal
      //- Empty

  .flex-none
    AppSettings
</template>
