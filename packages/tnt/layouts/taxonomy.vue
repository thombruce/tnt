<script setup>
const { path } = useRoute()

const items = path.replace(/(?:^\/|\/$)/, '').split('/')

const contentQuery = await queryContent().where({ [items[0].substring(1)]: { $exists: true } }).only(items[0].substring(1)).find()

const tags = _uniq(contentQuery.map((c) => c[items[0].substring(1)]).flat())
</script>

<template>
  <main class="my-10">
    <h1>{{ _startCase(items[0].substring(1)) }}</h1>
    <Breadcrumbs />

    <ul v-if="tags.length">
      <li v-for="tag of tags" :key="tag">
        <NuxtLink :to="`/${items[0]}/${tag}`">{{ tag }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
