<script setup>
const { page } = useContent()
const { path } = useRoute()

if (process.server) {
  const event = useRequestEvent()
  event.node.res.statusCode = 200
}

const items = path.replace(/(?:^\/|\/$)/, '').split('/')
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
        <h1>{{ _startCase(items[1]) }}</h1>

        <Breadcrumbs />
      </template>
    </ContentDoc>

    <ContentQuery path="/" :where="{ [items[0]]: {
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
