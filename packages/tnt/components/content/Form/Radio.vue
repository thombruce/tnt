<script setup>
defineProps([
  'name',
  'label',
  'options',
])
</script>

<template>
  <div class="form-control">
    <label v-if="label || labelAlt" :for="id" class="label">
      <span v-if="label" class="label-text" v-html="label" />
      <span v-if="labelAlt" class="label-text-alt" v-html="labelAlt" />
    </label>
    <div v-for="option in options" class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">{{ option.label || option }}</span>
        <input type="radio" :name="name" class="radio" :value="option.value || option" />
      </label>
    </div>
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
