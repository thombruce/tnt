<script setup>
const { path, params } = useRoute()

// Get taxonomy and tag name from route params
const taxonomy = params.tag[0]
const tag = params.tag[1]

// Fetch content page if it exists
const { data: page } = await useAsyncData(`tnt-tags-${path}`, () => queryContent(path).where({ _path: path }).findOne())

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
if (page && page.title) {
  orConditions.push({ $icontains: page.title })
}
</script>

<template lang="pug">
article.prose
  template(v-if="page")
    h1 {{ page.title }}
    Breadcrumbs(v-if="page.breadcrumbs !== false")
    ContentRenderer(:value="page")
      template(#empty)
        // Empty
  template(v-else)
    h1 {{ _startCase(tag) }}
    Breadcrumbs

  ArticleList(path="/", :query="{ where: { [taxonomy]: { $or: orConditions } } }")
</template>
