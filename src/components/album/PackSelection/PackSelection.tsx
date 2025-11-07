import { useAlbumActions } from '../../../stores/album.store'
import type { SecretPack as SecretPackType } from '../../../types/album.types'

import './pack-selection.scss'

interface Props {
  packs: SecretPackType[]
}

export const PackSelection = ({ packs }: Props) => {
  const { openSecretPack } = useAlbumActions()

  return (
    <ul className="pack-selection">
      {packs.map((_, index) => (
        <button
          key={index}
          className="secret-pack"
          onClick={() => openSecretPack(index)}
        />
      ))}
    </ul>
  )
}
