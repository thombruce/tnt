<script setup>
defineProps(['taxonomy'])
const route = useRoute()
const { data: page } = await useAsyncData(`tnt-tag-list-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
.not-prose
  dl
    dt
      strong {{ _startCase(taxonomy) }}:
    dd
      ul.space-x-3
        TagListItem(
          v-if="typeof page[taxonomy] === 'string'"
          :taxonomy="taxonomy"
          :tag="page[taxonomy]"
        )
        TagListItem(
          v-else
          v-for="tag in page[taxonomy]"
          :taxonomy="taxonomy"
          :tag="tag"
          :key="tag"
        )
</template>
