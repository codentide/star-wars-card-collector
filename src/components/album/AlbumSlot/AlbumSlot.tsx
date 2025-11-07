import type { AlbumSlot as AlbumSlotType } from '../../../types'
import { Link } from 'react-router'
import { Sticker } from '../Sticker/Sticker'
import './album-slot.scss'

interface Props {
  slotId: number
  stickerData: AlbumSlotType
}

export const AlbumSlot = ({ slotId, stickerData }: Props) => {
  if (stickerData == null) {
    return (
      <div className="album-slot --empty">
        <p>{slotId}</p>
      </div>
    )
  }

  const { id, category } = stickerData
  return (
    <Link to={`${category}/${id}`}>
      <Sticker data={stickerData} />
    </Link>
  )
}
