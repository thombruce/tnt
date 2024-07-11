<script setup lang="ts">
const { toc } = useContent()
</script>

<template lang="pug">
div
  h2 Table of Contents
  ol(v-if="toc && toc.links")
    li(v-for="link in toc.links" :key="link.text")
      a(:href="`#${link.id}`")
        | {{ link.text }}
</template>
