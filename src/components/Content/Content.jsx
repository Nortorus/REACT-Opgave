import "./Content.css"

const Content = ({paragraphOne, paragraphTwo, paragraphThree}) => {
  return (
    <>
      <main className="content">
      <p className="content-text">{paragraphOne}</p>
      <p className="content-text">{paragraphTwo}</p>
      <p className="content-text">{paragraphThree}</p>
    </main>
    </>
  )
}

export default Content
