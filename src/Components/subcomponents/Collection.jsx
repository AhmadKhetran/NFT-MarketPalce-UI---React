import React from "react";
import "./collection.css";

const Collection = (props) => {
  return (
    <div className="main-col-div">
      <img src={props.imgp} alt="" className="col-img hoverr" />
      <div className="col-grid">
        <img src={props.imgs} alt="" className="imgsm hoverr" />
        <img src={props.imgs2} alt="" className="imgsm hoverr" />
        <div className="col-grid-div hoverr">
          <p className="grid-div-p">1024+</p>
        </div>
      </div>
      <h1 className="sub-heading1">{props.title}</h1>
      <div className="col-grid2">
        <img src={props.imgs} alt="" className="col-profile-img " />{" "}
        <p className="col-profile-name">{props.artist}</p>
      </div>
    </div>
  );
};

export default Collection;
