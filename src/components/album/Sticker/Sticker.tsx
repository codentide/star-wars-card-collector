import type { Sticker as StickerType } from '../../../types/album.types'
import './sticker-card.scss'

interface Props {
  data: StickerType
}

export const Sticker = ({ data }: Props) => {
  const { id, title, category, rarity } = data

  return (
    <article className={`sticker-card ${rarity}`}>
      <header>
        <h3>{title}</h3>
        <span>{id}</span>
      </header>
      <div className="sticker-card__content">
        <p>{category}</p>
        <p>{rarity}</p>
      </div>
    </article>
  )
}
