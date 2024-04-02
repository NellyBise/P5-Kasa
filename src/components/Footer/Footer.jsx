import Logo from "../../assets/LOGO-white.svg"
import "./Footer.scss"

function Footer(){
    return(
        <footer className="Footer">
            <img className="Footer__logo" src={Logo} alt="logo Kasa"/>
            <p className="Footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer