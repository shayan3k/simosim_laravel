import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import MegaMenu from "./partials/MegaMenu";
import Footer from "./partials/Footer";
import SectionTitle from "./partials/SectionTitle";
import FooterSeperator from "./partials/FooterSeperator";
import SingleAdvertisment from "./partials/SingleAdvertisment";
import BannerLg1 from "./images/banner-lg-1.gif";

export default function AdvertismentPage() {
    const { phonenumber } = useParams();

    return (
        <>
            <Navbar />
            <Logo />
            <Seperator />
            <MegaMenu />
            <SectionTitle
                title="سیمکارت همراه اول"
                collapse="singleAdvertisment1"
                Banner={BannerLg1}
            />
            <SingleAdvertisment phonenumber={phonenumber} />
            <FooterSeperator />
            <Footer />
        </>
    );
}
