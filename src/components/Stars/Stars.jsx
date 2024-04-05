import OrangeStar from '../../assets/orange-star.png'
import GreyStar from '../../assets/grey-star.png'
import './Stars.scss'

function Stars({ StarsNumber }) {
  const range = [1, 2, 3, 4, 5]
  const OrangeSta = <img src={OrangeStar} alt="Orange Star" />
  const GreySta = <img src={GreyStar} alt="Grey Star" />

  return (
    <div className="Stars">
      {range.map((rangeElem) =>
        StarsNumber >= rangeElem ? (
          <span className="Stars__picture" key={rangeElem.toString()}>
            {OrangeSta}
          </span>
        ) : null
      )}
      {range.map((rangeElem) =>
        5 - StarsNumber >= rangeElem ? (
          <span className="Stars__picture" key={5 - rangeElem.toString()}>
            {GreySta}
          </span>
        ) : null
      )}
    </div>
  )
}

export default Stars
