import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cancelLogin, navLogo } from "../assets/Images";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const dropdownLinks = [
    { text: "Abu Dhabi", url: "/Abu-Dhabi" },
    { text: "Dubai", url: "/Dubai" },
    { text: "Ras Al Khaimah", url: "/Ras-Al-Khaimah" },
    { text: "Sharjah", url: "/Sharjah" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for login popup
  const [showRegisterPopup, setShowRegisterPopup] = useState(false); // State for register popup
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle login popup
  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const toggleLoginMobilePopup = () => {
    setIsOpen(!isOpen);
    setShowLoginPopup(!showLoginPopup);
  };

  const toogleLogin = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(true);
  };
  const toogleRegister = () => {
    setShowLoginPopup(true);
    setShowRegisterPopup(false);
  };

  // Register Popup

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };
  const toggleRegisterMobilePopup = () => {
    setIsOpen(!isOpen);
    setShowRegisterPopup(!showRegisterPopup);
  };

  return (
    <div className="">
      <nav
        className={`fixed z-50 py-2 w-full  px-4 sm:px-20 ${
          isOpen ? "bg-[#303A3F]" : "bg-[#1d1d1dea]"
        } `}
      >
        <div className="navLinks flex items-center justify-between max-container font-poppins">
          <div>
            <Link to="/">
              <img src={navLogo} alt="" className="lg:w-[250px] w-[200px]" />
            </Link>
          </div>
          {/* Hamburger menu for mobile screens */}
          <div className="block sm:hidden">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:text-gray-800 text-[#FF7843] mt-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <>
                    <path
                      d="M16.2524 15.118C16.5718 15.4374 16.5718 15.9341 16.2524 16.2535C16.0928 16.4132 15.8976 16.4841 15.6847 16.4841C15.4718 16.4841 15.2766 16.4132 15.117 16.2535L11.8702 13.0067L8.62341 16.2535C8.46374 16.4132 8.26857 16.4841 8.05567 16.4841C7.84277 16.4841 7.64761 16.4132 7.48793 16.2535C7.16857 15.9341 7.16857 15.4374 7.48793 15.118L10.7347 11.8712L7.48793 8.62445C7.16857 8.3051 7.16857 7.80832 7.48793 7.48897C7.80728 7.16961 8.30406 7.16961 8.62341 7.48897L11.8702 10.7357L15.117 7.48897C15.4363 7.16961 15.9331 7.16961 16.2524 7.48897C16.5718 7.80832 16.5718 8.3051 16.2524 8.62445L13.0057 11.8712L16.2524 15.118Z"
                      fill="white"
                    />
                    <circle
                      cx="11.5"
                      cy="11.5"
                      r="11.129"
                      stroke="#FFFEFE"
                      strokeWidth="0.741935"
                    />
                  </>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Navigation links */}
          <div
            className={`links ${
              isOpen
                ? "block absolute top-[95px] left-0 pl-8 pr-8 w-full h-screen bg-[#303A3F] text-white"
                : "hidden"
            } sm:flex`}
          >
            <div className="flex flex-col w-full space-y-4 pt-10 text-white lg:pt-3 lg:space-y-0 lg:flex-row text-[18px] font-normal lg:items-center lg:space-x-8">
              {/* <NavItem to="/packages" text="Packages" /> */}

              <NavItem to="/mice" text="MICE" />
              <NavItem to="/leisure" text="Leisure" />
              <Dropdown
                to="/destinations"
                text="Destinations"
                dropdownLinks={dropdownLinks}
              />
              <NavItem to="/about-us" text="About Us" />
              {/* <NavItem to="/contact-us" text="Contact Us" /> */}
            </div>
            <div className="w-full lg:hidden flex flex-col text-white text-[18px] my-8 font-medium items-center justify-center space-y-4 lg:space-x-6">
              <div
                className="text-white hover:text-[#FF7843] border border-transparent hover:border-[#FF7843] hover:bg-transparent transition-all bg-[#FF7843] py-4 px-[140px] rounded-full cursor-pointer"
                onClick={toggleRegisterMobilePopup} // Open login popup on click
              >
                Register
              </div>
              <div>
                <button
                  className="py-3 px-36 hover:border"
                  onClick={toggleLoginMobilePopup}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          {/* Login and Register buttons */}
          <div className="hidden lg:flex text-[18px] pt-3 text-white font-medium items-center space-x-6">
            {/* <div
              className="text-[#fff]  transition-all  py-3 px-4 rounded-full cursor-pointer"
              onClick={toggleLoginPopup} // Open login popup on click
            >
              Login
            </div> */}
            <div className="border-r border-[#FF7843] rounded-[4px] p-1 border-b ">
              <Link to="/contact-us">
                <button className="hover:text-white text-[#FF7843] font-medium border border-[#FF7843] hover:border-[#FF7843] bg-transparent transition-all hover:bg-[#FF7843] py-4 px-8 rounded-[4px]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {showLoginPopup && (
        <div className="w-[100%] fixed z-[9999] px-5 lg:px-0  flex items-center justify-center h-[100%] bg-[#333] bg-opacity-[82%]">
          <div className="  font-poppins rounded-[8px] relative py-[48px] my-auto mx-auto  text-white w-full lg:w-[751px] bg-[#006E99]">
            <img
              src={cancelLogin}
              alt=""
              className="w-[32px] lg:w-[58px] absolute cursor-pointer top-[-15px] lg:top-[-30px] right-[-15px] lg:right-[-30px]"
              onClick={toggleLoginPopup}
            />
            <h2 className="text-center pb-[40px] font-semibold text-[22px] lg:text-[32px]">
              Login to Your Account
            </h2>
            <form className="px-[16px] lg:px-[70px] ">
              <div className="flex space-y-2 flex-col">
                <label htmlFor="EmailId" className="text-lg font-semibold">
                  Your Email Id
                </label>
                <input
                  type="email"
                  placeholder="Email Id"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 flex-col">
                <label htmlFor="password" className="text-lg font-semibold">
                  Your Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <p className="text-[#fff] mt-2 mb-8 w-fit hover:underline text-sm font-medium cursor-pointer">
                Forgot Password?
              </p>
              <button className="text-white w-full mb-4 hover:text-[#FF7843] border border-transparent hover:border-[#fff] hover:bg-white transition-all bg-[#FF7843] py-4 px-4 rounded-full">
                Login
              </button>
              <p className="text-center text-[14px] lg:text-base">
                Don’t have an account?{" "}
                <span
                  className="text-[#fff] cursor-pointer hover:underline"
                  onClick={toogleLogin}
                >
                  Register here
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
      {showRegisterPopup && (
        <div className="w-[100%] fixed overflow-y-scroll pt-10 z-[9999] px-5 lg:px-0  flex items-start justify-start h-[100%] bg-[#333] bg-opacity-[82%]">
          <div className="  font-poppins rounded-[8px] relative py-[48px] my-auto mx-auto  text-white w-full lg:w-[751px] bg-[#006E99]">
            <img
              src={cancelLogin}
              alt=""
              className="w-[32px] lg:w-[58px] absolute cursor-pointer top-[-15px] lg:top-[-30px] right-[-15px] lg:right-[-30px]"
              onClick={toggleRegisterPopup}
            />
            <h2 className="text-center pb-[40px] font-semibold text-[22px] lg:text-[32px]">
              Create Your Account
            </h2>
            <form className="px-[16px] lg:px-[70px] ">
              <div className="flex space-y-2 flex-col">
                <label htmlFor="FullName" className="text-lg font-semibold">
                  Your Full Name*
                </label>
                <input
                  type="name"
                  placeholder="Full Name"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 flex-col">
                <label htmlFor="BusinessName" className="text-lg font-semibold">
                  Your Business Name*
                </label>
                <input
                  type="name"
                  placeholder="Your Business Name"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 flex-col">
                <label htmlFor="EmailId" className="text-lg font-semibold">
                  Your Email Id
                </label>
                <input
                  type="email"
                  placeholder="Email Id"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 mb-6 flex-col">
                <label htmlFor="password" className="text-lg font-semibold">
                  New Password*
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 mb-6 flex-col">
                <label htmlFor="password" className="text-lg font-semibold">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>

              <div className="flex space-y-2 mt-6 flex-col">
                <label htmlFor="EmailId" className="text-lg font-semibold">
                  Your Phone No.*
                </label>
                <input
                  type="tel"
                  placeholder="Phone No."
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 flex-col">
                <label htmlFor="EmailId" className="text-lg font-semibold">
                  Your Mailing Address*
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 flex-col">
                <label htmlFor="EmailId" className="text-lg font-semibold">
                  Your City*
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>
              <div className="flex space-y-2 mt-6 mb-10 flex-col">
                <label htmlFor="password" className="text-lg font-semibold">
                  Your Zip/Postal Code*
                </label>
                <input
                  type="number"
                  placeholder="Postal Code"
                  className="bg-transparent border px-4 placeholder-white outline-none rounded-[8px] h-[64px]"
                />
              </div>

              <button className="text-white w-full mb-4 hover:text-[#FF7843] border border-transparent hover:border-[#fff] hover:bg-white transition-all bg-[#FF7843] py-4 px-4 rounded-full">
                Register
              </button>
              <p className="text-center text-[14px] lg:text-base">
                Already have an account?{" "}
                <span
                  className="text-[#fff] cursor-pointer hover:underline"
                  onClick={toogleRegister}
                >
                  Login here
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// NavItem component to handle NavLink with custom styling for active link
const NavItem = ({ to, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`cursor-pointer hover:text-[#FF7843] hover:underline ${
        isActive ? "text-[#FF7843] " : ""
      }`}
    >
      {text}
    </NavLink>
  );
};

export default Navbar;
