<template lang="pug">
NuxtLayout
  TntBreadcrumbs/

  TntContentList.flex.flex-row(v-slot="{ page }")
    TntContent(v-for="page in list" :page="page")
      NuxtLink.block(:to="page._path")
        NuxtImg(:src="page._file")

  TntPrevNext/
</template>
