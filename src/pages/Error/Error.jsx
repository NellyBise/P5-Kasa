import { Link } from "react-router-dom"
import ErrorImage from "../../assets/404.svg"
import "./Error.scss"

function Error() {
  return (
    <div class="Error">
      <img class="Error__image" src={ErrorImage} alt="Erreur 404"/>
      <p class="Error__text">Oups! La page que vous demandez n'existe pas</p>
      <Link class="Error__link" to="/"> Retourner sur la page d'accueil </Link>
    </div>
  )
}

export default Error
