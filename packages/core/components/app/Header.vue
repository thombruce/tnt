<script setup>
const { name } = useAppConfig()
</script>

<template lang="pug">
header.mb-4
  NuxtLink(to="/")
    strong {{ name }}
  nav.space-x-4
    AppNavigation
    NuxtLink(to="/settings")
      Icon(name="fa:cog")
      span.sr-only {{ i18n('settings', i18n('tnti18n.settings')) }}
</template>
