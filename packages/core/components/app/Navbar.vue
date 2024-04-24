<script setup>
const { name } = useAppConfig()
</script>

<template lang="pug">
div.w-full.navbar.sticky.top-0.z-40
  .flex-1
    // Empty

  .flex-1.justify-center
    NuxtLink.btn.btn-ghost.normal-case.text-xl(to="/") {{ name }}

  .flex-1.justify-end
    div(class="flex-none hidden lg:block")
      ul.menu.menu-horizontal
        // Empty
    AppSettings
</template>
