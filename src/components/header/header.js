import React from "react";
import "./header.css";
import icon from "../header/sae-logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="sae-icons">
          <img src={icon} alt="logo" className="sae-logo" />
          <div className="title">
            <h3>SAE</h3>
            <h3>Nit Kurukshetra</h3>
          </div>
        </div>
        <ul>
          <li>
            <a href="#portfolio">Home</a>
          </li>
          <li>
            <a href="#press">Autokriti</a>
          </li>
          <li>
            <a href="#shop">Accelerons</a>
          </li>
          <li>
            <a href="#about">Nitrox</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
