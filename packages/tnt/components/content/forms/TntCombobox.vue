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
  labelAlt: { type: String },
  hint: { type: String },
  hintAlt: { type: String },
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

<template>
  <div class="form-control">
    <label v-if="label || labelAlt" :for="id" class="label">
      <span v-if="label" class="label-text" v-html="label" />
      <span v-if="labelAlt" class="label-text-alt" v-html="labelAlt" />
    </label>
    <div class="join join-vertical" ref="target">
      <input
        v-model="value"
        :id="id"
        :name="name"
        :class="`input input-bordered${isActive && results.length ? ' join-item' : ''}`"
        :type="type"
        :placeholder="placeholder"
        autocomplete="off"
        @focus="isActive = true"
      />
      <ul class="menu bg-base-200 join-item" v-show="isActive && results.length">
        <li v-for="result in results" :key="result">
          <a @click="value = result;isActive = false">
            {{ result }}
          </a>
        </li>
      </ul>
    </div>
    <label v-if="hint || hintAlt" :for="id" class="label">
      <span v-if="hint" class="label-text-alt" v-html="hint" />
      <span v-if="hintAlt" class="label-text-alt" v-html="hintAlt" />
    </label>
  </div>
</template>
