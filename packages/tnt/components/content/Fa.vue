<script setup>
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

defineProps(['icon'])

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

library.add(far, fas, fab)

defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
</script>

<template>
  <font-awesome-icon :icon="icon" />
</template>
