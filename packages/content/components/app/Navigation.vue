<template>
  <ContentNavigation v-slot="{ navigation }">
    <li v-for="link of navigation" :key="link._path">
      <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
    </li>
  </ContentNavigation>
</template>
