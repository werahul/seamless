import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { breadCrumbsArrow } from "../assets/Images";

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <div className="bg-[#F5F5F5]  pb-20 ">
        <div className="lg:px-20 px-5 pt-36 max-container">
          <div className="flex space-x-2 items-center lg:mt-3 mb-6">
            <Link
              to="/"
              className="font-poppins font-semibold text-[20px] text-[#A6A6A6] hover:underline"
            >
              Home
            </Link>
            <img src={breadCrumbsArrow} alt="" />
            <p className="font-poppins font-semibold text-[20px] text-[#006E99]">
            Terms & Conditions
            </p>
          </div>
          <div className="">
            <h1 className="font-bold font-poppins lg:text-[48px] text-[40px] text-[#FF7843]">
            Terms & Conditions
            </h1>
            <p className="font-poppins lg:text-[20px] text-[16px] lg:leading-[30px] leading-[26px] mt-4">
            Welcome to Seamless DMC, your trusted partner for unforgettable travel experiences in the UAE. Our Terms & Conditions govern the use of our services and website. Here's what you need to know:
            </p>
          </div>

          <div className="mt-10 ml-10">
            <ul className="list-disc space-y-7">
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold">Booking and Payments: </span> Bookings are subject to availability and confirmation. Payment terms, cancellation policies, and refunds vary depending on the type of service booked.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Responsibilities: </span> You are responsible for providing accurate information during booking, complying with local laws and regulations, and adhering to any specific requirements or instructions provided by Seamless DMC or our partners.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Liability Limitations: </span> While we strive to ensure the safety and satisfaction of our guests, Seamless DMC and its affiliates are not liable for any losses, damages, injuries, or delays incurred during travel or related activities.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Dispute Resolution: </span> Any disputes or claims arising from the use of our services or website will be resolved through negotiation, mediation, or arbitration, as outlined in this policy.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Changes to Terms: </span> Seamless DMC reserves the right to update, modify, or amend these Terms & Conditions at any time without prior notice. Continued use of our services or website constitutes acceptance of these changes.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="font-poppins text-[20px] leading-[30px]">
            We encourage you to review these Terms & Conditions carefully before engaging with our platform. If you have any questions or concerns, please don't hesitate to contact us. Your satisfaction and safety are our top priorities at Seamless DMC.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
