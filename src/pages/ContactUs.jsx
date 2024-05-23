import React from "react";
import { Footer, Navbar } from "../components";
import {
  ContactHeader,
  ContactMain,
  LocateUs,
} from "../components/ContactComps";

const ContactUs = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      {/*<ContactHeader />*/}
      <ContactMain />
      <LocateUs />
      <Footer />
    </div>
  );
};

export default ContactUs;
