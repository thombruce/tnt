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

<template>
  <div class="drawer">
    <input id="tnt-drawer" type="checkbox" class="drawer-toggle" v-model="drawer" />

    <div class="drawer-content flex flex-col">
      <AppNavbar />

      <main class="my-10 mx-auto">
        <NuxtPage />
      </main>

      <AppFooter />
    </div>
    <AppSidebar />
  </div>
</template>
