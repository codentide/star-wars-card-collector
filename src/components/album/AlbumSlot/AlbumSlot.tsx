import type { AlbumSlot as AlbumSlotType } from '../../../types/album.types'
import { Sticker } from '../Sticker/Sticker'
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

  return <Sticker data={stickerData} />
}
