import { en } from './i18n/en'
import { fr } from './i18n/fr'

const messages = {
  en, fr
}

export default defineI18nConfig(() => ({
  locale: 'en',
  messages
}))
