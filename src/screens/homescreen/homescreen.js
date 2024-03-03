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
import icon9 from "./assets/president.jpg";
import icon10 from "./assets/vice-president.jpg";
import icon11 from "./assets/secy1.jpg";
import icon12 from "./assets/secy2.jpg";
import { Link } from "react-router-dom";
import Profilecard from "../../components/profilecard/profilecard";
import Footer from "../../components/footer/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Homescreen = () => {
  const [text] = useTypewriter({
    words: ["SAE Nit Kurukshetra", "Society of Automotive Enginners"],
    loop: {},
    typeSpeed: 30,
  });
  // console.log(1);
  return (
    <>
      <Header />
      <div className="app-container">
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
                India, which is a wing of SAE International, on a national
                scale. The club is a platform for budding engineers to work
                together to arrive at solutions to the problems in the mobility
                field. It forms a link between naive talents and pioneers of the
                industry. Valuing the interdisciplinary nature of the automobile
                sector, undergraduate students from various branches strive to
                innovate better under the guidance of our professors here at NIT
                Kurukshetra. We bring our skills to many competitions
              </p>
            </div>
          </div>
        </div>
        <div className="past-participation">
          <h1>Our past participations</h1>
          <div className="container">
            <Swiper
              slidesPerView={1}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              breakpoints={{
                // when window width is >= 320px
                740: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                1350: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="myswiper"
            >
              <SwiperSlide>
                <div className="box">
                  <div className="imgBx">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="content">
                    <div>
                      <h2>Baja Sae India</h2>
                      <ul>
                        <li>2019</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="imgBx">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="content">
                    <div>
                      <h2>ATVC</h2>
                      <ul>
                        <li>2019</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="imgBx">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="content">
                    <div>
                      <h2>Formula Bharat</h2>
                      <ul>
                        <li>2015</li>
                        <li>2016</li>
                        <li>2018</li>
                        <li>2019</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="imgBx">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="content">
                    <div>
                      <h2>Supra Sae india</h2>
                      <ul>
                        <li>2014</li>
                        <li>2017</li>
                        <li>2023</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="imgBx">
                    <img src={icon5} alt="" />
                  </div>
                  <div className="content">
                    <div>
                      <h2>Formula Imperial</h2>
                      <ul>
                        <li>2023</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="container-3">
          <div className="container">
            <div className="triangle left">
              <Link to="/accelerons">
                <img src={icon6} alt="" />
              </Link>
            </div>
            <div className="triangle center">
              <Link to="/autokriti">
                <img src={icon8} alt="" />
              </Link>
            </div>
            <div className="triangle right">
              <Link to="/nitrox">
                <img src={icon7} alt="" />
              </Link>
            </div>
            <div className="titles">
              <div>
                <h1>Accelerons</h1>
              </div>
              <div>
                <h1>Autokriti</h1>
              </div>
              <div>
                <h1>Nitrox</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <h1>Our Representatives</h1>
          <div className="row-p">
            <div className="inner-container">
              <Profilecard
                imgURL={icon9}
                name={"Vaibhav Dharmani"}
                title={"President"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vaibhav-dharmani-aa91a7199/"
                }
                emailId={"dharmani.vaibhav.2001@gmail.com"}
              />
              <Profilecard
                imgURL={icon10}
                name={"Himanshu Khatri"}
                title={"Vice-President"}
                LinkedinURL={"https://www.linkedin.com/in/hk2107/"}
                emailId={"hkhatri2107@gmail.com"}
              />
              <Profilecard
                imgURL={icon11}
                name={"Vinay Saini"}
                title={"Secretary"}
                LinkedinURL={
                  "https://www.linkedin.com/in/vinay-saini-6a3044241/"
                }
                emailId={"sainivinay013@gmail.com"}
              />
              <Profilecard
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
