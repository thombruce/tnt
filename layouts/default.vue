<template lang="pug">
.prose.mx-auto
  header.py-4.not-prose.flex.justify-between
    strong
      NuxtLink(to="/") TNT
    TntDarkmodeToggle/

  main
    TntBreadcrumbs/

    slot/
    
    TntContentList/

    TntPrevNext/
  
  footer.py-4.not-prose.text-center
    | &copy; {{ new Date().getFullYear() }}
</template>
