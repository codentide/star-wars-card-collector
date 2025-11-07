export type Rarity = 'special' | 'regular'
export type Category = 'character' | 'film' | 'spaceship'
export type Configuration = Category[]

export interface Sticker {
  id: number
  title: string
  rarity: Rarity
  category: Category
}

export type AlbumSlot = Sticker | null
export type AlbumCategory = Record<number, AlbumSlot>

export interface Album {
  film: AlbumCategory
  character: AlbumCategory
  spaceship: AlbumCategory
}

export type SecretSticker = {
  id: Sticker['id']
  category: Category
}

export type SecretPack = SecretSticker[]
