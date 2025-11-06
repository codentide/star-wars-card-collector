import { useEffect } from 'react'
import { useAlbum, useAlbumActions } from '../stores/album.store'
import { Album } from '../components'

export const AlbumPage = () => {
  const album = useAlbum()
  const { initializeAlbum } = useAlbumActions()

  useEffect(() => {
    if (Object.keys(album.film).length === 0) initializeAlbum()
  }, [album, initializeAlbum])

  return (
    <section>
      <Album data={album} />
    </section>
  )
}
