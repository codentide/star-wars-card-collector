import type { AlbumSlot as AlbumSlotType, Sticker as StickerType } from '../../../types'
import { Link } from 'react-router'
import './album-slot.scss'
import { StickerCard } from '../StickerCard/StickerCard'

interface Props {
  slotId: StickerType['id']
  slotData: AlbumSlotType
}

// Si esta vació

export const AlbumSlot = ({ slotId, slotData }: Props) => {
  if (slotData == null) {
    return (
      <div className="album-slot">
        <span className="album-slot__id">{slotId}</span>
      </div>
    )
  }

  const { id, category } = slotData
  return (
    <Link to={`${category}/${id}`}>
      <StickerCard data={slotData} />
    </Link>
  )
}
