import React from "react";
import {
  direction,
  map,
  mapMobile,
  stars4,
} from "../../assets/Images/ContactImages";

const LocateUs = () => {
  return (
    <div className="bg-[#f5f5f5] px-0 lg:px-0  font-poppins lg:pt-0 pt-20">
      <div className="max-container">
        <h3 className="text-[40px] lg:text-[48px] font-semibold lg:text-center text-[#FF7843] px-5 lg:px-0">
          Locate us Here
        </h3>
        <div className="mapBg lg:block hidden lg:w-[85%] mt-6 lg:mt-9  p-8 mx-auto h-[500px] lg:rounded-[8px] ">
          <div className="bg-[#f5f5f5] hidden  lg:space-x-4 lg:flex flex-col lg:flex-row lg:w-[461px] p-6 lg:rounded-[8px] ">
            <a
              href="https://maps.app.goo.gl/CyUKpmqscB21jnoB9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space-y-3">
                <h3 className="font-bold text-2xl ">Seamless DMC</h3>
                <p>
                  Seamless Tourism LLC Office No 115, <br /> Zeenah building,
                  Port Saeed - Deira, <br /> Dubai - UAE
                </p>
                <p className="text-xl flex items-center space-x-2">
                  <span>4.0</span>{" "}
                  <img src={stars4} alt="4 stars" className="w-[68px]" />
                </p>

                <button className="underline text-[#006E99] font-medium cursor-pointer">
                  View larger map
                </button>
              </div>
            </a>
            <div>
              <img src={direction} alt="" className="w-[24px] mx-auto" />
              <p className="text-center text-[#006E99]">Directions</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] lg:hidden lg:space-x-4 flex flex-col lg:w-[461px] py-6 lg:rounded-[8px] ">
          <div className="">
            <img src={mapMobile} alt="" />
          </div>
          <div className="px-5 mt-5">
            <a
              href="https://maps.app.goo.gl/CyUKpmqscB21jnoB9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space-y-3 shadow-2xl bg-[#f5f5f5] p-3 relative">
                <h3 className="font-bold text-lg lg:text-2xl ">Seamless DMC</h3>
                <p className="text-[12px] lg:text-base w-[70%]">
                  Seamless Tourism LLC Office No 115, <br /> Zeenah building,
                  Port Saeed - Deira, <br /> Dubai - UAE
                </p>
                <p className="text-xl flex items-center space-x-2">
                  <span>4.0</span>{" "}
                  <img src={stars4} alt="4 stars" className="w-[68px]" />
                </p>
                <button className="underline text-[12px] lg:text-base text-[#006E99] font-medium cursor-pointer">
                  View larger map
                </button>

                <div className=" absolute top-2 right-5">
                  <img
                    src={direction}
                    alt=""
                    className="w-[18px] lg:w-[24px] mx-auto"
                  />
                  <p className="text-center text-[12px] lg:text-base  text-[#006E99]">
                    Directions
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
