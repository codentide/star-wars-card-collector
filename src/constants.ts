import type { Category } from './types/album.types'

export const BASE_API_URL = import.meta.env.VITE_BASE_URL
export const MAX_ATTEMPTS = 10
export const END_POINTS: Record<Category, string> = {
  character: 'people',
  film: 'films',
  spaceship: 'starships',
} as const
export const ALBUM_SLOTS: Record<Category, number> = { film: 6, character: 82, spaceship: 36 } as const
