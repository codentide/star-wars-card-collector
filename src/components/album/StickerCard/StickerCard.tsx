import type { Sticker } from '../../../types/album.types'
import './sticker-card.scss'

interface Props {
  data: Omit<Sticker, 'url'>
}

export const StickerCard = ({ data }: Props) => {
  const { id, title, rarity, category } = data

  return (
    <div className={`sticker-card sticker-card--${rarity}`}>
      <div className="sticker-card__header">
        <span className="sticker-card__id">{id}</span>
        <p className="sticker-card__title">{title}</p>
      </div>
      <p className="sticker-card__rarity">
        {rarity} {category}
      </p>
    </div>
  )
}
