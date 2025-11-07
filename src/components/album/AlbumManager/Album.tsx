import type { Album as AlbumType } from '../../../types/album.types'
import { AlbumCategory } from '../AlbumCategory/AlbumCategory'
import './album.scss'

interface Props {
  data: AlbumType
}

export const Album = ({ data }: Props) => {
  const albumCategories = Object.entries(data)

  return (
    <div className="album-container">
      {albumCategories.map(([category, data]) => (
        <AlbumCategory key={category} title={category} data={data} />
      ))}
    </div>
  )
}
