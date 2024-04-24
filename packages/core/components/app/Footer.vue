<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template lang="pug">
footer.footer.footer-center.p-10
  div
    p {{ appConfig.copyright }}
</template>
