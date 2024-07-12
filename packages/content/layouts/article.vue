<script setup>
const { page } = useContent()
const { taxonomies } = useAppConfig()
</script>

<template lang="pug">
article.prose.max-w-none
  ContentDoc
    template(#default="{ doc }")
      h1 {{ doc.title }}

      Breadcrumbs(v-if="page.breadcrumbs !== false")

      div.flex.mt-5(v-if="_keys(doc).some(k => taxonomies.includes(k))")
        template(v-for="tax in taxonomies")
          TagList.flex-1(v-if="doc[tax]" :taxonomy="tax")

      Toc(v-if="page.toc === true")

      ContentRenderer(:value="doc")

      PrevNext(v-if="page.prevnext !== false")
</template>
