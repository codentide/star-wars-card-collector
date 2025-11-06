import type {
  Configuration,
  Rarity,
  SecretPack,
  SecretSticker,
  Sticker,
} from '../types/album.type'
import { ALBUM_SLOTS } from './initializeAlbum'

export const determineRarity = (
  id: Sticker['id'],
  category: Sticker['category']
): Rarity => {
  if (category === 'character' && id <= 20) return 'special'
  if (category === 'spaceship' && id <= 10) return 'special'
  if (category === 'film') return 'special'
  return 'regular'
}

export const getRandomId = (start: number, limit: number) => {
  const randomId = Math.floor(Math.random() * limit) + start
  return randomId
}

const CONFIG_1: Configuration = [
  'character',
  'character',
  'character',
  'spaceship',
  'film',
]
const CONFIG_2: Configuration = [
  'character',
  'character',
  'spaceship',
  'spaceship',
  'film',
]
const ALL_CONFIG = [CONFIG_1, CONFIG_2]

// [ ]: mejorar la funcion de aletoriedad

export const generateSecretPack = (): SecretPack => {
  // Escoger configuracion (aleatoria)
  const configIndex = getRandomId(0, ALL_CONFIG.length)
  const config = ALL_CONFIG[configIndex]

  // Generar ids recorriendo las categorias
  const secretPack = config.map((category): SecretSticker => {
    // Determinar limite segun categoria
    const limit = ALBUM_SLOTS[category]
    // Generar id random teniendo en cuenta el limite de la categoria
    const id = getRandomId(1, limit)
    return { id, category }
  })

  // [ ]: Revolver pack

  return secretPack
}
