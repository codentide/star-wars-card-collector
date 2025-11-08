import { useAlbum } from '../../../stores/album.store'
import type { StickerCategory } from '../../../types'
import './album-filter-tabs.scss'
import { useState } from 'react'

interface Props {
  onSelectCategory: (category: StickerCategory) => void
}

export const AlbumFilterTabs = ({ onSelectCategory }: Props) => {
  const [activeTab, setActiveTab] = useState<StickerCategory>('character')

  const album = useAlbum()
  const counts = {
    character: Object.values(album.character).filter((slot) => slot !== null).length,
    spaceship: Object.values(album.spaceship).filter((slot) => slot !== null).length,
    film: Object.values(album.film).filter((slot) => slot !== null).length,
  }
  console.log(counts.character)

  // const totalCount = counts.character + counts.spaceship + counts.film

  const tabs: { key: StickerCategory; count: number }[] = [
    { key: 'character', count: counts.character },
    { key: 'spaceship', count: counts.spaceship },
    { key: 'film', count: counts.film },
  ]

  const handleTabClick = (category: StickerCategory) => {
    setActiveTab(category)
    onSelectCategory(category)
  }

  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`filter-tabs__item ${activeTab === tab.key ? 'filter-tabs__item--active' : ''}`}
          onClick={() => handleTabClick(tab.key)}
        >
          <span className="filter-tabs__name">{tab.key + 's'}</span>
          <span className="filter-tabs__count">{tab.count}</span>
        </button>
      ))}
    </div>
  )
}
