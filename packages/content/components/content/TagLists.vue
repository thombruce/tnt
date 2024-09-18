<script setup lang="ts">
const props = defineProps({
  page: Object,
  include: {
    type: Array
  },
  exclude: {
    type: Array,
    default: []
  },
  includeAuthors: Boolean
})

const { taxonomies: rawTaxonomies } = useAppConfig()

const taxonomies: string[] = (props.include || _without(rawTaxonomies, ...props.exclude)) as string[]

const route = useRoute()

const { data } =
  props.page
  ? { data: { ..._pick(props.page, taxonomies) } }
  : await useAsyncData(`tnt-toc-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
div.flex.mt-5(v-if="_keys(data).some(k => taxonomies.includes(k))")
  template(v-for="tax in taxonomies")
    TagList.flex-1(v-if="data[tax]" :taxonomy="tax")
</template>
