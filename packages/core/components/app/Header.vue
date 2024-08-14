<script setup>
const { name } = useAppConfig()

const runtimeConfig = useRuntimeConfig()

const { minimize, isMaximized, maximize, close } = useTntApi()

const { data: navigation } = runtimeConfig.public?.content
  ? await useAsyncData('tnt-header-navigation', () => fetchContentNavigation())
  : []
</script>

<template lang="pug">
header.sticky.top-0
  nav.tnt-container.flex.space-x-5.justify-between
    ul.flex-0
      li
        Dropdown
          DropdownItem(v-for="link of navigation" :key="link._path" :path="link._path")
            Icon.mr-2(v-if="link.icon" :name="link.icon")
            | {{ link.title }}
          DropdownItem(v-if="runtimeConfig?.public?.content" path="/search")
            Icon.mr-2(name="fa6-solid:magnifying-glass")
            | Search
          DropdownItem(path="/settings")
            Icon.mr-2(name="fa6-solid:gear")
            | Settings
      li
        strong
          NuxtLink(to="/") {{ name }}
    ul.flex-0
      li(v-if="runtimeConfig?.public?.content")
        NuxtLink(to="/search" no-prefetch)
          Icon(name="fa6-solid:magnifying-glass")/
          span.sr-only Search
      li
        DarkmodeToggle
      li
        NuxtLink(to="/settings" no-prefetch)
          Icon(name="fa6-solid:gear")/
          span.sr-only Settings
      template(v-if="isElectron()")
        li
          TntButton.btn-none(@click="minimize()")
            Icon(name="fa6-solid:minus")/
            span.sr-only Close
        li
          TntButton.btn-none(@click="maximize()")
            Icon(name="fa6-regular:square")/
            span.sr-only Close
        li
          TntButton.btn-none(@click="close()")
            Icon(name="fa6-solid:xmark")/
            span.sr-only Close
</template>

<style lang="postcss">
header {
  @apply select-none;
  -webkit-app-region: drag;
  & a, button {
    -webkit-app-region: no-drag;
  }
}
</style>
