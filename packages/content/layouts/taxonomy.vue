<script setup>
const { path, params } = useRoute()

const taxonomy = params.tag[0]

const contentQuery = await queryContent().where({ [taxonomy]: { $exists: true } }).only(taxonomy).find()

const tags = _uniq(contentQuery.map((c) => c[taxonomy]).flat())
</script>

<template lang="pug">
article.prose.max-w-none
  ContentQuery(:path="path" :where="{ _path: path }")
    template(#default="{ data }")
      h1 {{ data[0].title }}

      Breadcrumbs(v-if="data[0].breadcrumbs !== false")

      ContentRenderer(:value="data[0]")
        template(#empty)
    template(#not-found)
      h1 {{ _startCase(taxonomy) }}
      Breadcrumbs
  .not-prose
    ul(class="divide-y divide-gray-500/50" v-if="tags.length")
      template(v-for="tag of tags" :key="tag")
        li.py-5
          NuxtLink(:to="`${path}/${_kebabCase(tag)}`")
            ContentQuery(:path="`${path}/${_kebabCase(tag)}`" :where="{ _path: `${path}/${_kebabCase(tag)}` }")
              template(#default="{ data }")
                strong {{ data[0].title }}
              template(#not-found)
                strong {{ tag }}
</template>
