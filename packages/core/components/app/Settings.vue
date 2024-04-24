<script setup>
const colorMode = useColorMode()
const { locale } = useI18n()
</script>

<template lang="pug">
div
  button.btn.btn-square.btn-ghost(onclick="my_modal_1.showModal()")
    Icon(name="fa:cog")

  dialog#my_modal_1.modal
    TntForm.modal-box(method="dialog")
      h3.font-bold.text-lg {{ i18n('settings', i18n('tnti18n.settings')) }}

      ClientOnly
        TntSelect(v-model="locale" :label="i18n('language', i18n('tnti18n.language'))" :options="['en','fr']")

      TntRadio(v-model="$colorMode.preference" label="Dark Mode" :options="['system', 'light', 'dark']")

    form.modal-backdrop(method="dialog")
      button close
</template>
