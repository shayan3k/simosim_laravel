import React from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            <Navbar />
            <Logo />

            <div className="container bg-white py-5 mt-1">
                <p>صفحه مورد نظر یافت نشد</p>
                برای جستجو سیمکارت مورد نظر روی <Link to="/">لینک</Link> کلیک
                کنید
            </div>

            <FooterSeperator />
            <Footer />
        </>
    );
}
