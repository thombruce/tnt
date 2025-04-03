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

// NOTE: It is recommended that any and all content
// files you wish to be searchable are written in
// markdown. It is not yet possible to search .yml
// files or custom content types. We recommend
// creating canonical markdown files which link to
// "attached" content should you need to use custom
// types at all.

// TODO: Investigate whether or not it is possible to
// make well-behaved non-markdown custom "page" types
// searchable. These will have a title and content
// amidst their keys... but will Nuxt Content's search
// settings index non-markdown? That's the question.
// And if not, can we configure it to do so.

// TODO: It also suddenly DOES make sense to have custom
// collections like pages/, blog/, products/, authors/
// as actually the CommandPallette allows multiple groups
// to be sorted by type... and this would actually be kinda
// killer to have! The only drawback really is... we have
// got to load multiple search indexes, but that doesn't
// seem like a great problem any more. 🤔
