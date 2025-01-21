<script setup lang="ts">
const { page } = defineProps<{
  page: any,
}>()
</script>

<template lang="pug">
article(:key="page._path")
  slot
    header.mb-2
      h2.mb-1
        NuxtLink(:to="page._path")
          Icon.mr-4(v-if="page.icon" :name="page.icon")
          | {{ page.navigation?.title || page.title }}

      time.text-sm.text-gray-500(v-if="page.createdAt || page.created || page.date") {{ new Date(page.createdAt || page.created || page.date).toDateString() }}

    MDC(v-if="page[preview]" :value="page[preview]" unwrap="p")

    section
      TntContentAttachments(v-if="page.attachments" :attachments="page.attachments")/
</template>
