import React from "react";
import { videoHeader, videoHeader2 } from "../assets/videos";

const Header = () => {
  return (
    <div className="relative font-poppins pt-24 lg:pt-0 lg:h-[115vh]">
      <video
        src={videoHeader}
        className="w-full h-auto"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 flex items-center justify-center bgHeader text-white space-y-4 lg:space-y-0 space-x-3 lg:space-x-10 px-4 pt-20 lg:pt-[360px] lg:px-10 z-40">
        <h1 className=" pt-4 lg:pt-0 text-sm lg:text-4xl lg:leading-snug font-semibold">
          Your Trusted DMC <br /> Partner for UAE
        </h1>
        <div className="block w-0.5 h-20 lg:h-28 bg-white"></div>
        <p className="text-left text-[#ff7843] text-sm lg:text-lg font-semibold">
          Best Deals | 24/7 Availability <br /> | Worldwide Presence
        </p>
      </div>
    </div>
  );
};

export default Header;
