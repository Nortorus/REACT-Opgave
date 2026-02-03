import "./Card.css"

const Card = ({cardTitle, image, price, description, buttonText}) => {
  return (
    <>
    <div className="card">
      <h3 className="card-title">{cardTitle}</h3>
      <img className="card-image" src={image} alt={cardTitle} />
      <p className="card-price">{price}</p>
      <p className="card-description">{description}</p>
      <button className="card-button">{buttonText}</button>
    </div>
    </>
  )
}

export default Card