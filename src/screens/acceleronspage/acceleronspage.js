import React, { useEffect } from "react";
// import Imagegallary from "../../components/imagegallary/imagegallary";
import Header from "../../components/header/header";
import icon from "./Accelerons.jpeg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./acceleronspage.css";
import icon3 from "./supraold.webp";
import icon4 from "./formulabharat.webp";
import { gallaryarray } from "./gallaryarray";
import Imagegallary from "../../components/imagegallary/imagegallary";
import Profilecard from "../../components/profilecard/profilecard";
import captain from "./assets/Yasharora.d6916acd.jpg";
import vicecaptain from "./assets/Bhupeksh.7df9baf5.jpg";
import evhead from "./assets/man.b3e9680f.png";
import Footer from "../../components/footer/footer";
import Aboutus from "../../components/Aboutus/Aboutus";

const Acceleronspage = () => {
  const [text] = useTypewriter({
    words: ["Team Accelerons", "Design Build Race"],
    loop: {},
    typeSpeed: 30,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="top-container-2">
          <img src={icon} alt="ac" />
          <h1>
            <span className="text">{text}</span>
            <Cursor />
          </h1>
        </div>
        <Aboutus page="accelerons"/>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <h1 className="Participation-title">Where do we participate ?</h1>
          <div className="participation-container">
            <figure class="snip1256">
              <img src={icon3} alt="sample42" />
              <figcaption>
                <h3>Supra</h3>
                <p>
                  SUPRA SAEINDIA Student Formula is a national engineering
                  design competition held by the Society of Automotive Engineers
                  Indian(SAEINDIA). The goal is to develop and provide a
                  platform for student engineers to experience build and learn.
                </p>
                <p className="p2">
                  Students gain and develop skills such as engineering,project
                  management and team work.Points are earned in a series off
                  track,"Static" events, and on track,"Dyanamic" events. The
                  team with the most points at the end of the competion wins.
                </p>
              </figcaption>
              <h1>Supra</h1>
            </figure>
            <figure class="snip1256">
              <img src={icon4} alt="sample22" />
              <figcaption>
                <h3>Formula Bharat</h3>
                <p>
                  Formula Bharat is an engineering design competitionin which
                  Studentsfrom colleges and universities all over the country,
                  compete with a life-size Formula-style vehicle in areas of
                  engineering design,overall cost,marketability and dynamic
                  performance.
                </p>
                <p className="p2">
                  These student teams are required to build a new vehicle from
                  scratch year-after-year and seek sponsorship and donations by
                  their own means to fund the project
                </p>
              </figcaption>
              <h1>Formula Bharat</h1>
            </figure>
          </div>
        </div>
        <Imagegallary gallaryarray={gallaryarray} />
        <div className="profile-container">
          <h1>Team Representatives</h1>
          <div className="row-p">
            <div className="inner-container">
              <Profilecard
                imgURL={captain}
                name={"Yash Arora"}
                title={"Captain"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vaibhav-dharmani-aa91a7199/"
                }
                emailId={"dharmani.vaibhav.2001@gmail.com"}
              />
              <Profilecard
                imgURL={vicecaptain}
                name={"Bhupeksh"}
                title={"Vice-Captain"}
                LinkedinURL={"https://www.linkedin.com/in/hk2107/"}
                emailId={"hkhatri2107@gmail.com"}
              />
              <Profilecard
                imgURL={evhead}
                name={"Manikya"}
                title={"Ev-head"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vinay-saini-6a3044241/"
                }
                emailId={"sainivinay013@gmail.com"}
              />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Acceleronspage;
