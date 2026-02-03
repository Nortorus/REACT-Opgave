import "./Header.css"

const Header = ({pageTitle}) => {
    
  return (
    <>
      <header className="header">
        <h1 className="header-title">{pageTitle}</h1>
      </header>
    </>
  )
}

export default Header
