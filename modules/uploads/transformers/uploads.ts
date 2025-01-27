import { defineTransformer } from '@nuxt/content/transformers'

export default defineTransformer({
  name: 'uploads-transformer',
  extensions: ['.jpg', '.jpeg', '.png'],
  parse (_id, rawContent: String) {
    return {
      _id,
      layout: 'uploads',
      // title: parsed.title,
      // date: parsed.date,
      // description: parsed.description,
      body: null,
    }
  }
})
