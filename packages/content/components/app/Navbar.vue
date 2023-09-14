<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="navbar bg-base-300 sticky top-0 z-50">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ appConfig.name }}</NuxtLink>
    </div>
    <ContentNavigation v-slot="{ navigation }">
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
          <li><AppSettings /></li>
        </ul>
      </div>
    </ContentNavigation>
  </div>
</template>