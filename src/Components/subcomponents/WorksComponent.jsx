import React from "react";
import "./workcomponent.css";

const WorksComponent = (props) => {
  return (
    <div className="workcomponent">
      <img src={props.img} alt="" className="work-component-img" />
      <h1 className="work-component-heading">{props.head}</h1>
      <p className="work-component-para">{props.para}</p>
    </div>
  );
};

export default WorksComponent;
