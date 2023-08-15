<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <div>
    <h2>Table of Contents</h2>
    <ol v-if="toc && toc.links">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ol>
  </div>
</template>
