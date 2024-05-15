<script setup>
const { path, params } = useRoute()

// Get taxonomy and tag name from route params
const taxonomy = params.tag[0]
const tag = params.tag[1]

// Fetch content page if it exists
const { data: page } = await useAsyncData('tags', () => queryContent(path).findOne())

// Default tag or conditions, used in the absence of a page
let orConditions = [
  { $icontains: _lowerCase(tag) },
  {
    $containsAny: [
      tag,
      _kebabCase(tag)
    ]
  }
]

// If page exists, add title to or query conditions
if (page.value && page.value.title) {
  orConditions.push({ $icontains: page.value.title })
}
</script>

<template>
  <article class="prose w-screen px-3">
    <!-- TODO: We're querying for the page again; this is redundant -->
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
      $or: orConditions
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
