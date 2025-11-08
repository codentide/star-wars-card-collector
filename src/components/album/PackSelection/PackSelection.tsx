import { useState } from 'react'
import { useAlbumActions } from '../../../stores/album.store'
import type { SecretPack as SecretPackType } from '../../../types/album.types'

import './pack-selection.scss'

interface Props {
  packs: SecretPackType[]
}

export const PackSelection = ({ packs }: Props) => {
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)
  const { openSecretPack } = useAlbumActions()

  const handleOpen = (index: number) => {
    setIsFadingOut(true)

    setTimeout(() => openSecretPack(index), 300)
  }

  return (
    <ul className="pack-selection">
      {packs.map((_, index) => (
        <button
          key={index}
          className={`secret-pack ${isFadingOut ? 'secret-pack--exiting' : ''}`}
          disabled={isFadingOut}
          onClick={() => handleOpen(index)}
        />
      ))}
    </ul>
  )
}
