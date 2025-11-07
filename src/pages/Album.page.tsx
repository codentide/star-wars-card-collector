import { useAlbum, useAlbumActions } from '../stores/album.store'
import { Album } from '../components'

export const AlbumPage = () => {
  const album = useAlbum()
  const { addStickerToAlbum } = useAlbumActions()

  return (
    <section>
      {/* Testing new function */}
      <button
        onClick={() =>
          addStickerToAlbum({
            id: 2,
            title: 'Kylo Ren',
            category: 'character',
            rarity: 'special',
          })
        }
      >
        ADD CARD
      </button>
      <Album data={album} />
    </section>
  )
}
