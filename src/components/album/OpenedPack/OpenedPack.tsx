import type { Sticker as StickerType } from '../../../types/album.types'
import { useAlbumActions } from '../../../stores/album.store'
import { Sticker } from '../Sticker/Sticker'
import { useEffect, useState } from 'react'
import './opened-pack.scss'

interface Props {
  pack: StickerType[] | null
}

export const OpenedPack = ({ pack }: Props) => {
  const { addStickerToAlbum, clearOpenedPack } = useAlbumActions()
  const [stickersToAdd, setStickersToAdd] = useState<StickerType[] | null>(pack)

  // [ ]: persistir el estado de pack abierto entre pestañas

  useEffect(() => {
    if (stickersToAdd === null && pack !== null) clearOpenedPack()
  }, [stickersToAdd, clearOpenedPack, pack])

  const handleClick = () => {
    if (stickersToAdd === null || stickersToAdd.length === 0) return

    setStickersToAdd((prev) => {
      if (!prev || prev.length === 0) {
        return null
      }
      const newArray = [...prev]
      const addedSticker = newArray.pop()
      if (addedSticker) addStickerToAlbum(addedSticker)
      if (newArray.length === 0) return null

      return newArray
    })
  }
  if (stickersToAdd === null) return
  return (
    <div className="opened-pack">
      {stickersToAdd.map((sticker, index) => {
        return <Sticker key={index} data={sticker} />
      })}
      <button onClick={handleClick}>Accept</button>
    </div>
  )
}
