<script setup>
const props = defineProps({
  component: {},
})

const type = computed(() => {
  return _keys(props.component)[0]
})
</script>

<template lang="pug">
component(
  :is="tntComponents.includes(type) ? `tnt-${type}` : type"
  v-bind="typeof component[type] === 'object' ? _omit(component[type], ['body']) : undefined"
)
  template(v-if="typeof component[type] === 'string'") {{ component[type] }}
  template(v-else-if="typeof component[type].body === 'string'") {{ component[type].body }}
  template(v-else-if="component[type].body" v-for="component in component[type].body")
    FromSchema(:component="component")
</template>
