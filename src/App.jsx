import Card from "./components/Card/Card"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import GridContainer from "./components/GridContainer/GridContainer"
import Header from "./components/Header/Header"
import Image from "./components/Image/Image"
import ImageCard from "./components/ImageCard/ImageCard"


function App() {
  return (
    <>
      <Header pageTitle = "Min REACT side"></Header>

      <Content
      paragraphOne = "Jeg laver en REACT side"
      paragraphTwo = "Det fungerer meget godt"
      paragraphThree = "Jeg har tilføjet props">

      </Content>

      {/* <ImageCard 
      imageTitle = "Gyldent græs" 
      description = "Et naturligt billed">

        <Image
        imageSrc = "/nature.jpg"
        ImageAlt = "Et billed af græs">

        </Image>
      </ImageCard> */}

      <GridContainer>

        <Card cardTitle = "Speedy doggo" image = "/1.jpg" price = "100 DKK" description = "The bestest boy" buttonText = "Click here!"></Card>
        <Card cardTitle = "Photo bombers" image = "/2.jpg" price = "150 DKK" description = "Ruin any photoshoot" buttonText = "No, click here!"></Card>
        <Card cardTitle = "Day old fruit" image = "/3.jpg" price = "200 DKK" description = "Close to expiration date" buttonText = "You want to click here"></Card>
        <Card cardTitle = "Adhesive gum" image = "/4.jpg" price = "250 DKK" description = "A decent prank" buttonText = "No me, pretty please!!"></Card>
        <Card cardTitle = "Hand painter" image = "/5.jpg" price = "300 DKK" description = "Risk of skin cancer is included" buttonText = "Ignore them, press here"></Card>
        <Card cardTitle = "A dose of Acrophobia" image = "/6.jpg" price = "350 DKK" description = "Railing is optional" buttonText = "ZZZZZ"></Card>
        <Card cardTitle = "3 day vacation" image = "/7.jpg" price = "400 DKK" description = "Other guest includes 30,000 sheep" buttonText = "I'm so lonely :("></Card>
        <Card cardTitle = "Confusing art" image = "/8.jpg" price = "450 DKK" description = "Support a starving artist" buttonText = "This is a great deal"></Card>
        <Card cardTitle = "Indian tag" image = "/9.jpg" price = "500 DKK" description = "RUN FORREST, RUN!!!" buttonText = "So expensive!!!"></Card>
      </GridContainer>

      <Footer 
      mail = "mads.sp@hotmail.com"
      phoneNumber = "61349320"
      address = "Tornhøjsparken 226">

      </Footer>
    </>
  )
}

export default App
