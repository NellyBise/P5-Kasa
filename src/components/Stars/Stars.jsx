import OrangeStar from '../../assets/orange-star.png'
import GreyStar from '../../assets/grey-star.png'
import './Stars.scss'

function Stars({ StarsNumber }) {
  const range = [1, 2, 3, 4, 5]
  const OrangeSta = (
    <img className="Stars__picture" src={OrangeStar} alt="Orange Star" />
  )
  const GreySta = (
    <img className="Stars__picture" src={GreyStar} alt="Grey Star" />
  )

  return (
    <div className="Stars">
      {range.map((rangeElem) =>
        StarsNumber >= rangeElem ? (
          <span key={rangeElem.toString()}>{OrangeSta}</span>
        ) : null
      )}
      {range.map((rangeElem) =>
        5 - StarsNumber >= rangeElem ? (
          <span key={5 - rangeElem.toString()}>{GreySta}</span>
        ) : null
      )}
    </div>
  )
}

export default Stars
