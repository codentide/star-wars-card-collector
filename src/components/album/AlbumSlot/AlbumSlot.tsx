import type { AlbumSlot as AlbumSlotType, Sticker as StickerType } from '../../../types'
import { Link } from 'react-router'
import './album-slot.scss'

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

  const { id, category, title, rarity } = slotData
  return (
    <Link to={`${category}/${id}`}>
      <div className={`album-slot album-slot--filled album-slot--${rarity}`}>
        <div className="album-slot__header">
          <span className="album-slot__id">{id}</span>
          <p className="album-slot__title">{title}</p>
        </div>
        <p className="album-slot__rarity">{rarity}</p>
      </div>
    </Link>
  )
}
