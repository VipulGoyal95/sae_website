import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h3>Explore</h3>
          <ul>
            <li>Achivements</li>
            <li>Almuni</li>
            <li>Blogs</li>
            <li>Sponsors</li>
          </ul>
        </div>
        <div className="col">
          <h3>Social</h3>
          <ul>
            <li>
              <p>Team accelerons</p>
              <div className="insta">
                <FaInstagram />
              </div>
            </li>
            <li>
            <p>Team nitrox</p>
              <div className="insta">
                <FaInstagram />
              </div>
            </li>
            <li>
            <p>Autokriti</p>
              <div className="insta">
                <FaInstagram />
              </div>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Contact Us</h3>
          <ul>
            <li>saenitkkr@nitkkr.ac.in</li>
            <li>Linkedin</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col">
          <h3>Guidelines</h3>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
