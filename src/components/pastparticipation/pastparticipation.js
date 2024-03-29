import React from "react";
import "./pastparticipation.css";
import icon1 from "./assests/baja-sae-india.jpg";
import icon2 from "./assests/ATVC.jpg";
import icon3 from "./assests/formula-bharat.png";
import icon4 from "./assests/Supra-sae-india.jpg";
import icon5 from "./assests/formula-imperials.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const Pastparticipation = () => {
  return (
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
              spaceBetween: 10,
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
  );
};

export default Pastparticipation;
