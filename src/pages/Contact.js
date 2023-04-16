import Hero from "../components/Hero";
import NavbarCom from "../components/Nav";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
function Contact (){
    return(
        <>
        <NavbarCom />
     <Hero
     cName ="hero"
     img = "https://h2.gifposter.com/bingImages/LionRock_EN-US3384136847_1920x1080.jpg"
     imgCss = "aboutimg"
     title = "Contact"
     h1Cname = "aboutTitel"
     />
     <ContactUs/>
      <Footer/>

       </>


    );
}

export default Contact;