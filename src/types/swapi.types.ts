export type ApiSticker = ApiPeople | ApiFilm | ApiSpaceShip

export interface ApiPeople {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: Array<string>
  vehicles: Array<string>
  starships: Array<string>
  created: string
  edited: string
  url: string
}

export interface ApiSpaceShip {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: Array<ApiPeople>
  films: Array<string>
  created: string
  edited: string
  url: string
}

export interface ApiFilm {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: Array<string>
  planets: Array<string>
  starships: Array<string>
  vehicles: Array<string>
  species: Array<string>
  created: string
  edited: string
  url: string
}
