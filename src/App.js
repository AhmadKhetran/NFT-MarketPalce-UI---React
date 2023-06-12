import logo from "./logo.svg";
import Header from "./Components/Header";
import "./App.css";
import Herosection from "./Components/Herosection";
import Trendingcollection from "./Components/Trendingcollection";
import Topcreators from "./Components/Topcreators";
import Category from "./Components/Category";
import DiscoverNFT from "./Components/DiscoverNFT";
import Works from "./Components/Works";
import Digest from "./Components/Digest";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Herosection />
      <Trendingcollection />
      <Topcreators />
      <Category />
      <DiscoverNFT />
      <Works />
      <Digest />
      <Footer />
    </div>
  );
}

export default App;
