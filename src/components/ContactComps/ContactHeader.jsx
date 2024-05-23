import React from "react";
import { Link } from "react-router-dom";
import { breadCrumbsArrow } from "../../assets/Images";

const ContactHeader = () => {
  return (
    <div className="contactHeaderBg font-poppins  h-[40vh] lg:h-[98vh] ">
      <div className="bg-black bg-opacity-70">
        <div className="max-container text-[40px] lg:text-[48px] text-white font-bold flex items-center justify-center h-[52vh] lg:h-[100vh]">
          <div>
            Contact Us
            <div className="flex space-x-2 justify-center items-center lg:mt-3 mb-6">
              <Link
                to="/"
                className="font-poppins font-semibold text-lg lg:text-[20px] text-[#777777] hover:underline"
              >
                Home
              </Link>
              <img src={breadCrumbsArrow} alt="" />
              <p className="font-poppins font-semibold text-white text-lg lg:text-[20px]">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
