import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Career,
  ContactUs,
  Home,
  Privacy,
  TermsAndConditions,
  ScrollToTop,
  AbuDhabi,
  RasAlKhaimah,
  Dubai,
  Sharjha,
  Leisure,
  Mice,
} from "./pages";
// import Dubai from "./pages/Dubai";
// import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <BrowserRouter className="">
      <ScrollToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about-us" Component={AboutUs} />
        <Route exact path="/contact-us" Component={ContactUs} />
        <Route exact path="/careers" Component={Career} />
        <Route exact path="/Abu-Dhabi" Component={AbuDhabi} />
        <Route exact path="/Ras-Al-Khaimah" Component={RasAlKhaimah} />
        <Route exact path="/Dubai" Component={Dubai} />
        <Route exact path="/sharjah" Component={Sharjha} />
        <Route exact path="/privacy-policy" Component={Privacy} />
        <Route
          exact
          path="/terms-and-conditions"
          Component={TermsAndConditions}
        />
        <Route exact path="/mice" Component={Mice} />
        <Route exact path="/leisure" Component={Leisure} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
