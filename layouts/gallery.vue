<template lang="pug">
NuxtLayout
  TntBreadcrumbs/

  TntContentList.not-prose.grid.grid-cols-3.gap-4(v-slot="{ list }")
    TntContent(v-for="page in list" :page="page")
      NuxtLink.block(:to="page._path")
        NuxtImg(:src="page._file")

  TntPrevNext/
</template>
