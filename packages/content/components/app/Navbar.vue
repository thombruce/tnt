<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <div class="w-full navbar sticky top-0 z-40">
    <div class="flex-1 px-2 mx-2">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ appConfig.name }}</NuxtLink>
    </div>

    <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal">
        <ContentNavigation v-slot="{ navigation }">
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ContentNavigation>
      </ul>
    </div>

    <div class="flex-none">
      <AppSettings />
    </div>
  </div>
</template>
