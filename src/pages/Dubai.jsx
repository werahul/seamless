import React from "react";
import { Contact, Footer, Navbar } from "../components";
import { Cards } from "../components/Reusables";
import { dubaiCards } from "../constants";
import { banner, bannerD } from "../assets/Images/AbuDhabiImages";
import { Link } from "react-router-dom";

const Dubai = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <div className="pt-12 px-24 font-poppins max-container">
        <div className="pt-28 pb-14">
          <p className="text-[#a6a6a6] text-[20px]">
            <Link to="/"> Home</Link> {">"}{" "}
            <span className="font-semibold text-[#006e99]">Dubai</span>
          </p>
        </div>
        <div className="pb-32 space-x-16 flex items-center justify-center">
          <img src={bannerD} alt="" className="w-[636px]" />
          <div>
            <h1 className="text-[48px] leading-[62px] text-[#ff7843] font-semibold">
              Habibi, Come to <br /> Dubai.
            </h1>
            <p className="mt-[7px]">
              Dubai, known for luxurious shopping, ultramodern architecture, and
              a lively nightlife scene, is a bustling microcosm peacefully
              shared by cultures from all corners of the world. With year-round
              sunshine, intriguing deserts, beautiful beaches, luxurious hotels
              and shopping malls, fascinating heritage attractions, and a
              thriving business community, Dubai receives millions of leisure
              and business visitors each year from around the world.
            </p>
            <br />
            <p>
              As the business capital of the Middle East, Dubai has a track
              record of successfully hosting world-class business events. Always
              a trading society, it has brought its ‘open doors’ spirit into the
              modern world, attracting foreign business and investment through
              free-trade zones, zero income tax and VAT, and a favorable
              corporate taxation policy. They, therefore, contribute towards
              optimum MICE services in Dubai.
            </p>
          </div>
        </div>
        <h3 className="font-semibold text-[48px] pb-16 leading-[62.48px] text-[#ff7843] text-center ">
          {" "}
          Tourist Places & Attractions <br /> to Visit in Dubai
        </h3>
        <Cards data={dubaiCards} />
      </div>{" "}
      <Contact />
      <Footer />
    </div>
  );
};

export default Dubai;
