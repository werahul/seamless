import React, { useState } from "react";
import {
  visa,
  linkedin,
  facebook,
  mastercard,
  paypal,
  instagram,
  X,
  footerLogo,
} from "../assets/Images";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getAccordionIcon = (index) => {
    return activeIndex === index ? "-" : "+";
  };

  return (
    <div className="">
      <div className="bg-[#f5f5f5] px-5 lg:px-20 font-poppins lg:pt-[70px] pt-[20px] pb-5 lg:border-t lg:border-[#FF7843] mt-20">
        <div className="max-container flex  flex-col lg:flex-row items-start  justify-between lg:space-y-0 space-y-5 w-full">
          <div className="border-b border-[#333333] lg:hidden block"></div>
          <div className="lg:hidden block w-[225px] ">
            <img
              src={footerLogo}
              alt=""
              className="lg:w-[270px] w-[203px] -mt-14 -ml-2 lg:mb-0 mb-2"
            />
            <p className="font-poppins text-[16px] lg:leading-[23px] leading-[26px] ">
              {" "}
              <span className="font-semibold">Dubai Head Office:</span> <br />
              Seamless Tourism LLC Office No 115, Zeenah building, Port Saeed -
              Deira, Dubai - UAE
            </p>
          </div>
          <div className="lg:hidden block w-full">
            <div
              className="flex items-center justify-between w-[100%]"
              onClick={() => toggleAccordion(1)}
            >
              <h4 className="font-semibold text-[24px] text-[#ff7843] flex justify-between items-center">
                <span>Quick Links</span>
              </h4>
              <p className="text-[30px] text-[#ff7843]">
                {getAccordionIcon(1)}
              </p>
            </div>
            <ul
              className={`mt-2 space-y-1 ${
                activeIndex === 1 ? "block" : "hidden"
              }`}
            >
              {/* <li>
                <Link to="/" className="hover:text-[#ff7843] transition-all">
                  Home
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/packages"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Packages
                </Link>
              </li> */}
              <li>
                <Link
                  to="/mice"
                  className="hover:text-[#ff7843] transition-all"
                >
                  MICE
                </Link>
              </li>
              <li>
                <Link
                  to="/leisure"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Leisure
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block w-full">
            <div
              className="flex items-center justify-between w-[100%]"
              onClick={() => toggleAccordion(2)}
            >
              <h4 className="font-semibold text-[24px] text-[#ff7843] flex justify-between items-center">
                <span>Destinations</span>
              </h4>
              <p className="text-[30px] text-[#ff7843]">
                {getAccordionIcon(2)}
              </p>
            </div>
            <ul
              className={`mt-2 space-y-1 ${
                activeIndex === 2 ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/Abu-Dhabi"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Abu Dhabi
                </Link>
              </li>
              <li>
                <Link
                  to="/Dubai"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Dubai
                </Link>
              </li>
              <li>
                <Link
                  to="/Ras-Al-Khaimah"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Ras Al Khaimah
                </Link>
              </li>
              <li>
                <Link
                  to="/Sharjah"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Sharjah
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block w-full">
            <div
              className="flex items-center justify-between w-[100%]"
              onClick={() => toggleAccordion(3)}
            >
              <h4 className="font-semibold text-[24px] text-[#ff7843] flex justify-between items-center">
                <span>About Us</span>
              </h4>
              <p className="text-[30px] text-[#ff7843]">
                {getAccordionIcon(3)}
              </p>
            </div>
            <ul
              className={`mt-2 space-y-1 ${
                activeIndex === 3 ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#ff7843] transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden  w-[260px]  ">
            <img src={footerLogo} alt="" className="w-[270px] -mt-14 -ml-6" />
            <p className="font-poppins text-[16px] leading-[27px] ">
              {" "}
              <span className="font-semibold">Dubai Head Office:</span> <br />
              Seamless Tourism LLC Office No. 115, Zeenah building Port Saeed -
              Deira, Dubai - UAE
            </p>
          </div>
          <div className="lg:block hidden">
            <h4 className="font-semibold text-[24px] text-[#ff7843] ">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-2">
              {/* <li>
                <Link to="/" className="hover:text-[#ff7843] transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Packages
                </Link>
              </li> */}
              <li>
                <Link
                  to="/mice"
                  className="hover:text-[#ff7843] transition-all"
                >
                  MICE
                </Link>
              </li>
              <li>
                <Link
                  to="/leisure"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Leisure
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <h4 className="font-semibold text-[24px] text-[#ff7843] ">
              Destinations
            </h4>
            <ul className="mt-5 space-y-2">
              <li>
                <Link
                  to="/Abu-Dhabi"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Abu Dhabi
                </Link>
              </li>
              <li>
                <Link
                  to="/Dubai"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Dubai
                </Link>
              </li>
              <li>
                <Link
                  to="/Ras-Al-Khaimah"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Ras Al Khaimah
                </Link>
              </li>
              <li>
                <Link
                  to="/Sharjah"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Sharjah
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <h4 className="font-semibold text-[24px] text-[#ff7843] ">
              About Us
            </h4>
            <ul className="mt-5 space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#ff7843] transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#ff7843] transition-all"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-b border-[#333333] lg:hidden block"></div>
          <div>
            <h4 className="font-semibold text-[24px] text-[#ff7843] ">
              Accepted Cards
            </h4>
            <div className="flex my-5  items-center space-x-3">
              <img src={visa} alt="" className="w-[50px] lg:w-[58px] " />
              <img src={mastercard} alt="" className="w-[38px] lg:w-[46px] " />
              <img src={paypal} alt="" className="w-[92px] lg:w-[100px]" />
            </div>
            <div>
              <h4 className="font-semibold text-[24px] text-[#ff7843] ">
                Social Media
              </h4>
              <div className="flex mt-2 items-center space-x-3">
                <img src={linkedin} alt="" className="w-[36px] " />
                <img src={instagram} alt="" className="w-[36px] " />
                <img src={facebook} alt="" className="w-[36px]" />
                <img src={X} alt="" className="w-[36px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[50px] lg:px-0 lg:py-0 px-5 py-2 bg-[#006E99] text-white flex items-center justify-center lg:text-center text-left font-poppins lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] lg:mt-8">
        © Copyright 2024. Seamless Tourism LLC, Dubai - UAE. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
