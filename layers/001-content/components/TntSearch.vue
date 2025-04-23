<script setup lang="ts">
import type { PageCollections } from '@nuxt/content'

const { $i18n: { t } } = useNuxtApp()

const query = ref('')

const sections: { collection: keyof PageCollections, section: object[] | undefined }[] = []

for (const collection of tntContentCollections) {
  const section = await useAsyncData(`search-${collection}`, () => queryCollectionSearchSections(collection))
    .then(async => async.data.value?.map(c => {
      return {
        label: c.title,
        suffix: c.content,
        onSelect() { navigateTo(c.id) }
      }
    }))
  sections.push({ collection, section })
}

const groups = computed(() => {
  return sections.map(s => {
    return {
      id: s.collection,
      label: query.value ? `${t('content.collections.' + s.collection)} matching “${query.value}”...` : t('content.collections.' + s.collection),
      items: s.section || [],
      // ignoreFilter: true // Can be used if we want to disable default filtering and use our own search logic.
    }
  })
})
</script>

<template lang="pug">
UModal
  UButton(
    label="Search..."
    color="neutral"
    variant="ghost"
    icon="i-lucide-search"
    class="my-2 px-2.5 py-1.5"
  )/

  template(#content)
    UCommandPalette(
      v-model:search-term="query"
      :groups="groups"
      :fuse="{ fuseOptions: { keys: ['title', 'content'], includeMatches: true } }"
      placeholder="Search content..."
      class="h-80"
    )/
</template>
