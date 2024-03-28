import { Link } from "react-router-dom"
import Logo from "../../assets/LOGO.svg"
import "../Header/index.scss"


function Header() {
  return (
    <header class="header">
      <img class="header__logo" src={Logo} alt="logo Kasa"/>
      <nav>
        <Link class="header__link" to="/"> Accueil </Link>
        <Link class="header__link" to="/APropos"> A propos </Link>
      </nav>
    </header>
  )
}

export default Header
