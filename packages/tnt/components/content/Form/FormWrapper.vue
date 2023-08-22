<script setup>
defineProps({
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

<template>
  <form :action="action" :method="method">
    <template v-for="component in body">
      <component :is="_keys(component)[0]" v-bind="_values(component)[0]" />
    </template>
  </form>
</template>
