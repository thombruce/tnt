# Umami

:breadcrumbs

:toc

Drop-in support for Umami's privacy-focused analytics.

## Usage

```ts [app.config.ts]
export default defineAppConfig({
  // ...
  umami: {
    domain: 'umami.example.com', // Replace with your Umami instance
    id: '3fc9bfea-d9d5-4b66-9a92-fb390d9c58a5' // Replace with your site ID
  },
  // ...
})

```

:prev-next
