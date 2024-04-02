import { Link } from "react-router-dom"
import Logo from "../../assets/LOGO.svg"
import "./Header.scss"
import { useState, useEffect } from "react";


function Header() {
  const [currentPage, setCurrentPage] = useState('');
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const pathname = window.location.pathname;
    setCurrentPage(pathname.substring(1));  
  }, []);

  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="logo Kasa"/>
      <nav>
        <ul>
          <Link
            className={`header__link ${currentPage === "" ? "header__link--selected" : ""}`}
            onClick={()=>handleClick("")}
            to="/"
          >Accueil</Link>
          <Link
            className={`header__link ${currentPage === "APropos" ? "header__link--selected" : ""}`}
            onClick={()=>handleClick("APropos")}
            to="/APropos"
          >A Propos</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
