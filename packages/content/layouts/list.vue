<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(`tnt-list-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
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
      PrevNext(v-if="doc.prevnext !== false")

    template(#empty)
      h1 {{ page.title }}
      Breadcrumbs(v-if="page.breadcrumbs !== false")
      TagLists
      Toc(v-if="page.toc === true")
      ArticleList(:sort="page.sort")
      PrevNext(v-if="page.prevnext !== false")

    template(#not-found)
      h1 {{ _startCase(path.split('/').pop()) }}
      Breadcrumbs
      ArticleList
</template>
