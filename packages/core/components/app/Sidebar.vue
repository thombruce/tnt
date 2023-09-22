<script setup>
import { useUIStore } from '@/stores/ui'

const { toggleDrawer } = useUIStore()
</script>

<template>
  <div class="drawer-side z-50">
    <div class="drawer-overlay" @click="toggleDrawer()"></div>
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <!-- Empty -->
    </ul>
  </div>
</template>
