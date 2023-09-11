<script setup>
defineProps(['image'])
</script>

<template>
  <div class="hero not-prose bg-base-200" :style="image ? 'background-image: url(' + image + ');' : ''">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold"><slot /></h1>
        <ContentSlot :use="$slots.description" unwrap="p" />
      </div>
    </div>
  </div>
</template>
