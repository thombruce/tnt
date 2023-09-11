<script setup>
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'rating')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'rating')
  },
  labelAlt: {},
  hint: {},
  hintAlt: {},
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
    <div :id="id" class="rating">
      <template v-for="option in _range(1,6)">
        <input
          :checked="modelValue == option"
          @change="$emit('update:modelValue', $event.target.value)"
          :value="option"
          type="radio"
          :name="name"
          class="mask mask-star"
        />
      </template>
    </div>
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
