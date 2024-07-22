// @ts-ignore
import { useState } from '#imports'

export const useToasts = () => useState<Object[]>('toasts', () => [])
