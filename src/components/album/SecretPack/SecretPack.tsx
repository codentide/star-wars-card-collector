import { useState } from 'react'
import type { SecretPack as SecretPackType } from '../../../types/album.type'

interface Props {
  data: SecretPackType
}

export const SecretPack = ({ data }: Props) => {
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
        <p key={index}>
          {sticker.id} - {sticker.category}
        </p>
      ))}
    </article>
  )
}
