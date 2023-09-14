export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      settings: 'Settings',
      language: 'Language',
    },
    fr: {
      welcome: 'Bienvenue',
      settings: 'Paramètres',
      language: 'Langue',
    }
  }
}))
