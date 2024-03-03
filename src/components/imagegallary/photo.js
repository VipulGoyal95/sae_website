import React from "react";
import "./imagegallary.css";

const Photo = (props) => {
    // console.log(props.url);
  return (
    <div class="photo">
      <div class="photo__image">
        <img
          src={props.url}
          alt=""
        />
      </div>
    </div>
  );
};

export default Photo;
