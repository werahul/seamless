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

const Testimonials = () => {
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

  // Reorder testimonials array based on activeIndex
  const reorderedTestimonials = [
    testimonials[activeIndex],
    ...testimonials.slice(activeIndex + 1),
    ...testimonials.slice(0, activeIndex),
  ];

  return (
    <div className="bg-[#f4fcff] font-poppins">
      <div className="">
        <div className=" font-semibold partnersBg text-[40px] leading-[50px] lg:leading-normal lg:text-[48px] text-[#fff] text-center">
          <div className="max-container   lg:py-[84px] py-20 lg:px-24 px-5">
            <h2>Our Featured Partners</h2>
            <AutoScroll images={images} />
          </div>
        </div>
        <div className="max-container relative testimonials lg:py-[84px] py-20 lg:px-0 px-5 ">
          <h1 className="font-semibold text-[48px] text-[#ff7834] text-center">
            Our Happy Travel Agents
          </h1>
          <div className="flex mt-[44px] space-x-6 justify-center">
            {reorderedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-[500px] rounded-[8px] boxDrop bg-white ${
                  index === 1
                    ? "transform border scale-100 opacity-100"
                    : "transform scale-90 opacity-40"
                }`}
              >
                <div className="p-[19px] bg-white flex items-center space-x-6 w-full ">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-[69px] h-auto"
                  />
                  <div className="">
                    <h3 className="font-semibold text-[20px] text-[#001B33] opacity-80">
                      {testimonial.name}
                    </h3>
                    <p className="text-[14px] text-[#001B33]">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-[19px] rounded-t-[8px]">
                  <p className="text-[#333333]">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className=" top-80 left-[29%] absolute  text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            <img src={leftTest} alt="" className="w-10" />
          </button>

          <button
            onClick={handleNext}
            className=" top-80 right-[29%] absolute  text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            <img src={rightTest} alt="" className="w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
