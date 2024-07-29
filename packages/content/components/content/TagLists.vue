<script setup>
const props = defineProps({
  taxonomies: {
    type: Array
  },
  exclude: {
    type: Array,
    default: []
  },
  includeAuthors: Boolean
})

const { taxonomies: rawTaxonomies } = useAppConfig()

const taxonomiesList = props.taxonomies || _without(rawTaxonomies, ...props.exclude)
</script>

<template lang="pug">
ContentQuery(:path="$route.path" find="one" v-slot="{ data }")
  div.flex.mt-5(v-if="_keys(data).some(k => taxonomiesList.includes(k))")
    template(v-for="tax in taxonomiesList")
      TagList.flex-1(v-if="data[tax]" :taxonomy="tax")
</template>
