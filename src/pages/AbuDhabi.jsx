import React from "react";
import { Contact, Footer, Navbar } from "../components";
import { Cards } from "../components/Reusables";
import { abudhabiCards } from "../constants";
import { banner } from "../assets/Images/AbuDhabiImages";
import { Link } from "react-router-dom";

const AbuDhabi = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <div className="pt-12 px-24 font-poppins max-container">
        <div className="pt-28 pb-14">
          <p className="text-[#a6a6a6] text-[20px]">
            <Link to="/"> Home</Link> {">"}{" "}
            <span className="font-semibold text-[#006e99]">Abu Dhabi</span>
          </p>
        </div>
        <div className="pb-32 space-x-16 flex items-center justify-center">
          <img src={banner} alt="" className="w-[636px]" />
          <div>
            <h1 className="text-[48px] leading-[62px] text-[#ff7843] font-semibold">
              Mesmerising <br /> Abu Dhabi
            </h1>
            <p className="mt-[7px]">
              The capital of the UAE, Abu Dhabi presents a fascinating mixture
              of tradition and progression. It brings together old-world charm
              and cosmopolitan urbanizes in a clean and safe environment. The
              attractive, green, and distinctly Arab city, strives to preserve
              and promote the rich cultural and historic heritage of the
              emirate, recognizing the key role it has to play in shaping the
              future of UAE. The city aims for measured growth with a strong
              focus on environmental protection, development of eco-cities, and
              enhancement of the local and global culture and arts scene.
            </p>
            <br />
            <p>
              Abu Dhabi has been purpose-built for business success and is
              renowned for its successful and competitive business travel
              industry. Abu Dhabi, offers world-class business tourism
              facilities, the benefits of free-zone areas, and the growth of
              diplomatic and government-related traffic.
            </p>
          </div>
        </div>
        <h3 className="font-semibold text-[48px] pb-16 leading-[62.48px] text-[#ff7843] text-center ">
          {" "}
          Tourist Places & Attractions <br /> to Visit in Abu Dhabi
        </h3>
        <Cards data={abudhabiCards} />
      </div>{" "}
      <Contact />
      <Footer />
    </div>
  );
};

export default AbuDhabi;
