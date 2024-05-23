import React from "react";
import {
  Choose1,
  Choose2,
  Choose3,
  Choose4,
  Choose5,
  Choose6,
  ChooseUser,
} from "../assets/Images";

const ChooseHome = () => {
  return (
    <div className="bg-[#fcf5ff] font-poppins lg:px-24 px-5 lg:py-[124px] py-14">
      <div className="max-container">
        <h2 className="text-[#ff7834] lg:text-[48px] text-[40px] font-semibold text-center">
          Why Choose Us
        </h2>
        <div className="lg:mt-[30px] mt-[50px] grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center   text-white">
            <img src={Choose1} alt="" className="w-[64px] mx-auto" />
            <h3 className="font-semibold text-[24px]">
              Global Network Of Airfares
            </h3>
            <p>
              Comprehensive network of airfares to book the best flight deals.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center  text-white">
            <img src={Choose2} alt="" className="w-[64px] mx-auto" />
            <h3 className="font-semibold text-[24px]">Extensive Reach</h3>
            <p>
              Global network of partners and vendors offering services in
              multiple destinations.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center  text-white">
            <img src={Choose3} alt="" className="w-[64px] mx-auto" />
            <h3 className="font-semibold text-[24px]">24X7 Support</h3>
            <p>
              Dedicated customer and technical support teams that are available
              24X7.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center  text-white">
            <img src={Choose4} alt="" className="w-[64px] mx-auto" />
            <h3 className="font-semibold text-[24px]">End-To-End Itinerary</h3>
            <p>
              Complete itinerary services with best deals on bookings, visas and
              insurance.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center  text-white">
            <img src={Choose5} alt="" className="w-[64px] mx-auto" />
            <h3 className="font-semibold text-[24px]">
              Event & Trip Management
            </h3>
            <p>
              Customized management services for events, occasions, trips and
              vacations.
            </p>
          </div>
          <div className="space-y-3 bg-[#006e99] p-8 rounded-[4px] text-center  text-white">
            <img src={Choose6} alt="" className="w-[64px] mx-auto" />
            <h3 className="font-semibold text-[24px]">
              Transportation Services
            </h3>
            <p>
              Comprehensive transportation services including airport transfers
              and private vehicle rentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseHome;
