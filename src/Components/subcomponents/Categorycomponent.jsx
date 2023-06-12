import React from "react";
import "./categorycomponent.css";
import sampleimg from "../../assets/sampleimg.jpg";

const Categorycomponent = (props) => {
  return (
    <div className="main-category">
      <div className="category-img-div">
        <img src={props.mainimg} alt="" className="category-main-img" />
        <div className="category-blur-img"></div>
        <img src={props.secimg} alt="" className="category-sec-img" />
      </div>
      <h1 className="category-heading sub-heading1">{props.name}</h1>
    </div>
  );
};

export default Categorycomponent;
