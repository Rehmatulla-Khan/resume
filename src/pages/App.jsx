import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import About from "./about/About";

const App = () => {
  return (
    <div className="relative pt-36 px-5">
      <img
        className="absolute top-0 left-0 -z-10"
        src="https://art-template.ru/vcard1/assets/images/triangles-top.svg"
        alt="top left img"
      />
      {/* <img
        className="absolute bottom-0 right-0 -z-10"
        src="https://art-template.ru/vcard1/assets/images/triangles-bottom.svg"
        alt="bottom right img"
      /> */}
      <Sidebar />
      <Navbar />
      <About />
    </div>
  );
};

export default App;
