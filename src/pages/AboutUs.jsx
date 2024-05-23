import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AutoScroll, Contact, Footer, Navbar } from "../components";
import {
  AboutHeader,
  AboutMain,
  AboutMission,
  OurTeam,
} from "../components/AboutComps";


const AboutUs = () => {
  
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      {/*<AboutHeader />*/}
      <AboutMain />
      <AboutMission />
      <OurTeam/>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUs;
