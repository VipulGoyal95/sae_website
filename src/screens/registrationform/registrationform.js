import React, { useState } from "react";
import Header from "../../components/header/header";
import "./registrationform.css";
import Footer from "../../components/footer/footer";
import { CiCircleInfo } from "react-icons/ci";

const Registrationform = () => {
  var [price, setPrice] = useState(0);
  var [accomodatePrice, setAccomodatePrice] = useState(0);
  const [mouseover, setMouseover] = useState(false);
  console.log(mouseover);
  // var checkcount = 0;
  const handlecheck = (val) => {
    if (val.checked === true && val.value === "IOT") {
      setPrice((price += 2750));
    } else if (val.checked === false && val.value === "IOT") {
      setPrice((price -= 2750));
    } else if (val.checked === true && val.value === "Mechanical") {
      setPrice((price += 2500));
    } else if (val.checked === false && val.value === "Mechanical") {
      setPrice((price -= 2500));
    } else if (val.checked === true && val.value === "EV") {
      setPrice((price += 2500));
    } else if (val.checked === false && val.value === "EV") {
      setPrice((price -= 2500));
    } else if (val.checked === true && val.value === "software") {
      setPrice((price += 2500));
    } else if (val.checked === false && val.value === "software") {
      setPrice((price -= 2500));
    } else if (val.checked === true && val.value === "accomodation") {
      setAccomodatePrice((accomodatePrice += 750));
    } else if (val.checked === false && val.value === "accomodation") {
      setAccomodatePrice((accomodatePrice -= 750));
    }

    console.log(price);
  };
  return (
    <>
      <Header />
      <div className="registration-container">
        <h1>Registration Form</h1>
        <div className="rightcontainer">
          <div className="content-right">
            <h1>Instructions</h1>
            <ul>
              <li>
                * Make sure your email id is correct as you will be getting
                confirmation on that email
              </li>
              <li>
                * You can choose Maximum 2 Departments. Each department is 3
                Days Long + 1 Day Guest Lecture
              </li>
              <li> * You have to show QR code at the time of arrival.</li>
              <li>
                * In case of any issue or payment failure, please contact
                +91-9027073663
              </li>
              <li> * Referal IDs are case-sensitive</li>
            </ul>
          </div>
        </div>
        <div className="register">
          <form action="post">
            <label htmlFor="fullname">Full Name*</label>
            <br />
            <input type="text" name="fullname" required />
            <br />
            <label htmlFor="email">Email id*</label>
            <br />
            <input type="email" name="email" required />
            <br />
            <label htmlFor="phoneno">Phone No*</label>
            <br />
            <input type="number" name="phoneno" required />
            <br />
            <label htmlFor="college">College</label>
            <br />
            <input type="text" name="college" />
            <br />
            <label htmlFor="Branch">Branch</label>
            <br />
            <input type="text" name="Branch" />
            <br />
            <label htmlFor="">Semester</label>
            <br />
            <select name="semester" id="semester">
              <option value="--None Selected--">--None Selected--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <br />
            <label htmlFor="referral">Referal Code(optional code)</label>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <input type="text" name="referral" />
              <CiCircleInfo
                className="info-button"
                onMouseOver={() => setMouseover(true)}
                onMouseLeave={() => setMouseover(false)}
              />
            </div>
            <br />
            <label htmlFor="">Select Your Departments (Max. 2)</label>
            <br />
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <input
                  type="checkbox"
                  name="cv"
                  value="Mechanical"
                  onChange={(e) => handlecheck(e.target)}
                />
                <label htmlFor="cv">Mechanical</label>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <input
                  type="checkbox"
                  name="iot"
                  value="IOT"
                  onChange={(e) => handlecheck(e.target)}
                />
                <label htmlFor="iot">IOT</label>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <input
                  type="checkbox"
                  name="EV"
                  value="EV"
                  onChange={(e) => handlecheck(e.target)}
                />
                <label htmlFor="EV">EV</label>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                <input
                  type="checkbox"
                  name="Software"
                  value="software"
                  onChange={(e) => handlecheck(e.target)}
                />
                <label htmlFor="software">Software</label>
                <br />
              </div>
            </div>
            <label htmlFor="">Workshop Amount (₹) : {price}</label>
            <br />
            <label htmlFor="timeslot">
              Choose Timeslot
              <br />
              (Mechanical)
            </label>
            <br />
            <select name="timeslot">
              <option value="--None Selected--">--None Selected--</option>
              <option value="5-8 october">5-8 october</option>
              <option value="8-11 october">8-11 october</option>
            </select>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <input
                type="checkbox"
                name="accomodation"
                value="accomodation"
                onChange={(e) => handlecheck(e.target)}
              />
              <label htmlFor="accomodation">Need Accomodation & food</label>
              <br />
            </div>
            <label htmlFor="">Amount (₹) : {accomodatePrice}</label>
            <br></br>
            <input type="submit" value="Confirm" />
          </form>
        </div>
        <div
          className={mouseover ? "referral-info-show" : "referral-info-hide"}
        >
          <p>
            Enter only if you are applying through an ambassador(max. 10% off)
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registrationform;
