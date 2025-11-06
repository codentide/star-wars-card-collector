import type { Rarity, Sticker } from '../types/album.type'

export const determineRarity = (
  id: Sticker['id'],
  category: Sticker['category']
): Rarity => {
  if (category === 'character' && id <= 20) return 'special'
  if (category === 'spaceship' && id <= 10) return 'special'
  if (category === 'film') return 'special'
  return 'regular'
}
