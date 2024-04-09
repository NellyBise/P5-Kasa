import { NavLink } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="logo Kasa" />
      <nav>
        <ul className="header__navigation">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                [
                  'header__link',
                  isPending ? 'header__link--active' : '',
                  isActive ? 'header__link--active' : '',
                ].join(' ')
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive, isPending }) =>
                [
                  'header__link',
                  isPending ? 'header__link--active' : '',
                  isActive ? 'header__link--active' : '',
                ].join(' ')
              }
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
