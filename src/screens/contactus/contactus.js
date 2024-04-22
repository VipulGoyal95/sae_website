import React, { useRef } from "react";
import Header from "../../components/header/header";
import "./contactus.css";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";

const Contactus = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID2,
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
    <>
      <Header />
      <h1>Contact Us</h1>
      <div className="contactus-container">
        <div className="contactus-left-container">
          <div className="address">
            <FaLocationDot />
            <span>
              Gol Canteen, NIT Kurukshetra, Kurukshetra, Haryana - 136119
            </span>
          </div>
        </div>
        <div className="form-right-container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contactus-field">
              <input className="input" type="text" name="fullname" required />
              <span>Name*</span>
            </div>
            <div className="contactus-field">
              <input className="input" type="email" name="email" required />
              <span>Email id*</span>
            </div>
            <div className="contactus-field">
              <input className="input" type="number" name="Phone-no" required />
              <span>Pnone no*</span>
            </div>
            <div className="contactus-field">
              <input className="input" type="text" name="college" required />
              <span>Institute/Organisations(optional)</span>
            </div>
            <div className="contactus-field">
              <input className="input" type="text" name="message" required />
              <span>Your Message*</span>
            </div>
            <div className="contactus-field">
              <label htmlFor="reason">Reason to contact</label>
              <select name="reason">
                <option selected hidden value="">
                  --Select any one--
                </option>
                <option value="To submit a blog">To submit a blog</option>
                <option value="Sponshorship">Sponshorship</option>
                <option value="Brand Ambassador">Brand Ambassador</option>
                <option value="Autokriti 12.0">Autokriti 12.0</option>
                <option value="Content was abusive">Content was abusive</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="contactus-field">
              <label htmlFor="position">Person Contacting us is a*</label>
              <select name="position" id="" required>
                <option selected hidden value="">
                  --Select any one--
                </option>
                <option value="Club Alumni">Club Alumni</option>
                <option value="Company Representative">
                  Company Representative
                </option>
                <option value="Student">Student</option>
                <option value="Professor">Professor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="btn">
              <input type="submit" value="Submit" className="submitbtn" />
            </div>
          </form>
        </div>
        <div className="contactus-right-container">
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
