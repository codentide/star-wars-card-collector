import type { SecretPack as SecretPackType } from '../../../types/album.types'
import { useAlbumActions } from '../../../stores/album.store'

interface Props {
  index: number
  pack: SecretPackType
}

export const SecretPack = ({ index, pack }: Props) => {
  const { openSecretPack } = useAlbumActions()

  // 1. Clickear
  // 2. Traer los elementos segun cada objeto del array (SecretSticker)
  // 3. Loading llamativo mientras trae la data
  // 4. Lista de las cards
  // 5. Si el sticker es nuevo mostrar boton de "descartar" y "aceptar", sino "aceptar" solamente
  // 6. el boton de aceptar agrega el cromo al album y descartar pasa al siguiente pack

  return (
    <article className="secret-pack">
      {pack.map((sticker, index) => (
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
