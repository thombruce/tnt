<script setup>
import { useUIStore } from '@/stores/ui'

const { toggleDrawer } = useUIStore()
</script>

<template>
  <div class="drawer-side z-50">
    <div class="drawer-overlay" @click="toggleDrawer()"></div>
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <li><NuxtLink to="/settings" @click="toggleDrawer()">{{ i18n('settings', i18n('tnti18n.settings')) }}</NuxtLink></li>
    </ul>
  </div>
</template>
