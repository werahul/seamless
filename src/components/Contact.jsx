import React, { useState, useRef } from "react";

const Contact = () => {
  return (
    <div className="font-poppins contactBg">
      {" "}
      <div className="bg-black bg-opacity-[60%] ">
        <div
          className=" lg:flex  max-container lg:px-20 py-20 lg:py-20  px-5 font-nunito relative"
          id="contactus"
        >
          {" "}
          <div class="relative w-full pb-0 md:w-[40%]   md:pb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d926418.3287070243!2d54.343654!3d24.9040663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dff451f130b%3A0x9b4ae0316bb1b48a!2sZeenah%20Residences%20Building1!5e0!3m2!1sen!2sin!4v1716373936822!5m2!1sen!2sin"
              class=" lg:w-full lg:h-full h-[214px] w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-[60%]">
            <form
              //   onSubmit={handleSubmit}
              className=" my-0 lg:my-0 "
              //   ref={formField}
            >
              <div className="w-[100%] rounded-[4px] lg:rounded-none border border-white border-opacity-10  py-10 lg:px-10 px-5 lg:backdrop-blur-[10px] bg-white bg-opacity-10 backdrop-blur-[60px] ">
                <p className=" text-white lg:text-[40px] headings  text-[32px] font-semibold lg:leading-[48px] leading-[34px]">
                  Get In Touch
                </p>
                <p className=" text-white  text-[16px]  lg:leading-[24px] lg:mt-2 mt-5 font-normal">
                  Contact us today to unlock unbeatable deals and personalized
                  solutions for all your travel and destination management
                  needs.
                </p>
                <div className="">
                  <div className=" max-container transition-all grid lg:grid-cols-2 grid-cols-1  lg:gap-6 lg:gap-y-6 gap-y-6 lg:mt-9 my-6">
                    <input
                      // value={fullName}
                      // onChange={handleNameChange}
                      required
                      type="text"
                      placeholder="Name*"
                      className="w-full text-[14px] outline-none rounded-[4px] font-nunito lg:h-12 h-[50px]  bg-white border border-white bg-opacity-5 p-3 text-[#fff] placeholder-[#fff]"
                    />

                    <input
                      // value={phoneNumber}
                      // onChange={handlePhoneChange}
                      required
                      type="tel"
                      placeholder="Number*"
                      className="w-full text-[14px]  outline-none font-nunito transition-all  lg:h-12 h-[50px] rounded-[4px]  bg-white border-white bg-opacity-5 border p-3 text-[#fff] placeholder-[#fff]"
                    />

                    <input
                      // value={email}
                      // onChange={handleEmailChange}
                      required
                      type="email"
                      placeholder="Email*"
                      className="w-full text-[14px]  outline-none  transition-all font-nunito  lg:h-12 h-[50px] rounded-[4px]  bg-white border border-white bg-opacity-5 p-3 text-[#fff] placeholder-[#fff]"
                    />

                    {/* {!isValidEmail && (
                <p
                  className="mt-0 absolute top-[18.3rem] text-[12px] text-left text-white"
                  id="email-error"
                >
                  Please enter a valid email address
                </p>
              )} */}

                    {/* <input
                  // value={companyName}
                  // onChange={handleCompanyChange}
                  required
                  type="text"
                  placeholder="Company Name*"
                  className="w-full  outline-none rounded-[10px] font-nunito lg:h-12 h-[50px]  bg-white border border-white bg-opacity-5 p-3 text-[#fff] placeholder-[#fff]"
                /> */}

                    <select
                      // value={need}
                      // onChange={handleNeedChange}

                      placeholder="Enquiry Type*"
                      className="w-full text-[14px] outline-none font-nunito transition-all lg:h-12 h-[39px] rounded-[4px]  bg-white bg-opacity-5 border border-white  px-2 text-[#fff]"
                    >
                      <option value="" className="text-black">
                        Enquiry Type*
                      </option>
                      {/* <option value="Videography" className="text-black">
                    Videography
                  </option>
                  <option value="Photography" className="text-black">
                    Photography
                  </option> */}
                      {/* <option value="Audio">Audio</option>  */}
                    </select>

                    {/* <select
                value={budget}
                onChange={handleBudgetChange}
                className="w-full lg:w-[470px] transition-all outline-none font-nunito lg:h-12 h-[39px] rounded-[10px]  bg-white border border-white bg-opacity-5 px-2 text-[#fff]"
              >
                <option value="" disabled className="text-black">
                  What is your budget*
                </option>
                <option value="1-3 Lakhs" className="text-black">
                  1-3 Lakhs
                </option>
                <option value="3-5 Lakhs" className="text-black">
                  3-5 Lakhs
                </option>
                <option value="6-9 Lakhs" className="text-black">
                  6-9 Lakhs
                </option>
                <option value="10 Lakhs & above" className="text-black">
                  10 Lakhs & above
                </option>
              </select> */}
                  </div>
                  <div className="">
                    <textarea
                      // value={message}
                      // onChange={handleMessageChange}
                      placeholder="Message*"
                      className="w-full text-[14px] transition-all
            outline-none font-nunito lg:h-[102px] h-[149px] rounded-[4px]
             border bg-white bg-opacity-5 border-white py-3 px-3
            text-[#fff] placeholder-[#fff] resize-none"
                    ></textarea>
                    <div className="border-r border-[#FF7843] rounded-[4px] p-1 border-b inline-block mt-5">
                      <button className="hover:text-white text-[#FF7843] font-medium border border-[#FF7843] hover:border-[#FF7843] bg-transparent transition-all hover:bg-[#FF7843] py-4 px-3 rounded-[4px]">
                        Submit Now
                      </button>
                    </div>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
