import type { SecretPack, StickerRequest, AlbumSticker } from '../types'
import { ALBUM_SLOTS, BASE_API_URL, END_POINTS, MAX_ATTEMPTS } from '../constants'
import { getRandomId } from '../utils'
import { characterStickerAdapter, filmStickerAdapter, spaceShipStickerAdapter } from '../adapters/sticker.adapter'

// Funcion que trae un sticker individual del api, sin reintento para evitar algun comportamiento inadecuado
export const getStickerDetailFromApi = async (sticker: StickerRequest): Promise<AlbumSticker | null> => {
  const category = sticker.category
  const id = sticker.id
  const url = `${BASE_API_URL}/${END_POINTS[category]}/${id}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`SWAPI error: ${response.status} for ${url}`)
    }

    const data = await response.json()

    // Adaptar
    if (category === 'character') return characterStickerAdapter(id, data)
    if (category === 'film') return filmStickerAdapter(id, data)
    if (category === 'spaceship') return spaceShipStickerAdapter(id, data)

    return null
  } catch (error) {
    console.error('Error fetching or adapting sticker:', error)
    return null
  }
}

// Traer un sticker individual del api con su id y categoria (debido a que el api presenta fallas tiene logica de reintento)
export const getStickerFromApi = async (sticker: StickerRequest, attempts = 1): Promise<AlbumSticker | null> => {
  const category = sticker.category
  const id = sticker.id
  const url = `${BASE_API_URL}/${END_POINTS[category]}/${id}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      // Debido a que la API tiene algunos huecos, utilizar recursividad para nuevos intentos
      if (response.status === 404 && attempts < MAX_ATTEMPTS) {
        // En caso de que fallara por pedir un recurso que efectivamente no existe retorna null
        if (id > ALBUM_SLOTS[category]) return null

        // Generar un nuevo id random
        const newId = getRandomId(1, ALBUM_SLOTS[category])
        const newStickerRequest = { ...sticker, id: newId }

        // Ejecutar la misma función sumándole un intento
        return getStickerFromApi(newStickerRequest, attempts + 1)
      }
      throw new Error(`SWAPI error: ${response.status} for ${url}`)
    }

    const data = await response.json()

    // Adaptar
    if (category === 'character') return characterStickerAdapter(id, data)
    if (category === 'film') return filmStickerAdapter(id, data)
    if (category === 'spaceship') return spaceShipStickerAdapter(id, data)

    return null
  } catch (error) {
    console.error('Error fetching or adapting sticker:', error)
    return null
  }
}

// Traer de la api y resuelve simultaneamente las peticiones del pack
export const getPackFromApi = async (pack: SecretPack): Promise<AlbumSticker[]> => {
  const stickerPromises = pack.map(async (sticker) => getStickerFromApi(sticker))
  const result = await Promise.all(stickerPromises)
  return result.filter((sticker) => sticker !== null)
}
