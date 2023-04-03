import { useState } from "react";
import "../components/Navbar.css";

function NavbarCom() {
  let [click, setClick] = useState(false);

  function handleClick() {
    // eslint-disable-next-line
    click == false ? setClick(true) : setClick(false);
  }
  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">TripVila</h1>
      <div className="menu-icons">
        <div onClick={handleClick}>
         {/* eslint-disable-next-line */}
          {click == true ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </div>
         {/* eslint-disable-next-line */}
      <ul className={click == false ?"nav-menu" : "nav-menu-active"}>
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
        <a className="button" href="/">Sign In</a>

      </ul>
    </nav>
  );
}

export default NavbarCom;
