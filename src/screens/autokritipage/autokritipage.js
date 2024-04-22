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

import Aboutus from "../../components/Aboutus/Aboutus";
import Ambassador from "../../components/ambassador/ambassador";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Autokritipage = () => {
  const [text] = useTypewriter({
    words: ["Be a Part of Autokriti 13.0", "Become an ambassador"],
    loop: {},
    typeSpeed: 30,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="top-container-4">
        <img src={icon} alt="sae" />
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
        className="autokriti-carousel"
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div className="leftarrow-container" onClick={clickHandler}>
              <FaArrowCircleLeft className="leftarrow" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div className="rightarrow-container" onClick={clickHandler}>
              <FaArrowCircleRight className="rightarrow" />
            </div>
          );
        }}
      >
        <div className="auto-slides">
          <img src={icon1} alt="" />
        </div>
        <div className="auto-slides">
          <img src={icon2} alt="" />
        </div>
        <div className="auto-slides">
          <img src={icon3} alt="" />
        </div>
        <div className="auto-slides">
          <img src={icon4} alt="" style={{ height: "100%" }} />
        </div>
        <div className="auto-slides">
          <img src={icon5} alt="" style={{ height: "100%" }} />
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
              <h1 style={{ color: "black" }}>Combuction Vehicle</h1>
              <h2>Engine</h2>
              <h2>Transmission</h2>
              <h2>Vehicle Dynamics</h2>
              <h2>Suspension</h2>
            </figcaption>
          </figure>
          <figure class="snip1206">
            <img src={poster2} alt="sample69" />
            <figcaption>
              <h1 style={{ color: "black" }}>IOT</h1>
              <h2>Comm protocol</h2>
              <h2>Adruino</h2>
              <h2>DAQ</h2>
              <h2>Projects</h2>
            </figcaption>
          </figure>
          <figure class="snip1206">
            <img src={poster3} alt="sample13" />
            <figcaption>
              <h1 style={{ color: "black" }}>Software</h1>
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
      <Ambassador />
      <Imagegallary gallaryarray={galleryimages} />
      <Footer />
    </>
  );
};

export default Autokritipage;
