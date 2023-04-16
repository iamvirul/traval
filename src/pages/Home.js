import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavbarCom from "../components/Nav";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <NavbarCom />
      <Hero
      cName ="hero"
      img = "https://www.fodors.com/wp-content/uploads/2018/01/Sri-Lanka-Animals-hero.jpg"
      imgCss = "heroimg"
      title = "Your Journey Your Stroy"
      para = "Choose Your Favourite Destination"
      h1Cname = "h1Title"
      pCname = "para"
      aCname = "aclass"
      about = "About"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;