<script setup>
defineProps([
  'id',
  'name',
  'label',
  'labelAlt',
  'hint',
  'hintAlt',
  'score',
])
</script>

<template>
  <div class="form-control">
    <label v-if="label || labelAlt" :for="id" class="label">
      <span v-if="label" class="label-text" v-html="label" />
      <span v-if="labelAlt" class="label-text-alt" v-html="labelAlt" />
    </label>
    <div :id="id" class="rating">
      <input type="radio" :name="name" class="mask mask-star" :checked="score == 1" />
      <input type="radio" :name="name" class="mask mask-star" :checked="score == 2" />
      <input type="radio" :name="name" class="mask mask-star" :checked="score == 3" />
      <input type="radio" :name="name" class="mask mask-star" :checked="score == 4" />
      <input type="radio" :name="name" class="mask mask-star" :checked="score == 5" />
    </div>
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
