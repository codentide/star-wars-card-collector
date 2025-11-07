import { useEffect } from 'react'
import {
  useAlbumActions,
  useAvailablePacks,
  useOpenedPack,
} from '../stores/album.store'
import { PackSelection } from '../components/album/PackSelection/PackSelection'
import { OpenedPack } from '../components/album/OpenedPack/OpenedPack'
import { PackLockTimerDisplay } from '../components'

export const UnboxPage = () => {
  // Funcion para generar nuevos paquetes secretos
  const { generateAvailablePacks } = useAlbumActions()
  // Paquetes secretos
  const availablePacks = useAvailablePacks()
  // Paquete seleccionado para abrir
  const openedPack = useOpenedPack()

  // El efecto se encarga de que cada vez que no haya un sobre abierto genere opciones para abrir
  useEffect(() => {
    // Ver si solo ejecutar al primer render
    if (availablePacks.length === 0 && openedPack === null) {
      console.log('Generando desde unbox')
      generateAvailablePacks(4)
    }
  }, [availablePacks.length, generateAvailablePacks, openedPack])

  return (
    <section className="unbox-page">
      {availablePacks.length > 0 ? (
        <h2>Abrir Nuevo Sobre</h2>
      ) : (
        <PackLockTimerDisplay />
      )}
      <br />
      {openedPack === null ? (
        <PackSelection packs={availablePacks} />
      ) : (
        <OpenedPack pack={openedPack} />
      )}
    </section>
  )
}
