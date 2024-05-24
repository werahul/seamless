import React from "react";
import {
  Navbar,
  Header,
  AboutHome,
  ExpertiseHome,
  FeaturedHome,
  ChooseHome,
  Testimonials,
  Contact,
  Footer,
  AutoScroll,
} from "../components";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
} from "../assets/Images";
import CirclePathAnimation from "../components/CirclePathAnimation";
import TestimonialsMobile from "../components/TestimonialsMobile";
import FeaturedHomeMobile from "../components/FeaturedHomeMobile";

const Home = () => {
  const images = [partner1, partner2, partner3, partner4, partner5];
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <Header />
      <AboutHome />
      {/* <CirclePathAnimation /> */}
      <ExpertiseHome />
      <div className="hidden lg:block">
        <FeaturedHome />
      </div>
      <div className="block lg:hidden">
        <FeaturedHomeMobile />
      </div>
      <ChooseHome />
      <div className="hidden lg:block">
        <Testimonials />
      </div>
      <div className="lg:hidden block">
        <TestimonialsMobile />
      </div>
      {/* <div className="bg-[#f5f5f5] lg:hidden block">
        <AutoScroll images={images} />
      </div> */}

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
