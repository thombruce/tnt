<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="w-full navbar bg-base-300 sticky top-0 z-40">
    <div class="flex-none lg:hidden">
      <label for="my-drawer-3" class="btn btn-square btn-ghost">
        <Icon name="fa:bars" />
      </label>
    </div> 
    <div class="flex-1 px-2 mx-2">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ appConfig.name }}</NuxtLink>
    </div>
    <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal">
        <li><AppSettings /></li>
      </ul>
    </div>
  </div>
</template>
