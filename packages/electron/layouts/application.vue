<script setup>
const sidebar = useSidebar()
</script>

<template lang="pug">
.flex.h-screen.overflow-hidden
  AppSidebar(
    class="w-80 transition-all duration-300"
    :class="sidebar ? 'ml-0' : '-ml-80'"
  )

  .flex-1.flex.flex-col
    AppHeader

    .flex-1.overflow-y-auto
      main
        .tnt-container
          //- TODO: Consider removing tnt-container so that child elements may fit width
          slot

      AppFooter
</template>
