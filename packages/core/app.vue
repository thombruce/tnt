<script setup>
import { storeToRefs } from 'pinia'
import { useUIStore } from '@/stores/ui'

const { name, umami } = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${name}` : name
  },
  script: umami && process.env.NODE_ENV === 'production' ?
    [{ async: true, src: `https://${umami.domain}/script.js`, 'data-website-id': `${umami.id}` }] :
    undefined
})

const { drawer } = storeToRefs(useUIStore())
</script>

<template lang="pug">
.drawer
  input.drawer-toggle(id="tnt-drawer" type="checkbox" v-model="drawer")

  .drawer-content.flex.flex-col
    AppNavbar

    main.my-10.mx-auto
      NuxtPage

    AppFooter

  AppSidebar
</template>
