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
    default: (props) => _camelCase(props.label || 'combobox')
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
      return items.filter(item => String(item).startsWith(query))
    }
  },
  debounce: {
    type: [Boolean, Object],
    default: false
  }
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
div
  label(v-if="label" :for="id")
    span.font-bold(v-if="label" v-html="label")
  div(ref="target")
    input(
      v-model="value"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      @focus="isActive = true"
    )
    ul(class="bg-base-200" v-show="isActive && results.length")
      li(v-for="result in results" :key="result")
        a(@click="value = result;isActive = false")
          | {{ result }}
  label(v-if="hint" :for="id")
    span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

<style lang="postcss" scoped>
input {
  @apply
    block
    w-full
    py-2
    px-3
    rounded
    border
    bg-white
    text-gray-700
    border-gray-200
    dark:bg-gray-900
    dark:text-gray-300
    dark:border-gray-700;
}
</style>