<script setup>
const { page } = useContent()
</script>

<template>
  <main class="my-10">
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>

        <Breadcrumbs v-if="page.breadcrumbs !== false" />

        <Toc v-if="page.toc === true" />

        <ContentRenderer :value="doc" />

        <PrevNext v-if="page.prevnext !== false" />
      </template>
    </ContentDoc>
    <ClientOnly>
      <Cusdis />
    </ClientOnly>
  </main>
</template>
