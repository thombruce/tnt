<script setup lang="ts">
const sidebar = useSidebar()

const { path, params } = useRoute()

const taxonomy = params.tag[0]

const { data: page } = await useAsyncData(`tnt-taxonomy-${path}`, () => queryContent(path).where({ _path: path }).findOne())

const contentQuery = await queryContent().where({ [taxonomy]: { $exists: true } }).only(taxonomy).find()

const tags = _uniq(contentQuery.map((c) => c[taxonomy]).flat())
</script>

<template lang="pug">
.flex.h-screen.overflow-hidden
  AppSidebar(
    class="w-80 transition-all duration-300"
    :class="sidebar ? 'ml-0' : '-ml-80'"
  )

  .flex-1.overflow-y-auto
    AppHeader

    main
      .tnt-container
        article.prose
          template(v-if="page")
            h1 {{ page.title }}
            Breadcrumbs(v-if="page.breadcrumbs !== false")
            ContentRenderer(:value="page")
              template(#empty)
                // Empty
          template(v-else)
            h1 {{ _startCase(taxonomy) }}
            Breadcrumbs
          TaxonomyTagList(:taxonomy="taxonomy" :tags="tags")

    AppFooter
</template>
