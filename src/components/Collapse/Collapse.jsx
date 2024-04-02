import "./Collapse.scss"
import Arrow from "../../assets/Vector.png"

function Collapse ({title, text, isOpen, handleClick}){

    return(
        <div className="Collapse">
            <button className="Collapse__button">
                <div>{title}</div>
                {isOpen ? <img className="Collapse__arrow active" src={Arrow} alt="flèche" onClick={handleClick}/> : <img className="Collapse__arrow" src={Arrow} alt="flèche" onClick={handleClick}/>}
            </button>
            {isOpen ? <div className="Collapse__box active"><div className="Collapse__content">{text}</div></div> : <div className="Collapse__box"><div className="Collapse__content">{text}</div></div>}
        </div>
    )
}
export default Collapse