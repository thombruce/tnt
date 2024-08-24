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
          article.prose
            ContentDoc
              template(#default="{ doc }")
                h1 {{ doc.title }}
                Breadcrumbs(v-if="doc.breadcrumbs !== false")
                Byline(v-if="doc.authors" :authors="doc.authors")
                TagLists(:page="doc" :exclude="['authors']")
                Toc(v-if="doc.toc === true")
                .hidden-title
                  slot/
                PrevNext(v-if="doc.prevnext !== false")
              template(#empty)
                slot/
              template(#not-found)
                slot/

      AppFooter
</template>
