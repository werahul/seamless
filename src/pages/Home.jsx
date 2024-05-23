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

const Home = () => {
  const images = [partner1, partner2, partner3, partner4, partner5];
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <Header />
      <AboutHome />
      {/* <CirclePathAnimation /> */}
      <ExpertiseHome />
      <FeaturedHome />
      <ChooseHome />
      <Testimonials />
      <div className="bg-[#f5f5f5] lg:hidden block">
        <AutoScroll images={images} />
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
