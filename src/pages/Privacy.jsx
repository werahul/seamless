import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { breadCrumbsArrow } from "../assets/Images";

const Privacy = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <div className="bg-[#F5F5F5]   pb-20 ">
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
              Privacy Policy
            </p>
          </div>
          <div className="">
            <h1 className="font-bold font-poppins lg:text-[48px] text-[40px] text-[#FF7843]">
              Privacy Policy
            </h1>
            <p className="font-poppins lg:text-[20px] text-[16px] lg:leading-[30px] leading-[26px] mt-4">
              At Seamless DMC, protecting your privacy is of utmost importance
              to us. Our Privacy Policy outlines how we collect, use, disclose,
              and safeguard your personal information. Here's what you can
              expect:
            </p>
          </div>

          <div className="mt-10 ml-10">
            <ul className="list-disc space-y-7">
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Data Collection: </span> We
                collect information when you use our services or interact with
                our website, including personal details provided during booking,
                browsing history, and device information through cookies and
                analytics.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Data Usage: </span> Your
                information is used to facilitate bookings, improve our
                services, personalize your experience, and communicate with you
                regarding promotions, updates, and important notices.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Data Security: </span> We
                employ industry-standard security measures to protect your
                information from unauthorized access, disclosure, alteration, or
                destruction.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Data Sharing: </span> We may
                share your information with trusted third-party service
                providers and partners to fulfill bookings, process payments,
                and enhance your experience. However, we do not sell or rent
                your personal information to third parties.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Data Retention: </span> We
                retain your information only for as long as necessary to fulfill
                the purposes outlined in this policy or as required by law.
              </li>
              <li className="font-poppins text-[20px] leading-[30px]">
                {" "}
                <span className="font-semibold"> Your Rights: </span>
                You have the right to access, update, or delete your personal
                information, as well as to opt out of promotional
                communications.{" "}
              </li>{" "}
            </ul>
          </div>

          <div className="mt-10">
            <p className="font-poppins text-[20px] leading-[30px]">
              By using our services or accessing our website, you consent to the
              collection and use of your information as outlined in this Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
