import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/header";
// import Carousels from "../../components/autokriticarousels/carousels";
import "./autokriti.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Imagegallary from "../../components/imagegallary/imagegallary";
import { galleryimages } from "./galleryimage";
import icon1 from "./Autokriti1.jpeg";
import icon2 from "./Autokriti2.jpeg";
import icon3 from "./Autokriti3.jpeg";
import icon4 from "./Autokriti4.jpeg";
import icon5 from "./Autokriti5.jpeg";
import Footer from "../../components/footer/footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import icon from "./autokriti13.864242a0.jpg";
import poster1 from "./cv_evposter.jpeg";
import poster2 from "./iotposter.jpeg";
import poster3 from "./softwareposter (1).jpeg";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import benefit1 from "./benefit-1.jpg";
import benefit2 from "./benefit-2.jpg";
import benefit3 from "./benefit-3.jpg";
import benefit4 from "./benefit-4.jpg";
import benefit5 from "./benefit-5.jpg";
import role1 from "./role1.jpg";
import role2 from "./role2.jpg";
import role3 from "./role3.jpg";
import Aboutus from "../../components/Aboutus/Aboutus";

const Autokritipage = () => {
  const [text] = useTypewriter({
    words: ["Be a Part of Autokriti 13.0", "Become an ambassador"],
    loop: {},
    typeSpeed: 30,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <>
      <Header />
      <div className="top-container-4">
        <img src={icon} alt="sae" loading="eager" />
        <h1>
          <br />
          <span className="text">{text}</span>
          <Cursor />
        </h1>
      </div>
      <Aboutus page="autokriti" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showThumbs={false}
        className="carousel"
        showStatus={false}
      >
        <div>
          <img src={icon1} alt="" />
        </div>
        <div>
          <img src={icon2} alt="" />
        </div>
        <div>
          <img src={icon3} alt="" />
        </div>
        <div>
          <img src={icon4} alt="" />
        </div>
        <div>
          <img src={icon5} alt="" />
        </div>
      </Carousel>
      <div className="autokriti">
        <h1 className="title">AutoKriti 13.0</h1>
        <div>
          <p>
            Interested in automobiles, but don’t know where to start? Let this
            be your first stepping stone to the redefined world of mobility.
            Join Autokriti 13 and be a part of this remaking.
          </p>
          <p>
            From overhauling of a 2 stroke engine of a scooter in Autokriti 1 to
            Porsche Cayenne Engine in Autokriti 11, we have always matched our
            steps with innovation. It is our determination to keep up with the
            ever-changing technology that makes us North India’s largest
            automobile workshop. To continue our endeavour of knowledge sharing,
            we are here with Autokriti 13. This time it will be a ride on both
            CV and EV, not a rash one but a safe and steady one. #ChargedReality
          </p>
          <p>
            There are four workshops in Autokriti 13: CV, EV, IoT and Software.
            All these workshops will help you create a proper theoretical as
            well as practical understanding of their domain. You shall get a
            personalised learning experience on physical models. Along with all
            these, the workshop will have guest lectures from some reputed
            dignitaries. Please visit the content of these workshops for more
            details.
          </p>
          <br />
        </div>
        <div className="posters-container">
          <figure class="snip1206">
            <img src={poster1} alt="sample74" />
            <figcaption>
              <h1>Combuction Vehicle</h1>
              <h2>Engine</h2>
              <h2>Transmission</h2>
              <h2>Vehicle Dynamics</h2>
              <h2>Suspension</h2>
            </figcaption>
          </figure>
          <figure class="snip1206">
            <img src={poster2} alt="sample69" />
            <figcaption>
              <h1>IOT</h1>
              <h2>Comm protocol</h2>
              <h2>Adruino</h2>
              <h2>DAQ</h2>
              <h2>Projects</h2>
            </figcaption>
          </figure>
          <figure class="snip1206">
            <img src={poster3} alt="sample13" />
            <figcaption>
              <h1>Software</h1>
              <h2>SolidWorks</h2>
              <h2>Ansys</h2>
            </figcaption>
          </figure>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to="/autokriti/register">
            <button className="register-btn">Register Now !!</button>
          </Link>
        </div>
      </div>
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
              <option value="I am good at Marketing and promotion">I am good at Marketing and promotion</option>
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
              <option value="Yes, but not that recently">Yes, but not that recently</option>
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
              <button
                className="join-now"
                onClick={() => setShowbenefit(false)}
              >
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
      <Imagegallary gallaryarray={galleryimages} />
      <Footer />
    </>
  );
};

export default Autokritipage;
