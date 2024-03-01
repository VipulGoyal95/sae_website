import React from "react";
import "./imagegallary.css";
import Image_strip_wrapper from "./image_strip_wrapper";

const Imagegallary = () => {
  return (
    <div class="gallery">
      <Image_strip_wrapper />
      <Image_strip_wrapper />
      <Image_strip_wrapper />
    </div>
  );
};

export default Imagegallary;
