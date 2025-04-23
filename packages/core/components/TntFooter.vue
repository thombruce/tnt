<script setup lang="ts">
const { copyright } = useSiteConfig()
</script>

<template lang="pug">
div(class="w-full \
           border-t \
           border-neutral-200 \
           dark:border-neutral-800"
)
  UContainer(
    class="flex \
          items-center \
          justify-between"
  )
    p(class="py-2 grow text-center") {{ copyright }}
</template>
