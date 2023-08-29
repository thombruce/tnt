<script setup>
const { page } = useContent()
const { path } = useRoute()

if (process.server) {
  const event = useRequestEvent()
  event.node.res.statusCode = 200
}

const items = path.replace(/(?:^\/|\/$)/, '').split('/')

const contentQuery = await queryContent().where({ [items[0]]: { $exists: true } }).only(items[0]).find()

const tags = _uniq(contentQuery.map((c) => c[items[0]]).flat())
</script>

<template>
  <main class="my-10">
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

      <template #not-found>
        <h1>{{ _startCase(items[0]) }}</h1>
        <Breadcrumbs />
      </template>
    </ContentDoc>

    <ul v-if="tags.length">
      <li v-for="tag of tags" :key="tag">
        <NuxtLink :to="`/${items[0]}/${tag}`">{{ tag }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
