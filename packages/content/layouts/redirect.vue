<script setup>
const sidebar = useSidebar()

const route = useRoute()
const { data: page } = await useAsyncData(`tnt-redirect-${route.path}`, () => queryContent(route.path).findOne())

useHead({
  title: `Redirecting to ${page.value.title}...`,
})

navigateTo(page.value.link, {
  external: /^https?:\/\//i.test(page.value.link)
})
</script>

<template lang="pug">
.flex.h-screen.overflow-hidden
  AppSidebar(
    class="w-80 transition-all duration-300"
    :class="sidebar ? 'ml-0' : '-ml-80'"
  )

  .flex-1.overflow-y-auto
    AppHeader

    main
      .tnt-container
        .prose
          h1 Redirecting to {{ page.title }}...
          p
            | If you are not redirected automatically, click here:
            |
            NuxtLink(:to="page.link") {{ page.link }}

    AppFooter
</template>
