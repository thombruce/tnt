<script setup lang="ts">
definePageMeta({
  documentDriven: {
    page: false
  },
})

const { path } = useRoute()
const { taxonomies } = useAppConfig()
const items = path.replace(/(?:^\/|\/$)/, '').split('/')

let layout = ''

if (taxonomies.includes(items[0].substring(1)) && items[1]) {
  layout = 'tags'
} else if (taxonomies.includes(items[0].substring(1))) {
  layout = 'taxonomy'
}
</script>

<template>
  <div>
    <NuxtLayout :name="layout as string || 'default'">
      <!--
        Rendering handled by layout.
      -->
    </NuxtLayout>
  </div>
</template>
