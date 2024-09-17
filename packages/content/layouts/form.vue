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
          ContentDoc
            template(#default="{ doc }")
              h1 {{ doc.title }}

              TntForm.space-y-5(
                :action="doc.action"
                :method="doc.method"
                :fullErrors="doc.fullErrors"
                :body="doc.body"
                :schema="doc.schema"
              )

    AppFooter
</template>


<!--
  TODO: Support markdown. Maybe by adding a <slot /> to TntForm as alternative to :body
-->
