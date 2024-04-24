<script setup>
import { useUIStore } from '@/stores/ui'

const appConfig = useAppConfig()

const { toggleDrawer } = useUIStore()
</script>

<template lang="pug">
div.w-full.navbar.sticky.top-0.z-40
  div(class="flex-none lg:hidden")
    button.btn.btn-square.btn-ghost(@click="toggleDrawer()")
      Icon(name="fa:bars")

  div.flex-1.px-2.mx-2
    NuxtLink.btn.btn-ghost.normal-case.text-xl(to="/") {{ appConfig.name }}

  div(class="flex-none hidden lg:block")
    ul.menu.menu-horizontal
      //- Empty

  .flex-none
    AppSettings
</template>
