<script setup lang="ts">
import type { BlogCollectionItem, CollectionItemBase } from '@nuxt/content'

const { page } = defineProps<{
  page: CollectionItemBase
}>() as { page: BlogCollectionItem }
</script>

<template lang="pug">
div
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
</template>