import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"


function App() {
  return (
    <>
      <Header pageTitle = "Min REACT side"></Header>

      <Content
      paragraphOne = "Jeg laver en REACT side"
      paragraphTwo = "Det fungerer meget godt"
      paragraphThree = "Jeg har tilføjet props">

      </Content>

      <Footer 
      mail = "mads.sp@hotmail.com"
      phoneNumber = "61349320"
      address = "Tornhøjsparken 226">

      </Footer>
    </>
  )
}

export default App
