<script setup>
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'textarea')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'textarea')
  },
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
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id"
    :name="name"
    class="textarea textarea-bordered h-24"
    :placeholder="placeholder"
  ></textarea>
  <label v-if="hint || hintAlt" :for="id" class="label">
    <span v-if="hint" class="label-text-alt" v-html="hint" />
    <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
  </label>
</div>
</template>
