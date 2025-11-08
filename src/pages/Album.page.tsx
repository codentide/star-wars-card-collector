import { useAlbum } from '../stores/album.store'
import { AlbumFilterTabs, AlbumManager } from '../components'
import { Outlet } from 'react-router'
import type { StickerCategory } from '../types'
import { useState } from 'react'

export const AlbumPage = () => {
  const albumData = useAlbum()
  const [activeCategory, setActiveCategory] = useState<StickerCategory>('character')

  return (
    <section className="album-page">
      <Outlet />
      <AlbumFilterTabs onSelectCategory={setActiveCategory} />
      <AlbumManager data={albumData} activeCategory={activeCategory} />
    </section>
  )
}
