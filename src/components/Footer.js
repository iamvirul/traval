import "../components/FooterCss.css";
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TripVila</h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div>
            <a href="/">
                <i className=" fa-brands fa-facebook-square  "></i>
            </a>
            <a href="/">
                <i className=" fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className=" fa-brands fa-linkedin-in "></i>
            </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Projects</h4>
            <a href="/">Status</a>
            <a href="/">All Visions</a>
        </div>
        <div>
            <h4>Special links </h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/service">Contact</a>
            <a href="/contact">Services</a>

        </div>
        <div>
            <h4>Community</h4>
            <a href="/">linkedin</a>
            <a href="/">Git Hub</a>
        </div>
        <div>
            <h4>Social Media </h4>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;