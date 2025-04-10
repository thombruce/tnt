export default {
  '/docs': { redirect: '/docs/getting-started/installation', prerender: false },
  '/docs/getting-started': { redirect: '/docs/getting-started/installation', prerender: false },
} as RoutesConfig

/* TYPES */
type RoutesConfig = {
  [k: string]: object
}
