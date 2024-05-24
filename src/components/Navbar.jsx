import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLogo } from "../assets/Images";
import Dropdown from "./Dropdown";
import DropdownMobile from "./DropdownMobile";

const Navbar = () => {
  const dropdownLinks = [
    { text: "Abu Dhabi", url: "/Abu-Dhabi" },
    { text: "Dubai", url: "/Dubai" },
    { text: "Ras Al Khaimah", url: "/Ras-Al-Khaimah" },
    { text: "Sharjah", url: "/Sharjah" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <nav
        className={`fixed z-50 py-2 w-full px-4 sm:px-20 ${
          isOpen ? "bg-[#303A3F]" : "bg-white lg:bg-[#1d1d1dea]"
        }`}
      >
        <div className="navLinks flex items-center justify-between max-container font-poppins">
          <div>
            <Link to="/" onClick={closeMenu}>
              <img
                src={navLogo}
                alt="Logo"
                className="lg:w-[250px] w-[200px]"
              />
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
          {/* Navigation Links for Desktop */}
          <div className="hidden sm:flex">
            <div className="flex flex-col sm:flex-row text-white sm:space-x-8 text-[18px] font-normal items-center">
              <NavItem to="/mice" text="MICE" />
              <NavItem to="/leisure" text="Leisure" />
              <Dropdown text="Destinations" dropdownLinks={dropdownLinks} />
              <NavItem to="/about-us" text="About Us" />
            </div>
          </div>
          {/* Desktop Contact Button */}
          <div className="hidden lg:flex text-[18px] pt-3 text-white font-medium items-center space-x-6">
            <div className="border-r border-[#FF7843] rounded-[4px] p-1 border-b">
              <Link to="/contact-us">
                <button className="hover:text-white text-[#FF7843] font-medium border border-[#FF7843] hover:border-[#FF7843] bg-transparent transition-all hover:bg-[#FF7843] py-4 px-8 rounded-[4px]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden bg-[#303A3F] font-poppins text-white absolute top-[95px] left-0 w-full h-screen px-8`}
        >
          <div className="flex flex-col space-y-4 pt-10 text-[18px] font-normal">
            <NavItem to="/mice" text="MICE" onClick={closeMenu} />
            <NavItem to="/leisure" text="Leisure" onClick={closeMenu} />
            <DropdownMobile text="Destinations" dropdownLinks={dropdownLinks} />
            <NavItem to="/about-us" text="About Us" onClick={closeMenu} />
            <div className="border-r border-[#FF7843] rounded-[4px] p-1 border-b">
              <Link to="/contact-us">
                <button className="hover:text-white w-full text-[#FF7843] font-medium border border-[#FF7843] hover:border-[#FF7843] bg-transparent transition-all hover:bg-[#FF7843] py-4 px-8 rounded-[4px]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

// NavItem component to handle NavLink with custom styling for active link
const NavItem = ({ to, text, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`cursor-pointer hover:text-[#FF7843] hover:underline ${
        isActive ? "text-[#FF7843]" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};

export default Navbar;
