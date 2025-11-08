import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import type { AlbumSticker, Sticker, StickerCategory } from '../types'
import { useAlbumActions } from '../stores/album.store'
import { getStickerDetailFromApi } from '../services/sticker.service'

export const useStickerDetail = (
  id: Sticker['id'],
  category: StickerCategory
): {
  detailData: AlbumSticker | null
  isLoading: boolean
  error: string | null
} => {
  // Estado local para la información del sticker
  const [detailData, setDetailData] = useState<AlbumSticker | null>(null)

  // Estados auxiliares
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Sería mala experiencia que alguien pueda acceder
  // al detalle un recurso que no tiene en su album
  // Esta funcion verifica si el recurso esta en el album
  const { isStickerInAlbum } = useAlbumActions()
  const navigate = useNavigate()

  // Efecto que verifica y trae la información del sticker
  useEffect(() => {
    const getStickerDetail = async () => {
      if (!id || !category) return

      // Verificar si el sticker solicitado está en el album
      if (!isStickerInAlbum({ id: Number(id), category: category as StickerCategory })) {
        navigate('/')
      }
      setIsLoading(true)
      setError(null)

      try {
        const data = await getStickerDetailFromApi({ id: Number(id), category: category as StickerCategory })
        setDetailData(data)

        if (!data) throw new Error('Datos no encontrados.')
      } catch (error) {
        console.error(error)
        setError('Error al cargar detalles.')
        setDetailData(null)
      } finally {
        setIsLoading(false)
      }
    }

    getStickerDetail()
  }, [id, category, isStickerInAlbum, navigate])

  return { detailData, isLoading, error }
}
