<template lang="pug">
ContentNavigation(v-slot="{ navigation }")
  NuxtLink(v-for="link of navigation" :to="link._path" :key="link._path") {{ link.title }}
NuxtLink(to="/search")
  Icon(name="fa:search")
  span.sr-only Search
</template>
