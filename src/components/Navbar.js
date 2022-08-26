import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import Logo from "../components/images/LOGO.svg";

const NavigationMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <nav className="navbar sticky-top">
        <Link to="/" className="navbar-brand">
          {/* <img className="img-fluid" src={Logo} alt="Navbar Logo" /> */}
          Anne and John
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <span class="material-symbols-outlined">menu</span>
        </button>

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className="nav-links">
            <li className="navlink">
              <Link to="/">Home</Link>
            </li>
            <li className="navlink">
              <Link to="/gallery"> Gallery</Link>
            </li>
            <li className="navlink">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavigationMenu;
