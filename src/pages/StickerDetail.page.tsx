import type { CharacterSticker, SpaceShipSticker, FilmSticker, StickerCategory } from '../types'
import { useNavigate, useParams } from 'react-router'
import { LoadingSpinner } from '../components/common'
import { useStickerDetail } from '../hooks/useStickerDetail'
import { IoIosClose } from 'react-icons/io'

export const StickerDetailPage = () => {
  const { id, category } = useParams()
  const { detailData, isLoading, error } = useStickerDetail(Number(id), category as StickerCategory)

  const navigate = useNavigate()
  // Función para salir del modal
  const handleClose = () => navigate('/', { replace: true })

  // Retorno en caso de estar cargando
  if (isLoading) {
    return (
      <div className="sticker-detail__overlay">
        <article className="sticker-content" onClick={(e) => e.stopPropagation()}>
          <LoadingSpinner />
        </article>
      </div>
    )
  }

  // Retorno en caso en caso de haber un error
  if (error) {
    return (
      <div className="sticker-detail__overlay" onClick={handleClose}>
        <article className="sticker-content error">
          <header className="sticker-content__header">
            <h2>Oops</h2>
            <button className="close-btn" onClick={handleClose}>
              <IoIosClose />
            </button>
          </header>
          <p>No se encontró detalle detalle del cromo.</p>
        </article>
      </div>
    )
  }

  // Guard para evitar algun error extra
  if (!detailData) return

  return (
    <div className="sticker-detail__overlay" onClick={handleClose}>
      <article className={`sticker-content ${detailData.rarity}`} onClick={(e) => e.stopPropagation()}>
        <header className="sticker-content__header">
          <div className="heading-box">
            <div className="title-box">
              <span className="id">#{detailData.id}</span>
              <h3 className="title">{detailData.title}</h3>
            </div>
            <p className="category">
              {detailData.rarity} {detailData.category}
            </p>
          </div>
          <button className="close-btn" onClick={handleClose}>
            <IoIosClose />
          </button>
        </header>
        {detailData.category === 'character' && <CharacterDetail detail={detailData} />}
        {detailData.category === 'spaceship' && <SpaceShipDetail detail={detailData} />}
        {detailData.category === 'film' && <FilmDetail detail={detailData} />}
      </article>
    </div>
  )
}

// Componentes auxiliares
const CharacterDetail = ({ detail }: { detail: CharacterSticker }) => {
  const { height, skinColor, gender, homeworld, birth } = detail

  return (
    <div className="detail-box character">
      <span className="detail-brick">
        <strong>Altura</strong> {height}cm
      </span>
      <span className="detail-brick">
        <strong>Color Piel</strong> {skinColor}
      </span>
      <span className="detail-brick">
        <strong>Género</strong> {gender}
      </span>
      <span className="detail-brick">
        <strong>Nacimiento</strong> {birth}
      </span>
      <span className="detail-brick two-span-width">
        <strong>Planeta</strong>{' '}
        <a target="_blank" href={homeworld}>
          {homeworld}
        </a>
      </span>
    </div>
  )
}

const SpaceShipDetail = ({ detail }: { detail: SpaceShipSticker }) => {
  const { model, manufacturer, crew, passengers } = detail

  return (
    <div className="detail-box spaceship">
      <span className="detail-brick two-span-width">
        <strong>Modelo</strong> {model}
      </span>
      <span className="detail-brick">
        <strong>Tripulación</strong> {crew}
      </span>
      <span className="detail-brick two-span-width">
        <strong>Fabricante</strong> {manufacturer}
      </span>
      <span className="detail-brick">
        <strong>Pasajeros</strong> {passengers}
      </span>
    </div>
  )
}

const FilmDetail = ({ detail }: { detail: FilmSticker }) => {
  const { overview, director, producer, release, episode } = detail

  return (
    <div className="detail-box film">
      <span className="detail-brick">
        <strong>Director</strong> {director}
      </span>
      <span className="detail-brick">
        <strong>Productor</strong> {producer}
      </span>
      <span className="detail-brick">
        <strong>Fecha Estreno</strong> {release}
      </span>
      <span className="detail-brick">
        <strong>Episodio</strong> {episode}
      </span>
      <span className="detail-brick full-width">
        <strong>Sinopsis</strong> {overview}
      </span>
    </div>
  )
}
