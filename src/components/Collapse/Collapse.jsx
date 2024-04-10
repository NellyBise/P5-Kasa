import './Collapse.scss'
import Arrow from '../../assets/Vector.png'
import { useState } from 'react'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }

  return (
    <div className="Collapse">
      <button className="Collapse__button" onKeyDown={handleKeyDown}>
        <div>{title}</div>
        {isOpen ? (
          <img
            className="Collapse__arrow active"
            src={Arrow}
            alt="flèche"
            onClick={toggle}
          />
        ) : (
          <img
            className="Collapse__arrow"
            src={Arrow}
            alt="flèche"
            onClick={toggle}
          />
        )}
      </button>
      {isOpen ? (
        <div className="Collapse__box active">
          <div className="Collapse__content">{text}</div>
        </div>
      ) : (
        <div className="Collapse__box">
          <div className="Collapse__content">{text}</div>
        </div>
      )}
    </div>
  )
}
export default Collapse
