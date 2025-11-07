import type { Album, SecretPack, Sticker } from '../types/album.types'
import { create } from 'zustand'
import { generateSecretPack, initializeAlbum } from '../utils'
import { getPackFromApi } from '../services/sticker.service'

interface Actions {
  initializeAlbum: () => void
  addStickerToAlbum: (sticker: Sticker) => void
  generateAvailablePacks: (limit: number) => void
  openSecretPack: (index: number) => Promise<void>
  clearOpenedPack: () => void
}

interface State {
  album: Album
  availablePacks: SecretPack[]
  openedPack: Sticker[] | null
  isLoading: boolean
  actions: Actions
}

export const useAlbumStore = create<State>((set, get) => ({
  album: { character: {}, film: {}, spaceship: {} },
  openedPack: null,
  availablePacks: [],
  isLoading: false,
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
    openSecretPack: async (index) => {
      set({ isLoading: true })
      // Traer pack seleccionado
      const selectedPack = get().availablePacks[index]
      // Hacer fetch con el pack seleccionado
      const openedPack = await getPackFromApi(selectedPack)
      set({ openedPack, availablePacks: [], isLoading: false })
    },
    clearOpenedPack: () => set({ openedPack: null }),
  },
}))

export const useAlbum = () => useAlbumStore((state) => state.album)
export const useAvailablePacks = () =>
  useAlbumStore((state) => state.availablePacks)
export const useOpenedPack = () => useAlbumStore((state) => state.openedPack)
export const useIsLoading = () => useAlbumStore((state) => state.isLoading)
export const useAlbumActions = () => useAlbumStore((state) => state.actions)
