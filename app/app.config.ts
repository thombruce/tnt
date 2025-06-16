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
    pattern: 'i like food',
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
    about: '',
    contact: {
      email: '',
      tel: '',
      address: '',
    },
    copyright: 'Copyright © All rights reserved',
    navigation: {
      content: true,
      links: [],
    }
  },
})
