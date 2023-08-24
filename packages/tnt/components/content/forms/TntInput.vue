<script setup>
defineProps({
  modelValue: {
    default: ''
  },
  id: {},
  name: {},
  type: {
    type: String,
    default: 'text'
  },
  label: {},
  labelAlt: {},
  hint: {},
  hintAlt: {},
  placeholder: {},
})

defineEmits([
  'update:modelValue'
])
</script>

<template>
  <div class="form-control">
    <label v-if="label || labelAlt" :for="id" class="label">
      <span v-if="label" class="label-text" v-html="label" />
      <span v-if="labelAlt" class="label-text-alt" v-html="labelAlt" />
    </label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="input input-bordered"
    />
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
