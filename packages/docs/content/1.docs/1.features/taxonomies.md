# Taxonomies

:breadcrumbs

:toc

Support for custom taxonomies.

## Usage

`authors`, `categories` and `tags` taxonomies are supported by default. To use them, simply add an array of values to the frontmatter in your markdown documents:

```md
---
authors: Thom Bruce
categories:
  - Features
  - Components
tags:
  - example
  - articles
  - blogging
---
```

You can also configure your own taxonomies in your project's `app.config.ts`:

```ts [app.config.ts]
export default defineAppConfig({
  // ...
  taxonomies: [
    'categories',
    'tags',
    'contributors',
  ],
  // ...
})
```

:prev-next
