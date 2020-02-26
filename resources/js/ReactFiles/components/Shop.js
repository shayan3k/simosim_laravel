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
import { useStoreState } from "easy-peasy";

export default function Shop() {
    const postsUri = process.env.MIX_POSTSURI;

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
            <SpecialOffers uri={postsUri} sale={true} flagController="فوری" />
            <SectionTitle title="جستجو" collapse="searchBox" />
            <SearchBox />
            <SectionTitle title="سیم کارت یافت شده" collapse="mainAdsToggler" />
            <MainAds uri={postsUri} deleteUri={postsUri} />
            <Ad2 />
            <SectionTitle
                title="پیشنهادهای هفته"
                collapse="SpecialOffersWrapepr"
            />

            <div className="SpecialOffersWrapepr">
                <SpecialOffers
                    uri={postsUri}
                    sale={false}
                    flagController="طلایی"
                />
                <SpecialOffers
                    ltr={true}
                    uri={postsUri}
                    sale={false}
                    flagController="نقره ای"
                />
                <SpecialOffers
                    uri={postsUri}
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
