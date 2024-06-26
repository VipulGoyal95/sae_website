import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h3>
            Explore{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>Blogs</li>
            <li>Sponsors</li>
            <Link to="/contactus">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <h3>
            Social{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link to="/accelerons">
                <p>Team accelerons</p>
              </Link>
              <Link
                to="https://www.instagram.com/accelerons_nitkkr"
                target="_blank"
              >
                <div className="insta">
                  <FaInstagram />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/nitrox">
                <p>Team nitrox</p>
              </Link>
              <Link to="https://www.instagram.com/nitroxteam" target="_blank">
                <div className="insta">
                  <FaInstagram />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/autokriti">
                <p>Autokriti</p>
              </Link>
              <Link to="https://www.instagram.com/autokriti" target="_blank">
                <div className="insta">
                  <FaInstagram />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Contact Us{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <Link to="mailto:saenitkkr@nitkkr.ac.in">
              <li>saenitkkr@nitkkr.ac.in</li>
            </Link>
            <Link
              to="https://www.linkedin.com/company/sae-nit-kkr"
              target="_blank"
            >
              <li>Linkedin</li>
            </Link>
            <Link to="/contactus">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <h3>
            Guidelines{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <Link to="/termsandconditions">
              <li>Terms and Conditions</li>
            </Link>
            <Link to="/privacypolicy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Sae Nitkkr © 2024 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
