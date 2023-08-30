<script setup>
const { path } = useRoute()

const items = path.replace(/(?:^\/|\/$)/, '').split('/')
</script>

<template>
  <main class="my-10">
    <h1>{{ _startCase(items[1]) }}</h1>
    <Breadcrumbs />

    <ContentQuery path="/" :where="{ [items[0].substring(1)]: {
      $containsAny: [
        items[1],
        _kebabCase(items[1]),
        _startCase(items[1])
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
