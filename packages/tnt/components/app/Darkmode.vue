<script setup>
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <div>
    <button onclick="my_modal_1.showModal()">
      Dark Mode
    </button>
    <dialog id="my_modal_1" class="modal">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Dark Mode</h3>
        <button class="btn" data-set-theme="" data-act-class="ACTIVECLASS">System</button>
        <button class="btn" data-set-theme="light" data-act-class="ACTIVECLASS">Light</button>
        <button class="btn" data-set-theme="dark" data-act-class="ACTIVECLASS">Dark</button>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>
