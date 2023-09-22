<script setup>
import { useUIStore } from '@thombruce/tnt/stores/ui'

const { toggleDrawer } = useUIStore()
</script>

<template>
  <div class="drawer-side z-50">
    <div class="drawer-overlay" @click="toggleDrawer()"></div>
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <ContentNavigation v-slot="{ navigation }">
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" @click="toggleDrawer()">{{ link.title }}</NuxtLink>
        </li>
      </ContentNavigation>
    </ul>
  </div>
</template>
