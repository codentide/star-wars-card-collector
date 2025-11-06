type Rarity = 'special' | 'regular'
type Category = 'character' | 'film' | 'spaceship'

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
