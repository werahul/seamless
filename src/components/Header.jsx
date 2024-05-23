import React from "react";
import { videoHeader, videoHeader2 } from "../assets/videos";

const Header = () => {
  return (
    <div className="headerBg font-poppins h-[120vh]">
      <video src={videoHeader} className="w-full " autoPlay muted loop></video>
      <div className="h-[120vh] flex items-center justify-center bgHeader absolute text-center text-white top-[0%] bg-opacity-40 space-x-10 w-full left-[50%] transform pt-[550px] pb-[190px] px-10 translate-x-[-50%]  z-40">
        <h1 className="text-[50px] leading-[55px] font-semibold ">
          Your Trusted DMC <br /> Partner for UAE
        </h1>
        <div className="w-0.5 h-28 bg-white"></div>
        <p className="text-[#ff7843] text-[21px]  font-semibold text-left">
          Best Deals | 24/7 Availability <br /> | Worldwide Presence
        </p>
      </div>
    </div>
  );
};

export default Header;
