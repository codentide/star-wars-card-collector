import type { Sticker as StickerType } from '../../../types/album.types'
import { useAlbumActions } from '../../../stores/album.store'
import { Sticker } from '../Sticker/Sticker'
import { useEffect, useState } from 'react'
import './opened-pack.scss'

interface Props {
  pack: StickerType[] | null
}

export const OpenedPack = ({ pack }: Props) => {
  const { addStickerToAlbum, clearOpenedPack, isStickerInAlbum } = useAlbumActions()
  const [stickersToAdd, setStickersToAdd] = useState<StickerType[] | null>(pack)

  // [ ]: persistir el estado de pack abierto entre pestañas

  useEffect(() => {
    if (stickersToAdd === null && pack !== null) clearOpenedPack()
  }, [stickersToAdd, clearOpenedPack, pack])

  const handleAccept = () => {
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
      {isStickerInAlbum(stickersToAdd[stickersToAdd.length - 1]) ? (
        <button className="opened-pack__button --discard" onClick={handleAccept}>
          Discard
        </button>
      ) : (
        <button className="opened-pack__button" onClick={handleAccept}>
          Add To Album
        </button>
      )}
    </div>
  )
}
