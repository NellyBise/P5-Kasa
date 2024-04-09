import './Housing.scss'
import { useParams } from 'react-router-dom'
import DataBase from '../../Data/database.json'
import Collapse from '../../components/Collapse/Collapse'
import Slideshow from '../../components/Slideshow/Slideshow'
import Stars from '../../components/Stars/Stars'
import Error from '../Error/Error'

function Housing() {
  const identifiant = useParams()
  const HousingId = DataBase.find((housing) => housing.id === identifiant.id)
  return HousingId ? (
    <div>
      <Slideshow pictures={HousingId.pictures} picturesId={identifiant.id} />
      <div className="Housing">
        <div className="Housing__titles">
          <div>
            <h2 className="Housing__title">{HousingId.title}</h2>
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
            <p className="Housing__ownerName">{HousingId.host.name}</p>
            <img
              className="Housing__ownerPicture"
              src={HousingId.host.picture}
              alt="portrait du propriétaire"
            />
          </div>
          <Stars StarsNumber={HousingId.rating} />
        </div>
      </div>
      <div className="Housing__description">
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
      </div>
    </div>
  ) : (
    <Error />
  )
}
export default Housing
