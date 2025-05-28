<script setup lang="ts">
import { tv } from 'tailwind-variants'

const { name } = useSiteConfig()

const { /* color = 'neutral', */ variant = 'solid' } = defineProps<{
  // color?: 'neutral' | 'primary'
  variant?: 'solid' | 'ghost'
  // TODO: Size - it would be nice to allow larger text; given that this
  //       ought to be a fixed/sticky element though, we must give consideration
  //       to the space occupied when positioning other content.
}>()


const navbar = computed(() => tv({
  base: 'w-full',
  variants: {
    variant: {
      solid: 'bg-muted border-b border-accented',
      ghost: 'bg-neutral border-none',
    },
  }
}))
</script>

<template lang="pug">
div(:class="navbar({ variant })")
  UContainer(
    class="flex \
          items-center \
          justify-between"
  )
    UButton(
      :label="name"
      to="/"
      color="neutral"
      variant="ghost"
      class="my-2 px-2.5 py-1.5 font-extrabold"
    )/
    div(class="flex")
      TntDarkMode/
</template>
