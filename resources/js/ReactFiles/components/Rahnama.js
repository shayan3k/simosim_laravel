import React from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";
import RahnamaContents from "./partials/RahnamaContents";
import SectionTitle from "./partials/SectionTitle";
import BannerLg2 from "./images/banner-lg-2.gif";

function Rahnama() {
    return (
        <>
            <Navbar />
            <Logo />
            <SectionTitle
                title="راهنما"
                collapse="rahnamaCollapse"
                Banner={BannerLg2}
            />
            <RahnamaContents />
            <FooterSeperator />
            <Footer />
        </>
    );
}

export default Rahnama;
