<script setup>
const { params } = useRoute()

const taxonomy = params.tag[0]
const tag = params.tag[1]
</script>

<template>
  <main class="my-10">
    <h1>{{ _startCase(tag) }}</h1>
    <Breadcrumbs />

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
  </main>
</template>
