<script setup lang="ts">
// NOTE: This component is duplicated on TNT Content

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const { directory } = useAppConfig()

const sidebar = useSidebar()
const target = ref(null)
onClickOutside(target, () => {
  if (breakpoints.smallerOrEqual('md').value) sidebar.value = false
})
</script>

<template lang="pug">
aside(
  ref="target"
  class="h-screen overflow-y-auto p-5 bg-base-100/50 dark:bg-base-900/50"
)
  nav
    TntElectronDirectory(
      v-if="isElectron()"
      :path="directory?.path"
      :extensions="directory?.extensions"
      :exclude="directory?.exclude"
      :filter="directory?.filter"
    )
    ul.flex-1
      li(v-if="runtimeConfig?.public?.content")
        NuxtLink(to="/search" no-prefetch)
          Icon.mr-2(name="fa6-solid:magnifying-glass")
          | Search

      li
        NuxtLink(to="/settings" no-prefetch)
          Icon.mr-2(name="fa6-solid:gear")
          | Settings
</template>

<style lang="postcss" scoped>
aside {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
}
</style>
