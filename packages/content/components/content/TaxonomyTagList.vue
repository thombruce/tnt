<script setup lang="ts">
defineProps(['taxonomy', 'tags'])
const route = useRoute()
const { data: page } = await useAsyncData(`tnt-tag-list-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
.not-prose
    ul(class="divide-y divide-gray-500/50" v-if="tags.length")
      template(v-for="tag of tags" :key="tag")
        TagListItem.py-5(:taxonomy="taxonomy" :tag="tag")
</template>
