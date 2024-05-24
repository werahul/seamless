import React, { useState } from "react";
import {
  comma,
  testimonial1,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  rightTest,
  leftTest,
  testimonial2,
  testimonial3,
} from "../assets/Images";
import AutoScroll from "./AutoScroll";

const TestimonialsMobile = () => {
  const images = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image: testimonial2,
      name: "Ricky Kolambe",
      designation: "TheTravelStop",
      quote:
        "Seamless DMC has been instrumental in crafting bespoke UAE itineraries for our clients. Their deep knowledge of the region and commitment to excellence make them a trusted ally in delivering unforgettable journeys.",
    },
    {
      image: testimonial1,
      name: "Sanket Bolinjkar",
      designation: "The Holiday Store",
      quote:
        "Working with Seamless DMC for UAE travel has been a game-changer! Their meticulous planning and seamless execution always ensure our clients have unforgettable experiences.",
    },
    {
      image: testimonial3,
      name: "Ashim Mandal",
      designation: "TravelMaker",
      quote:
        "Seamless DMC's expertise in Sharjah destinations is unmatched. Their attention to detail and personalized service consistently exceed our expectations, making them our go-to partner for luxury travel.",
    },
    // Add more testimonials as needed
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#f4fcff] font-poppins">
      <div className="">
        <div className=" font-semibold partnersBg text-[40px] leading-[50px] lg:leading-normal text-left lg:text-[48px] text-[#fff] lg:text-center">
          <div className="lg:max-container lg:py-[84px] py-20 lg:px-24 px-5">
            <h2 className="mb-10 lg:mb-0">Our Featured Partners</h2>
            <AutoScroll images={images} />
          </div>
        </div>
        <div className="max-container relative testimonials lg:py-[84px] py-20 lg:px-0 px-5 ">
          <h1 className="font-semibold lg:text-[48px] text-[40px] text-[#ff7834] lg:text-center">
            Our Happy <br /> Travel Agents
          </h1>
          <div className="flex mt-[44px] justify-center">
            <div
              className={`w-[500px] rounded-[8px] boxDrop bg-white transform border scale-100 opacity-100`}
            >
              <div className="p-[19px] bg-white flex items-center space-x-6 w-full">
                <img
                  src={testimonials[activeIndex].image}
                  alt=""
                  className="w-[69px] h-auto"
                />
                <div>
                  <h3 className="font-semibold text-[20px] text-[#001B33] opacity-80">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-[14px] text-[#001B33]">
                    {testimonials[activeIndex].designation}
                  </p>
                </div>
              </div>
              <div className="bg-white p-[19px] rounded-t-[8px]">
                <p className="text-[#333333]">
                  {testimonials[activeIndex].quote}
                </p>
              </div>
            </div>
          </div>
          <div className="flex  justify-center mt-6">
            <button
              onClick={handlePrev}
              className="text-gray-800 absolute left-[-3%] top-[52%] font-bold py-2 px-4"
            >
              <img src={leftTest} alt="Previous" className="w-10" />
            </button>
            <button
              onClick={handleNext}
              className="text-gray-800 absolute right-[0%] top-[52%] font-bold py-2 px-4"
            >
              <img src={rightTest} alt="Next" className="w-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsMobile;
