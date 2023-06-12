import React from "react";
import "./footer.css";
import Logo from "../assets/Logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import RocketLaunch from "../assets/RocketLaunch.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col-1">
            <img src={Logo} alt="" />
            <p className="paratextfooter">
              Nft Marketplace UI created with Anima for Figma.
            </p>
            <p className="paratextfooter">join Our Community</p>
            <div className="socialmedia-footer">
              <AiFillInstagram className="footer-icons" />
              <AiFillTwitterCircle className="footer-icons" />
              <AiFillYoutube className="footer-icons" />
            </div>
          </div>
          <div className="footer-col-2">
            <h1 className="headitextfooter">Explore</h1>
            <p className="paratextfooter">MarketPlace</p>
            <p className="paratextfooter">Rankings</p>
            <p className="paratextfooter">Connect a wallet</p>
          </div>

          <div className="footer-col-3">
            <h1 className="headitextfooter">Join Our Weekly Digest</h1>
            <p className="paratextfooter">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="subscriber-input mmt">
              <input
                type="email"
                className="digest-input"
                placeholder="Enter Your Email"
              />
              <button className="btn-subscribe">Subsribe</button>
            </div>
          </div>
        </div>
        <hr className="footer-line" />
        <p className="footer-text">
          Project Under Construction @ Mr. Ahmad Khetran
        </p>
      </div>
    </footer>
  );
};

export default Footer;
