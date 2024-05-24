import React from "react";
import {
  fit1,
  fit2,
  fit3,
  fit4,
  fit5,
  fit6,
} from "../assets/Images/LeisureImages";

console.log(fit1, fit2, fit3, fit4, fit5, fit6);

const ChooseLeisure = () => {
  return (
    <div className="bg-[#fcf5ff] font-poppins lg:px-24 px-5 lg:pt-[100px] lg:pb-[120px] pt-20 pb-20">
      <div className="max-container">
        <h2 className="text-[#ff7834] lg:text-[48px] text-[40px] font-semibold lg:text-center">
          FIT’s & Groups (GIT) Leisure
        </h2>
        <div className="lg:mt-[40px] mt-[50px] grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center text-white">
            <img src={fit1} alt="" className="w-[56px] lg:w-[64px] mx-auto" />
            <h3 className="font-semibold text-xl lg:text-[24px] leading-[31px]">
              Top-notch bespoke tour packages
            </h3>
            <p className="text-[14px] lg:text-base lg:leading-[24px]">
              Customizable tour packages with no compromise in quality.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center text-white">
            <img src={fit2} alt="" className="w-[56px] lg:w-[64px] mx-auto" />
            <h3 className="font-semibold text-xl lg:text-[24px] leading-[31px]">
              On-spot Multilingual customer support
            </h3>
            <p className="text-[14px] lg:text-base lg:leading-[24px]">
              Providing prompt assistance for customers in their own language.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center text-white">
            <img src={fit3} alt="" className="w-[56px] lg:w-[64px] mx-auto" />
            <h3 className="font-semibold text-xl lg:text-[24px] leading-[31px]">
              Blend of luxury & <br /> economy
            </h3>
            <p className="text-[14px] lg:text-base lg:leading-[24px]">
              Deluxe Hotels and accommodation at pocket-friendly prices.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center text-white">
            <img src={fit4} alt="" className="w-[56px] lg:w-[64px] mx-auto" />
            <h3 className="font-semibold text-xl lg:text-[24px] leading-[31px]">
              From meet & greet <br /> to goodbye
            </h3>
            <p className="text-[14px] lg:text-base lg:leading-[24px]">
              Taking care of everything from arrival to departure.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center text-white">
            <img src={fit5} alt="" className="w-[56px] lg:w-[64px] mx-auto" />
            <h3 className="font-semibold text-xl lg:text-[24px] leading-[31px]">
              On-time inbound <br /> transfers
            </h3>
            <p className="text-[14px] lg:text-base lg:leading-[24px]">
              Timely delivery of quality <br /> services.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center text-white">
            <img src={fit6} alt="" className="w-[56px] lg:w-[90px] mx-auto" />
            <h3 className="font-semibold text-xl lg:text-[24px] leading-[31px]">
              Rated excellent by 97% customers
            </h3>
            <p className="text-[14px] lg:text-base lg:leading-[24px]">
              Seeing off happy and content customers since always.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLeisure;
