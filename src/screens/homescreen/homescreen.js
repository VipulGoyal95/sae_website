import React, { useEffect } from "react";
import Header from "../../components/header/header";
import "./homescreen.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import icon from "./sae_nit_kkr_cover.jpg";
import icon9 from "./assets/president.jpg";
import icon10 from "./assets/vice-president.jpg";
import icon11 from "./assets/secy1.jpg";
import icon12 from "./assets/secy2.jpg";
import { Link } from "react-router-dom";
import Profilecard from "../../components/profilecard/profilecard";
import Footer from "../../components/footer/footer";
import "swiper/css";
import "swiper/css/navigation";
import Pastparticipation from "../../components/pastparticipation/pastparticipation";
import Triangularcontainer from "../../components/triangularcontainer/triangularcontainer";
import "aos/dist/aos.css";

import Aboutus from "../../components/Aboutus/Aboutus";
const Homescreen = () => {
  const [text] = useTypewriter({
    words: ["SAE Nit Kurukshetra", "Society of Automotive Enginners"],
    loop: {},
    typeSpeed: 30,
  });
  // console.log(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="top-container">
          <img
            src={icon}
            alt="sae"
          />
          <h1>
            Welcome To
            <br />
            <span className="text">{text}</span>
            <Cursor />
          </h1>
        </div>
        <Aboutus page="home" />
        <Pastparticipation />
        <Triangularcontainer />
        <div className="profile-container">
          <h1>Our Representatives</h1>
          <div className="row-p">
            <div className="inner-container">
              <Profilecard
                speed={200}
                imgURL={icon9}
                name={"Vaibhav Dharmani"}
                title={"President"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vaibhav-dharmani-aa91a7199/"
                }
                emailId={"dharmani.vaibhav.2001@gmail.com"}
              />
              <Profilecard
                speed={150}
                imgURL={icon10}
                name={"Himanshu Khatri"}
                title={"Vice-President"}
                LinkedinURL={"https://www.linkedin.com/in/hk2107/"}
                emailId={"hkhatri2107@gmail.com"}
              />
              <Profilecard
                speed={100}
                imgURL={icon11}
                name={"Vinay Saini"}
                title={"Secretary"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vinay-saini-6a3044241/"
                }
                emailId={"sainivinay013@gmail.com"}
              />
              <Profilecard
                speed={50}
                imgURL={icon12}
                name={"Lisha Garg"}
                title={"Secretary"}
                LinkedinURL={
                  "https://www.linkedin.com/in/lisha-garg-61373a211/"
                }
                emailId={"lisha317garg@gmail.com"}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homescreen;
