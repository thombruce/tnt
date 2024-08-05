# Store

:breadcrumbs

:toc

TNT comes with Pinia pre-installed.

## Usage

```ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Getters
  const doubleCount = computed(() => count.value * 2)

  // Actions
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
```

```vue
<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

// Store
const store = useCounterStore()
// Store: State/Getters
const { count } = storeToRefs(store)
// Store: Actions
const { increment } = store
</script>

<template lang="pug">
TntButton(@click="increment()") {{ count }}
</template>
```

## Example

::browser-mockup{url="https://tnt.thombruce.com"}
:demo-stored-counter
::

:prev-next
