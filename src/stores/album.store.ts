import { create } from 'zustand'
import type { Album } from '../types/album.type'
import { initializeAlbum } from '../helpers'

interface Actions {
  initializeAlbum: () => void
}

interface State {
  album: Album
  actions: Actions
}

export const useAlbumStore = create<State>((set) => ({
  album: { character: {}, film: {}, spaceship: {} },
  actions: {
    initializeAlbum: () => set({ album: initializeAlbum() }),
  },
}))

export const useAlbum = () => useAlbumStore((state) => state.album)
export const useAlbumActions = () => useAlbumStore((state) => state.actions)
