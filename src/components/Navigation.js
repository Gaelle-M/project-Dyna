import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : "hide-nav"}`}>
      <ul>
        <div className="navbar_logo">
          <NavLink to="/">
            <img src="./logo.png" alt="logo du site" />
          </NavLink>
        </div>

        <NavLink to="/boutique">
          <li className="slideInDown-1">Produits</li>
        </NavLink>
        <NavLink to="/blog">
          <li className="slideInDown-1">Blog</li>
        </NavLink>
        <NavLink to="/about">
          <li className="slideInDown-3">À propos</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="slideInDown-4">Contact</li>
        </NavLink>
      </ul>
      <img className="icon" src="./favicon.ico" alt="" />
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar"></span>
      </button>
    </nav>
  );
};

export default Navigation;
