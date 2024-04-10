import './Housing.scss'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Slideshow from '../../components/Slideshow/Slideshow'
import Stars from '../../components/Stars/Stars'
import Error from '../Error/Error'
import { useFetch } from '../../utils/hook'

function Housing() {
  const identifiant = useParams()
  const { data, isLoading, error } = useFetch(`/database.json`)
  const dataBase = data

  if (error) {
    return <span>Il y a un problème</span>
  }
  if (isLoading === true) {
    return <span>Chargement en cours...</span>
  }

  const HousingId = dataBase?.find((housing) => housing.id === identifiant.id)
  let HostName = HousingId?.host?.name.split(' ')

  return HousingId ? (
    <section>
      <Slideshow pictures={HousingId.pictures} picturesId={identifiant.id} />
      <article className="Housing">
        <div className="Housing__titles">
          <div>
            <h1 className="Housing__title">{HousingId.title}</h1>
            <p className="Housing__text">{HousingId.location}</p>
          </div>
          <div className="Housing__tags">
            {HousingId.tags.map((tag) => (
              <div className="Housing__tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="Housing__ownerStars">
          <div className="Housing__owner">
            <div className="Housing__ownerName">
              {HostName.map((host) => (
                <p key={host}>{host}</p>
              ))}
            </div>
            <img
              className="Housing__ownerPicture"
              src={HousingId.host.picture}
              alt="portrait du propriétaire"
            />
          </div>
          <Stars StarsNumber={HousingId.rating} />
        </div>
      </article>
      <article className="Housing__description">
        <Collapse title="Description" text={HousingId.description} />
        <Collapse
          title="Équipements"
          text={HousingId.equipments.map((equipment) => (
            <div key={equipment}>
              {equipment}
              <br />
            </div>
          ))}
        />
      </article>
    </section>
  ) : (
    <Error />
  )
}
export default Housing
