<template>
  <div class="drawer-side z-50">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <ContentNavigation v-slot="{ navigation }">
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ContentNavigation>
      <li><AppSettings /></li>
    </ul>
  </div>
</template>
