import type {
  Category,
  SecretPack,
  SecretSticker,
  Sticker,
} from '../types/album.types'
import type { ApiFilm, ApiPeople, ApiSpaceShip } from '../types/swapi.types'
import { ALBUM_SLOTS, determineRarity, getRandomId } from '../utils'

const BASE_API_URL = import.meta.env.VITE_BASE_URL
const END_POINTS: Record<Category, string> = {
  character: 'people',
  film: 'films',
  spaceship: 'starships',
} as const
const MAX_ATTEMPTS = 5

// Traer un sticker individual del api con su id y categoria
const getStickerFromApi = async (
  sticker: SecretSticker,
  attempts = 1
): Promise<Sticker | null> => {
  const category = sticker.category
  const id = sticker.id
  const url = `${BASE_API_URL}/${END_POINTS[category]}/${id}`

  try {
    // Hacer petición
    const response = await fetch(url)

    if (!response.ok) {
      // Debido a que la API tiene algunos huecos, utilizar recursividad para nuevos intentos
      if (response.status === 404 && attempts < MAX_ATTEMPTS) {
        // Generar un nuevo id random
        const newId = getRandomId(1, ALBUM_SLOTS[category])
        const newStickerRequest = { ...sticker, id: newId }
        // Ejecutar la misma función sumándole un intento
        return getStickerFromApi(newStickerRequest, attempts + 1)
      }
      throw new Error(`SWAPI error: ${response.status} for ${url}`)
    }

    const data = await response.json()
    const rarity = determineRarity(id, category)
    let title = 'unknown'
    if (category === 'film') {
      title = (data as ApiFilm).title
    } else {
      title = (data as ApiPeople | ApiSpaceShip).name
    }

    const newSticker: Sticker = {
      id,
      title,
      rarity,
      category,
    }

    return newSticker
  } catch (error) {
    console.error('Error fetching or adapting sticker:', error)
    return null
  }
}

// Traer de la api simultaneamente las peticiones del pack
export const getPackFromApi = async (pack: SecretPack): Promise<Sticker[]> => {
  const stickerPromises = pack.map(async (sticker) =>
    getStickerFromApi(sticker)
  )

  const result = await Promise.all(stickerPromises)
  return result.filter((sticker): sticker is Sticker => sticker !== null)

  // Hacer peticion
  // Adaptar objeto
}
