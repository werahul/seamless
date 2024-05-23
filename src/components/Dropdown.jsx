import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ to, text, dropdownLinks }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative "
    >
      <div className="flex items-center cursor-pointer">
        <NavLink to={to} className="cursor-pointer hover:text-[#FF7843]">
          {text}
        </NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ml-1 transition-transform ${
            isHovering ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isHovering && (
        <div className="absolute  top-full -left-3 w-[200px] bg-[#1d1d1dea] shadow-md rounded-md z-10">
          <div className="py-2">
            {dropdownLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.url}
                className="block px-4 py-2 text-[#fff] hover:text-[#ff7843]"
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
