import React, { Component, useEffect } from "react";
import Navbar from "./partials/Navbar";
import Ad2 from "./partials/Ad2";
import MegaMenu from "./partials/MegaMenu";
import Footer from "./partials/Footer";
import SearchBox from "./partials/SearchBox";
import MainAds from "./partials/MainAds";
import Advertisers from "./partials/Advertisers";
import SpecialOffers from "./partials/specialOffers";
import SectionTitle from "./partials/SectionTitle";
import FooterSeperator from "./partials/FooterSeperator";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import BannerLg2 from "./images/banner-lg-2.gif";
import BannerLg3 from "./images/banner-lg-3.png";
import BannerLg4 from "./images/banner-lg-4.png";
import BannerLg5 from "./images/banner-lg-5.png";
import BannerLg6 from "./images/banner-lg-6.png";
import BannerLg7 from "./images/banner-lg-7.png";
import BannerLg8 from "./images/banner-lg-7.png";

export default function Shop() {
    const postsUriSale = process.env.MIX_ADVERTISMENTS_SALE;
    const postsUriGold = process.env.MIX_ADVERTISMENTS_GOLD;
    const postsUriSilver = process.env.MIX_ADVERTISMENTS_SILVER;
    const postsUriBronze = process.env.MIX_ADVERTISMENTS_BRONZE;

    // const postsUriSale = "/advertisments-sale";
    // const postsUriGold = "/advertisments-gold";
    // const postsUriSilver = "/advertisments-silver";
    // const postsUriBronze = "/advertisments-bronze";
    return (
        <>
            <Navbar />
            <Logo />
            <Seperator />
            <MegaMenu />
            {/* <SectionTitle
                title="فروشهای فوری"
                collapse="specialOffersToggler"
                Banner={BannerLg2}
            />
            <SpecialOffers
                uri={postsUriSale}
                sale={true}
                flagController="فوری"
            /> */}
            <SectionTitle
                title="جستجو"
                collapse="searchBox"
                Banner={BannerLg3}
            />
            <SearchBox />
            <SectionTitle
                title="سیم کارت یافت شده"
                collapse="mainAdsToggler"
                Banner={BannerLg4}
            />
            {/* <MainAds />
            <Ad2 Banner1={BannerLg5} Banner2={BannerLg6} />
            <SectionTitle
                title="پیشنهادهای هفته"
                collapse="SpecialOffersWrapepr"
                Banner={BannerLg7}
            />

            <div className="SpecialOffersWrapepr">
                <SpecialOffers
                    uri={postsUriGold}
                    sale={false}
                    flagController="طلایی"
                />
                <SpecialOffers
                    ltr={true}
                    uri={postsUriSilver}
                    sale={false}
                    flagController="نقره ای"
                />
                <SpecialOffers
                    uri={postsUriBronze}
                    sale={false}
                    flagController="برنز"
                />
            </div> */}
            <SectionTitle
                title="فروشندگان برتر هفته"
                collapse="AdvertisersToggler"
                Banner={BannerLg8}
            />
            <Advertisers />
            <FooterSeperator />
            <Footer />
        </>
    );
}
