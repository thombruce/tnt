export default {
  /* Add your own routeRules here. */
} as RoutesConfig

/* TYPES */
type RoutesConfig = {
  [k: string]: {
    redirect?: string,
    ssr?: boolean,
    cors?: boolean,
    headers?: object,
    swr?: number | boolean,
    isr?: number | boolean,
    prerender?: boolean,
    noScripts?: boolean,
    appMiddleware?: string | string[] | Record<string, boolean>,
  }
}
