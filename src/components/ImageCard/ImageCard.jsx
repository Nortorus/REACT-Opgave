

const ImageCard = ({imageTitle, description, children}) => {
  return (
    <>
      <h2>{imageTitle}</h2>
      <p>{description}</p>

      {children}
    </>
  )
}

export default ImageCard
