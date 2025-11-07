import { ALBUM_SLOTS } from '../constants'
import type { Album, AlbumCategory } from '../types/album.types'

const createAlbumCategory = (count: number): AlbumCategory => {
  const newCategory: AlbumCategory = {}
  for (let i = 1; i <= count; i++) {
    newCategory[i] = null
  }

  return newCategory
}

export const initializeAlbum = (): Album => ({
  character: createAlbumCategory(ALBUM_SLOTS.character),
  film: createAlbumCategory(ALBUM_SLOTS.film),
  spaceship: createAlbumCategory(ALBUM_SLOTS.spaceship),
})
