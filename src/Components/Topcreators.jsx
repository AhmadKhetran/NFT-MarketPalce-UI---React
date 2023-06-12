import React from "react";
import "./topcreators.css";
import RocketLaunch from "../assets/RocketLaunch.png";
import CreatorComponent from "./subcomponents/CreatorComponent";
import Avatar from "../assets/avatars/Avatar.png";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import avatar5 from "../assets/avatars/avatar5.png";
import avatar6 from "../assets/avatars/avatar6.png";
import avatar7 from "../assets/avatars/avatar7.png";
import avatar8 from "../assets/avatars/avatar8.png";
import avatar9 from "../assets/avatars/avatar9.png";
import avatar10 from "../assets/avatars/avatar10.png";
import avatar11 from "../assets/avatars/avatar11.png";

const Topcreators = () => {
  return (
    <div className="container">
      <div className="creators-flex-box">
        <div className="creators-content">
          <h1 className="heading">Top Creators</h1>
          <p className="sub-heading">
            CheckOut Top Rated Creators On The NFT Marketplace
          </p>
        </div>
        <button className="btn-rankings btn-hoverr btn-font">
          {" "}
          <img src={RocketLaunch} alt="" className="rocketimg" /> View Rankings
        </button>
      </div>
      <div className="creators-grid ">
        {TopCreators.map((e) => (
          <CreatorComponent id={e.id} img={e.img} name={e.name} />
        ))}
      </div>
    </div>
  );
};

export default Topcreators;

const TopCreators = [
  { id: 1, img: Avatar, name: "Keeptrel" },
  { id: 2, img: avatar1, name: "DigiLab" },
  { id: 3, img: avatar2, name: "GravityOne" },
  { id: 4, img: avatar3, name: "Juanie" },
  { id: 5, img: avatar4, name: "BlueWhale" },
  { id: 6, img: avatar5, name: "Mr Fox" },
  { id: 7, img: avatar6, name: "Shroomie" },
  { id: 8, img: avatar7, name: "Robatica" },
  { id: 9, img: avatar8, name: "RustyRobot" },
  { id: 10, img: avatar9, name: "AnimaKid" },
  { id: 11, img: avatar10, name: "Gotgu" },
  { id: 12, img: avatar11, name: "Ghiblier" },
];
