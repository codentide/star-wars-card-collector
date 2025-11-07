import { useEffect } from 'react'
import {
  useAlbumActions,
  useAvailablePacks,
  useOpenedPack,
} from '../stores/album.store'
import { SecretPackList } from '../components/album/SecretPackList/SecretPackList'
import { SecretPack } from '../components/album/SecretPack/SecretPack'

export const UnboxPage = () => {
  const { generateAvailablePacks } = useAlbumActions()
  const availablePacks = useAvailablePacks()
  const openedPack = useOpenedPack()

  useEffect(() => {
    generateAvailablePacks(4)
  }, [generateAvailablePacks])

  // useEffect(() => console.log(availablePacks), [availablePacks])

  return (
    <section className="unbox-page">
      <h2>Abrir Nuevo Sobre</h2>
      <br />
      {openedPack === null ? (
        <SecretPackList data={availablePacks} />
      ) : (
        <SecretPack data={openedPack} />
      )}
    </section>
  )
}
