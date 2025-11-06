import type { Album } from '../../../types/album.type'

interface Props {
  data: Album
}

export const AlbumGrid = ({ data }: Props) => {
  const categories: Array<keyof Album> = ['character', 'film', 'spaceship']

  return (
    <div>
      {Object.entries(data.film).map(([key, value]) => (
        <p key={key}>
          {key}, {value === null && 'null'}
        </p>
      ))}
    </div>
  )
}
