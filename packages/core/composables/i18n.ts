export const i18n = (key: string, fallback?: string) => {
  if (process.client) {
    const { t } = useI18n()
    return t(key, fallback)
  } else {
    return key
  }
}
