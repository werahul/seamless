import React from "react";
import { person1, person2 } from "../../assets/Images/AboutImages";
import {
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
} from "../../assets/Images";
import AutoScroll from "../AutoScroll";

const personData = [
  {
    id: 1,
    pimage: person1,
    name: "Lorem Ipsum",
    designation: "CEO",
  },
  {
    id: 2,
    pimage: person2,
    name: "Lorem Ipsum",
    designation: "CEO",
  },
  {
    id: 3,
    pimage: person1,
    name: "Lorem Ipsum",
    designation: "CEO",
  },
  {
    id: 4,
    pimage: person2,
    name: "Lorem Ipsum",
    designation: "CEO",
  },
];

const PersonCard = ({ pimage, name, designation }) => {
  return (
    <div className="relative w-[300px] h-[450px] lg:w-auto lg:h-[450px]">
      <img src={pimage} alt="" className="w-[300px] lg:w-auto h-auto" />
      <div className="pt-[16px] ml-3 absolute w-[90%]  z-40 bg-white -mt-10 shadow-xl pb-[10px] text-center rounded-[8px]">
        <h3 className="font-semibold text-[24px] text-[#FF7843]">{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

const OurTeam = () => {
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

  return (
    <div className="bg-[#f5f5f5] font-poppins   pb-[80px] lg:pb-[124px]">
      <div className="">
        <div className="">
          <section className="px-5 lg:px-24 max-container">
            <h2 className="text-[40px] leading-[48px] lg:leading-normal lg:text-[48px] font-semibold text-[#ff7843] lg:text-center">
              Our Team & Guide
            </h2>
            <div className="grid mt-9 gap-y-0 w-full overflow-x-scroll lg:overflow-x-hidden lg:gap-y-0 gap-x-80 lg:gap-x-6  grid-cols-4">
              {personData.map((person) => (
                <PersonCard key={person.id} {...person} />
              ))}
            </div>
          </section>

          <div className=" font-semibold partnersBg text-[40px] leading-[50px] lg:leading-normal lg:text-[48px] text-[#fff] text-center mt-[50px]">
            <div className="max-container    lg:py-[84px] py-20 lg:px-24 px-5">
              <h2 className="font-poppins font-semibold pb-10 lg:text-center text-left text-[40px] leading-[48px] lg:leading-normal">
                Our Featured Partners
              </h2>
              <AutoScroll images={images} />
            </div>
          </div>

          <section className="px-5 lg:px-24 mt-14 max-container">
            <div className="pt-[40px] lg:pt-[70px] pb-[0px] lg:pb-[0px] overflow-x-auto">
              <div className="grid gap-y-5 lg:gap-y-0 grid-cols-4 lg:grid-cols-4 gap-x-[36px] min-w-max">
                <div className="space-y-2 text-center text-white py-[22px] bg-[#006E99] rounded-[8px] min-w-[200px]">
                  <p className="lg:text-lg text-[14px]">Years Of Experience</p>
                  <h4 className="font-semibold text-[40px]">15+</h4>
                </div>
                <div className="space-y-2 text-center text-white py-[22px] bg-[#006E99] rounded-[8px] min-w-[200px]">
                  <p className="lg:text-lg text-[14px]">Countries Presence</p>
                  <h4 className="font-semibold text-[40px]">20+</h4>
                </div>
                <div className="space-y-2 text-center text-white py-[22px] bg-[#006E99] rounded-[8px] min-w-[220px]">
                  <p className="lg:text-lg text-[14px]">Agency Partners Worldwide</p>
                  <h4 className="font-semibold text-[40px]">1,000+</h4>
                </div>
                <div className="space-y-2 text-center text-white py-[22px] bg-[#006E99] rounded-[8px] min-w-[200px]">
                  <p className="lg:text-lg text-[14px]">Avg. Travelers Per Year</p>
                  <h4 className="font-semibold text-[40px]">30,000+</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
