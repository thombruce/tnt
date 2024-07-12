<script setup>
const props = defineProps({
  action: {
    type: String
  },
  method: {
    type: String
  },
  body: {
    type: Array
  }
})
</script>

<template lang="pug">
form.space-y-5(:action="action" :method="method")
  slot
  template(v-for="component in body")
    component(:is="`tnt-${_keys(component)[0]}`" v-bind="_values(component)[0]")
</template>
