import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { arrowRight, leisureImage, miceImage } from "../assets/Images";
import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

const ExpertiseHome = () => {
  // React.useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // ---------- selecting all horizontal sections
  //     const horizontalSections = gsap.utils.toArray(".horizontal-section");

  //     // ---------- applying horizontal scroll animation
  //     gsap.to(horizontalSections, {
  //       xPercent: -100 * (horizontalSections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: "#container",
  //         pin: true,
  //         start: "top 20%",
  //         scrub: 1,
  //         snap: 1 / (horizontalSections.length - 1),
  //         end: () => "+=" + document.querySelector("#container").offsetWidth,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="expertiseBg bg-opacity-80 font-poppins overflow-hidden">
      <div className="max-container lg:px-16 px-5 lg:pt-[104px] pt-[80px] ">
        <h2 className="text-white font-semibold text-center lg:text-[48px] pb-[54px] text-[40px]">
          Our Expertise
        </h2>
        <div className="flex flex-col lg:flex-row pb-32 space-y-10 lg:space-y-0 lg:space-x-10">
          {/* ---------- section 02 ---------- */}
          <div className=" ">
            <div className=" flex flex-col-reverse lg:flex-row items-center rounded-[4px]  lg:space-y-0 lg:space-x-10 p-[36px] lg:p-[30px] bg-white">
              <img
                src={miceImage}
                alt=""
                className="lg:w-[273px] object-cover rounded-[2px] lg:h-[321px]"
              />
              <div>
                <h3 className="font-poppins font-semibold text-xl lg:text-[24px] my-3">
                  MICE Packages
                </h3>
                <p className="text-[12px] lg:text-[16px] pb-4">
                  Seamlessly organize your meetings, incentives, conferences,
                  and exhibitions with our comprehensive MICE packages, tailored
                  to suit your corporate needs and objectives.
                </p>
                <p className="text-[#ff7843] text-[10px] lg:text-base mb-5 lg:mb-0 flex cardLink items-center space-x-2">
                  <Link to="/mice" className="flex items-center">
                    {" "}
                    Learn More{" "}
                    <img
                      src={arrowRight}
                      alt=""
                      className="ml-2 w-[12px] lg:w-[18px]"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className=" flex flex-col-reverse lg:flex-row lg:space-x-10 items-center rounded-[4px] p-[30px] bg-white">
              <img
                src={leisureImage}
                alt=""
                className="lg:w-[273px] object-cover lg:h-[321px]"
              />
              <div>
                <h3 className="font-poppins font-semibold text-xl lg:text-[24px] my-3">
                  Leisure Packages
                </h3>
                <p className="text-[12px] lg:text-[16px] pb-4">
                  Embark on unforgettable leisure experiences with our
                  meticulously curated packages, offering an array of activities
                  and destinations to fulfill all your travel desires.
                </p>
                <p className="text-[#ff7843] text-[10px] lg:text-base flex mb-5 lg:mb-0 cardLink items-center space-x-2">
                  <Link to="/leisure" className="flex items-center">
                    {" "}
                    Learn More{" "}
                    <img
                      src={arrowRight}
                      alt=""
                      className="ml-2 w-[12px] lg:w-[18px]"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseHome;
