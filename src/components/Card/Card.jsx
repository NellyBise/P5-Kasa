import './Card.scss'

function Card({ title, picture }) {
  return (
    <div className="Card">
      <img className="Card__image" src={picture} alt="vue du logement" />
      <h2 className="Card__title">{title}</h2>
    </div>
  )
}

/*Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }
  
  Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
  }*/

export default Card
