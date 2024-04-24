import { defineTransformer } from '@nuxt/content/transformers'

import fountain from './parser'

export default defineTransformer({
  name: 'transformer',
  extensions: ['.fountain'],
  parse (_id, rawContent: String) {
    return {
      _id,
      body: fountain.parse(rawContent),
    }
  }
})
