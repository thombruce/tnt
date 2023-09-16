<script setup>
const colorMode = useColorMode()
const { locale } = useI18n()
</script>

<template>
  <div>
    <button onclick="my_modal_1.showModal()">
      {{ i18n('settings', i18n('tnti18n.settings')) }}
    </button>

    <dialog id="my_modal_1" class="modal">
      <TntForm method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">{{ i18n('settings', i18n('tnti18n.settings')) }}</h3>

        <ClientOnly>
          <TntSelect v-model="locale" :label="i18n('language', i18n('tnti18n.language'))" :options="['en','fr']" />
        </ClientOnly>

        <TntRadio v-model="$colorMode.preference" label="Dark Mode" :options="['system', 'light', 'dark']" />
      </TntForm>

      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>
