import React, { useState, useEffect } from "react";
import {
    GoogleReCaptcha as GoogleReCaptchaService,
    GoogleReCaptchaProvider
} from "react-google-recaptcha-v3";
import secureStorage from "./Storage";

export default function GoogleReCaptcha(props) {
    const reCaptchaKey = process.env.MIX_GOOGLE_SITEKEY;

    const [safe, setSafe] = useState(false);
    useEffect(() => {
        console.log(safe);
    }, [safe]);

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey} language="fa">
            <GoogleReCaptchaService
                onVerify={token => {
                    secureStorage.setItem("verified", "true");
                    setSafe(true);
                }}
            />
            {safe ? (
                props.children
            ) : (
                <h1 className="text-left font6">Loading...</h1>
            )}
        </GoogleReCaptchaProvider>
    );
}
