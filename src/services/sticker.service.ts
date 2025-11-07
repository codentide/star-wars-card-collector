import type { Category, SecretPack, Sticker } from '../types/album.types'
import type { ApiFilm, ApiPeople, ApiSpaceShip } from '../types/swapi.types'
import { determineRarity } from '../utils'

const BASE_API_URL = import.meta.env.VITE_BASE_URL
const END_POINTS: Record<Category, string> = {
  character: 'people',
  film: 'films',
  spaceship: 'spaceships',
} as const

// Traer de la api simultaneamente las peticiones del pack
export const getPackFromApi = async (pack: SecretPack): Promise<Sticker[]> => {
  const stickerPromises = pack.map(async (sticker) => {
    const category = sticker.category
    const id = sticker.id
    const url = `${BASE_API_URL}/${END_POINTS[category]}/${id}`
    console.log(url)

    try {
      // Hacer petición
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`SWAPI error: ${response.status} for ${url}`)
      }
      const data = await response.json()

      // Adaptar

      const rarity = determineRarity(id, category)
      let title = 'unknown'
      if (category === 'film') {
        const filmData = data as ApiFilm
        title = filmData.title
      } else {
        const namedData = data as ApiPeople | ApiSpaceShip
        title = namedData.name
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
  })

  const result = await Promise.all(stickerPromises)
  return result.filter((sticker): sticker is Sticker => sticker !== null)

  // Hacer peticion
  // Adaptar objeto
}
