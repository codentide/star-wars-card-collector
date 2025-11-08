import type { PackConfiguration, StickerCategory } from './types/album.types'

export const BASE_API_URL = import.meta.env.VITE_BASE_URL
export const MAX_ATTEMPTS = 10
export const END_POINTS: Record<StickerCategory, string> = {
  character: 'people',
  film: 'films',
  spaceship: 'starships',
} as const
export const ALBUM_SLOTS: Record<StickerCategory, number> = { film: 6, character: 82, spaceship: 36 } as const

const CONFIG_1: PackConfiguration = ['character', 'character', 'character', 'spaceship', 'spaceship']
const CONFIG_2: PackConfiguration = ['character', 'character', 'spaceship', 'spaceship', 'film']
export const ALL_PACK_CONFIG = [CONFIG_1, CONFIG_2]
