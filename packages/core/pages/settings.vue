<script setup>
const colorMode = useColorMode()
const { locale } = useI18n()
</script>

<template lang="pug">
.prose.w-screen.px-3
  TntForm
    h3.font-bold.text-lg {{ i18n('settings', i18n('tnti18n.settings')) }}

    ClientOnly
      TntSelect(v-model="locale" :label="i18n('language', i18n('tnti18n.language'))" :options="['en','fr']")

    TntRadio(v-model="$colorMode.preference" label="Dark Mode" :options="['system', 'light', 'dark']")
</template>
