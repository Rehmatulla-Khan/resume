import React from "react";
import TopLeftImg from "../components/assets/svg/leftTop-img.svg";
import BottomRightImg from "../components/assets/svg/rightBottom-img.svg";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import About from "./about/About";

const App = () => {
  return (
    <div className="relative px-5 pt-36">
      <img
        className="absolute top-0 left-0 -z-10"
        src={TopLeftImg}
        alt="top left img"
      />
      {/* <img
        className="absolute bottom-0 right-0 -z-10"
        src={BottomRightImg}
        alt="bottom right img"
      /> */}
      <Sidebar />
      <Navbar />
      <About />
    </div>
  );
};

export default App;
