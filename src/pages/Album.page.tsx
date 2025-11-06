import { useEffect } from 'react'
import { useAlbum, useAlbumActions } from '../stores/album.store'
import { Album } from '../components'

export const AlbumPage = () => {
  const album = useAlbum()
  const { initializeAlbum, addStickerToAlbum } = useAlbumActions()

  useEffect(() => {
    if (Object.keys(album.film).length === 0) initializeAlbum()
  }, [album, initializeAlbum, addStickerToAlbum])

  return (
    <section>
      {/* Testing new function */}
      <button
        onClick={() =>
          addStickerToAlbum({
            id: 2,
            title: 'Marco Ren',
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
