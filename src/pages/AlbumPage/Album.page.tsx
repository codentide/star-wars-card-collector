import { AlbumFilterTabs, AlbumManager } from '../../components'
import { useAlbum } from '../../stores/album.store'
import type { StickerCategory } from '../../types'
import { Outlet } from 'react-router'
import { useState } from 'react'
import './album-page.scss'

export const AlbumPage = () => {
  const albumData = useAlbum()
  const [activeCategory, setActiveCategory] = useState<StickerCategory>('character')

  return (
    <section className="album-page">
      {/* Muestra el modal de detalle */}
      <Outlet />
      <AlbumFilterTabs onSelectCategory={setActiveCategory} />
      <AlbumManager data={albumData} activeCategory={activeCategory} />
    </section>
  )
}
