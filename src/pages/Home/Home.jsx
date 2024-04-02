
import Card from "../../components/Card/Card"
import "./Home.scss"
import DataBase from "../../Data/database.json"
import BannerImage from "../../assets/home-background.jpg"

function Home() {
  return (
    <main className="Home">
      <div className="Home__banner">
            <img className="Home__image" src={BannerImage} alt="falaises" />
            <h1 className="Home__title">Chez vous, partout et ailleurs</h1>
      </div>
      <section className= "Home__gallery">
        {DataBase.map((location) => (
            <Card
              key={`${location.id}`}
              picture={location.cover}
              title={location.title}
            />
        ))}
      </section>
    </main>
    
  )
}

export default Home
