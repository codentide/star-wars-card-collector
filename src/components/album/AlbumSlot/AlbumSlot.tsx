import type { AlbumSlot as AlbumSlotType } from '../../../types/album.types'
import './album-slot.scss'

interface Props {
  id: number
  stickerData: AlbumSlotType
}

export const AlbumSlot = ({ id, stickerData }: Props) => {
  if (stickerData == null)
    return (
      <div className="album-slot --empty">
        <p>{id}</p>
      </div>
    )

  const { title, category, rarity } = stickerData
  return (
    <div className="album-slot">
      <h4 className="title">{title}</h4>
      <span className="id">{id}</span>
      <span>{category}</span>
      <span>{rarity}</span>
    </div>
  )
}
