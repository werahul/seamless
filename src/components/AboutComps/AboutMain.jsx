import React from "react";
import { aboutMain } from "../../assets/Images/AboutImages";
import { Link } from "react-router-dom";
import { breadCrumbsArrow } from "../../assets/Images";

const AboutMain = () => {
  return (
    <div className="bg-[#f5f5f5] font-poppins">
      <section className=" lg:px-20 px-5 lg:pt-40 pt-32 pb-10 bg-[#F5F5F5] max-container">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <p className="font-poppins text-[20px] text-[#A6A6A6]">Home</p>
          </Link>
          <img src={breadCrumbsArrow} alt="" />
          <p className="font-poppins font-semibold text-[20px] text-[#006E99]">
            About Us
          </p>
        </div>
      </section>
      <div className="max-container px-5 lg:px-24 lg:pt-[77px] lg:pb-[124px] pb-20 flex-col lg:flex-row lg:items-center lg:space-x-9 lg:justify-center flex">
        <img
          src={aboutMain}
          alt=""
          className="w-full lg:w-[50%] mt-5 lg:mt-0"
        />
        <div className="space-y-4 lg:mt-0 mt-16">
          <h2 className="font-semibold  text-[40px] lg:text-[48px] text-[#ff7843]">
            About Us
          </h2>
          <p className="lg:text-[16px] text-[14px] leading-[24px] text-[#333333]  lg:leading-[26px]">
            Seamless DMC is your trusted partner for all your travel needs,
            providing tailored solutions for corporate events and leisure
            getaways. With our team boasting a collective experience of 15+
            years, we ensure every journey is seamless and memorable.
          </p>
          <p className="lg:text-[16px] text-[14px] leading-[24px] text-[#333333]  lg:leading-[26px]">
            Whether you're planning a corporate retreat or a family vacation, we
            have the expertise to create personalized itineraries that exceed
            expectations. From MICE packages designed for flawless event
            management to leisure packages offering unforgettable experiences,
            we cater to diverse preferences. <br /> <br /> Reach out to us at
            your convenience, and let us help you unlock unbeatable deals and
            unforgettable memories.
          </p>
          {/* <button className="border border-[#006E99] font-medium text-[#006E99] hover:text-white transition-all  hover:border-transparent bg-transparent hover:bg-[#006E99] px-4 py-3 rounded-full">
            Know More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
