<script setup>
const props = defineProps({
  modelValue: { type: String },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'combobox')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => props.label ? _camelCase(props.label) : (`${props.type}-${_uniqueId()}` || `combobox-${_uniqueId()}`)
  },
  type: {
    type: String,
    default: 'text'
  },
  hint: { type: String },
  placeholder: { type: String },
  options: { type: Array },
  filter: {
    type: Function,
    default(items, query) {
      return items.filter(item => String(item).toLowerCase().includes(query.toLowerCase()))
    }
  },
  debounce: {
    type: [Boolean, Object],
    default: false
  },
  fullErrors: {
    type: Boolean
  },
  rules: {
    type: Object,
  }
})

const computedRules = computed(() => {
  return useValidations(props.rules?.format || 'select', props.rules, props.label)
})

const emit = defineEmits([
  'update:modelValue'
])

const query = ref('')

const value = computed({
  get() { return props.modelValue || query.value },
  async set(value) {
    if (props.modelValue != undefined){
      await emit('update:modelValue', value)
    } else {
      query.value = value
    }
    search()
  }
})

const results = ref([])

const isActive = ref(false)

// Uses the filter prop. Provided function should accept:
// array of strings (the options), query string
// It should return:
// array of strings
async function search() {
  if (value.value == '') {
    results.value = []
    return
  }
  if (props.debounce) {
    debounced()
  } else {
    results.value = await props.filter(props.options, value.value)
  }
}

const debounced = _debounce(
  async () => {
    results.value = await props.filter(props.options, value.value)
  },
  props.debounce?.wait || 250,
  { 'maxWait': props.debounce?.maxWait || 1000 }
)

const target = ref(null)

onClickOutside(target, () => isActive.value = false)
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
  VeeField(
    v-model="value"
    :name="name"
    :rules="computedRules"
    v-slot="{ field, errors }"
  )
    label(v-if="label" :for="id")
      span.font-bold(v-if="label" v-html="label")

    .relative(ref="target")
      input(
        v-bind="field"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        autocomplete="off"
        @focus="isActive = true"
        @keydown.tab="isActive = false"
        :class="errors[0] ? 'error' : ''"
      )
      ul.not-prose(class="absolute w-full bg-base-200 dark:bg-base-800" v-show="isActive && results.length")
        li.w-full.px-3(v-for="result in results" :key="result" class="hover:bg-blue-600")
          a.block.w-full.cursor-pointer(@click="value = result;isActive = false")
            | {{ result }}

    .errors.full
      ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
        li(v-for="error in errors") {{ error }}
    .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>
