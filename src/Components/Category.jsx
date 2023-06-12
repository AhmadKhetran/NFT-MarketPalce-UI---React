import React from "react";
import "./category.css";

import Categorycomponent from "./subcomponents/Categorycomponent";
import art from "../assets/categoryimg/art.png";
import Basketball from "../assets/categoryimg/Basketball.png";
import Camera from "../assets/categoryimg/Camera.png";
import collectibles from "../assets/categoryimg/collectibles.png";
import MagicWand from "../assets/categoryimg/MagicWand.png";
import music from "../assets/categoryimg/music.png";
import MusicNotes from "../assets/categoryimg/MusicNotes.png";
import PaintBrush from "../assets/categoryimg/PaintBrush.png";
import photography from "../assets/categoryimg/photography.png";
import Planet from "../assets/categoryimg/Planet.png";
import sports from "../assets/categoryimg/sports.png";
import Swatches from "../assets/categoryimg/Swatches.png";
import utility from "../assets/categoryimg/utility.png";
import VideoCamera from "../assets/categoryimg/VideoCamera.png";
import vidoe from "../assets/categoryimg/vidoe.png";
import virtualword from "../assets/categoryimg/virtualword.png";

const Category = () => {
  return (
    <div className="container">
      <h1 className="heading">Browse Categories</h1>
      <div className="category-grid">
        {categoryimg.map((e) => (
          <Categorycomponent
            mainimg={e.mainimg}
            secimg={e.secimg}
            name={e.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

const categoryimg = [
  {
    mainimg: art,
    secimg: PaintBrush,
    name: "Art",
  },
  {
    mainimg: collectibles,
    secimg: Swatches,
    name: "Collectibles",
  },
  {
    mainimg: music,
    secimg: MusicNotes,
    name: "Music",
  },

  {
    mainimg: photography,
    secimg: Camera,
    name: "Photography",
  },
  {
    mainimg: sports,
    secimg: Basketball,
    name: "Sports",
  },
  {
    mainimg: utility,
    secimg: MagicWand,
    name: "Utility",
  },
  {
    mainimg: vidoe,
    secimg: VideoCamera,
    name: "Video",
  },
  {
    mainimg: virtualword,
    secimg: Planet,
    name: "VirtualWord",
  },
];
