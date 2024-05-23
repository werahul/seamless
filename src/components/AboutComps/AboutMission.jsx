import React from "react";
import { eyeIcon, missionIcon } from "../../assets/Images";

const AboutMission = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-container font-poppins px-5 lg:px-24 pb-[80px] lg:pb-[100px]">
        <div className="bg-[#ff7843] ">
          <div className="space-y-7 p-6 lg:p-16">
            <div className="flex lg:space-x-5 space-x-3 lg:mt-0 mt-8">
              <img src={eyeIcon} alt="" className="lg:w-auto w-[50px]"/>
              <h2 className="text-white text-[36px] lg:text-[48px] font-semibold ">
                Our Vision
              </h2>
            </div>

            <p className="tracking-[2%] text-white text-[16px] lg:leading-[26px] leading-[26px] font-normal">
              We aspire to emerge as the epitome of trust in the travel
              industry, renowned globally for our unwavering commitment to
              delivering unforgettable experiences. Our vision is to see our
              clients not just travel, but live, breathe, and savor every moment
              of their journeys with us.
            </p>
            {/* <p className="tracking-[2%] text-white">
              With passion, innovation, integrity, commitment, and teamwork at
              the core of our value system, we are transcending beyond mere
              travel arrangements and crafting transformative experiences. We
              feel honoured when our esteemed clientele says that we have grown
              far beyond mere lodging and are now serving all the needs related
              to tours, travel, transportation, stay, transfers, visas and
              events.
            </p> */}
          </div>
        </div>
        <div className="bg-[#006E99] space-y-7 p-6 lg:p-16">
          <div className="flex lg:space-x-5 space-x-3 lg:mt-0 mt-8">
            <img src={missionIcon} alt="" />
            <h2 className="text-white text-[36px] lg:text-[48px] font-semibold ">
              Our Mission
            </h2>
          </div>
          <p className="tracking-[2%] text-white text-[16px] lg:leading-[26px] leading-[26px] font-normal">
            Our mission is to redefine the travel experience by fostering
            genuine connections with our clients, grounded in trust,
            transparency, and personalized service. With meticulous attention to
            detail, we curate tailor-made journeys that transcend expectations,
            delivering unparalleled value and unforgettable memories with every
            adventure.
          </p>
          {/* <p className="tracking-[2%] text-white">
            We give personalized attention to understand each client’s desires
            and expectations. Every aspect of our crafted trips is infused with
            precision and excellence. From the smallest intricacies to the
            grandest adventures, we customize each journey to encapsulate a
            tapestry of exclusivity. Moreover, our utmost priority is that our
            clients receive not only tailor-made trips full of unique
            experiences but also the best value for money.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
