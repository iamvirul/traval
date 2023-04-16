import Hero from "../components/Hero";
import NavbarCom from "../components/Nav";
import Footer from "../components/Footer";
import "../components/Herocss.css";
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
         <NavbarCom />
      <Hero
      cName ="hero"
      img = "https://lp-cms-production.imgix.net/2022-02/shutterstock_1524292985.jpg"
      imgCss = "aboutimg"
      title = "About"
      h1Cname = "aboutTitel"
      />
      <AboutUs/>
      <Footer/>
        </>
    );
}

export default About;