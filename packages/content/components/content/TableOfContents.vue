<template lang="pug">
ContentQuery(:path="$route.path" find="one" v-slot="{ data: { body: { toc } } }")
  .tnt-toc(v-if="toc?.links")
    h2 Table of Contents
    ol
      li(v-for="link in toc.links" :key="link.text")
        a(:href="`#${link.id}`")
          | {{ link.text }}
</template>
