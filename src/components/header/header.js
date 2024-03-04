import React, { useState } from "react";
import "./header.css";
import icon from "../header/sae-logo.png";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

const Header = () => {
  const [handleToggle, setToggle] = useState(false);
  //setting up the clicked Effect
  function barClicked() {
    setToggle(!handleToggle);
    console.log(handleToggle);
  }
  return (
    <Headroom style={{ zIndex: 300, transitionDuration: 0.3 }}>
      <div className="header">
        <nav className="headers">
          <div className="sae-icons">
            <img src={icon} alt="logo" className="sae-logo" />
            <div className="title">
              <h3>SAE</h3>
              <h3>Nit Kurukshetra</h3>
            </div>
          </div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/autokriti">
              <li>Autokriti</li>
            </Link>
            <Link to="/accelerons">
              <li>Accelerons</li>
            </Link>
            <Link to="/nitrox">
              <li>Nitrox</li>
            </Link>
          </ul>
        </nav>
        <div
          className={handleToggle ? "bars active" : "bars"}
          id="nav-action"
          onClick={barClicked}
        >
          <span className="bar"> </span>
        </div>

        <nav className={handleToggle ? "nav" : "hide"}>
          <ul>
            <li className="shape-circle circle-one">
              <Link to="/nitrox">Nitrox</Link>
            </li>
            <li className="shape-circle circle-two">
              <Link to="/accelerons">Accelerons</Link>
            </li>
            <li className="shape-circle circle-three">
              <Link to="/autokriti">Autokriti</Link>
            </li>
            <li className="shape-circle circle-five">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Headroom>
  );
};

export default Header;
