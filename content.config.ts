import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Global keys shared by all content pages
const global = {
  layout: z.string().optional(),
  title: z.string(),
  icon: z.string().optional(),
  description: z.string(),
  list: z.boolean()
    .or(z.string())
    .or(z.object({
      collection: z.string().optional(),
      path: z.string(),
      order: z.object({ field: z.string(), direction: z.enum(['ASC', 'DESC']) }).optional()
    })).optional(),
}

// Reusable author
const author = z.object({
  name: z.string(),
  avatar: z.object({ src: z.string() }).optional(),
  to: z.string().url().optional(),
})

export default defineContentConfig({
  collections: {
    // Pages: E.g. /index.md, /about.md
    pages: defineCollection({
      source: {
        include: '**/*',
        exclude: [
          '*blog/**/*',
          '*docs/**/*',
        ]
      },
      type: 'page',
      schema: z.object({
        ...global,
      })
    }),
    // Blog: Article-like posts
    blog: defineCollection({
      source: '*blog/**/*',
      type: 'page',
      schema: z.object({
        ...global,
        layout: z.string().default('article'),
        // image: z.string(),
        date: z.string().date(),
        category: z.string().optional(),
        categories: z.array(z.string()).optional(),
        author: author.optional(),
        authors: z.array(author).optional(),
        tags: z.array(z.string()).optional(),
      })
    }),
    // Docs: For documentation websites
    docs: defineCollection({
      source: '*docs/**/*',
      type: 'page',
      schema: z.object({
        ...global,
        layout: z.string().default('doc'),
      })
    }),
  }
})

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
