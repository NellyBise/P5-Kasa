import "./Card.scss"

function Card({title, picture }) {
    return (
      <div class="Card">
        <img class="Card__image" src={picture} alt="vue du logement" />
        <h2 class="Card__title">{title}</h2>
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