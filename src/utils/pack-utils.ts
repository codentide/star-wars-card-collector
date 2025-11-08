import { ALBUM_SLOTS, ALL_PACK_CONFIG } from '../constants'
import type { StickerRarity, SecretPack, StickerRequest, Sticker, StickerCategory } from '../types'

export const determineRarity = (id: Sticker['id'], category: Sticker['category']): StickerRarity => {
  if (category === 'character' && id <= 20) return 'special'
  if (category === 'spaceship' && id <= 10) return 'special'
  if (category === 'film') return 'special'
  return 'regular'
}

// Funcion auxiliar que genera un numero aleatorio segun inicio y limite
export const getRandomId = (start: number, limit: number) => {
  const randomId = Math.floor(Math.random() * limit) + start
  return randomId
}

export const generateSecretPack = (): SecretPack => {
  // Escoger configuracion (aleatoria)
  const configIndex = getRandomId(0, ALL_PACK_CONFIG.length)
  const config = ALL_PACK_CONFIG[configIndex]

  // Generar ids recorriendo las categorias
  const secretPack = config.map((category: StickerCategory): StickerRequest => {
    // Determinar limite segun categoria
    const limit = ALBUM_SLOTS[category]
    // Generar id random teniendo en cuenta el limite de la categoria
    const id = getRandomId(1, limit)
    return { id, category }
  })
  return secretPack
}

// Revolver orden de los stickers

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
