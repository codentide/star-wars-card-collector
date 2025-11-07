import { useState } from 'react'
import type { SecretPack as SecretPackType } from '../../../types/album.types'
import { useAlbumActions } from '../../../stores/album.store'

interface Props {
  index: number
  data: SecretPackType
}

export const SecretPack = ({ index, data }: Props) => {
  const { openSecretPack } = useAlbumActions()

  // 1. Clickear
  // 2. Traer los elementos segun cada objeto del array (SecretSticker)
  // 3. Loading llamativo mientras trae la data
  // 4. Lista de las cards
  // 5. Si el sticker es nuevo mostrar boton de "descartar" y "aceptar", sino "aceptar" solamente
  // 6. el boton de aceptar agrega el cromo al album y descartar pasa al siguiente pack

  const [open, setOpen] = useState<boolean>(false)

  return (
    <article className="secret-pack">
      {data.map((sticker, index) => (
        <div key={index}>
          <p>
            {sticker.id} - {sticker.category}
          </p>
        </div>
      ))}
      <button onClick={() => openSecretPack(index)}>open</button>
    </article>
  )
}
