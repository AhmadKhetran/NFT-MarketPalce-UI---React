import "./hero.css";
import RocketLaunch from "../assets/RocketLaunch.png";

const Herosection = () => {
  return (
    <section className="container">
      <div className="hero-flex-box">
        <div className="hero-content">
          <h1 className="main-heading">
            Discover <br /> Digital Art & <br />
            Collect NFTs
          </h1>
          <p className="text-content">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <button className="btn-getstarted btn-hoverr btn-font">
            <img src={RocketLaunch} className="rock-icon" alt="hero" />
            Get Started
          </button>
          <div className="hero-grid-box">
            {heroarray.map((e) => (
              <div>
                <h1 className="grid-head">{e.a}</h1>
                <p className="grid-para">{e.b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-img">
          <img
            className="heroimg"
            alt="img"
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
            anima-src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;

const heroarray = [
  { a: "240K+", b: "Total Sale" },
  { a: "100K+", b: "Auctions" },
  { a: "200K+", b: "Artists" },
];
