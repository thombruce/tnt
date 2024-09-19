<script setup lang="ts">
const showMenu = ref(false)

const target = ref(null)

function closeMenu() {
  showMenu.value = false
}

provide('closeMenu', closeMenu)

onClickOutside(target, () => closeMenu())
</script>

<template lang="pug">
.inline.relative(ref="target")
  TntButton.btn-none(@click="showMenu = !showMenu")
    slot(name="button")
      TntIcon(name="fa6-solid:bars")
  ul(
    v-if="showMenu"
    class="absolute top-10 min-w-48 bg-primary-100 dark:bg-primary-950/90"
  )
    slot
</template>
