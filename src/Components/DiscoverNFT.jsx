import React from "react";
import "./discovernft.css";
import Eye from "../assets/Eye.png";
import Galaxy from "../assets/Galaxy.png";
import Edena from "../assets/Edena.png";
import Asrtro from "../assets/Asrtro.png";
import Avatar from "../assets/avatars/Avatar.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import Nftcomponent from "./subcomponents/Nftcomponent";
import Nfthighlight from "../assets/Nfthighlight.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const DiscoverNFT = () => {
  return (
    <>
      <section className="container">
        <div className="discover-flex-box">
          <div>
            <h1 className="heading">Dicover More NFTs</h1>
            <p className="sub-heading">Explore New Trending NFTs</p>
          </div>
          <div>
            <button className="btn-see btn-font btn-hoverr">
              <img src={Eye} alt="" />
              See All
            </button>
          </div>
        </div>

        <div className="discover-grid-box">
          {nfts.map((e) => (
            <Nftcomponent
              mainimg={e.mainimg}
              avatar={e.avatar}
              name={e.name}
              creator={e.creator}
            />
          ))}
        </div>
      </section>
      <div className="corousal">
        <button className="left-button ">
          <AiOutlineArrowLeft className="arrowss" />
        </button>
        <button className="right-button ">
          <AiOutlineArrowRight className="arrowss" />
        </button>
        <img src={Nfthighlight} alt="" className="corousalimg" />
        <div className="cor-linear-bg"></div>
        <div className="cor-main">
          <div className="cor-creator-creds">
            <img src={avatar2} alt="" className="cor-avatar" />
            <p className="cor-creator-name">MoonDancer</p>
          </div>
          <h1 className="cor-nft-name"> Magic Mashrooms </h1>
          <button className="seenft-btn btn-hoverr">
            <img src={Eye} alt="" /> See Nft
          </button>
        </div>
      </div>
    </>
  );
};

export default DiscoverNFT;

const nfts = [
  {
    mainimg: Galaxy,
    avatar: Avatar,
    name: "Distant Galaxy",
    creator: "MoonDancer",
  },
  {
    mainimg: Edena,
    avatar: avatar2,
    name: "Life Of Edena",
    creator: "NebiulaKid",
  },
  {
    mainimg: Asrtro,
    avatar: avatar3,
    name: "AstroFiction",
    creator: "Spaceone",
  },
];

const corosalimgs = [
  {
    img: Nfthighlight,
    name: "Magic Mushrooms",
    creator: "Sharoomie",
    avatar: Avatar,
  },
];
