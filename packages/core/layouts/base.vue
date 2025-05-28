<script setup lang="ts">
const { public: { layers } } = useRuntimeConfig()

const { theme }: { theme?: 'solid' | 'ghost' } = useAttrs()

// TODO: Ideally... we could trigger variants of all components used by the layout
//       by passing some property to the layout.
//       Layouts are invoked by other layouts or from [...slug].vue (pages).
//       We would like then for the pages to be able to call on appConfig and pass
//       the relevant property (possibly overwriteable per document) to say like...
//       - We want this to be "flat", "glass", "ghost", some predefined variant
//       And we pass that configuration to each component invoked?
</script>

<template lang="pug">
div(class="flex flex-col h-screen justify-between")
  //- TODO: Maybe prefer to gracefully enhance content components
  //-       based on runtimeConfig, rather than duplicating or
  //-       overwriting them like this.
  //-
  //- TODO: TntContentHeader won't exist where TNT Content is not installed
  //-       We either need TNT to be ONE single module, or we need to fix this
  //-       somehow to not even call on the component if TNT Content is not installed.
  //-       Or, as above, tweak the component to gracefully make use of the content module.
  //- My current preference is to just simplify; reduce our efforts to one module, one layer.
  //- We can think about prying it apart again at a later time.
  TntContentHeader(v-if="layers.includes('tnt-content')" :variant="theme")/
  TntHeader(v-else :variant="theme")/
  UContainer(class="mb-auto")
    slot/
  TntFooter(:variant="theme")/
</template>