<script setup>
const sidebar = useSidebar()

const route = useRoute()
const { data: page } = await useAsyncData(`tnt-list-${route.path}`, () => queryContent(route.path).findOne())
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
        article.prose
          ContentDoc
            template(#default="{ doc }")
              h1 {{ doc.title }}
              Breadcrumbs(v-if="doc.breadcrumbs !== false")
              TagLists
              Toc(v-if="doc.toc === true")
              .hidden-title
                slot/
              ArticleList(:sort="doc.sort")
              PrevNext(v-if="doc.prevnext")

            template(#empty)
              h1 {{ page.title }}
              Breadcrumbs(v-if="page.breadcrumbs !== false")
              TagLists
              ArticleList(:sort="page.sort")
              PrevNext(v-if="page.prevnext")

            template(#not-found)
              h1 {{ _startCase(path.split('/').pop()) }}
              Breadcrumbs
              ArticleList

    AppFooter
</template>
