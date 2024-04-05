import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import DataBase from '../../Data/database.json'
import Collapse from '../../components/Collapse/Collapse'
import './Logement.scss'
import Slideshow from '../../components/Slideshow/Slideshow'
import Stars from '../../components/Stars/Stars'

function Logement() {
  const identifiant = useParams()
  const logementId = DataBase.find((logement) => logement.id === identifiant.id)

  return (
    <div>
      <Header />
      <Slideshow pictures={logementId.pictures} />
      <div className="Logement">
        <div className="Logement__titles">
          <div>
            <h2 className="Logement__title">{logementId.title}</h2>
            <p className="Logement__text">{logementId.location}</p>
          </div>
          <div className="Logement__tags">
            {logementId.tags.map((tag) => (
              <div className="Logement__tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="Logement__owner">
            <p className="Logement__ownerName">{logementId.host.name}</p>
            <img
              className="Logement__ownerPicture"
              src={logementId.host.picture}
              alt="portrait du propriétaire"
            />
          </div>
          <Stars StarsNumber={logementId.rating} />
        </div>
      </div>
      <div className="Logement__description">
        <Collapse title="Description" text={logementId.description} />
        <Collapse
          title="Équipements"
          text={logementId.equipments.map((equipment) => (
            <div key={equipment}>
              {equipment}
              <br />
            </div>
          ))}
        />
      </div>
    </div>
  )
}
export default Logement
