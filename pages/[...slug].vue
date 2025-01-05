<script setup lang="ts">
const { path } = useRoute()

defineOgImageComponent('NuxtSeo',
  {
    // theme: '#ff0000',
    colorMode: 'dark'
  }
)
</script>

<template lang="pug">
NuxtLayout(:name="'default'")
  ContentQuery(:path="path" find="one")
    template(#default="{ data }")
      ContentRenderer(:value="data")
        template(#empty)
    template(#not-found)
</template>
