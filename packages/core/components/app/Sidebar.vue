<template>
  <div class="drawer-side z-50">
    <label for="tnt-drawer" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <AppNavigation />
      <li><NuxtLink to="/settings">{{ i18n('settings', i18n('tnti18n.settings')) }}</NuxtLink></li>
    </ul>
  </div>
</template>
