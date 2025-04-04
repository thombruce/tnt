import type { PageCollections } from "@nuxt/content"

// TODO: We'd rather import the keys from collections directly if that's at all possible.
export const tntContentCollections: (keyof PageCollections)[] = ['pages', 'blog', 'docs']
