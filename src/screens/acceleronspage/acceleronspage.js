import React from "react";
// import Imagegallary from "../../components/imagegallary/imagegallary";
import Header from "../../components/header/header";
import icon from "./Accelerons.jpeg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./acceleronspage.css";
import icon2 from "./acceleronsimage.jpg";
import icon3 from "./supraold.webp";
import icon4 from "./formulabharat.webp";

const Acceleronspage = () => {
  const [text] = useTypewriter({
    words: ["Team Accelerons", "Design Build Race"],
    loop: {},
    typeSpeed: 30,
  });

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="top-container-2">
          <img src={icon} alt="" />
          <h1>
            <span className="text">{text}</span>
            <Cursor />
          </h1>
        </div>
        <div className="Container-2">
          <div className="About-Us">
            <img src={icon2} alt="" />
            <div className="about-content">
              <h1>About Team Accelerons</h1>
              <p>
                TEAM ACCELERONS is a student-led engineering team of SAE NIT
                Kurukshetra. The feeling of speed and precision, the tactical
                aspects, the way car looks, the way it behaves, that first lap
                excitement and the intrigues that surround it, are the things
                that drives the team to DESIGN, BUILD and RACE formula-style
                cars for the Formula Bharat and SUPRA competitions. From being a
                first-timer in SUPRA 2014 to standing on top among all NITS in
                SUPRA 2018, the Team has come a long way, upgrading itself with
                each passing season.. After all Felipe Massa rightly said, "When
                you give up your hunger for success you are not racing full
                heartedly anymore."
              </p>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Acceleronspage;
