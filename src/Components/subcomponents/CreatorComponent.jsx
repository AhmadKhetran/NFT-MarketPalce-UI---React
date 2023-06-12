import React from "react";
import "./creatorcomponent.css";
import Avatar from "../../assets/avatars/Avatar.png";

const CreatorComponent = (props) => {
  return (
    <div className="creator-component-box hoverr">
      <div className="creator-id">
        <p className="creator-id-para">{props.id}</p>
      </div>
      <img src={props.img} className="creator-img" alt="" />
      <h1 className="sub-heading1">{props.name}</h1>
      <p className="creator-sales">
        <span className="creator-dim-text"> Total Sales: </span>34.53 ETH
      </p>
    </div>
  );
};

export default CreatorComponent;
