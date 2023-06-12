import React from "react";
import Logo from "../assets/Logo.png";
import "./Header.css";
import navsign from "../assets/navsign.png";
const Header = () => {
  return (
    <div className="">
      <header className="header">
        <img src={Logo} alt="" />
        <ul className="nav">
          <li className="navlist">
            <a href="">Marketplace</a>
          </li>
          <li className="navlist">
            <a href="">Rankings</a>
          </li>
          <li className="navlist">
            <a href="">Connect a wallet</a>
          </li>
          <li>
            <button className="nav-btn">
              <img src={navsign} alt="" />
              Sign Up
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
