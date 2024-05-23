import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-3 pb-32 gap-6">
      {data.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.imageBg} alt="backgroundImage" />
          <div className="absolute ml-7 text-white font-poppins bottom-5">
            <h3 className="font-semibold text-[20px]">{item.heading}</h3>
            <p className="w-[350px] mt-3">{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
