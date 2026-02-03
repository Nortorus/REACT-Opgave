import "./Card.css"

const Card = ({cardTitle, image, price, description, buttonText}) => {
  return (
    <>
    <div className="card">
       <h3>{cardTitle}</h3>
      <img src={image} alt={cardTitle} />
      <p>{price}</p>
      <p>{description}</p>
      <button>{buttonText}</button> 
    </div>
    </>
  )
}

export default Card
