<script setup>
const { name } = useAppConfig()

const runtimeConfig = useRuntimeConfig()

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
            Icon.mr-2(name="fa:search")
            | Search
          DropdownItem(path="/settings")
            Icon.mr-2(name="fa:cog")
            | Settings
      li
        strong
          NuxtLink(to="/") {{ name }}
    ul.flex-0
      li(v-if="runtimeConfig?.public?.content")
        NuxtLink(to="/search" no-prefetch)
          Icon(name="fa:search")/
          span.sr-only Search
      li
        DarkmodeToggle
      li
        NuxtLink(to="/settings" no-prefetch)
          Icon(name="fa:cog")/
          span.sr-only Settings
</template>
