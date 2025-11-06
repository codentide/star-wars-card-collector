import type { Album as AlbumType } from '../../../types/album.type'
import { AlbumCategory } from '../AlbumCategory/AlbumCategory'
import './album.scss'

interface Props {
  data: AlbumType
}

export const Album = ({ data }: Props) => {
  const albumCategories = Object.entries(data)

  return (
    <div className="album-container">
      {albumCategories.map(([categoryTitle, data]) => (
        <AlbumCategory key={categoryTitle} title={categoryTitle} data={data} />
      ))}
    </div>
  )
}
