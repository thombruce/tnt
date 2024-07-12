<template lang="pug">
ContentNavigation(v-slot="{ navigation }")
  NuxtLink(v-for="link of navigation" :to="link._path" :key="link._path") {{ link.title }}
</template>
