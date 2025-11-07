import type {
  Sticker,
  ApiFilm,
  ApiPeople,
  ApiSpaceShip,
  CharacterSticker,
  FilmSticker,
  SpaceShipSticker,
} from '../types'
import { determineRarity } from '../utils'

export const characterStickerAdapter = (
  id: Sticker['id'],
  { name, gender, height, homeworld, skin_color, url }: ApiPeople
): CharacterSticker => {
  const rarity = determineRarity(id, 'character')
  return {
    id,
    title: name,
    rarity,
    category: 'character',
    gender,
    height,
    homeworld,
    skin_color,
    url,
  }
}

export const filmStickerAdapter = (
  id: Sticker['id'],
  { title, episode_id, opening_crawl, director, producer, release_date, url }: ApiFilm
): FilmSticker => {
  const rarity = determineRarity(id, 'film')
  return {
    id,
    title,
    rarity,
    category: 'film',
    episode: episode_id,
    overview: opening_crawl,
    director,
    producer,
    release: release_date,
    url,
  }
}

export const spaceShipStickerAdapter = (
  id: Sticker['id'],
  { name, crew, manufacturer, model, passengers, url }: ApiSpaceShip
): SpaceShipSticker => {
  const rarity = determineRarity(id, 'spaceship')
  return {
    id,
    title: name,
    rarity,
    category: 'spaceship',
    crew,
    manufacturer,
    model,
    passengers,
    url,
  }
}
