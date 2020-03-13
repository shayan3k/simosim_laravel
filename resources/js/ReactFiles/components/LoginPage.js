import React, { Component } from "react";

import Message from "./partials/Message";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import SignUp from "./partials/SignUp";
import Login from "./partials/Login";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";

function LoginPage() {
    return (
        <>
            <Navbar />
            <Logo />

            <section className="section-contents container mx-auto">
                <Message />
                <div className="row mx-0 px-0 ">
                    <SignUp />
                    <Login />
                </div>
            </section>
            <FooterSeperator />
            <Footer />
        </>
    );
}

export default LoginPage;
