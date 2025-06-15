export default defineAppConfig({
  site: {
    name: 'My Awesome Site',
    description: 'Where I post all my awesome stuff!',
    url: 'https://www.example.com/',
    og: {
      component: 'TntColor',
      website: 'www.example.com',
      color: '#000000',
      // image: null, // NOTE: Removed as broken. / TODO: Investigate
    },
  },
  ui: {
    layout: 'default',
    theme: 'solid',
    pattern: false,
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
  header: {
    navigation: {
      content: true,
      links: [],
    }
  },
  footer: {
    about: undefined,
    contact: {
      email: undefined,
      tel: undefined,
      address: undefined,
    },
    copyright: 'Copyright © All rights reserved',
    navigation: {
      content: true,
      links: [],
    }
  },
})
