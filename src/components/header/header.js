import React, { useState } from "react";
import "./header.css";
import icon from "../header/sae-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [handleToggle, setToggle] = useState(false);
  //setting up the clicked Effect
  function barClicked() {
    setToggle(!handleToggle);
    console.log(handleToggle);
  }
  return (
    <header>
      <nav className="headers">
        <div className="sae-icons">
          <img src={icon} alt="logo" className="sae-logo" />
          <div className="title">
            <h3>SAE</h3>
            <h3>Nit Kurukshetra</h3>
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/autokriti">Autokriti</Link>
          </li>
          <li>
            <Link to="/accelerons">Accelerons</Link>
          </li>
          <li>
            <Link to="/nitrox">Nitrox</Link>
          </li>
        </ul>
      </nav>
      <div
        className={handleToggle ? "bars active" : "bars"}
        id="nav-action"
        onClick={barClicked}
      >
        <span className="bar"> </span>
      </div>

      <nav id="nav" className={handleToggle ? "visible" : ""}>
        <ul>
          <li className="shape-circle circle-one">
            <a href="#Contact">Nitrox</a>
          </li>
          <li className="shape-circle circle-two">
            <a href="#Blog">Accelerons</a>
          </li>
          <li className="shape-circle circle-three">
            <a href="#Work">Autokriti</a>
          </li>
          <li className="shape-circle circle-five">
            <a href="#Home">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
