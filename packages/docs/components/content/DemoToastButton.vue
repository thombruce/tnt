<script setup>
const toasts = useToasts()

const addToasts = () => {
  toasts.value.push(
    {
      uid: `tnt-toast-${_uniqueId()}`,
      duration: 0,
      color: 'error',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Error' },
        { is: 'p', content: 'This is text.' },
      ],
      actions: [
        { is: 'Icon', props: { class: 'text-2xl', name: 'fa:exclamation' } }
      ]
    },
    {
      uid: `tnt-toast-${_uniqueId()}`,
      duration: 4000,
      color: 'warning',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Warning' },
        { is: 'p', content: 'This is text.' },
      ],
      actions: [
        { is: 'strong', content: 'Retry' }
      ]
    },
    {
      uid: `tnt-toast-${_uniqueId()}`,
      duration: 0,
      color: 'success',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Success' },
        { is: 'p', content: 'This is text.' },
      ],
      actions: [
        { is: 'strong', content: 'Undo' }
      ]
    },
    {
      uid: `tnt-toast-${_uniqueId()}`,
      duration: 6000,
      color: 'primary',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Primary' },
        { is: 'p', content: 'This is text.' },
      ],
      actions: [
        { is: 'strong', content: 'Info' }
      ]
    },
    {
      uid: `tnt-toast-${_uniqueId()}`,
      duration: 8000,
      showClose: true,
      color: 'neutral',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Neutral' },
        { is: 'p', content: 'This is text.' },
      ],
      actions: [
        { is: 'Icon', props: { name: 'fa:check' } }
      ]
    },
    {
      uid: `tnt-toast-${_uniqueId()}`,
      // duration defaults to 10000
      showClose: true,
      color: 'blank',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Toast' },
        { is: 'p', content: 'This toast has `color: blank`.' },
      ],
      actions: [
        { is: 'strong', content: 'Accept' },
        { is: 'strong', props: { class: 'text-danger' }, content: 'Decline' }
      ]
    },
  )
}
</script>

<template lang="pug">
TntButton(type="button" @click="addToasts()" label="Add toasts")
</template>
