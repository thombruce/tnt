<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="navbar bg-base-300 sticky top-0 z-50">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ appConfig.name }}</NuxtLink>
    </div>
  </div>
</template>