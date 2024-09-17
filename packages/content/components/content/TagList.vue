<script setup lang="ts">
defineProps(['taxonomy'])
const route = useRoute()
const { data: page } = await useAsyncData(`tnt-tag-list-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
.not-prose
  dl
    dt {{ _startCase(taxonomy) }}:
    dd
      ul.space-x-3
        TagListItem.inline(
          v-if="typeof page[taxonomy] === 'string'"
          :taxonomy="taxonomy"
          :tag="page[taxonomy]"
        )
        TagListItem.inline(
          v-else
          v-for="tag in page[taxonomy]"
          :taxonomy="taxonomy"
          :tag="tag"
          :key="tag"
        )
</template>
