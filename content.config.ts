import { defineCollection, defineContentConfig, /* z */ } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**',
      type: 'page',
      // schema: z.object({
      //   tags: z.array(z.string()),
      //   image: z.string(),
      //   date: z.date()
      // })
    })
  }
})

// To define custom collections, see: https://content.nuxt.com/docs/collections/define
