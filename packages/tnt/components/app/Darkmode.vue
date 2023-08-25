<script setup>
const colorMode = useColorMode()
</script>

<template>
  <div>
    <button onclick="my_modal_1.showModal()">
      Dark Mode
    </button>
    <dialog id="my_modal_1" class="modal">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Settings</h3>
        <TntRadio v-model="$colorMode.preference" label="Dark Mode" :options="['system', 'light', 'dark']" />
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>
