import { serverQueryContent } from '#content/server'
import RSS from 'rss'

export default defineEventHandler(async (event) => {
  if (useAppConfig().rss && useAppConfig().hostname) {
    const hostname = useAppConfig().hostname?.replace(/\/$/, '')

    const feed = new RSS({
      title: useAppConfig().name,
      site_url: hostname,
      feed_url: `${hostname}/feed.xml`,
    })

    const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
    const blogPosts = docs.filter((doc) => doc?._path?.includes(useAppConfig().rss))

    for (const doc of blogPosts) {
      feed.item({
        title: doc.title ?? '-',
        url: `${hostname}${doc._path}`,
        date: doc.date,
        description: doc.description,
      })
    }
    
    const feedString = feed.xml({ indent: true })
    event.node.res.setHeader('content-type', 'text/xml')
    event.node.res.end(feedString)
  } else {
    const feed = new RSS({})

    const feedString = feed.xml({ indent: true })
    event.node.res.setHeader('content-type', 'text/xml')
    event.node.res.end(feedString)
  }
})
