<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer class="footer footer-center p-10">
    <div>
      <div v-html="appConfig.footer.icon" class="fill-current"></div>
      <p class="font-bold whitespace-pre">
        {{ appConfig.footer.text }}
      </p>
      <p>{{ appConfig.footer.copyright }}</p>
    </div>
  </footer>
</template>
