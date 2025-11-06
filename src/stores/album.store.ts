import { create } from 'zustand'
import type { Album, Sticker } from '../types/album.type'
import { initializeAlbum } from '../helpers'

interface Actions {
  initializeAlbum: () => void
  addStickerToAlbum: (sticker: Sticker) => void
}

interface State {
  album: Album
  actions: Actions
}

export const useAlbumStore = create<State>((set, get) => ({
  album: { character: {}, film: {}, spaceship: {} },
  actions: {
    initializeAlbum: () => set({ album: initializeAlbum() }),
    addStickerToAlbum: (sticker) => {
      const currentAlbum = get().album
      const category = sticker.category
      const id = sticker.id

      const newAlbumCategory = {
        ...currentAlbum[category],
        [id]: sticker,
      }

      const newAlbum = {
        ...currentAlbum,
        [category]: newAlbumCategory,
      }

      set({ album: newAlbum })
    },
  },
}))

export const useAlbum = () => useAlbumStore((state) => state.album)
export const useAlbumActions = () => useAlbumStore((state) => state.actions)
