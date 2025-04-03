import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**',
      type: 'page',
      schema: z.object({
        // tags: z.array(z.string()),
        // image: z.string(),
        date: z.date(),
        layout: z.string(),
        navigation: z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      })
    })
  }
})

// TNT uses a single collection under the content/
// directory in order to maintain searchability.
// To define custom collections, see:
// https://content.nuxt.com/docs/collections/define
