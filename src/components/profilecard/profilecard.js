import React from "react";
import "./profilecard.css";
import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Profilecard = ({ imgURL, name, title, LinkedinURL, emailId }) => {
  return (
    <div className="col-p">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={imgURL} alt="" />
        </div>
        <div className="team-content">
          <h3 className="name">{name}</h3>
          <h4 className="title">{title}</h4>
        </div>
        <ul className="social">
          <li>
            <a href={LinkedinURL} aria-hidden="true">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href={"mailto:" + emailId}
              className="fa fa-twitter"
              aria-hidden="true"
            >
              <MdMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profilecard;
