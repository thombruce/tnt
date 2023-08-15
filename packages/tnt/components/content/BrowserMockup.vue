<script setup>
defineProps(['url'])
</script>

<template>
  <div class="mockup-browser border border-base-300">
    <div class="mockup-browser-toolbar">
      <div class="input border border-base-300">{{ url }}</div>
    </div>
    <div class="flex justify-center px-4 py-16 border-t border-base-300"><slot /></div>
  </div>
</template>
