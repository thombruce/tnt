# Cusdis

:breadcrumbs

:toc

Drop-in support for Cusdis - a privacy-first alternative to Disqus.

## Usage

```ts [app.config.ts]
export default defineAppConfig({
  // ...
  cusdis: {
    host: 'https://cusdis.example.com', // Replace with your Cusdis instance
    appId: 'f4ff9ab5-3348-4154-b94b-7e60fe62fa05', // Replace with your site's app ID
    title: 'Have Your Say!',
    description: 'By commenting, you confirm that you have read and agree to our <a href="/privacy-policy">Privacy Policy</a>.'
  },
  // ...
})
```

_If you don't set a title, the default 'Comments' will be displayed. Set title to `false` to display no title._

:prev-next
