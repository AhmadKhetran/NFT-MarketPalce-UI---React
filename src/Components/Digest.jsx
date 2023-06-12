import React from "react";
import spacex from "../assets/spacex.png";
import "./digest.css";

const Digest = () => {
  return (
    <div className="container">
      <div className="digest">
        <img src={spacex} alt="" className="digest-img" />
        <div className="digest-creds">
          <h1 className="heading">Join Our Weekly Digest</h1>
          <p className="sub-heading">
            Get Exclusive Promotions & Updates Straight To Your Inbox
          </p>
          <div className="subscriber-input">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="digest-input"
            />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digest;
