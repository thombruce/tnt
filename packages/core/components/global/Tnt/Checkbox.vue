<script setup>
const props = defineProps({
  modelValue: {
    default: []
  },
  label: {
    type: String,
  },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'checkbox')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'checkbox')
  },
  hint: {},
  checked: {
    type: [Boolean, String],
  },
  options: {
    type: Array,
  },
  klass: {
    type: String,
    default: 'checkbox'
  },
})

defineEmits([
  'update:modelValue'
])
</script>

<template>
  <div>
    <template v-if="options">
      <label v-if="label" :for="id" class="label">
        <span v-if="label" class="label-text" v-html="label" />
      </label>
      <div v-for="option in options" class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">{{ option.label || option }}</span>
          <input
            :checked="modelValue.includes(option.value || option)"
            @change="$emit('update:modelValue', _xor(modelValue, [$event.target.value]))"
            :value="option.value || option"
            type="checkbox"
            :name="name"
            :class="klass"
          />
        </label>
      </div>
      <label v-if="hint" :for="id" class="label">
        <span v-if="hint" class="label-text-alt" v-html="hint" />
      </label>
    </template>
    <label v-else class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :name="name"
        type="checkbox"
        :class="klass"
      />
    </label>
  </div>
</template>
