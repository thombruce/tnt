<script setup>
const { page } = useContent()
</script>

<template>
  <article class="prose w-screen px-3">
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>

        <Breadcrumbs v-if="page.breadcrumbs !== false" />

        <ContentRenderer :value="doc" />
      </template>

      <template #empty>
        <h1>{{ page.title }}</h1>

        <Breadcrumbs v-if="page.breadcrumbs !== false" />
      </template>
    </ContentDoc>
    <Navigation />
  </article>
</template>
