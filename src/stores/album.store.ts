import { create } from 'zustand'
import type { Album, SecretPack, Sticker } from '../types/album.type'
import { generateSecretPack, initializeAlbum } from '../utils'

interface Actions {
  initializeAlbum: () => void
  addStickerToAlbum: (sticker: Sticker) => void
  generateAvailablePacks: (limit: number) => void
}

interface State {
  album: Album
  availablePacks: SecretPack[]
  actions: Actions
}

export const useAlbumStore = create<State>((set, get) => ({
  album: { character: {}, film: {}, spaceship: {} },
  availablePacks: [],
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
    generateAvailablePacks: (limit: number) => {
      const newAvailablePacks: SecretPack[] = []

      for (let i = 1; i <= limit; i++) {
        const newSecretPack = generateSecretPack()
        newAvailablePacks.push(newSecretPack)
      }

      set({ availablePacks: newAvailablePacks })
    },
  },
}))

export const useAlbum = () => useAlbumStore((state) => state.album)
export const useAvailablePacks = () =>
  useAlbumStore((state) => state.availablePacks)
export const useAlbumActions = () => useAlbumStore((state) => state.actions)
