import type { Album, SecretPack, Sticker, StickerRequest } from '../types/album.types'
import { create } from 'zustand'
import { generateSecretPack, initializeAlbum } from '../utils'
import { getPackFromApi } from '../services/sticker.service'

interface Actions {
  initializeAlbum: () => void
  addStickerToAlbum: (sticker: Sticker) => void
  generateAvailablePacks: (limit: number) => void
  openSecretPack: (index: number) => Promise<void>
  clearOpenedPack: () => void
  startPackLockTimer: (minutes: number) => void
  canOpenPack: () => boolean
  isStickerInAlbum: (sticker: StickerRequest) => boolean
  processNextSticker: () => void
}

interface State {
  album: Album
  availablePacks: SecretPack[]
  openedPack: Sticker[]
  packLockTimer: number | null
  isLoading: boolean
  actions: Actions
}

export const useAlbumStore = create<State>((set, get) => ({
  album: initializeAlbum(),
  availablePacks: [],
  openedPack: [],
  packLockTimer: null,
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
      // Validar el timer
      const isTimerEnded = get().actions.canOpenPack()
      if (!isTimerEnded) return

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
      get().actions.startPackLockTimer(0.25)
      set({ openedPack, availablePacks: [], isLoading: false })
    },
    clearOpenedPack: () => set({ openedPack: [] }),
    startPackLockTimer: (minutes) => {
      const seconds = minutes * 60
      const ms = seconds * 1000
      const expirationTime = Date.now() + ms
      set({ packLockTimer: expirationTime })
    },
    canOpenPack: () => {
      // Traer el tiempo de bloqueo
      const timer = get().packLockTimer

      // Si es nulo se puede abrir un sobre
      if (timer === null) return true
      // Si el tiempo ya transcurrió puede abrir el sobre y limpia el timer
      if (Date.now() > timer) {
        set({ packLockTimer: null })
        return true
      }
      // No es posible abrir un pack
      return false
    },
    isStickerInAlbum: (sticker) => {
      const currentAlbum = get().album
      const stickerId = sticker.id
      const category = sticker.category

      // Si no encuentra nada retorna false
      if (!currentAlbum[category]) return false
      return currentAlbum[category][stickerId] !== null
    },
    processNextSticker: () => {
      const currentOpenedPack = get().openedPack
      const newOpenedPackArray = [...currentOpenedPack]
      const currentSticker = newOpenedPackArray.pop()

      // Si el array estaba vacio currentSticker deberia ser undefined
      if (!currentSticker) return

      const isRepeated = get().actions.isStickerInAlbum(currentSticker)
      if (!isRepeated) get().actions.addStickerToAlbum(currentSticker)

      set({ openedPack: newOpenedPackArray })
    },
  },
}))

export const useAlbum = () => useAlbumStore((state) => state.album)
export const useAvailablePacks = () => useAlbumStore((state) => state.availablePacks)
export const useOpenedPack = () => useAlbumStore((state) => state.openedPack)
export const useIsLoading = () => useAlbumStore((state) => state.isLoading)
export const useAlbumActions = () => useAlbumStore((state) => state.actions)
export const usePackLockTimer = () => useAlbumStore((state) => state.packLockTimer)
