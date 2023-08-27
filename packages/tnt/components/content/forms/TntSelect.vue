<script setup>
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'select')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'select')
  },
  labelAlt: {},
  hint: {},
  hintAlt: {},
  placeholder: {},
  options: {}, // array of strings or { value, text } objects
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
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :id="id"
      :name="name"
      class="select select-bordered"
    >
      <option disabled selected>{{ placeholder }}</option>
      <option v-for="option in options" :value="option.value || option">{{ option.text || option }}</option>
    </select>
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
