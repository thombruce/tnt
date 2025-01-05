<script setup lang="ts">
defineOgImageComponent('NuxtSeo',
  {
    // theme: '#ff0000',
    colorMode: 'dark'
  }
)
</script>

<template lang="pug">
main.prose
  ContentDoc
    template(#empty)
    template(#not-found)

  TntContentList/
</template>
