import type { CharacterSticker, SpaceShipSticker, FilmSticker, StickerCategory } from '../../types'
import { useNavigate, useParams } from 'react-router'
import { LoadingSpinner } from '../../components/common'
import { useStickerDetail } from '../../hooks/useStickerDetail'
import { IoIosClose as CloseIcon } from 'react-icons/io'
import './sticker-detail-page.scss'

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
        <article className="sticker-detail__container" onClick={(e) => e.stopPropagation()}>
          <LoadingSpinner />
        </article>
      </div>
    )
  }

  // Retorno en caso en caso de haber un error
  if (error) {
    return (
      <div className="sticker-detail__overlay" onClick={handleClose}>
        <article className="sticker-detail__container">
          <header className="sticker-detail__header">
            <h2>Oops</h2>
            <button className="sticker-detail__close-btn" onClick={handleClose}>
              <CloseIcon />
            </button>
          </header>
          <p>No se encontró detalle del cromo.</p>
        </article>
      </div>
    )
  }

  // Guard para evitar algun error extra
  if (!detailData) return

  return (
    <div className="sticker-detail__overlay" onClick={handleClose}>
      <article className={`sticker-detail__container ${detailData.rarity}`} onClick={(e) => e.stopPropagation()}>
        <header className="sticker-detail__header">
          <div className="sticker-detail__info-group">
            <div className="sticker-detail__title-box">
              <span className="sticker-detail__id">#{detailData.id}</span>
              <h3 className="sticker-detail__title">{detailData.title}</h3>
            </div>
            <p className="sticker-detail__category">
              {detailData.rarity} {detailData.category}
            </p>
          </div>
          <button className="sticker-detail__close-btn" onClick={handleClose}>
            <CloseIcon />
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
    <div className="sticker-detail__detail-box character">
      <span className="sticker-detail__detail-brick">
        <strong>Height</strong> {height}cm
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Skin Color</strong> {skinColor}
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Gender</strong> {gender}
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Birth Day</strong> {birth}
      </span>
      <span className="sticker-detail__detail-brick sticker-detail__detail-brick--two-span">
        <strong>Homeworld</strong>
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
    <div className="sticker-detail__detail-box sticker-detail__detail-box--spaceship">
      <span className="sticker-detail__detail-brick sticker-detail__detail-brick--two-span">
        <strong>Model</strong> {model}
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Crew</strong> {crew}
      </span>
      <span className="sticker-detail__detail-brick sticker-detail__detail-brick--two-span">
        <strong>Manufacturer</strong> {manufacturer}
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Passengers</strong> {passengers}
      </span>
    </div>
  )
}

const FilmDetail = ({ detail }: { detail: FilmSticker }) => {
  const { overview, director, producer, release, episode } = detail

  return (
    <div className="sticker-detail__detail-box sticker-detail__detail-box--film">
      <span className="sticker-detail__detail-brick">
        <strong>Director</strong> {director}
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Producer</strong> {producer}
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Release Date</strong> {release}
      </span>
      <span className="sticker-detail__detail-brick">
        <strong>Episode</strong> {episode}
      </span>
      <span className="sticker-detail__detail-brick sticker-detail__detail-brick--full-span">
        <strong>Overview</strong> {overview}
      </span>
    </div>
  )
}
