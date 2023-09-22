<script setup>
import { useUIStore } from '@/stores/ui'

const appConfig = useAppConfig()

const { toggleDrawer } = useUIStore()
</script>

<template>
  <div class="w-full navbar bg-base-300 sticky top-0 z-40">
    <div class="flex-none lg:hidden">
      <button @click="toggleDrawer()" class="btn btn-square btn-ghost">
        <Icon name="fa:bars" />
      </button>
    </div> 

    <div class="flex-1 px-2 mx-2">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ appConfig.name }}</NuxtLink>
    </div>

    <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal">
        <li><NuxtLink to="/settings">{{ i18n('settings', i18n('tnti18n.settings')) }}</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>
