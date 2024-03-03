import React from "react";
import Header from "../../components/header/header";
import { galleryimages } from "./galleryimages";
import "./nitroxpage.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Profilecard from "../../components/profilecard/profilecard";
import Footer from "../../components/footer/footer";
import icon3 from "./NitroxATVC.webp";
import icon4 from "./NitroxBAJA.webp";
import captain from "./VicePre.18ad3964.jpg";
import vicecaptain from "./Anmoll.24c79311.jpg";
import evhead from "./Parn.a707c0f0.jpg";
import icon2 from "./assests/Nitroxgallery_11.25957150.jpg";
import icon from "./Nitroxgallery_5.55513fbb (1).jpg"
import Imagegallary from "../../components/imagegallary/imagegallary";

const Nitroxpage = () => {
  const [text] = useTypewriter({
    words: ["Team Nitrox"],
    loop: {},
    typeSpeed: 30,
  });
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="top-container-3">
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
                TEAM NITROX is a group of junkies with a shared objective to
                create a fierce beast of an ATV (All-terrain vehicle). The team
                was founded back in 2010 under SAE NIT KURUKSHETRA. Since its
                foundation, the team has grown in all aspects, be its technical
                or competitive. From one of the few teams that design its own
                CVT to representing the country in BAJA SAE Illinois, the team
                has repeatedly provided evidence of its exceptional growth.
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
                <h3>Baja</h3>
                <p>
                  Baja SAE is an Collegiate Design Series competition run by the
                  Society Of Automotive Engineers International (SAE
                  INTERNATIONAL) Teams of Students from universities all over
                  the world design and build small off-road cars.
                </p>
                <p className="p2">
                  The goal in Baja SAE racing is to design, build and race
                  off-road vehicles that can withstand the harshest elements of
                  rough terrain. The vehicles used in Baja SAE racing are often
                  similar in appearance to dune buggies.
                </p>
              </figcaption>
              <h1>Baja</h1>
            </figure>
            <figure class="snip1256">
              <img src={icon4} alt="sample22" />
              <figcaption>
                <h3>ATVC</h3>
                <p>
                  The Third season of Aravalli Terrain Vehicle Championship,
                  powered by infi-league Motorsports is a natioanl championship
                  earnmarking all the techno freaks across the country
                </p>
                <p className="p2">
                  3500+ students. More than a hundred teams. Bests competing
                  against the best to build the best dune buggy each year. And
                  that is Aravalli Team Vehicle Championship (ATVC) for you. So
                  if you are a competitive techno freak, now you know where to
                  come!
                </p>
              </figcaption>
              <h1>ATVC</h1>
            </figure>
          </div>
        </div>
        <Imagegallary gallaryarray={galleryimages}/>
        <div className="profile-container">
          <h1>Team Representatives</h1>
          <div className="row-p">
            <div className="inner-container">
              <Profilecard
                imgURL={captain}
                name={"Himanshu Khatri"}
                title={"Captain"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vaibhav-dharmani-aa91a7199/"
                }
                emailId={"dharmani.vaibhav.2001@gmail.com"}
              />
              <Profilecard
                imgURL={vicecaptain}
                name={"Amnol"}
                title={"Vice-Captain"}
                LinkedinURL={"https://www.linkedin.com/in/hk2107/"}
                emailId={"hkhatri2107@gmail.com"}
              />
              <Profilecard
                imgURL={evhead}
                name={"Purv Sarin"}
                title={"Ev-head"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vinay-saini-6a3044241/"
                }
                emailId={"sainivinay013@gmail.com"}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Nitroxpage;
