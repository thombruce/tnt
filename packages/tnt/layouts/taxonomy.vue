<script setup>
const { path, params } = useRoute()

const taxonomy = params.tag[0]

const contentQuery = await queryContent().where({ [taxonomy]: { $exists: true } }).only(taxonomy).find()

const tags = _uniq(contentQuery.map((c) => c[taxonomy]).flat())
</script>

<template>
  <main class="my-10">
    <h1>{{ _startCase(taxonomy) }}</h1>
    <Breadcrumbs />

    <ul v-if="tags.length">
      <li v-for="tag of tags" :key="tag">
        <NuxtLink :to="`${path}/${tag}`">{{ tag }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
