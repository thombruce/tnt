<script setup lang="ts">
// TODO: Move to appConfig or runtimeConfig
//       ...but let's acknowledge that name is an
//       awkward one as Nuxt SEO does expect this value
//       to be set in siteConfig, right? Can we retrieve
//       it from appConfig or runtimeConfig within nuxt.config
//       to set the siteConfig value from one of those?
const { name } = useSiteConfig()
</script>

<template lang="pug">
div(class="w-full \
           bg-neutral-50 \
           dark:bg-neutral-900 \
           border-b \
           border-neutral-200 \
           dark:border-neutral-800"
)
  UContainer(
    class="flex \
          items-center \
          justify-between"
  )
    UButton(
      :label="name"
      to="/"
      color="neutral"
      variant="ghost"
      class="my-2 px-2.5 py-1.5 font-extrabold"
    )/
    .flex
      TntDarkMode/
</template>
