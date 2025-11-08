import { useEffect } from 'react'
import { useAlbumActions, useAvailablePacks, useIsLoading, useOpenedPack } from '../../stores/album.store'
import { PackSelection } from '../../components/album/PackSelection/PackSelection'
import { OpenedPack } from '../../components/album/OpenedPack/OpenedPack'
import { PackLockTimerDisplay } from '../../components'
import { LoadingSpinner } from '../../components/common'
import './unbox-page.scss'

export const UnboxPage = () => {
  const isLoading = useIsLoading()
  // Funcion para generar nuevos paquetes secretos
  const { generateAvailablePacks } = useAlbumActions()
  // Paquetes secretos
  const availablePacks = useAvailablePacks()
  // Paquete seleccionado para abrir
  const openedPack = useOpenedPack()

  // El efecto se encarga de que cada vez que no haya un sobre abierto genere opciones para abrir
  useEffect(() => {
    // Ver si solo ejecutar al primer render
    if (availablePacks.length === 0 && openedPack.length === 0) {
      generateAvailablePacks(4)
    }
  }, [availablePacks.length, generateAvailablePacks, openedPack])

  return (
    <section className="unbox-page">
      <h2 className="unbox-page__title">Open Secret Pack</h2>
      {/* {availablePacks.length === 0 && <PackLockTimerDisplay />} */}

      <br />
      {openedPack.length === 0 && <PackLockTimerDisplay />}
      {openedPack.length === 0 && <PackSelection packs={availablePacks} />}
      {isLoading ? <LoadingSpinner /> : openedPack.length > 0 ? <OpenedPack /> : ''}
    </section>
  )
}
