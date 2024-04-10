import './Card.scss'

function Card({ title, picture }) {
  return (
    <div className="Card">
      <img
        className="Card__image"
        src={picture}
        alt={`vue du logement : ${title}`}
      />
      <h2 className="Card__title">{title}</h2>
    </div>
  )
}

export default Card
