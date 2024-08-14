<template lang="pug">
article
  ContentDoc
    template(#default="{ doc }")
      h1 {{ doc.title }}
      Breadcrumbs(v-if="doc.breadcrumbs !== false")
      Byline(v-if="doc.authors" :authors="doc.authors")
      TagLists(:page="doc" :exclude="['authors']")
      Toc(v-if="doc.toc === true")
      .hidden-title
        slot/
      PrevNext(v-if="doc.prevnext !== false")
    template(#empty)
      slot/
    template(#not-found)
      slot/
</template>
