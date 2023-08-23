<script setup>
defineProps([
  'id',
  'name',
  'type',
  'label',
  'labelAlt',
  'hint',
  'hintAlt',
  'placeholder',
])
</script>

<template>
  <File v-if="type === 'file'" v-bind="$props" />
  <Range v-else-if="type === 'range'" v-bind="$props" />
  <div v-else class="form-control">
    <label v-if="label || labelAlt" :for="id" class="label">
      <span v-if="label" class="label-text" v-html="label" />
      <span v-if="labelAlt" class="label-text-alt" v-html="labelAlt" />
    </label>
    <input :id="id" :name="name" :type="type" class="input input-bordered" :placeholder="placeholder" />
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
