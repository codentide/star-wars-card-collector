import type { Album, AlbumCategory } from '../types/album.type'

const ALBUM_SLOTS = { film: 6, character: 82, spaceship: 36 }

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
