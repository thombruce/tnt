// @ts-ignore
import { useState } from '#imports'

export const useSidebar = () => useState<Boolean>('sidebar', () => false)

export const useToasts = () => useState<Object[]>('toasts', () => [])
