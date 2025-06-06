export default defineAppConfig({
  site: {
    copyright: 'Copyright © All rights reserved',
  },
  nav: true,
  theme: null,
  backgroundPattern: false,
  defaultLayout: null,
  ui: {
    colors: {
      primary: 'green',
      secondary: 'blue',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate',
    }
  },
  og: {
    website: null,
    color: null,
    image: null,
  },
  ogComponent: 'TntColor', // TODO: Add to og object above if possible
})
