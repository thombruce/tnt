<script setup>
const colorMode = useColorMode()

const { locale } = useI18n()
</script>

<template lang="pug">
.prose.max-w-none
  TntForm
    h3.font-bold.text-lg {{ i18n('settings', i18n('tnti18n.settings')) }}

    ClientOnly
      TntSelect(v-model="colorMode.preference" :label="i18n('darkmode', i18n('tnti18n.darkmode'))" :options="['system', 'light', 'dark']")

    ClientOnly
      TntSelect(v-model="locale" :label="i18n('language', i18n('tnti18n.language'))" :options="['en','fr']")
</template>
