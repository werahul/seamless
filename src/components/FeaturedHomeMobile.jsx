import React from "react";
import { stars } from "../assets/Images";

const FeaturedHomeMobile = () => {
  return (
    <div className="bg-[#fcf5ff] font-poppins lg:px-24 px-5 lg:pt-[124px] pt-[70px]">
      <div className="max-container">
        <h2 className="font-semibold lg:text-[48px] text-[40px] lg:leading-normal leading-[50.2px] text-[#ff7843] text-left">
          Top Featured Destinations
        </h2>
        <div className="mt-[50px] lg:mt-[30px]">
          <div className="flex overflow-x-auto space-x-4">
            <div className="flex space-x-4 lg:space-x-[32px] w-full">
              <div className="min-w-[300px] rounded-[8px] h-[207px] lg:h-[242px] flex-shrink-0 featured1Bg">
                <div className="bg-black flex flex-col justify-between p-4 lg:p-[32px] rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                  <h2 className="text-white font-medium text-[20px]">
                    Essence Of Abu Dhabi
                  </h2>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-[18px]">
                      Sheikh Zayed Grand Mosque
                    </p>
                    <img src={stars} alt="" className="w-[98px] h-auto" />
                  </div>
                </div>
              </div>
              <div className="min-w-[300px] rounded-[8px] bg-[#d9d9d9] h-[207px] lg:h-[242px] flex-shrink-0 featured2Bg">
                <div className="bg-black flex flex-col justify-between p-4 lg:p-[32px] rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
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
              <div className="min-w-[300px] rounded-[8px] bg-[#d9d9d9] h-[207px] lg:h-[242px] flex-shrink-0 featured5Bg">
                <div className="bg-black flex flex-col justify-between p-4 lg:p-[32px] rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                  <h2 className="text-white font-medium text-[20px]">Dubai</h2>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-[18px]">
                      Abu Dhabi Seascape
                    </p>
                    <img src={stars} alt="" className="w-[98px] h-auto" />
                  </div>
                </div>
              </div>
              <div className="min-w-[300px] rounded-[8px] bg-[#d9d9d9] h-[207px] lg:h-[242px] flex-shrink-0 featured6Bg">
                <div className="bg-black flex flex-col justify-between p-4 lg:p-[32px] rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
                  <h2 className="text-white font-medium text-[20px]">
                    Sharjah
                  </h2>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-[18px]">
                      Private Sharjah tour
                    </p>
                    <img src={stars} alt="" className="w-[98px] h-auto" />
                  </div>
                </div>
              </div>
              <div className="min-w-[300px] rounded-[8px] h-[207px] lg:h-[516px] flex-shrink-0 featured3Bg">
                <div className="bg-black flex flex-col justify-between p-4 lg:p-[32px] rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
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
              <div className="min-w-[300px] rounded-[8px] h-[207px] lg:h-[516px] flex-shrink-0 featured4Bg">
                <div className="bg-black flex flex-col justify-between p-5 lg:p-[32px] rounded-[8px] h-full bg-opacity-[50%] w-[100%]">
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
        </div>
      </div>
    </div>
  );
};

export default FeaturedHomeMobile;
