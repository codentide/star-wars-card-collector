import { useAlbumActions, useIsLoading, useOpenedPack } from '../../../stores/album.store'
import { LoadingSpinner } from '../../common'
import { StickerCard } from '../StickerCard/StickerCard'

import './opened-pack.scss'

export const OpenedPack = () => {
  const currentOpenedPack = useOpenedPack()
  const isLoading = useIsLoading()
  const { processNextSticker, isStickerInAlbum } = useAlbumActions()
  const currentSticker = currentOpenedPack[0]
  const isRepeated = isStickerInAlbum(currentSticker)

  const handleClick = () => {
    processNextSticker()
  }

  if (isLoading)
    return (
      <div className="opened-pack">
        <LoadingSpinner />
      </div>
    )

  return (
    <div className="opened-pack">
      {currentOpenedPack.map((sticker, index) => {
        return <StickerCard key={index} data={sticker} />
      })}

      <span className="opened-pack__repeat-badge">{isRepeated ? 'Repeated' : 'New!'}</span>
      <button className={`opened-pack__button ${isRepeated ? '--discard' : '--add'}`} onClick={handleClick}>
        {isRepeated ? 'Discard' : 'Add to album'}
      </button>
    </div>
  )
}
