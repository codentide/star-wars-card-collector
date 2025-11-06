type Rarity = 'special' | 'regular'
type Category = 'character' | 'film' | 'spaceship'

export interface Sticker {
  id: number
  title: string
  rarity: Rarity
  category: Category
}

export type AlbumCategory = Record<number, Sticker | null>

export interface Album {
  film: AlbumCategory
  character: AlbumCategory
  spaceship: AlbumCategory
}
