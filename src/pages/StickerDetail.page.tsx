import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import type { Category, Sticker } from '../types'
import { getStickerFromApi } from '../services/sticker.service'

export const StickerDetailPage = () => {
  const [detailData, setDetailData] = useState<Sticker | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const { id, category } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getStickerDetail = async () => {
      if (!id || !category) return
      const data = await getStickerFromApi({ id: Number(id), category: category as Category })
      setDetailData(data)
    }

    getStickerDetail()
  }, [id, category])

  // Función para salir del modal
  const handleClose = () => navigate('/', { replace: true })

  return (
    <section className="sticker-detail__overlay" onClick={handleClose}>
      <div className="sticker-content" onClick={(e) => e.stopPropagation()}>
        <div className="sticker-content__header">
          <div className="heading-box">
            <div className="title-box">
              <span>#{detailData?.id}</span>
              <h3>{detailData?.title}</h3>
            </div>
            <p className="category">{detailData?.category}</p>
          </div>
          <button className="close-btn" onClick={handleClose}>
            x
          </button>
        </div>
      </div>
    </section>
  )
}

// Data para film: director, producer, estreno, episodio
// Data para char: height, bith, skin_color, homeworld
// Data para ship: cost_in_credits, manufacturer, model, crew
