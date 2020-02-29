import React, { Component } from "react";
import {
    GoogleReCaptcha,
    GoogleReCaptchaProvider
} from "react-google-recaptcha-v3";
import Message from "./partials/Message";
import { useStoreState, useStoreActions } from "easy-peasy";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import SignUp from "./partials/SignUp";
import Login from "./partials/Login";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";

function LoginPage() {
    const setGoogleToken = useStoreActions(actions => actions.google.setToken);
    const reCaptchaKey1 = process.env.MIX_RECAPTCHAKEY;

    return (
        <>
            <Navbar />
            <Logo />

            <section className="section-contents container mx-auto">
                <Message />
                <div className="row mx-0 px-0 ">
                    <GoogleReCaptchaProvider
                        reCaptchaKey="6LdOuNwUAAAAALberFJy70eJUzs57cqqirKkaIM7"
                        language="fa"
                    >
                        <GoogleReCaptcha
                            onVerify={token => setGoogleToken(token)}
                        />
                        <SignUp />
                        <Login />
                    </GoogleReCaptchaProvider>
                </div>
            </section>
            <FooterSeperator />
            <Footer />
        </>
    );
}

export default LoginPage;
