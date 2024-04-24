<script setup lang="ts">
definePageMeta({
  documentDriven: {
    page: false
  },
})

const { params } = useRoute()
const { taxonomies } = useAppConfig()

const taxonomy = params.tag[0]
const tag = params.tag[1]

let layout = ''

if (taxonomies.includes(taxonomy) && tag) {
  layout = 'tags'
} else if (taxonomies.includes(taxonomy)) {
  layout = 'taxonomy'
}
</script>

<template lang="pug">
div
  NuxtLayout(:name="layout as string || 'default'")
    // Rendering handled by layout.
</template>
