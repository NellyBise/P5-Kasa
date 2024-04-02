
import Card from "../../components/Card/Card"
import "./Home.scss"
import DataBase from "../../Data/database.json"
import BannerImage from "../../assets/home-background.jpg"
import Banner from "../../components/Banner/Banner"

function Home() {
  return (
    <main className="Home">
      <Banner
        BannerImage={BannerImage}
        text= "Chez vous, partout et ailleurs"
        lighter="false"
      />
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
