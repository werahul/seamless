import React from "react";
import { Contact, Footer, Navbar } from "../components";
import { Cards } from "../components/Reusables";
import { rsAlKhaimahCards } from "../constants";
import { banner, bannerRS } from "../assets/Images/AbuDhabiImages";
import { Link } from "react-router-dom";

const RasAlKhaimah = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <div className="pt-12 px-24 font-poppins max-container">
        <div className="pt-28 pb-14">
          <p className="text-[#a6a6a6] text-[20px]">
            <Link to="/"> Home</Link> {">"}{" "}
            <span className="font-semibold text-[#006e99]">Ras Al Khaimah</span>
          </p>
        </div>
        <div className="pb-32 space-x-16 flex items-center justify-center">
          <img src={bannerRS} alt="" className="w-[636px]" />
          <div>
            <h1 className="text-[48px] leading-[62px] text-[#ff7843] font-semibold">
              The Mystique of <br /> Ras Al Khaimah
            </h1>
            <p className="mt-[7px]">
              Surrounded by the hazy Hajar Mountains, Ras Al Khaimah is the
              UAE’s northernmost emirate. From its golden beaches, lush
              mangroves, and terracotta deserts, to the towering Hajar mountains
              bordering Oman, this hidden gem offers a truly authentic Arabian
              experience. Located just 45 minutes from Dubai International
              Airport, it is well connected via the National Highway. Ras Al
              Khaimah offers light adventure activities, cultural experiences,
              world-class resorts, and a still undiscovered wilderness for the
              explorer in you.
            </p>
            <br />
            <p>
              Ras Al Khaimah has become a true trading and industrial hub with
              an economy that continues to expand and thrive. Growth has been
              exponential in Ras Al Khaimah in recent years, resulting in a
              free-trade zone, luxury beachfront resorts, high-end residential
              areas, and new leisure facilities.
            </p>
          </div>
        </div>
        <h3 className="font-semibold text-[48px] pb-16 leading-[62.48px] text-[#ff7843] text-center ">
          {" "}
          Tourist Places & Attractions <br /> to Visit in Ras Al Khaimah
        </h3>
        <Cards data={rsAlKhaimahCards} />
      </div>{" "}
      <Contact />
      <Footer />
    </div>
  );
};

export default RasAlKhaimah;
