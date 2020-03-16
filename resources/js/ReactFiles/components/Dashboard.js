import React, { useState, useEffect } from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import MegaMenu from "./partials/MegaMenu";
import Footer from "./partials/Footer";
import NewAdvertisment from "./partials/NewAdvertisment";
import SectionTitle from "./partials/SectionTitle";
import DashboardAdvertisment from "./partials/DashboardAdvertisment";
import FooterSeperator from "./partials/FooterSeperator";
import BannerLg1 from "./images/banner-lg-1.gif";
import BannerLg2 from "./images/banner-lg-2.gif";

import BannerSm1 from "./images/banner-sm-1.gif";
import BannerSm2 from "./images/banner-sm-2.gif";
import BannerSm3 from "./images/banner-sm-3.gif";
import BannerSm4 from "./images/banner-sm-4.gif";
export default function Dashboard() {
    return (
        <>
            <Navbar />
            <Logo />
            <Seperator />
            <MegaMenu />
            <SectionTitle
                title="ایجاد آگهی جدید"
                collapse="DashboardNewAdvertisment"
                Banner={BannerLg1}
            />
            <NewAdvertisment
                BannerSm1={BannerSm1}
                BannerSm2={BannerSm2}
                BannerSm3={BannerSm3}
                BannerSm4={BannerSm4}
            />
            <SectionTitle
                title="سیم کارت های من"
                collapse="DashboardAdvertisment"
                Banner={BannerLg2}
            />
            <DashboardAdvertisment />
            <FooterSeperator />
            <Footer />
        </>
    );
}
