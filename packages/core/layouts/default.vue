<script setup lang="ts">
const sidebar = useSidebar()
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
          slot

    AppFooter
</template>
