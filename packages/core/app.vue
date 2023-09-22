<script setup>
useColorMode()

const { name, umami } = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${name}` : name
  },
  script: umami && process.env.NODE_ENV === 'production' ?
    [{ async: true, src: `https://${umami.domain}/script.js`, 'data-website-id': `${umami.id}` }] :
    undefined
})
</script>

<template>
  <div class="drawer">
    <input id="tnt-drawer" type="checkbox" class="drawer-toggle" /> 
    <div class="drawer-content flex flex-col">
      <AppNavbar />

      <div class="prose mx-auto">
        <NuxtPage />
      </div>

      <AppFooter />
    </div>
    <AppSidebar />
  </div>
</template>
