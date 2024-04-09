import './Slideshow.scss'
import Arrow from '../../assets/Vector-carousel.svg'
import { useState } from 'react'

function Slideshow({ pictures, picturesId }) {
  const [clickedIndex, setClickedIndex] = useState(0)

  const NextPicture = () => {
    setClickedIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }
  const PrevPicture = () => {
    setClickedIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    )
  }

  function slideTo(index) {
    currentSlide = index >= pictures.length || index < 1 ? 0 : index
    // Boucle sur tous les éléments de type "slide" pour les déplacer
    $slides.forEach(
      ($elt) => ($elt.style.transform = `translateX(-${currentSlide * 100}%)`)
    )
    // Boucle sur tous les "dots" pour mettre à jour la couleur par la classe "active" ou "inactive"
    $dots.forEach(
      ($elt, key) =>
        ($elt.classList = `dot ${key === currentSlide ? 'active' : 'inactive'}`)
    )
  }

  return (
    <section className="Slideshow">
      {pictures.map((picture, index) => (
        <div className="Slideshow__inner">
          <img
            id={`${picturesId}-${index}`}
            key={`${picturesId}-${index}`}
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
      {pictures.length > 1 ? (
        <div>
          <div className="Slideshow__nav">
            <button className="Slideshow__button" onClick={PrevPicture}>
              <img
                className="Slideshow__arrow"
                src={Arrow}
                alt="flèche gauche"
              />
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
        </div>
      ) : (
        ''
      )}
    </section>
  )
}

export default Slideshow
