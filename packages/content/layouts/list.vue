<script setup>
const { page } = useContent()
</script>

<template lang="pug">
article.prose.max-w-none
  ContentDoc
    template(#default="{ doc }")
      h1 {{ doc.title }}

      Breadcrumbs(v-if="page.breadcrumbs !== false")

      ContentRenderer(:value="doc")

    template(#empty)
      h1 {{ page.title }}

      Breadcrumbs(v-if="page.breadcrumbs !== false")

  Navigation
</template>
