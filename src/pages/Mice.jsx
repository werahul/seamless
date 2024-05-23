import React from "react";
import { Contact, Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { breadCrumbsArrow, uploadIcon } from "../assets/Images";
import {
  mice1,
  mice2,
  mice1_1,
  mice1_2,
  mice1_3,
  mice1_4,
  mice1_5,
  mice1_6,
} from "../assets/Images/MiceImages";

const Mice = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <div className="max-container ">
        {/*<section>
        <div className="lg:pt-0 pt-24 bg-[#F5F5F5] ">
          <div className="miceBg lg:h-[100vh] h-[200px] flex items-center justify-center">
            <div className="">
              <h1 className="font-bold lg:text-[56px] text-[32px] text-white">
                MICE
              </h1>
              <div className="flex space-x-2 justify-center items-center lg:mt-3 mb-6">
                <Link
                  to="/"
                  className="font-poppins font-semibold text-[20px] text-[#777777] hover:underline"
                >
                  Home
                </Link>
                <img src={breadCrumbsArrow} alt="" />
                <p className="font-poppins font-semibold text-white text-[20px]">
                  MICE
                </p>
              </div>
            </div>
          </div>
        </div>
  </section>*/}
        <section className="px-20 pt-36 bg-[#F5F5F5]">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <p className="font-poppins text-[20px] text-[#A6A6A6]">Home</p>
            </Link>
            <img src={breadCrumbsArrow} alt="" />
            <p className="font-poppins font-semibold text-[20px] text-[#006E99]">
              MICE
            </p>
          </div>
        </section>
        <section className="px-20 py-20 bg-[#F5F5F5]">
          <p className="font-poppins font-semibold text-[48px] leading-[56px] text-[#FF7843]">
            MICE - Meetings, Incentives, Conferences and Exhibitions 
          </p>
          <p className="font-poppins text-[16px] leading-[26px] tracking-[2%] text-justify mt-8 text-[#303030]">
            Seamless DMC offers exceptional MICE solutions in the UAE, with a
            focus on Abu Dhabi and Dubai. <br /> <br />
            The UAE is the perfect destination for incentive trips and
            team-building activities. Our experienced team fosters a sense of
            corporate belonging, facilitates group bonding, and cultivates
            problem-solving and leadership skills. <br /> <br />
            As weddings continue to evolve, so do we. Our wedding services cater
            to every aspect of this dynamic industry, ensuring a seamless and
            personalized experience from hospitality to logistics. <br /> <br />
            For schools and colleges seeking inbound travel solutions, we
            provide comprehensive services that go the extra mile. We specialize
            in catering to groups and corporate associates, enriching their
            experiences and broadening horizons. <br /> <br />
            From sports enthusiasts to eco-tourism seekers, we cater to all
            types of tourists. Whether it's a cultural exploration or an
            adrenaline-pumping adventure, we masterfully plan trips tailored to
            every individual's needs.
          </p>
        </section>

        <section className="px-20 py-20 bg-[#006E99] grid grid-cols-2 gap-10">
          <div className="bg-white h-[570px] p-8 rounded-[4.5px] ">
            <img src={mice1} alt="" />
            <p className=" font-poppins font-semibold text-[24px]  text-[#006E99] mt-4">
              Conference Planning
            </p>
            <p className=" font-poppins  text-[18px] leading-[28px] mt-2">
              From the concept through the creative delivery of the event, our
              team presents the most viable options for your conferences. We
              work with the company to deliver a memorable event for the
              delegates along with an instantly visible ROI.
            </p>
          </div>
          <div className="bg-white h-[570px] p-8 rounded-[4.5px]">
            <img src={mice2} alt="" />
            <p className=" font-poppins font-semibold text-[24px]  text-[#006E99] mt-4">
              Exhibitions
            </p>
            <p className=" font-poppins  text-[18px] leading-[28px] mt-2">
              Our in-house team designs creative structures to showcase your
              company at international exhibitions. We plot out the
              possibilities within the exhibition space provided and ensure
              quality with cost-effective options.
            </p>
          </div>
        </section>

        <section className="px-20 pt-32 pb-32 bg-[#F5F5F5]">
          <div className="flex">
            <div className="w-[50%]">
              <p className="font-poppins font-semibold text-[48px] leading-[56px] text-[#FF7843]">
                Corporate Events Planning
              </p>
            </div>
            <div className="w-[60%]">
              <p className="font-poppins text-[16px] leading-[26px] tracking-[2%] text-[#333333]">
                From initial planning to flawless execution, our dedicated team
                ensures your corporate events are a resounding success. We
                meticulously negotiate the best deals with service providers,
                guaranteeing maximum value for your budget. With our attention
                to detail, we handle all aspects of event management, from venue
                selection to logistics coordination. Trust us to deliver an
                unparalleled experience that reflects positively on your brand.
                Let us elevate your corporate events to new heights with our
                commitment to excellence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-14">
            <div className="bg-white h-[475px] p-4 rounded-[4.5px] ">
              <img src={mice1_1} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Corporate Events
              </p>
              <p className=" font-poppins  text-[16px] leading-[24px] mt-3">
                From the initial pitch to execution, our experts plan corporate
                events with the highest level of professionalism. We assist you
                to get the best deals from top-quality service providers and
                achieve the highest standards of service delivery.
              </p>
            </div>
            <div className="bg-white h-[475px] p-4 rounded-[4.5px] ">
              <img src={mice1_2} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                On-site Planning
              </p>
              <p className=" font-poppins  text-[16px] leading-[24px] mt-3">
                Incentives & Conferences by Seamless DMC offers on-site
                management helping you to perfect every single detail of your
                event. From registration to hosting, we make sure your event
                completes in perfection.
              </p>
            </div>
            <div className="bg-white h-[475px] p-4 rounded-[4.5px] ">
              <img src={mice1_3} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Creative Touch
              </p>
              <p className=" font-poppins  text-[16px] leading-[24px] mt-3">
                From brainstorming the concept to implementing your corporate
                message in the most interesting method our team of
                experts strives to enhance your event with creative themes.
              </p>
            </div>
          </div>

          <div className="flex mt-24">
            <div className="w-[40%]">
              <p className="font-poppins font-semibold text-[48px] leading-[56px] text-[#FF7843]">
                Incentive Programs
              </p>
            </div>
            <div className="w-[60%]">
              <p className="font-poppins text-[16px] leading-[26px] tracking-[2%] text-[#333333]">
                Elevate your corporate events with our engaging team-building
                activities, designed to entertain and inspire your delegates.
                Our theme-based incentive programs add sophistication and
                excitement to events across Dubai, Abu Dhabi, and the UAE. From
                interactive challenges to curated themes, we ensure every aspect
                of your program leaves a lasting impression. Let us enhance your
                corporate gatherings with our innovative approach and attention
                to detail. Experience unforgettable moments and achieve your
                business objectives with our tailored incentive programs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="bg-white h-[475px] p-4 rounded-[4.5px] ">
              <img src={mice1_4} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Incentive Programs
              </p>
              <p className=" font-poppins  text-[16px] leading-[24px] mt-3">
                Our team consults, conceptualizes, and delivers high-touch
                incentive programs to some of the top international brands,
                intertwining the touch of local Arabia with the preferences of
                your guests.
              </p>
            </div>
            <div className="bg-white h-[475px] p-4 rounded-[4.5px] ">
              <img src={mice1_5} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Food and Beverage
              </p>
              <p className=" font-poppins  text-[16px] leading-[24px] mt-3">
                Our incentives & Conferences caters to the need of all your
                delegates, arranging a gamut of world cuisines from authentic
                Arabic cuisine to Far East Asian and Modern European dishes.
                Experience dining like never before.
              </p>
            </div>
            <div className="bg-white h-[475px] p-4 rounded-[4.5px]">
              <img src={mice1_6} alt="" />
              <p className=" font-poppins font-semibold text-[22px]  text-[#006E99] mt-5">
                Destination Themes
              </p>
              <p className=" font-poppins  text-[16px] leading-[24px] mt-3">
                We help incorporate your annual corporate message into a 4-night
                program or create a destination theme for your incentive program
                for the year. We go that extra mile to ensure perfection in all
                your corporate events.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section>
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Mice;
