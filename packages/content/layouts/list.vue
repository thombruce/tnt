<script setup>
const { path } = useRoute()
const { page } = useContent()
</script>

<template lang="pug">
article.prose
  ContentDoc
    template(#default="{ doc }")
      h1 {{ doc.title }}

      Breadcrumbs(v-if="page.breadcrumbs !== false")

      ContentRenderer.hidden-title(:value="doc")

    template(#empty)
      h1 {{ page.title }}

      Breadcrumbs(v-if="page.breadcrumbs !== false")

    template(#not-found)
      h1 {{ _startCase(path.split('/').pop()) }}

      Breadcrumbs

  ArticleList(:sort="page.sort")
</template>
