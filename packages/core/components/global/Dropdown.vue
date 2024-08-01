<script setup>
const props = defineProps(['items'])

const showMenu = ref(false)

const target = ref(null)

onClickOutside(target, () => showMenu.value = false)
</script>

<template lang="pug">
.inline.relative(ref="target")
  slot(name="button")
    TntButton.btn-none(@click="showMenu = !showMenu")
      Icon(name="fa:bars")
  ul(
    v-if="showMenu"
    class="absolute top-10 min-w-48 bg-primary-100 dark:bg-primary-950/90"
  )
    li(v-for="link of items" :key="link._path")
      NuxtLink.block.w-full.p-2(
        :to="link._path"
        @click="showMenu = false"
        class="hover:bg-primary-200 dark:hover:bg-primary-900"
      ) {{ link.title }}
</template>
