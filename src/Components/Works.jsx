import React from "react";
import WorksComponent from "./subcomponents/WorksComponent";
import earning from "../assets/earning.png";
import wallet from "../assets/earning.png";
import createcolc from "../assets/createcolc.png";
import "./works.css";

const Works = () => {
  return (
    <section className="container">
      <h1 className="heading">How It Works</h1>
      <p className="sub-heading">Find Out How It Get Started</p>
      <div className="works-grid">
        {workcomponend.map((e) => (
          <WorksComponent img={e.img} head={e.head} para={e.para} />
        ))}
      </div>
    </section>
  );
};

export default Works;

const workcomponend = [
  {
    img: wallet,
    head: "Setup Your Wallet",
    para: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    img: createcolc,
    head: "Create Collection",
    para: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    img: earning,
    head: "Start Earning",
    para: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];
