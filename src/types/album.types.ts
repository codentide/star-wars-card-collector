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
  skin_color: string
  gender: string
  homeworld: string
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

export type AlbumSlot = Pick<Sticker, 'id' | 'category'> | null
export type AlbumCategory = Record<number, AlbumSlot>

export interface Album {
  film: AlbumCategory
  character: AlbumCategory
  spaceship: AlbumCategory
}

export type StickerRequest = Pick<Sticker, 'id' | 'category'>
export type SecretPack = StickerRequest[]
