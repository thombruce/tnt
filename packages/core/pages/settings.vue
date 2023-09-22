<script setup>
definePageMeta({
  documentDriven: {
    page: false
  },
})

const { locale } = useI18n()
</script>

<template>
  <main class="my-10">
    <TntForm>
      <h3 class="font-bold text-lg">{{ i18n('settings', i18n('tnti18n.settings')) }}</h3>

      <ClientOnly>
        <TntSelect v-model="locale" :label="i18n('language', i18n('tnti18n.language'))" :options="['en','fr']" />
      </ClientOnly>

      <TntRadio v-model="$colorMode.preference" label="Dark Mode" :options="['system', 'light', 'dark']" />
    </TntForm>
  </main>
</template>
