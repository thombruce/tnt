<script setup>
const { page } = useContent()
</script>

<template>
  <main class="my-10">
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>

        <Breadcrumbs v-if="page.breadcrumbs !== false" />

        <ContentRenderer :value="doc" />

        <ArticlesList />
      </template>
      <template #empty>
        <h1>{{ page.title }}</h1>

        <Breadcrumbs v-if="page.breadcrumbs !== false" />

        <ArticlesList />
      </template>
    </ContentDoc>
  </main>
</template>
