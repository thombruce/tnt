<script setup lang="ts">
import type { QueryBuilderWhere } from '@nuxt/content'

const { path } = useRoute()

const where: QueryBuilderWhere = {
  _path: { $regex: new RegExp(`^${(path).replace(/\/$/, "")}/.+$`) }
}
</script>

<template lang="pug">
NuxtLayout
  TntBreadcrumbs/

  TntContentList.not-prose.grid.grid-cols-3.gap-4(:where="where" v-slot="{ list }")
    TntContent(v-for="page in list" :page="page")
      NuxtLink.block(:to="page._path")
        NuxtImg(:src="page._file")

  TntPrevNext/
</template>
