<script setup>
const { locale } = useI18n()
</script>

<template lang="pug">
.prose.w-screen.px-3
  TntForm
    h3.font-bold.text-lg {{ i18n('settings', i18n('tnti18n.settings')) }}

    ClientOnly
      TntSelect(v-model="locale" :label="i18n('language', i18n('tnti18n.language'))" :options="['en','fr']")
</template>
