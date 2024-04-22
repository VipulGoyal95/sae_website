import React, { useRef, useState } from "react";
import "./ambassador.css";
import emailjs from "@emailjs/browser";
import benefit1 from "./assests/benefit-1.jpg";
import benefit2 from "./assests/benefit-2.jpg";
import benefit3 from "./assests/benefit-3.jpg";
import benefit4 from "./assests/benefit-4.jpg";
import benefit5 from "./assests/benefit-5.jpg";
import role1 from "./assests/role1.jpg";
import role2 from "./assests/role2.jpg";
import role3 from "./assests/role3.jpg";
import { Carousel } from "react-responsive-carousel";

const Ambassador = () => {
  const [showbenefit, setShowbenefit] = useState(false);
  const [showRoles, setShowroles] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID1,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="ambassador">
      <h1>Become Our ambassador</h1>
      <div
        className={
          showbenefit || showRoles ? "form-container hide" : "form-container"
        }
      >
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="fullname">Full Name*</label>
          <input className="input" type="text" name="fullname" required />
          <br />
          <label htmlFor="college">College Name*</label>
          <input className="input" type="text" name="college" required />
          <br />
          <label htmlFor="branch">Branch* </label>
          <input className="input" type="text" name="branch" required />
          <br />
          <label htmlFor="semester">Current Semester</label>
          <input className="input" type="number" name="semester" />
          <br />
          <label htmlFor="Phone-no">Pnone no*</label>
          <input className="input" type="number" name="Phone-no" required />
          <br />
          <label htmlFor="email">Email id*</label>
          <input className="input" type="email" name="email" required />
          <br />
          <span>Why do you think you can be a Campus Ambassador *</span>
          <select name="why" id="">
            <option value="">--select any one--</option>
            <option value="I am good at Marketing and promotion">
              I am good at Marketing and promotion
            </option>
            <option value="I am not so good in the work, and want to learn">
              I am not so good in the work, and want to learn
            </option>
            <option value="I don't know">I don't know</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <span>Have you ever been a Campus Ambassador *</span>
          <select name="past-experience" id="">
            <option value="">--select any one--</option>
            <option value="Yes, I am a currently a CA of some other organization as well">
              Yes, I am a currently a CA of some other organization as well
            </option>
            <option value="Yes,I was recently (within last 3 months)">
              Yes,I was recently (within last 3 months)
            </option>
            <option value="Yes, but not that recently">
              Yes, but not that recently
            </option>
            <option value="No">No</option>
          </select>
          <br />
          <div className="next-btn">
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
      <button
        className="benefits"
        onClick={() => {
          if (showbenefit) {
            setShowroles(false);
            setShowbenefit(false);
          } else {
            setShowroles(false);
            setShowbenefit(true);
          }
        }}
      >
        Benefits
      </button>
      <button
        className="roles"
        onClick={() => {
          if (showRoles) {
            setShowbenefit(false);
            setShowroles(false);
          } else {
            setShowbenefit(false);
            setShowroles(true);
          }
        }}
      >
        Roles
      </button>
      <div className="benefits-container">
        <div className={showbenefit ? "benefit-1 show" : "benefit-1 hide"}>
          <h1>Benefits of ambassador</h1>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            className="benefitcarousel"
          >
            <div className="b-1">
              <img src={benefit1} alt="" />
              <h1>1. Performence Based Monetary Incentives</h1>
            </div>
            <div className="b-2">
              <img src={benefit2} alt="" />
              <h1>2. Earn Commission on Workshops & Webinars</h1>
            </div>
            <div className="b-3">
              <img src={benefit3} alt="" />
              <h1>3. Marketing and Management Opportunity</h1>
            </div>
            <div className="b-4">
              <img src={benefit4} alt="" />
              <h1>4. Free Access to Concerned Courses</h1>
            </div>
            <div className="b-5">
              <img src={benefit5} alt="" />
              <h1>5. Improve Communication Skills</h1>
            </div>
          </Carousel>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="join-now" onClick={() => setShowbenefit(false)}>
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div className="benefits-container">
        <div className={showRoles ? "benefit-1 show" : "benefit-1 hide"}>
          <h1>Role of ammbassador</h1>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            className="benefitcarousel"
          >
            <div className="b-1">
              <img src={role1} alt="" />
              <h1>1. Recruiting students for Worskhop</h1>
            </div>
            <div className="b-2">
              <img src={role2} alt="" />
              <h1>2. Spreading the Word of our workshop</h1>
            </div>
            <div className="b-3">
              <img src={role3} alt="" />
              <h1>3. Claim your Ambassador Certificate</h1>
            </div>
          </Carousel>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="join-now" onClick={() => setShowroles(false)}>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
