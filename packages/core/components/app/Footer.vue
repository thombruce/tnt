<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer class="footer footer-center p-10">
    <div>
      <p>{{ appConfig.copyright }}</p>
    </div>
  </footer>
</template>
