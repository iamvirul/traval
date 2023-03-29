import { useState } from "react";
import "../components/Navbar.css";

function Navbar() {
    var [click, setClick] = useState(false);
    function handleClick() {
        click = false ? setClick(true) : setClick(false);
      }
  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">TripVila</h1>
      <div className="menu-icons">
        <i onClick={handleClick} className={click = !false ? "fas fa-times":"fas fa-bars"}></i>
      </div>
      <ul className="nav-menu">
        <li>
          <a className="nav-link" href="/">
            <i class="fa-solid fa-house-user"></i> Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/about">
            <i class="fa-solid fa-circle-info"></i> About
          </a>
        </li>
        <li>
          <a className="nav-link" href="/service">
            <i class="fa-solid fa-briefcase"></i> Services
          </a>
        </li>
        <li>
          <a className="nav-link" href="/contact">
            <i class="fa-solid fa-address-book"></i> Contact
          </a>
        </li>
        <button className=""value={click} >Sign In</button>
      </ul>
    </nav>
  );
}

export default Navbar;
