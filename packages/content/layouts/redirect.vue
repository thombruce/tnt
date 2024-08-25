<script setup>
// TODO: Rework layout so that internal links do not result in a page refresh.
// NOTE: We can use the navigateTo util to redirect to both internal and external
//       links; we just need to toggle a configuration value accordingly.
//       https://nuxt.com/docs/api/utils/navigate-to

const sidebar = useSidebar()

const route = useRoute()
const { data: page } = await useAsyncData(`tnt-redirect-${route.path}`, () => queryContent(route.path).findOne())

useHead({
  title: `Redirecting to ${page.value.title}...`,
  meta: [{ "http-equiv": "refresh", content: `0; URL=${page.value.link}` }],
  link: [{ rel: "canonical", href: page.value.link }]
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
