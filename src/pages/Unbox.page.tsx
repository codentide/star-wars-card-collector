import { useEffect } from 'react'
import { useAlbumActions, useAvailablePacks } from '../stores/album.store'
import { SecretPackList } from '../components/album/SecretPackList/SecretPackList'

export const UnboxPage = () => {
  const { generateAvailablePacks } = useAlbumActions()
  const availablePacks = useAvailablePacks()

  useEffect(() => {
    generateAvailablePacks(4)
  }, [generateAvailablePacks])

  // useEffect(() => console.log(availablePacks), [availablePacks])

  return (
    <section className="unbox-page">
      <h2>Abrir Nuevo Sobre</h2>
      <SecretPackList data={availablePacks} />
    </section>
  )
}
