<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const route = useRoute()

const {
  path = undefined,
  where = undefined,
  sort = undefined
} = defineProps<{
  path?: string,
  where?: any,
  sort?: any,
}>()

const whereOrDefault: QueryBuilderParams = { _path: { $regex: new RegExp(`^${(path || route.path).replace(/\/$/, "")}/.+$`) } }
</script>

<template lang="pug">
TntContentList.not-prose.grid.grid-cols-3.gap-4(
  :path="path"
  :where="whereOrDefault"
  :sort="sort"
  v-slot="{ list }"
)
  TntContent(v-for="page in list" :page="page")
    NuxtLink.block(:to="page._path")
      NuxtImg(:src="page._file")
</template>
