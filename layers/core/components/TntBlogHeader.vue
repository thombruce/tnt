<script setup lang="ts">
import type { BlogCollectionItem, CollectionItemBase } from '@nuxt/content'

const { page } = defineProps<{
  page: CollectionItemBase
}>() as { page: BlogCollectionItem }
</script>

<template lang="pug">
div.mb-5
  div.space-y-2
    div.space-x-3
      UBadge(v-if="page.category" color="neutral" variant="outline") {{ page.category }}
      strong(v-if="page.date") {{ new Date(page.date).toLocaleDateString() }}

    div.space-y-4
      h1(class="text-4xl font-extrabold") {{ page.title }}
      p(v-if="page.description" style="color: var(--ui-text-muted);") {{ page.description }}

    div
      UButton(
        v-if="page.authors"
        v-for="author in page.authors"
        :avatar="author.avatar"
        :to="author.to"
        :label="author.name"
        variant="link"
        color="neutral"
      )

  USeparator.py-5

  //- TODO: Add multi-image support
  .block.aspect-video(v-if="page.image")
    NuxtImg.w-full.h-full.object-cover(:src="page.image" fit="cover" width="1200" height="1200")
  UCarousel(v-else-if="page.images" v-slot="{ item }" :items="page.images" :ui="{ item: 'basis-1/3' }")
    .block.aspect-square
      NuxtImg.w-full.h-full.object-cover.rounded-lg(:src="item" fit="cover" width="1200" height="1200")
</template>