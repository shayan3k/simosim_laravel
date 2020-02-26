import React from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";
import RahnamaContents from "./partials/RahnamaContents";
import SectionTitle from "./partials/SectionTitle";

function Rahnama() {
  return (
    <>
      <Navbar />
      <Logo />
      <SectionTitle title="راهنما" />
      <RahnamaContents />
      <FooterSeperator />
      <Footer />
    </>
  );
}

export default Rahnama;
