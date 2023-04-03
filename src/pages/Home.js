import Destination from "../components/Destination";
import Hero from "../components/Hero";
import NavbarCom from "../components/Nav";

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
    </>
  );
}

export default Home;