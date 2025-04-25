import type { PageCollections } from "@nuxt/content"

import { collections } from '~/tnt.config'

export const tntContentCollections: (keyof PageCollections)[] = collections as (keyof PageCollections)[]
