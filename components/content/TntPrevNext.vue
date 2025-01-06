<script lang="ts" setup>
import type { QueryBuilderWhere } from '@nuxt/content'

const { path } = useRoute()

const where: QueryBuilderWhere = { _path: { $regex: new RegExp(`^${path.substring(0, path.lastIndexOf('/'))}/[^/]+$`) } }
</script>

<template lang="pug">
nav.pt-4.not-prose.grid.grid-flow-col
  ContentQuery(:path="path" find="surround" :where="where")
    template(#default="{ data }")
      NuxtLink.justify-self-start(v-if="data[0]" :to="data[0]._path")
        Icon.text-sm.mr-2(name="fa6-solid:angles-left")
        | {{ data[0].title }}
      NuxtLink.justify-self-end(v-if="data[1]" :to="data[1]._path")
        | {{ data[1].title }}
        Icon.text-sm.ml-2(name="fa6-solid:angles-right")
    template(#empty)
    template(#not-found)
</template>
