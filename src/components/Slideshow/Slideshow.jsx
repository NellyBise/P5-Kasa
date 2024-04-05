import './Slideshow.scss'
import Arrow from '../../assets/Vector-carousel.svg'
import { useState } from 'react'

function Slideshow({ pictures }) {
  const [clickedIndex, setClickedIndex] = useState(0)

  const NextPicture = () => {
    setClickedIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }
  const PrevPicture = () => {
    setClickedIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    )
  }

  return (
    <section className="Slideshow">
      {pictures.map((picture, index) => (
        <div>
          <img
            id={index}
            key={pictures}
            className={
              index === clickedIndex
                ? 'Slideshow__picture Slideshow__picture--active'
                : 'Slideshow__picture'
            }
            src={picture}
            alt="vue du logement"
          />
        </div>
      ))}
      <div className="Slideshow__nav">
        <button className="Slideshow__button" onClick={PrevPicture}>
          <img className="Slideshow__arrow" src={Arrow} alt="flèche gauche" />
        </button>
        <button className="Slideshow__button" onClick={NextPicture}>
          <img
            className="Slideshow__arrow  Slideshow__arrow--right"
            src={Arrow}
            alt="flèche droite"
          />
        </button>
      </div>
      <div className="Slideshow__count">
        {clickedIndex + 1}/{pictures.length}
      </div>
    </section>
  )
}

export default Slideshow
