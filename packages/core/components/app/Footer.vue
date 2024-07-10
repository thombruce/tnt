<script setup lang="ts">
const { copyright } = useAppConfig()
</script>

<template lang="pug">
footer.mt-4
  small {{ copyright }}
</template>
