import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
  return (
    <div>
      <main className="Error">
        <h2 className="Error__title">404</h2>
        <p className="Error__text">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link className="Error__link" to="/">
          {' '}
          Retourner sur la page d'accueil{' '}
        </Link>
      </main>
    </div>
  )
}

export default Error
