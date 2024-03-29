import React from "react";
import icon6 from "./assests/abc1new.dfa5ca88.webp";
import icon7 from "./assests/def1.922ff2dd.webp";
import icon8 from "./assests/autokriti.jpg";
import "./triangularcontainer.css";
import { Link } from "react-router-dom";
// import { motion, useScroll } from "framer-motion";
// import Aos from "aos";
import "aos/dist/aos.css";

const Triangularcontainer = () => {
  return (
    <div className="container-3">
      <div className="inside-container">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-offset="140"
          className="triangle left"
        >
          <Link to="/accelerons">
            <img src={icon6} alt="" />
          </Link>
        </div>

        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="140"
          className="triangle center"
        >
          <Link to="/autokriti">
            <img src={icon8} alt="" />
          </Link>
          <div className="autokriti-h1">
            <h1>Autokriti</h1>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-offset="140"
          className="triangle right"
        >
          <Link to="/nitrox">
            <img src={icon7} alt="" />
          </Link>
        </div>

        <div className="titles">
          <div
            className="accelerons-h1"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="140"
          >
            <h1>Accelerons</h1>
          </div>

          <div
            className="nitrox-h1"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="140"
          >
            <h1>Nitrox</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triangularcontainer;
