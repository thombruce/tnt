import { serverQueryContent } from '#content/server'
import RSS from 'rss'

export default defineEventHandler(async (event) => {
  if (useAppConfig().hostname && useAppConfig().rss) {
    const feed = new RSS({
      title: useAppConfig().name,
      site_url: useAppConfig().hostname,
      feed_url: `${useAppConfig().hostname}/feed.xml`,
    })

    const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
    const blogPosts = docs.filter((doc) => doc?._path?.includes('/docs'))

    for (const doc of blogPosts) {
      feed.item({
        title: doc.title ?? '-',
        url: `${useAppConfig().hostname}${doc._path}`,
        date: doc.date,
        description: doc.description,
      })
    }
    
    const feedString = feed.xml({ indent: true })
    event.node.res.setHeader('content-type', 'text/xml')
    event.node.res.end(feedString)
  }
})
