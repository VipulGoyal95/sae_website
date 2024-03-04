import React, { useRef } from "react";
import Header from "../../components/header/header";
import "./contactus.css";
import emailjs from "@emailjs/browser";

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
      <div className="form-right-container">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="fullname">Name*</label>
          <input className="input" type="text" name="fullname" required />
          <br />
          <label htmlFor="email">Email id*</label>
          <input className="input" type="email" name="email" required />
          <br />
          <label htmlFor="Phone-no">Pnone no*</label>
          <input className="input" type="number" name="Phone-no" required />
          <br />
          <label htmlFor="college">Institute/Organisations(optional)</label>
          <input className="input" type="text" name="college" required />
          <br />
          <label htmlFor="message">Your Message*</label>
          <input className="input" type="text" name="message" required />
          <br />
          <label htmlFor="reason">Reason to contact</label>
          <select name="reason">
            <option value="">To submit a blog</option>
            <option value="">Sponshorship</option>
            <option value="">Brand Ambassador</option>
            <option value="">Autokriti 12.0</option>
            <option value="">Content was abusive</option>
            <option value="">Other</option>
          </select>
          <br />
          <label htmlFor="position">Person Contacting us is a*</label>
          <select name="position" id="" required>
            <option value="">Club Alumni</option>
            <option value="">Company Representative</option>
            <option value="">Student</option>
            <option value="">Professor</option>
            <option value="">Other</option>
          </select>
          <div className="btn">
            <input type="submit" value="Submit" className="submitbtn" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contactus;
