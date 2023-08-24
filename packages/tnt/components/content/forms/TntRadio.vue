<script setup>
defineProps([
  'modelValue',
  'name',
  'label',
  'options',
])

defineEmits([
  'update:modelValue'
])
</script>

<template>
  <div class="form-control">
    <template v-if="options">
      <label v-if="label || labelAlt" :for="id" class="label">
        <span v-if="label" class="label-text" v-html="label" />
        <span v-if="labelAlt" class="label-text-alt" v-html="labelAlt" />
      </label>
      <div v-for="option in options" class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">{{ option.label || option }}</span>
          <input
            :checked="modelValue == (option.value || option)"
            @change="$emit('update:modelValue', $event.target.value)"
            :value="option.value || option"
            type="radio"
            :name="name"
            class="radio"
          />
        </label>
      </div>
      <label v-if="hint || hintAlt" :for="id" class="label">
        <span v-if="hint" class="label-text-alt" v-html="hint" />
        <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
      </label>
    </template>
    <label v-else class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :name="name"
        type="radio"
        class="radio"
      />
    </label>
  </div>
</template>
