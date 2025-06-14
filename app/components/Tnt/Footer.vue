<script setup lang="ts">
import { tv } from 'tailwind-variants'

const {
  ui: { pattern: backgroundPattern },
  footer: {
    about: footerAbout,
    copyright: footerCopyright,
    contact: { email, tel, address },
    navigation: { content: navContent, links: navLinks },
  },
} = useAppConfig()

const about = tntTranslate('footer.about', footerAbout)
const copyright = tntTranslate('footer.copyright', footerCopyright)

const { /* color = 'neutral', */ variant = undefined } = defineProps<{
  // color?: 'neutral' | 'primary'
  variant?: 'bordered' | 'solid' | 'ghost'
  // TODO: Size - it would be nice to allow larger text; given that this
  //       ought to be a fixed/sticky element though, we must give consideration
  //       to the space occupied when positioning other content.
}>()

const { data: navItems } = await useAsyncData(`tntNav-for-footer`, () => {
  // TODO: Amend such that tntNav accepts both values (or collected config object)
  //       and allow for navLinks to be appended onto the generated list.
  return tntNav(navContent ? navContent : navLinks, undefined, { shallow: true })
})

const footer = computed(() => tv({
  base: 'w-full',
  variants: {
    variant: {
      bordered: 'bg-muted border-t border-accented',
      solid: 'bg-(--ui-bg)',
      ghost: 'bg-transparent',
    },
  },
  compoundVariants: [
    {
      variant: ['solid', 'ghost'],
      class: 'border-none',
    },
  ],
  defaultVariants: {
    variant: 'bordered',
  },
}))
</script>

<template lang="pug">
div(:class="footer({ variant })")
  UContainer(
    class="flex \
          items-center \
          justify-between"
  )
    div(class="py-2 grow")
      div(v-if="about || navItems || tel || email || address" class="flex flex-wrap")

        div(v-if="about" class="flex-grow basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5")
          span(class="text-xl font-semibold") About
          p {{ about }}

        div(v-if="navItems" class="flex-grow basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5")
          span(class="text-xl font-semibold") Links
          UNavigationMenu(
            :items="navItems"
            :unmount-on-hide="false"
            orientation="vertical"
            variant="link"
            class="flex-1"
          )/

        div(v-if="tel || email || address" class="flex-grow basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5")
          span(class="text-xl font-semibold") Contact
          dl(v-if="tel")
            dt Tel
            dd {{ tel }}
          dl(v-if="email")
            dt Email
            dd {{ email }}
          dl(v-if="address")
            dt Address
            dd {{ address }}

      div(class="text-center")

        p(v-if="copyright" class="text-sm text-muted") {{ copyright }}

        p(v-if="backgroundPattern" class="text-sm text-muted")
          a(href="https://heropatterns.com/") Hero Patterns
          |
          | by Steve Schoger (
          a(href="https://creativecommons.org/licenses/by/4.0/") CC By 4.0
          | )
</template>
