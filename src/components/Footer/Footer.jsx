import "./Footer.css"


const Footer = ({mail,phoneNumber,address}) => {
  return (
    <>
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-item">{mail}</li>
        <li className="footer-item">{phoneNumber}</li>
        <li className="footer-item">{address}</li>
      </ul>
    </footer>
    </>
  )
}

export default Footer
