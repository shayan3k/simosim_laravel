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
            <SectionTitle
                title="فروشهای فوری"
                collapse="specialOffersToggler"
            />
            <SpecialOffers
                uri={postsUriSale}
                sale={true}
                flagController="فوری"
            />
            <SectionTitle title="جستجو" collapse="searchBox" />
            <SearchBox />
            <SectionTitle title="سیم کارت یافت شده" collapse="mainAdsToggler" />
            <MainAds />
            <Ad2 />
            <SectionTitle
                title="پیشنهادهای هفته"
                collapse="SpecialOffersWrapepr"
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
            </div>
            <SectionTitle
                title="فروشندگان برتر هفته"
                collapse="AdvertisersToggler"
            />
            <Advertisers />
            <FooterSeperator />
            <Footer />
        </>
    );
}
