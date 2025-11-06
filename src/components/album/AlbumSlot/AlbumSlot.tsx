import type { AlbumSlot as AlbumSlotType } from '../../../types/album.type'
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

  return (
    <div className="album-slot">
      <ul>
        <li>{stickerData.id}</li>
        <li>{stickerData.title}</li>
        <li>{stickerData.category}</li>
        <li>{stickerData.rarity}</li>
      </ul>
    </div>
  )
}
