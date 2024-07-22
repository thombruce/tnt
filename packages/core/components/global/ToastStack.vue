<script setup>
const toasts = useToasts()
</script>

<template lang="pug">
.tnt-toast-stack
  Toast(
    v-for="toast in toasts"
    :key="toast.uid"
    :uid="toast.uid"
    :color="toast.color"
    :duration="toast.duration"
    :showClose="toast.showClose"
  )
    component(v-for="el in toast.body" :is="el.is" v-bind="el.props") {{ el.content }}
    template(#actions)
      component(v-for="el in toast.actions" :is="el.is" v-bind="el.props") {{ el.content }}
</template>

<style lang="postcss" scoped>
.tnt-toast-stack {
  @apply
    fixed
    bottom-10
    right-10
    w-96
    flex
    flex-col-reverse
    gap-y-3;
}
</style>
