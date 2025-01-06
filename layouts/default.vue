<script setup lang="ts">
const { name, copyright } = useAppConfig()
</script>

<template lang="pug">
.prose.mx-auto
  header.py-4.not-prose.flex.justify-between
    strong
      NuxtLink(to="/") {{ name }}

    TntDarkmodeToggle/

  main
    TntBreadcrumbs/

    slot/
    
    TntContentList/

    TntPrevNext/
  
  footer.py-4.not-prose.text-center
    | {{ copyright }}
</template>
