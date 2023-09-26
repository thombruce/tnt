<script setup>
const { path, params } = useRoute()

const taxonomy = params.tag[0]
const tag = params.tag[1]
</script>

<template>
  <article class="prose w-screen px-3">
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
        <h1>{{ _startCase(tag) }}</h1>
        <Breadcrumbs />
      </template>
    </ContentQuery>

    <ContentQuery path="/" :where="{ [taxonomy]: {
      $containsAny: [
        tag,
        _kebabCase(tag),
        _startCase(tag)
      ]
    } }">
      <template #default="{ data }">
        <ul>
          <li v-for="article of data" :key="article._path">
            <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentQuery>
  </article>
</template>
