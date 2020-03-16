import React from "react";
import GhavaninContents from "./partials/GhavaninContents";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import FooterSeperator from "./partials/FooterSeperator";
import SectionTitle from "./partials/SectionTitle";
import Footer from "./partials/Footer";
import BannerLg2 from "./images/banner-lg-2.gif";

export default function Ghavanin() {
    return (
        <>
            <Navbar />
            <Logo />
            <Seperator />
            <SectionTitle
                title="قوانین"
                collapse="ghavaninCollapse"
                Banner={BannerLg2}
            />
            <GhavaninContents />
            <FooterSeperator />
            <Footer />
        </>
    );
}
