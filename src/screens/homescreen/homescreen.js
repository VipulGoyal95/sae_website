import React from "react";
import Header from "../../components/header/header";
import "./homescreen.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import icon1 from "./assets/baja-sae-india.jpg";
import icon2 from "./assets/ATVC.jpg";
import icon3 from "./assets/formula-bharat.png";
import icon4 from "./assets/Supra-sae-india.jpg";
import icon5 from "./assets/formula-imperials.jpg";
import icon6 from "./assets/abc1new.dfa5ca88.webp";
import icon7 from "./assets/def1.922ff2dd.webp";
import icon8 from "./assets/autokriti.jpg";

const Homescreen = () => {
  const [text] = useTypewriter({
    words: ["SAE Nit Kurukshetra", "Society of Automotive Enginners"],
    loop: {},
    typeSpeed: 30,
  });

  return (
    <>
      <Header />
      <div className="top-container">
        <img
          src="https://media.licdn.com/dms/image/C561BAQF8auZ1QzaZVQ/company-background_10000/0/1595058394478/sae_nit_kkr_cover?e=2147483647&v=beta&t=ZhrrMfR6-nMY_xz-EZE7xmMazlFgfeFgpllMlkkXaiY"
          alt="sae"
        />
        <h1>
          Welcome To
          <br />
          <span className="text">{text}</span>
          <Cursor />
        </h1>
      </div>

      <div className="Container-2">
        <div className="About-Us">
          <img
            src="https://www.saenitkurukshetra.in/static/media/Autokritigallery_26.d8a7065e.JPG"
            alt=""
          />
          <div className="about-content">
            <h1>About Us</h1>
            <p>
              SAE NIT Kurukshetra is a collegiate club affiliated with SAE
              India, which is a wing of SAE International, on a national scale.
              The club is a platform for budding engineers to work together to
              arrive at solutions to the problems in the mobility field. It
              forms a link between naive talents and pioneers of the industry.
              Valuing the interdisciplinary nature of the automobile sector,
              undergraduate students from various branches strive to innovate
              better under the guidance of our professors here at NIT
              Kurukshetra. We bring our skills to many competitions
            </p>
          </div>
        </div>
      </div>
      <div className="past-participation">
        <h1>Our past participations</h1>
        <button id="prev-btn" class="slide-button material-symbols-rounded">
          arrow_back_ios
        </button>
        <div className="container">
          <div className="box">
            <div className="imgBx">
              <img src={icon1} alt="" />
            </div>
            <div className="content">
              <div>
                <h2>Baja Sae India</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={icon2} alt="" />
            </div>
            <div className="content">
              <div>
                <h2>ATVC</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={icon3} alt="" />
            </div>
            <div className="content">
              <div>
                <h2>Formula Bharat</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={icon4} alt="" />
            </div>
            <div className="content">
              <div>
                <h2>Supra Sae india</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={icon5} alt="" />
            </div>
            <div className="content">
              <div>
                <h2>Formula Imperial</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button id="next-btn" class="slide-button material-symbols-rounded">
          arrow_forward_ios
        </button>
      </div>
      <div className="container-3">
        <div class="container">
          <div class="triangle left">
            <img src={icon6} alt="" />
          </div>
          <div class="triangle center">
          <img src={icon8} alt="" />
          </div>
          <div class="triangle right">
            <img src={icon7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homescreen;
