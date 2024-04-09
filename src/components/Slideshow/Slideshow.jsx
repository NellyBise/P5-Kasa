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
  const containerStyle = {
    transform: `translateX(-${clickedIndex * 100}%)`,
  }

  return (
    <section className="Slideshow">
      <div className="Slideshow__container" style={containerStyle}>
        {pictures.map((picture, index) => (
          <div className="Slideshow__picture" key={index}>
            <img
              className="Slideshow__pictures"
              id={index}
              src={picture}
              alt="vue du logement"
            />
          </div>
        ))}
      </div>
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
