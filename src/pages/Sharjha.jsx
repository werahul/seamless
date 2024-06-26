import React from "react";
import { Contact, Footer, Navbar } from "../components";
import { breadCrumbsArrow } from "../assets/Images";
import { Link } from "react-router-dom";
import { main, v1, v2, v3, v4, v5, v6 } from "../assets/Images/SharjhaImages";

const Sharjha = () => {
  const destinations = [
    {
      image: v1,
      title: "Sharjah Desert Park",
      description:
        "Sharjah Desert Park: Edutainment hub with museum, wildlife, and farm. Must-visit for nature lovers!",
    },
    {
      image: v2,
      title: "Al Qasba",
      description:
        "Al Qasba is the perfect place to relax with kids and family, nestled right in the heart of Sharjah waterfront. ",
    },
    {
      image: v3,
      title: "Sharjah Aquarium",
      description:
        "Sharjah Aquarium: Dive into oceanic wonders with 20 large tanks showcasing diverse marine life.",
    },
    {
      image: v4,
      title: "Al Majaz Waterfront",
      description:
        "Al Majaz Waterfront: Sharjah's premier family destination, offering diverse activities, dining, concerts, and events.",
    },
    {
      image: v5,
      title: "Sharjah National Park",
      description:
        "Sprawling over a huge area of 630,000 sq. mt., the Sharjah National Park must be on your list when visiting Sharjah. ",
    },
    {
      image: v6,
      title: "Blue Souk, Sharjah",
      description:
        "Blue Souk: Iconic Sharjah market, ideal for souvenirs and Arabian bazaar vibes, also known as Central Souq.",
    },
    // Add more destination objects as needed
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />

      <section className="lg:px-20 px-5 lg:pt-40 pt-36 max-container">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <p className="font-poppins text-[20px] text-[#A6A6A6]">Home</p>
          </Link>
          <img src={breadCrumbsArrow} alt="" />
          <p className="font-poppins font-semibold text-[20px] text-[#006E99]">
            Sharjah
          </p>
        </div>
      </section>

      <section className="lg:flex lg:px-20 px-5 lg:pt-20 lg:pb-20 pt-14 pb-20 lg:space-x-16 max-container">
        <div className="lg:w-[50%]">
          <img src={main} alt="" className="w-full" />
        </div>
        <div className="lg:w-[50%] lg:mt-0 mt-10">
          <p className="font-poppins font-semibold lg:text-[48px] text-[40px] lg:leading-[56px] leading-[48px] text-[#FF7843]">
            Unveiling Sharjah: <br /> Arabia's Cultural Jewel
          </p>
          <p className="font-poppins lg:text-[16px] text-[14px] lg:leading-[26px] leading-[24px] tracking-[2%] text-justify lg:mt-8 mt-5  text-[#333333]">
            Situated on the Arabian Gulf coast, Sharjah is one of the seven
            emirates that make up the United Arab Emirates (UAE). Known as the
            "Cultural Capital of the UAE," Sharjah boasts a rich history,
            vibrant arts scene, and a commitment to preserving its cultural
            heritage. With its strategic location between Dubai and the other
            Northern Emirates, Sharjah serves as an important economic,
            cultural, and educational center in the region.
            <br /> <br />
            The emirate of Sharjah offers a diverse range of attractions and
            experiences for visitors. From its stunning coastline along the
            Arabian Gulf to its historic sites, museums, and traditional souks
            (markets), Sharjah provides a glimpse into the traditional Arabian
            way of life while embracing modernity.
          </p>
        </div>
      </section>

      <section className="lg:py-20 px-5 lg:px-0 max-container">
        <div className="flex items-center justify-center">
          <p className="font-poppins font-semibold lg:text-[48px] text-[40px] lg:leading-[62px] leading-[48px] lg:text-center text-[#FF7843] w-[700px]">
            Tourist Places & Attractions to Visit in Sharjah
          </p>
        </div>

        <div className="grid lg:grid-cols-3  grid-cols-1 gap-7 lg:px-20 px-0 lg:mt-14 mt-8 lg:mb-0 mb-20">
          {destinations.map((destination, index) => (
            <div className="relative" key={index}>
              <img src={destination.image} alt="" />
              <div className="font-poppins text-white absolute bottom-5 px-5">
                <p className="font-semibold text-[20px]">{destination.title}</p>
                <p className="text-[16px] leading-[23px] tracking-[2%] mt-2">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Sharjha;
