import './Home.scss'
import BannerImage from '../../assets/home-background.jpg'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import { Loader } from '../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hook'
import { useState } from 'react'

function Home() {
  const { data, isLoading, error } = useFetch('/database.json')
  const dataBase = data

  const [isChange, setIsChange] = useState(true)

  const Display = () => setIsChange(!isChange)

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <section className="Home">
      <Banner
        BannerImage={BannerImage}
        text="Chez vous, partout et ailleurs"
        lighter="false"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <article className="Home__gallery">
          {dataBase?.slice(0, 12)?.map((housing) => (
            <Link key={housing.id} to={`/${housing.id}`}>
              <Card
                key={`${housing.id}`}
                picture={housing.cover}
                title={housing.title}
              />
            </Link>
          ))}

          {dataBase?.slice(12, dataBase.length)?.map((housing) => (
            <Link
              className={
                isChange ? 'Home__galleryEnd' : 'Home__galleryEnd--active'
              }
              key={housing.id}
              to={`/${housing.id}`}
            >
              <Card
                key={`${housing.id}`}
                picture={housing.cover}
                title={housing.title}
              />
            </Link>
          ))}
        </article>
      )}
      {isLoading ? (
        <></>
      ) : (
        <button
          className={
            isChange ? 'Home__button Home__button--active' : 'Home__button'
          }
          onClick={Display}
        >
          Afficher la suite
        </button>
      )}
    </section>
  )
}

export default Home
