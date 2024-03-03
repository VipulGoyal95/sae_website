import React, { useEffect, useState } from "react";
import "./imagegallary.css";
import Photo from "./photo";

const Imagegallary = ({ gallaryarray }) => {
  const array1 = gallaryarray.slice(0, 9);
  const array2 = gallaryarray.slice(9, 18);
  const array3 = gallaryarray.slice(18, 25);
  const array4 = gallaryarray.slice(25, -1);
  const [showmore, setShowmore] = useState(false);
  // console.log(showmore);
  return (
    <div className="galleryBody">
      <div class={showmore?"gallery2":"gallery"}>
        <div class="gallery__strip__wrapper">
          <div
            className="gallery__strip one"
          >
            {array1.map((url) => (
              <Photo url={url} />
            ))}
          </div>
        </div>
        <div class="gallery__strip__wrapper">
          <div
            className="gallery__strip two"
          >
            {array2.map((url) => (
              <Photo url={url} />
            ))}
          </div>
        </div>
        <div class="gallery__strip__wrapper">
          <div
            className="gallery__strip three"
          >
            {array3.map((url) => (
              <Photo url={url} />
            ))}
          </div>
        </div>
        <div class="gallery__strip__wrapper">
          <div
            className="gallery__strip four"
          >
            {array4.map((url) => (
              <Photo url={url} />
            ))}
          </div>
        </div>
      </div>
      <button class="material-symbols-outlined" onClick={(value)=>setShowmore(true)}>
        expand_more
      </button>
    </div>
  );
};

export default Imagegallary;
