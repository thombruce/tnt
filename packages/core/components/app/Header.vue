<script setup lang="ts">
const { name } = useAppConfig()

const runtimeConfig = useRuntimeConfig()

const sidebar = useSidebar()
</script>

<template lang="pug">
header.sticky.top-0
  nav.px-4.flex.space-x-5.justify-between(:class="isElectron() ? '' : 'tnt-container'")
    ul.flex-1
      li
        TntButton.btn-none(@click="sidebar = !sidebar")
          //- TODO: Bug results in duplication of button when using this conditional
          //-  TntIcon(v-if="sidebar" name="fa6-solid:chevron-left")
          TntIcon(name="fa6-solid:bars")
      li
        strong
          NuxtLink(to="/") {{ name }}
    ul.flex-0
      li(v-if="runtimeConfig?.public?.content")
        NuxtLink(to="/search" no-prefetch)
          TntIcon(name="fa6-solid:magnifying-glass")/
          span.sr-only Search
      li
        DarkmodeToggle
      li
        NuxtLink(to="/settings" no-prefetch)
          TntIcon(name="fa6-solid:gear")/
          span.sr-only Settings
    AppWindowControls(v-if="isElectron()")
</template>

<style lang="postcss">
body.electron header {
  @apply select-none;
  -webkit-app-region: drag;
  & a, button {
    -webkit-app-region: no-drag;
  }
}
</style>
