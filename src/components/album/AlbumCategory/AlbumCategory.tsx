import type { AlbumCategory as AlbumCategoryType } from '../../../types/album.types'
import { AlbumSlot } from '../AlbumSlot/AlbumSlot'
import './album-category.scss'

interface Props {
  title: string
  data: AlbumCategoryType
}

export const AlbumCategory = ({ title, data }: Props) => {
  const categorySlots = Object.entries(data)

  return (
    <section className="album-category">
      <h3 className="album-category__title">{title}</h3>

      <ul>
        {categorySlots.map(([id, data]) => (
          <li key={id}>
            <AlbumSlot id={Number(id)} stickerData={data} />
          </li>
        ))}
      </ul>
    </section>
  )
}
