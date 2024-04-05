import { NavLink } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="logo Kasa" />
      <nav>
        <ul>
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
            A Propos
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
