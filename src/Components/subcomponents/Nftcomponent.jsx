import React from "react";
import Galaxy from "../../assets/Galaxy.png";
import Avatar from "../../assets/avatars/Avatar.png";
import "./Nftcomponent.css";

const Nftcomponent = (props) => {
  return (
    <div className="nft-component">
      <img src={props.mainimg} alt="" className="nft-img" />
      <div className="nft-container">
        <h1 className="nft-com-title">{props.name}</h1>
        <div className="nft-creator">
          <img src={props.avatar} alt="" className="nft-avatar-img" />
          <p className="nft-creator-name">{props.creator}</p>
        </div>
        <div className="nft-creds">
          <div>
            <p className="nft-creds-title">Price</p>
            <p className="nft-eth">1.63 ETH</p>
          </div>
          <div>
            <p className="nft-creds-title">Highest Bid</p>
            <p className="nft-eth">0.33 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftcomponent;
