import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const hostname = useAppConfig().hostname?.replace(/\/$/, '') || 'https://example.com' // TODO: Does it make sense to fallback on example.com here? Really?

  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: hostname
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
