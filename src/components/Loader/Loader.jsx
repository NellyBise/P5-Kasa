import './Loader.scss'

export function Loader() {
  return (
    <div className="Loader">
      <p className="Loader__title">Chargement en cours...</p>
      <div className="Loader__animation">
        <span class="Loader__element"></span>
        <span class="Loader__element"></span>
        <span class="Loader__element"></span>
      </div>
    </div>
  )
}
