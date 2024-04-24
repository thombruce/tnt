<script setup lang="ts">
const { copyright } = useAppConfig()
</script>

<template lang="pug">
footer.footer.footer-center.p-10
  small {{ copyright }}
</template>
