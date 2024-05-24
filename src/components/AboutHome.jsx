import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { aboutLocation } from "../assets/Images";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const AboutHome = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;

    gsap.to("#rect", {
      duration: 50,
      ease: "power1.inOut",
      autoRotate: true,
      motionPath: {
        path: "#mainPath",
        start: 0,
        end: 0.95,
      },
      scrollTrigger: {
        trigger: "#rect",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.7,
      },
    });
  }, []);

  return (
    <div className="lg:px-24 px-5 lg:pt-[130px] pt-[80px] pb-[160px] lg:pb-[130px] relative bg-[#f5f5f5] font-poppins">
      <div className=" max-container">
        <div className="hidden lg:block absolute">
          <img
            src={aboutLocation}
            alt=""
            className="locationIcon absolute right-[130px] top-[-40px] w-[29px]"
          />
          <svg
            width="1205"
            // height="664"
            viewBox="0 0 1367 664"
            fill="none"
            className="ml-12"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "",
              top: "-40px",
              right: "0px",
              zIndex: "0",
            }}
          >
            <path
              id="mainPath"
              d="M1201.34 1C1180.34 35.4599 1274.15 109.173 1237.35 129.486C1138.34 184.13 153.5 77.5 38.7653 217.605C-98.6903 385.455 184.001 426.177 182.5 428"
              stroke="#006E99"
              strokeOpacity="0.25"
              strokeWidth="2"
              strokeDasharray="12 12"
            />
            <g id="rect">
              <circle cx="0" cy="0" r="10" fill="#FF7843" />
            </g>
          </svg>
        </div>
        <div
          className="flex lg:flex-row flex-col items-start lg:space-x-10 pt-0 lg:space-y-0 justify-center"
          // style={{ zIndex: "2" }}
        >
          <h2 className="font-semibold lg:text-[56px] text-[40px] text-[#ff7843]">
            About Us
          </h2>
          <div className="lg:w-[636px] lg:space-y-2 space-y-4 lg:mt-0 mt-4">
            <p className="text-[14px] lg:text-[16px] ">
              Seamless DMC is your global travel partner, offering tailored
              solutions across diverse destinations. With trusted partnerships,
              we secure unbeatable deals and unforgettable experiences. Trusted
              by millions, we provide personalized service with honesty and
              transparency. From Dubai to Thailand, Europe to Singapore, we
              cater to all travel needs.
            </p>
            <p className="text-[14px] lg:text-[16px] ">
              Whether you are planning a romantic honeymoon, a family vacation,
              or a corporate retreat, we have the expertise to create a
              personalized itinerary that exceeds your expectations. Your
              comfort and satisfaction are our top priorities, and we go the
              extra mile to ensure every aspect of your journey is Seamless and
              Memorable.
            </p>
            <div className="border-r absolute z-40 w-fit border-[#FF7843] rounded-br-[4px] p-1 border-b ">
              <Link to="/about-us">
                <button className="hover:text-white text-[#FF7843] font-medium border border-[#FF7843] hover:border-[#FF7843] bg-transparent transition-all z-50 hover:bg-[#FF7843] py-4 px-8 rounded-[4px]">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
