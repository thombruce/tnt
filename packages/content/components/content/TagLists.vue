<script setup>
const { taxonomies } = useAppConfig()
</script>

<template lang="pug">
ContentQuery(:path="$route.path" find="one" v-slot="{ data }")
  div.flex.mt-5(v-if="_keys(data).some(k => taxonomies.includes(k))")
    template(v-for="tax in taxonomies")
      TagList.flex-1(v-if="data[tax]" :taxonomy="tax")
</template>
