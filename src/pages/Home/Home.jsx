import Card from '../../components/Card/Card'
import './Home.scss'
import DataBase from '../../Data/database.json'
import BannerImage from '../../assets/home-background.jpg'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="Home">
      <Header />
      <Banner
        BannerImage={BannerImage}
        text="Chez vous, partout et ailleurs"
        lighter="false"
      />
      <section className="Home__gallery">
        {DataBase.map((location) => (
          <Link key={location.id} to={`/${location.id}`}>
            <Card
              key={`${location.id}`}
              picture={location.cover}
              title={location.title}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home
