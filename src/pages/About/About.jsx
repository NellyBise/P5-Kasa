import Banner from '../../components/Banner/Banner'
import BannerImage from '../../assets/About-background.jpg'
import Collapse from '../../components/Collapse/Collapse'
import './About.scss'

const values = [
  {
    id: 0,
    title: 'Fiabilité',
    text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    id: 1,
    title: 'Respect',
    text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: 2,
    title: 'Service',
    text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    id: 3,
    title: 'Sécurité',
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function About() {
  return (
    <div>
      <Banner BannerImage={BannerImage} text="" lighter="true" />
      <div className="About">
        {values.map((value) => (
          <Collapse key={value.id} title={value.title} text={value.text} />
        ))}
      </div>
    </div>
  )
}
export default About
