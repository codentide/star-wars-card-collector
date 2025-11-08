import type { Album as AlbumType, StickerCategory } from '../../../types/album.types'
import { AlbumCategory } from '../AlbumCategory/AlbumCategory'
import './album-manager.scss'

interface Props {
  data: AlbumType
  activeCategory: StickerCategory
}

// [ ]: add filters

export const AlbumManager = ({ activeCategory, data }: Props) => {
  // Convertir el mapa en un array
  const albumCategories = Object.entries(data)

  return (
    <div className="album-manager">
      {albumCategories.map(([category, data]) => {
        if (activeCategory === category) return <AlbumCategory key={category} title={category} data={data} />
      })}
    </div>
  )
}
