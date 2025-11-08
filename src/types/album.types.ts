export type StickerRarity = 'special' | 'regular'
export type StickerCategory = 'character' | 'film' | 'spaceship'
export type PackConfiguration = StickerCategory[]

export interface Sticker {
  id: number
  title: string
  rarity: StickerRarity
  category: StickerCategory
  url: string
}

export interface CharacterSticker extends Sticker {
  category: 'character'
  height: string
  skinColor: string
  gender: string
  homeworld: string
  birth: string
}

export interface FilmSticker extends Sticker {
  category: 'film'
  episode: number
  overview: string
  director: string
  producer: string
  release: string
}

export interface SpaceShipSticker extends Sticker {
  category: 'spaceship'
  model: string
  manufacturer: string
  crew: string
  passengers: string
}
export type AlbumSticker = CharacterSticker | FilmSticker | SpaceShipSticker
export type AlbumSlot = Omit<Sticker, 'url'> | null
export type AlbumCategory = Record<number, AlbumSlot>

export interface Album {
  film: AlbumCategory
  character: AlbumCategory
  spaceship: AlbumCategory
}

// Sticker request es lo minimo que necesitamos para traer un sticker del api
export type StickerRequest = Pick<Sticker, 'id' | 'category'>
// Un sobre secreto esta formado por 4 o mas sticker requests
export type SecretPack = StickerRequest[]
