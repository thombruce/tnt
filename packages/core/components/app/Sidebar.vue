<script setup>
const { directory } = useAppConfig()

const runtimeConfig = useRuntimeConfig()

const { data: navigation } = runtimeConfig.public?.content
  ? await useAsyncData('tnt-header-navigation', () => fetchContentNavigation())
  : []
</script>

<template lang="pug">
aside(class="w-full h-screen overflow-y-auto p-5 bg-base-100/50 dark:bg-base-900/50")
  nav
    TntElectronDirectory(
      v-if="isElectron()"
      :path="directory?.path"
      :extensions="directory?.extensions"
      :filter="directory?.filter"
    )
    ul.flex-1
      li(v-for="link of navigation" :key="link._path" :path="link._path")
        NuxtLink(:to="link._path")
          Icon.mr-2(v-if="link.icon" :name="link.icon")
          | {{ link.title }}

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
