import './Loader.scss'

export function Loader() {
  return (
    <div className="Loader">
      <p className="Loader__title">Chargement en cours...</p>
      <div className="Loader__animation">
        <span class="Loader__element Loader__element--1"></span>
        <span class="Loader__element Loader__element--2"></span>
        <span class="Loader__element Loader__element--3"></span>
      </div>
    </div>
  )
}
