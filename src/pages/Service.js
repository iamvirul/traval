import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavbarCom from "../components/Nav";
import ServiceDes from "../components/serviceDes";
function Service (){
    return(
        <>
        <NavbarCom />
     <Hero
     cName ="hero"
     img = "https://lp-cms-production.imgix.net/2021-10/Sri%20Lanka%2C%20The%20Hill%20Country%2C%20Nuwara%20Eliya%2C%20Tea%20Plantation%2C%20woman%20picking%20tea%20By%20Gavin%20Hellier%20Stocksy_txp5ddecee9B5D300_Medium_47761.jpg"
     imgCss = "aboutimg"
     title = "Services"
     h1Cname = "aboutTitel"
     />
     <ServiceDes/>
     <Footer/>
       </>

    );
}

export default Service;