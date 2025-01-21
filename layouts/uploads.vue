<template lang="pug">
NuxtLayout
  TntBreadcrumbs/

  ContentDoc
    template(#default="{ doc }")
      NuxtImg(:src="doc._file")
    template(#empty)
    template(#not-found)

  TntPrevNext/
</template>
