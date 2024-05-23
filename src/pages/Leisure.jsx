import React from "react";
import { ChooseLeisure, Contact, Footer, Navbar } from "../components";
import { breadCrumbsArrow } from "../assets/Images";
import { Link } from "react-router-dom";
import {
  le1,
  le2,
  le3,
  le4,
  main,
  le5,
  le6,
  le7,
  le8,
} from "../assets/Images/LeisureImages";

const Leisure = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <section className="px-20 pt-44 max-container">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <p className="font-poppins text-[20px] text-[#A6A6A6]">Home</p>
          </Link>
          <img src={breadCrumbsArrow} alt="" />
          <p className="font-poppins font-semibold text-[20px] text-[#006E99]">
            Leisure
          </p>
        </div>
      </section>
      <section className="flex px-20 pt-16 pb-32 space-x-20 max-container">
        <div className="w-[50%]">
          <img src={main} alt="" />
        </div>
        <div className="w-[50%]">
          <p className="font-poppins font-semibold text-[48px] leading-[56px] text-[#FF7843]">
            Are you a Travel <br />
            Business Owner?
          </p>
          <p className="font-poppins text-[16px] leading-[26px] tracking-[2%] text-justify mt-8 text-[#303030]">
            Established in 2008, Seamless DMC stands as the foremost UAE
            Destination Management Company. With a legacy of excellence spanning
            over a decade, we specialize in delivering unparalleled FITs,
            Groups, and MICE (Meetings, Incentives, Conferences, and Events)
            solutions to clients worldwide. Our commitment to world-class
            service and meticulous attention to detail ensure unforgettable
            experiences for every traveler, setting the standard for excellence
            in the industry.
          </p>
        </div>
      </section>
      <div className="toursBg h-auto pt-28 pb-24 ">
        <div className="max-container">
          <p className="font-poppins font-semibold text-[48px] text-[#ffffff] text-center ">
            Top Attractions & Tours
          </p>
          <div className="horiScroll ">
            <div className="horiScroll2 bg-white h-[550px] w-[420px]  p-4 rounded-[4.5px] ">
              <img src={le1} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Burj Khalifa
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Ever been on top of the world? Experience a spellbinding view of
                Dubai from the world’s tallest architectural edifice with over
                160+ stories – Burj Khalifa, which has already outdone most of
                the World Records like tallest building, tallest free-standing
                structure, and highest observation deck, etc.
              </p>
            </div>
            <div className="horiScroll2 bg-white h-[550px] w-[420px] p-4 rounded-[4.5px] ">
              <img src={le2} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Ferrari World
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Experience speed and excitement at Ferrari World Abu Dhabi, the
                world's first Ferrari-branded theme park. Feel the rush on rides
                like Formula Rossa, and explore exhibits showcasing the history
                of the legendary car manufacturer.
              </p>
            </div>
            <div className="horiScroll2 bg-white h-[550px] w-[420px] p-4 rounded-[4.5px] ">
              <img src={le3} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Dubai Parks & Resorts
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Step into the world of fun and excitement, home to endless
                entertainment. Dubai Parks and Resorts are Middle East’s largest
                integrated leisure and theme park destination located on Sheikh
                Zayed Road in Dubai. Spread over 25 million square feet with
                three theme parks and one waterpark.
              </p>
            </div>
            <div className="horiScroll2 bg-white h-[550px] w-[420px] p-4 rounded-[4.5px] ">
              <img src={le4} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Louvre Abu Dhabi
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Discover art and culture at Louvre Abu Dhabi, a stunning
                architectural marvel. Explore captivating exhibits showcasing
                artworks from around the world, spanning millennia of human
                creativity and heritage.
              </p>
            </div>
            <div className="horiScroll2 bg-white h-[550px] w-[420px] p-4 rounded-[4.5px] ">
              <img src={le5} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                BAPS Hindu Mandir
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Experience spiritual tranquility at BAPS Hindu Mandir, a
                masterpiece of traditional Indian architecture. Admire intricate
                carvings, participate in devotional rituals, and find inner
                peace amidst serene surroundings.
              </p>
            </div>
            <div className="horiScroll2 bg-white h-[550px] w-[420px] p-4 rounded-[4.5px] ">
              <img src={le6} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Museum of the Future
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Step into the future at the Museum of the Future, where
                innovation and imagination collide. Immerse yourself in
                interactive exhibits, exploring groundbreaking technologies and
                envisioning the possibilities of tomorrow.
              </p>
            </div>
            <div className="horiScroll2 bg-white h-[550px] w-[420px] p-4 rounded-[4.5px] ">
              <img src={le7} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Yas Waterworld 
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Dive into excitement at Yas Waterworld, Abu Dhabi's premier
                waterpark. With over 40 thrilling rides and attractions,
                including the world's first and largest hydromagnetic - powered
                tornado waterslide, it's a splash-tastic adventure for all.
              </p>
            </div>
            <div className="horiScroll2 bg-white h-[550px] w-[420px] p-4 rounded-[4.5px] ">
              <img src={le8} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Desert Safari
              </p>
              <p className=" font-poppins  text-[16px] leading-[26px] mt-3">
                Embark on an unforgettable adventure with our Desert Safari
                experience. Explore the majestic dunes, enjoy a traditional
                Arabian feast, and witness cultural performances under the
                stars.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ChooseLeisure />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Leisure;
