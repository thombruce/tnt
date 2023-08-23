<script setup>
defineProps([
  'name',
  'label',
  'checked',
])
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input :name="name" type="checkbox" :checked="checked" class="toggle" />
    </label>
  </div>
</template>
