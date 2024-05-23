import React from "react";
import { stars } from "../assets/Images";

const FeaturedHome = () => {
  return (
    <div className="bg-[#fcf5ff] font-poppins lg:px-24 px-5 lg:pt-[124px] pt-[70px]">
      <div className="max-container">
        <h2 className="font-semibold lg:text-[48px] text-[40px] lg:leading-normal leading-[50.2px] text-[#ff7843] text-center">
          Top Featured Destinations
        </h2>
        <div className="lg:flex lg:mt-[30px] mt-[50px] justify-center lg:space-x-8">
          <div className="lg:w-[70%] lg:space-y-[32px] space-y-4">
            <div className="featured1Bg  rounded-[8px] w-full lg:h-[242px] h-[207px]">
              <div className="bg-black flex flex-col justify-between lg:p-[32px] p-4 rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                <h2 className="text-white font-medium text-[20px]">
                  Essence Of Abu Dhabi
                </h2>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-[18px]">
                    Sheikh Zayed Mosque 
                  </p>
                  <img src={stars} alt="" className="w-[98px] h-auto" />
                </div>
              </div>
            </div>
            <div className=" lg:flex lg:space-x-[32px] lg:space-y-0 space-y-4">
              <div className="featured3Bg rounded-[8px] bg-[#d9d9d9] lg:w-[50%] lg:h-[516px] h-[481px]">
                <div className="bg-black flex flex-col justify-between lg:p-[32px] p-4 rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                  <h2 className="text-white font-medium text-[20px]">
                    Helicopter Tour Dubai
                  </h2>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-[18px]">
                      Helicopter Tour
                    </p>
                    <img src={stars} alt="" className="w-[98px] h-auto" />
                  </div>
                </div>
              </div>
              <div className="featured4Bg rounded-[8px] bg-[#d9d9d9] lg:w-[50%] lg:h-[516px] h-[481px]">
                <div className="bg-black flex flex-col justify-between lg:p-[32px] p-5 rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                  <h2 className="text-white font-medium text-[20px]">
                    Palm Jumeirah
                  </h2>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-[18px]">
                      Palm Islands
                    </p>
                    <img src={stars} alt="" className="w-[98px] h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] lg:space-y-[32px] space-y-4 lg:mt-0 mt-4">
            <div className="featured2Bg rounded-[8px] bg-[#d9d9d9] w-full lg:h-[242px] h-[207px]">
              <div className="bg-black flex flex-col justify-between lg:p-[32px] p-4 rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                <h2 className="text-white font-medium text-[20px]">
                  Ras Al Khaimah
                </h2>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-[18px]">
                    Voyage Golf Hotel Waldorf Astoria 
                  </p>
                  <img src={stars} alt="" className="w-[98px] h-auto" />
                </div>
              </div>
            </div>
            <div className="featured5Bg rounded-[8px] bg-[#d9d9d9] w-full lg:h-[242px] h-[207px]">
              <div className="bg-black flex flex-col justify-between lg:p-[32px] p-4 rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                <h2 className="text-white font-medium text-[20px]">Dubai</h2>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-[18px]">
                    Abu Dhabi Seascape
                  </p>
                  <img src={stars} alt="" className="w-[98px] h-auto" />
                </div>
              </div>
            </div>
            <div className="featured6Bg rounded-[8px] bg-[#d9d9d9] w-full lg:h-[242px] h-[207px]">
              <div className="bg-black flex flex-col justify-between lg:p-[32px] p-4 rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                <h2 className="text-white font-medium text-[20px]">Sharjah</h2>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-[18px]">
                    Private Sharjah tour
                  </p>
                  <img src={stars} alt="" className="w-[98px] h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHome;
