<script setup>
const { hostname, cusdis } = useAppConfig()
const { page } = useContent()
const { path } = useRoute()
const colorMode = useColorMode()

useHead({
  script: cusdis ?
    [{ async: true, defer: true, src: `${cusdis.host}/js/cusdis.es.js` }] :
    undefined
})
</script>

<template>
  <div v-if="cusdis">
    <h2 v-if="cusdis.title !== false">{{ cusdis.title || 'Comments' }}</h2>
    <p v-if="cusdis.description" v-html="cusdis.description" />
    <div id="cusdis_thread"
      :data-host="cusdis.host"
      :data-app-id="cusdis.appId"
      :data-page-id="path"
      :data-page-url="hostname?.replace(/\/$/, '') + path"
      :data-page-title="page.title"
      :data-theme="colorMode.value"
    ></div>
  </div>
</template>
