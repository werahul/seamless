import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { breadCrumbsArrow, careerJoin, dropArr, uploadIcon } from "../assets/Images";
import {
  c1,
  c2,
  c3,
  c4,
  career1,
  career2,
} from "../assets/Images/CareerImages";

const Career = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDivClick = (index) => {
    setActiveIndex(index);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />

      <div className="lg:pt-0 pt-24 bg-[#F5F5F5] ">
        {/* <div className="careerBg lg:h-[90vh] h-[200px] flex items-center justify-center">
          <div>
            <h1 className="font-bold lg:text-[56px] text-[32px] text-white">
              Careers
            </h1>
            <div className="flex space-x-2 justify-center items-center lg:mt-3 mb-6">
              <Link
                to="/"
                className="font-poppins font-semibold text-[20px] text-[#777777] hover:underline"
              >
                Home
              </Link>
              <img src={breadCrumbsArrow} alt="" />
              <p className="font-poppins font-semibold text-white text-[20px]">
                Careers
              </p>
            </div>
          </div>
  </div>*/}
        <section className="px-20 pt-40 pb-0 bg-[#F5F5F5] max-container">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <p className="font-poppins text-[20px] text-[#A6A6A6]">Home</p>
            </Link>
            <img src={breadCrumbsArrow} alt="" />
            <p className="font-poppins font-semibold text-[20px] text-[#006E99]">
              Careers
            </p>
          </div>
        </section>
      </div>
      <div className="lg:px-20 max-container flex space-x-20 px-5 pt-14">
        <div className="lg:pb-20 pb-10">
          <h2 className="font-poppins font-semibold lg:text-[48px] text-[40px] lg:leading-[62.4px] leading-[52px] text-[#FF7843]">
            Let’s Grow Together.
          </h2>
          <p className="font-poppins text-[16px] w-[561px] leading-[26px] text-[#333333] mt-4 ">
            Join us at Seamless DMC, where we're creating a culture that
            empowers exceptional individuals like you to thrive and excel.{" "}
            <br />
            <br /> We believe in fostering an environment where passion meets
            purpose, and where every team member has the opportunity to unleash
            their full potential. If you're ready to take your career to new
            heights and make a meaningful impact in the travel industry, you've
            found the perfect place to grow with us!
          </p>

          <div className="border-r border-[#FF7843] rounded-[4px] p-1 border-b inline-block mt-5 ">
            <a href="#form_section">
              <button className="hover:text-white text-[#FF7843] font-medium border border-[#FF7843] hover:border-[#FF7843] bg-transparent transition-all hover:bg-[#FF7843] py-4 px-8 rounded-[4px]">
                Apply Now
              </button>
            </a>
          </div>
        </div>
        <div>
          <img src={career1} alt="" className="h-[400px]" />
        </div>
      </div>
      <div className="lg:px-20 max-container flex space-x-20 px-5 pt-20">
        <div>
          <img
            src={career2}
            alt=""
            className="h-[424px] object-cover rounded-[8px]"
          />
        </div>
        <div className="lg:pb-20 pb-10">
          <h2 className="font-poppins font-semibold lg:text-[48px] text-[40px] lg:leading-[62.4px] leading-[52px] text-[#FF7843]">
            Our Core Values
          </h2>
          <p className="font-poppins w-[572px] text-[16px] leading-[26px] text-[#333333] mt-2 ">
            At Seamless DMC, our shared values are the essence of our culture.
            They guide our actions, decisions, and interactions, shaping our
            identity and setting us apart in the industry. With a focus on
            transparency, integrity, and accountability, we foster an
            environment of trust and collaboration. These values drive us to
            deliver exceptional service and unforgettable experiences to our
            clients and partners, making us a trusted leader in the travel
            industry.
          </p>
          <div className="grid mt-5 font-poppins grid-cols-2 gap-5">
            <div className="flex items-center space-x-5 font-medium">
              <img src={c1} alt="" className="w-[47px]" />
              <p>
                Integrity & <br /> Transparency
              </p>
            </div>
            <div className="flex items-center space-x-5 font-medium">
              <img src={c2} alt="" className="w-[47px]" />
              <p>
                Partnership & <br /> Respect
              </p>
            </div>
            <div className="flex items-center space-x-5 font-medium">
              <img src={c3} alt="" className="w-[47px]" />
              <p>
                Sustainable <br /> Tourism
              </p>
            </div>
            <div className="flex items-center space-x-5 font-medium">
              <img src={c4} alt="" className="w-[47px]" />
              <p>
                Innovation & <br /> Creativity
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:pt-0 max-container pt-2 ">
        <div className="flex px-20 my-10">
          <div className="bg-[#ff7843] rounded-l-lg w-[50%] pt-[96px] pb-[73px]">
            <img src={careerJoin} alt="" className="w-[237px] mx-auto" />
            <h3 className="text-[48px] font-semibold font-poppins text-white text-center">
              Join Our Team
            </h3>
            <p className="w-[410px] text-white font-poppins text-justify mx-auto">
              Are you as passionate about travel as we are? Join our team and
              become an integral part of our network, ensuring seamless
              collaboration and exceptional service delivery across
              destinations. <br /> <br /> Simply share your CV and details with
              us, and our team will reach out to you soon.
            </p>
          </div>
          <div className="w-[50%] h-auto rounded-r-lg bg-[#006E99] text-white font-poppins lg:p-8 p-5" id="form_section">
            <form action="" className="mt-7 ">
              <div className="space-y-1 mt-6">
                <p className="font-medium text-[16px] leading-[26px]">
                  Your Full Name
                </p>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  className="border rounded-lg h-[55px] w-full bg-transparent placeholder-white outline-none px-4"
                  placeholder="E.g. Riya Shah"
                />
              </div>
              <div className="space-y-1 mt-6">
                <p className="font-medium text-[16px] leading-[26px]">
                  Your Email Id
                </p>
                <input
                  type="email"
                  name="name"
                  required
                  id="name"
                  className="border rounded-lg h-[55px] w-full bg-transparent placeholder-white outline-none px-4"
                  placeholder="E.g. riya1340@gmail.com"
                />
              </div>

              <div className="space-y-1 mt-6">
                <p className="font-medium text-[16px] leading-[26px]">
                  Your Role
                </p>
                <input
                  type="email"
                  name="name"
                  required
                  id="name"
                  className="border rounded-lg h-[55px] w-full bg-transparent placeholder-white outline-none px-4"
                  placeholder="Your Designation"
                />
                {/*<div className="relative">
                  <select className="w-full outline-none font-nunito transition-all lg:h-12 h-[55px] rounded-lg bg-transparent bg-opacity-5 border border-white px-2 text-[#fff] custom-select">
                    <option value="" className="text-black">
                      Travel Agent
                    </option>
                
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <img
                      src={dropArr}
                      alt="Dropdown Arrow"
                    />
                  </div>
</div>*/}
              </div>

              <div className="space-y-1 mt-6">
                <label
                  htmlFor="resume"
                  className="font-medium text-[16px] leading-[26px]"
                >
                  Upload Your Resume
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    required
                    id="resume"
                    accept=".pdf"
                    className="sr-only" // Hide the default input
                    onChange={handleFileChange}
                  />
                  <label htmlFor="resume" className="relative cursor-pointer">
                    <div className="border rounded-lg h-[55px] w-full bg-transparent placeholder-white outline-none px-4 py-3 resize-none flex items-center justify-between">
                      <span>
                        {selectedFile ? selectedFile.name : "Choose a file"}
                      </span>
                      <img src={uploadIcon} alt="" className="w-6" />
                      {/* SVG icon */}
                    </div>
                  </label>
                </div>
              </div>
              <div className="border-r w-fit border-[#fff] rounded-[4px] p-1 border-b mt-14 ">
                <button className="hover:text-white text-[#fff] font-medium border border-[#fff] hover:border-[#FF7843] bg-transparent transition-all hover:bg-[#FF7843] py-3 px-[66px] w-full  rounded-[4px]">
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;
