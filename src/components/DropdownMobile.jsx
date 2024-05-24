import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DropdownMobile = ({ to, text, dropdownLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        onClick={handleToggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="cursor-pointer">{text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 ml-1 transition-transform ${
            isOpen ? "transform rotate-180" : ""
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
      {isOpen && (
        <div className=" w-[200px] ">
          <div className="py-2">
            {dropdownLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.url}
                className="block px-4 py-2 text-[#fff] opacity-70 text-lg hover:text-[#ff7843]"
                onClick={() => setIsOpen(false)}
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

export default DropdownMobile;
