<script setup>
const { path, params } = useRoute()

const taxonomy = params.tag[0]

const contentQuery = await queryContent().where({ [taxonomy]: { $exists: true } }).only(taxonomy).find()

const tags = _uniq(contentQuery.map((c) => c[taxonomy]).flat())
</script>

<template>
  <main class="my-10">
    <ContentQuery :path="path" :where="{ _path: path }">
      <template #default="{ data }">
        <h1>{{ data[0].title }}</h1>

        <Breadcrumbs v-if="data[0].breadcrumbs !== false" />

        <ContentRenderer :value="data[0]">
          <template #empty>
          </template>
        </ContentRenderer>
      </template>
      <template #not-found>
        <h1>{{ _startCase(taxonomy) }}</h1>
        <Breadcrumbs />
      </template>
    </ContentQuery>

    <ul v-if="tags.length">
      <li v-for="tag of tags" :key="tag">
        <NuxtLink :to="`${path}/${_kebabCase(tag)}`">{{ tag }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
