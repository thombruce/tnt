<script setup lang="ts">
import { useSiteConfig } from '#imports'

const { name, copyright } = useSiteConfig()
</script>

<template lang="pug">
.prose.mx-auto
  header.py-4.not-prose.flex.justify-between
    strong
      NuxtLink(to="/") {{ name }}

    TntDarkmodeToggle/

  main
    slot/
  
  footer.py-4.not-prose.text-center
    | {{ copyright }}
</template>
