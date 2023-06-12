import React from "react";
import Collection from "./subcomponents/Collection";
import "./trendingcollections.css";
import disco from "../assets/disco.png";
import disco2 from "../assets/disco2.png";
import disco3 from "../assets/disco3.png";
import dog from "../assets/dog.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import mm from "../assets/mm.png";
import mm2 from "../assets/mm2.png";

const Trendingcollection = () => {
  return (
    <div className="container">
      <h3 className="heading">Trending Collections</h3>
      <p className="sub-heading">Checkout Our Weekly Trending Collection</p>
      <div className="collections-flex-box">
        {colArray.map((e) => (
          <Collection
            imgp={e.imgp}
            imgs={e.imgs}
            imgs2={e.imgs2}
            title={e.title}
            artist={e.artist}
          />
        ))}
      </div>
    </div>
  );
};

export default Trendingcollection;

const colArray = [
  {
    imgp: dog,
    imgs: dog2,
    imgs2: dog3,
    title: "Gsgn Animals",
    artist: "MrFox",
  },
  {
    imgp: mm,
    imgs: mm2,
    imgs2: mm2,
    title: "Magic Mushrooms",
    artist: "Shroomie",
  },
  {
    imgp: disco,
    imgs: disco2,
    imgs2: disco3,
    title: "Disco Machine",
    artist: "BeKind2Robots",
  },
  {
    imgp: dog,
    imgs: mm2,
    imgs2: disco2,
    title: "DopeDudes",
    artist: "DopeKH",
  },
];
