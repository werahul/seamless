import React from "react";
import { call, location, mail } from "../../assets/Images/ContactImages";
import {
  X,
  breadCrumbsArrow,
  facebook,
  instagram,
  linkedin,
} from "../../assets/Images";
import { Link } from "react-router-dom";

const ContactMain = () => {
  return (
    <div className="bg-[#f5f5f5] font-poppins pt-[80px] lg:pt-[150px] lg:pb-[100px] px-5 lg:px-24">
      <section className=" lg:pt-5 pt-20 lg:pb-16 pb-10 bg-[#F5F5F5] max-container">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <p className="font-poppins text-[20px] text-[#A6A6A6]">Home</p>
          </Link>
          <img src={breadCrumbsArrow} alt="" />
          <p className="font-poppins font-semibold text-[20px] text-[#006E99]">
            Contact Us
          </p>
        </div>
      </section>
      <div className="max-container justify-between items-start lg:space-x-5 flex flex-col lg:flex-row">
        <div className="lg:w-[46%]">
          <h2 className="text-[40px] lg:text-[48px] leading-[48px] lg:leading-[62.8px] font-semibold text-[#FF7843]">
            Contact Us To Get <br className="hidden lg:block" /> More Info
          </h2>
          {/* <p className="text-[#333333] mt-2">
            Lorem Ipsum is simply dummy text of the printing and{" "}
            <br className="hidden lg:block" /> typesetting industry. Lorem Ipsum
            has been the industry's <br className="hidden lg:block" /> standard
            dummy text ever since the 1500s
          </p> */}
          <form
            //   onSubmit={handleSubmit}
            className=" my-10 lg:my-0 "
            //   ref={formField}
          >
            <div>
              <div className=" max-container transition-all grid grid-cols-1  lg:gap-6 lg:gap-y-8 gap-y-6 lg:mt-9 mt-6 ">
                <div className="space-y-2">
                  <label htmlFor="Name" className="font-medium">
                    Your Full Name
                  </label>
                  <input
                    // value={fullName}
                    // onChange={handleNameChange}
                    required
                    type="text"
                    placeholder="E.g. Riya Shah"
                    className="w-full  outline-none rounded-[8px] font-nunito lg:h-12 h-[64px]  bg-transparent border border-[#989898c9] bg-opacity-5 p-3 text-[#989898] placeholder-[#989898]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Your Email Id
                  </label>
                  <input
                    // value={fullName}
                    // onChange={handleNameChange}
                    required
                    type="email"
                    placeholder="E.g. riya1340@gmail.com"
                    className="w-full  outline-none rounded-[8px] font-nunito lg:h-12 h-[64px]  bg-transparent border border-[#989898] bg-opacity-5 p-3 text-[#989898] placeholder-[#989898]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    Your Message
                  </label>
                  <textarea
                    // value={message}
                    // onChange={handleMessageChange}
                    placeholder="Type your message here..."
                    className="w-full transition-all
            outline-none font-nunito lg:h-[132px] h-[180px] rounded-[10px]
             border bg-transparent bg-opacity-5 border-[#989898] py-3 px-3
            text-[#989898] placeholder-[#989898] resize-none"
                  ></textarea>
                </div>
                <div className="border-r border-[#FF7843] rounded-[4px] p-1 border-b w-[133px] mt-0">
                  <button className="hover:text-white text-[#FF7843] font-medium border border-[#FF7843] hover:border-[#FF7843] bg-transparent transition-all hover:bg-[#FF7843] py-4 px-3 rounded-[4px]">
                    Submit Now
                  </button>
                </div>
              </div>

              {/* <div className="flex justify-center items-center lg:mt-8 mt-[19px]">
              {loader ? (
                <ProgressBar
                  height="80"
                  width="80"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#800080"
                  barColor="#51E5FF"
                  loader={loader}
                />
              ) : (
                
              )} */}
              {/* </div> */}
              {/* {error && <p className="error">{error}</p>} */}
            </div>
          </form>
        </div>
        <div className="w-auto lg:w-[40%] mt-5">
          <div className="space-y-2">
            <h3 className="text-[24px] font-semibold">
              Looking to enhance your travel offerings?
            </h3>
            <p className="text-[#333333]">
              Reach out to us for tailored solutions and seamless collaboration.
              Our team is dedicated to supporting travel agents with
              personalized service and unbeatable value.
            </p>
            <p className="text-[#333333]">
              Contact us today and meet the unique needs of your clientele!
            </p>
          </div>
          <div className="my-10 space-y-8">
            <div className="flex space-x-4">
              <img
                src={location}
                alt=""
                className="w-[70px] h-[70px] bg-[#006E99] p-2 rounded-[8px]"
              />
              <div>
                <p className=" font-semibold">Location Address</p>
                <a
                  href="https://maps.app.goo.gl/CyUKpmqscB21jnoB9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-[#333333]">
                    Seamless Tourism LLC Office No. 115, Zeenah building, Port
                    Saeed - Deira, Dubai - UAE
                  </p>
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <img
                src={mail}
                alt=""
                className="w-[70px] h-[70px] bg-[#006E99] p-3 rounded-[8px]"
              />
              <div>
                <p className=" font-semibold">Email Address</p>
                <a href="mailto:info@seamlessdmc.com ">
                  <p className="text-[#333333]">info@seamlessdmc.com</p>
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <img
                src={call}
                alt=""
                className="w-[70px] h-[70px] bg-[#006E99] p-3 rounded-[8px]"
              />
              <div>
                <p className=" font-semibold">Phone No.</p>
                <a href="tel:+97142884405 ">
                  <p className="text-[#333333]">+971 42 88 44 05</p>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="font-semibold text-[24px] ">
              Follow us on social media:
            </h4>
            <div className="flex mt-3 items-center space-x-3">
              <img src={linkedin} alt="" className="w-[36px] " />
              <img src={instagram} alt="" className="w-[36px] " />
              <img src={facebook} alt="" className="w-[36px]" />
              <img src={X} alt="" className="w-[36px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
