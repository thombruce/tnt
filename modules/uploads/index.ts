import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
    nuxt.options.nitro.externals.inline.push(resolve('./transformers/uploads'))

    nuxt.hook('content:context', (contentContext) => {
      contentContext.transformers.push(resolve('./transformers/uploads.ts'))
    })
  }
})
