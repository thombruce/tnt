<script setup>
defineProps(['taxonomy'])
const { page } = useContent()
</script>

<template lang="pug">
dl.not-prose.pb-4.border-b(class="border-gray-500/50")
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
