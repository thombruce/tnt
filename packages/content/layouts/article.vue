<script setup>
const { page } = useContent()
const { taxonomies } = useAppConfig()
</script>

<template>
  <article class="prose w-screen px-3">
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>

        <Breadcrumbs v-if="page.breadcrumbs !== false" />

        <div v-if="_keys(doc).some(k => taxonomies.includes(k))" class="flex mt-5">
          <template v-for="tax in taxonomies">
            <TagList v-if="doc[tax]" :taxonomy="tax" class="flex-1" />
          </template>
        </div>

        <Toc v-if="page.toc === true" />

        <ContentRenderer :value="doc" />

        <PrevNext v-if="page.prevnext !== false" />
      </template>
    </ContentDoc>
    <ClientOnly>
      <Cusdis />
    </ClientOnly>
  </article>
</template>
