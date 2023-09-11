<script setup>
const props = defineProps({
  modelValue: {
    default: []
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'range')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'range')
  },
  labelAlt: {},
  hint: {},
  hintAlt: {},
  min: {
    default: 0
  },
  max: {
    default: 100
  },
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
      type="range"
      :min="min"
      :max="max"
      class="range"
    />
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
