<script setup lang="ts">
const query = ref('')

const content = await useAsyncData('search', () => queryCollectionSearchSections('content'))
  .then(async => async.data.value?.map(c => {
    return {
      label: c.title,
      suffix: c.content,
      onSelect() { navigateTo(c.id) }
    }
  }))

const groups = computed(() => [{
  id: 'content',
  label: query.value ? `Content matching “${query.value}”...` : 'Content',
  items: content || [],
  // ignoreFilter: true // Can be used if we want to disable default filtering and use our own search logic.
}])
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
