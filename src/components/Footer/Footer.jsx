import Logo from "../../assets/LOGO-white.svg"
import "../Footer/index.scss"

function Footer(){
    return(
        <div class="Footer">
            <img class="Footer__logo" src={Logo} alt="logo Kasa"/>
            <p class="Footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer