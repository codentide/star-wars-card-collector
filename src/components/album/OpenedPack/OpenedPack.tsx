import { useAlbumActions, useOpenedPack } from '../../../stores/album.store'
import { Sticker } from '../Sticker/Sticker'
import './opened-pack.scss'

export const OpenedPack = () => {
  const currentOpenedPack = useOpenedPack()
  const { processNextSticker, isStickerInAlbum } = useAlbumActions()
  const currentSticker = currentOpenedPack[currentOpenedPack.length - 1]
  const isRepeated = isStickerInAlbum(currentSticker)
  // [ ]: persistir el estado de pack abierto entre pestañas

  const handleClick = () => processNextSticker()

  return (
    <div className="opened-pack">
      {currentOpenedPack.map((sticker, index) => {
        return <Sticker key={index} data={sticker} />
      })}

      <button className={`opened-pack__button ${isRepeated ? '--discard' : '--add'}`} onClick={handleClick}>
        {isRepeated ? 'Discard' : '  Add'}
      </button>
    </div>
  )
}
