import Card from '../../components/Card/Card'
import './Home.scss'
import BannerImage from '../../assets/home-background.jpg'
import Banner from '../../components/Banner/Banner'
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hook'

function Home() {
  const { data, isLoading, error } = useFetch('/database.json')
  const dataBase = data

  if (error) {
    return <span>Il y a un problème</span>
  }
  if (isLoading === true) {
    return <span>Chargement en cours...</span>
  }

  return (
    <section className="Home">
      <Banner
        BannerImage={BannerImage}
        text="Chez vous, partout et ailleurs"
        lighter="false"
      />
      <article className="Home__gallery">
        {dataBase?.map((location) => (
          <Link key={location.id} to={`/${location.id}`}>
            <Card
              key={`${location.id}`}
              picture={location.cover}
              title={location.title}
            />
          </Link>
        ))}
      </article>
    </section>
  )
}

export default Home
