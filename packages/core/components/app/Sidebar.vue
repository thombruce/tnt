<script setup>
import { useUIStore } from '@/stores/ui'

const { toggleDrawer } = useUIStore()
</script>

<template lang="pug">
div.drawer-side.z-50
  div.drawer-overlay(@click="toggleDrawer()")
  ul.menu.p-4.w-80.min-h-full.bg-base-200
    //- Empty
</template>
