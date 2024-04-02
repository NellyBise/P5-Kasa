import Banner from "../../components/Banner/Banner"
import BannerImage from "../../assets/APropos-background.jpg"
import Collapse from "../../components/Collapse/Collapse"
import "./APropos.scss"
import { useState } from "react"

function APropos(){
    const [openButtons, setOpenButtons] = useState(new Array(4).fill(false));

    const handleButtonClick = (index) => {
      setOpenButtons((prevOpenButtons) => {
        const newOpenButtons = [...prevOpenButtons];
        newOpenButtons[index] = !newOpenButtons[index];
        return newOpenButtons;
      });
    };

    return (
        <div>
            <Banner
                BannerImage={BannerImage}
                text= ""
                lighter="true"
            />
            <div className="APropos">
                <Collapse
                    title="Fiabilité"
                    text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    isOpen={openButtons[0]}
                    handleClick={() => handleButtonClick(0)}
                />
                <Collapse
                    title="Respect"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    isOpen={openButtons[1]}
                    handleClick={() => handleButtonClick(1)}
                />
                <Collapse
                    title="Service"
                    text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    isOpen={openButtons[2]}
                    handleClick={() => handleButtonClick(2)}
                />
                <Collapse
                    title="Sécurité"
                    text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    isOpen={openButtons[3]}
                    handleClick={() => handleButtonClick(3)}
                />
            </div>
        </div>
    )
}
export default APropos