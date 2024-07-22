<script setup>
const props = defineProps({
  uid: {
    type: String,
    required: true,
  },
  color: {
    type: String
  },
  duration: {
    type: Number,
    default: 10000,
  },
  showClose: {
    type: Boolean,
    default: false,
  }
})

const toasts = useToasts()

const timerLength = ref(props.duration)

const timer = ref(null)
const progress = ref(0)

let prevTime = null
const startTimer = () => {
  timer.value = setInterval(() => {
    const newTime = Date.now()
    if (!prevTime) prevTime = newTime
    timerLength.value = timerLength.value - (newTime - prevTime)
    prevTime = newTime
    progress.value = (props.duration - timerLength.value) * 100 / props.duration
    if(timerLength.value <= 0) {
      closeToast()
    }
  })
}

const stopTimer = () => clearInterval(timer.value)

const closeToast = () => {
  stopTimer()
  // _remove(toasts.value, (toast) => toast.uid === props.uid)
  toasts.value = _reject(toasts.value, { uid: props.uid })
}

onMounted(() => {
  if (props.duration) startTimer()
})

onUnmounted(() => {
  stopTimer()
})

const styles = () => {
  switch(props.color) {
    case 'primary':
      return {
        // Trying to determine whether the drop shadow should always be there
        // or only on 'blank'.
        toast: "bg-primary dark:border-primary text-content-dark",
        progress: "bg-primary-300",
        fill: "bg-primary-800"
      }
    case 'success':
      return {
        toast: "bg-success dark:border-success text-content-dark",
        progress: "bg-success-300",
        fill: "bg-success-800"
      }
    case 'warning':
      return {
        toast: "bg-warning dark:border-warning text-content-dark",
        progress: "bg-warning-300",
        fill: "bg-warning-800"
      }
    case 'danger':
    case 'error':
      return {
        toast: "bg-danger dark:border-danger text-content-dark",
        progress: "bg-danger-300",
        fill: "bg-danger-800"
      }
    case 'blank':
      return {
        toast: "bg-neutral-100 dark:border-none text-content-light dark:text-content-dark",
        progress: "bg-neutral-300",
        fill: "bg-neutral-800"
      }
    case 'neutral':
    default:
      return {
        toast: "bg-neutral-700 dark:border-neutral text-content-dark",
        progress: "bg-neutral-300",
        fill: "bg-neutral-800"
      }
  }
}
</script>

<template lang="pug">
.tnt-toast.not-prose(:class="styles().toast")
  .tnt-toast-main.flex.items-center
    .tnt-toast-body.flex-1
      slot
    .tnt-toast-actions.p-2.space-x-4
      slot(name="actions")
      button.btn-none(v-if="!duration || showClose" type="button" @click="closeToast()")
        Icon(name="fa:close")/
        span.sr-only Close
  .progress(v-if="duration" :class="styles().progress")
    .progress-fill(:class="styles().fill" :style="'width:'+progress+'%;'")
</template>

<style lang="postcss" scoped>
.tnt-toast {
  @apply
    w-full
    rounded
    overflow-hidden
    dark:bg-base-800
    dark:border-l-8
    drop-shadow-md
    dark:drop-shadow-none;
  > .tnt-toast-main {
    @apply p-5;
  }
}

.progress {
  @apply
    w-full
    h-2
    rounded-br
    dark:bg-base-700;
  > .progress-fill {
    @apply
      h-full
      dark:bg-base-300;
  }
}
</style>