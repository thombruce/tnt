<script setup>
const props = defineProps({
  id: { type: String },
  name: { type: String },
  type: { type: String },
  label: { type: String },
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
})

const query = ref('')

const results = ref([])

const isActive = ref(false)

// Uses the filter prop. Provided function should accept:
// array of strings (the options), query string
// It should return:
// array of strings
function search() {
  if (query.value == '') {
    results.value = []
    return
  }
  results.value = props.filter(props.options, query.value)
}

function populate(value) {
  query.value = value
  search()
  isActive.value = false
}

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
        :id="id"
        :name="name"
        :class="`input input-bordered${isActive && results.length ? ' join-item' : ''}`"
        type="text"
        :placeholder="placeholder"
        autocomplete="off"
        @focus="isActive = true"
        @input="search()"
        v-model="query"
      />
      <ul class="menu bg-base-200 join-item" v-show="isActive && results.length">
        <li v-for="result in results" :key="result">
          <a @click="populate(result)">
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
