import React from "react";
import "./imagegallary.css";

const Image_strip_wrapper = () => {
  return (
    <div class="gallery__strip__wrapper">
      <div class="gallery__strip one">
        <div class="photo">
          <div class="photo__image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="photo">
          <div class="photo__image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="photo">
          <div class="photo__image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="photo">
          <div class="photo__image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image_strip_wrapper;
