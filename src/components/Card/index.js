// Write your code here.
import './index.css'
const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
      <div className={`${className}card-container`}></div>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
          <img src={imgUrl} className="image" alt={`${title}-img`}/>
      </div> 
  )
}
export default Card;