import React from "react";
import {
    GoogleReCaptcha as GoogleReCaptchaService,
    GoogleReCaptchaProvider
} from "react-google-recaptcha-v3";
import secureStorage from "./Storage";

export default function GoogleReCaptcha(props) {
    const reCaptchaKey = process.env.MIX_RECAPTCHAKEY;
    // const reCaptchaKey = "6LdOuNwUAAAAALberFJy70eJUzs57cqqirKkaIM7";

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey} language="fa">
            <GoogleReCaptchaService
                onVerify={token => {
                    secureStorage.setItem("verified", "true");
                }}
            />
            {props.children}
        </GoogleReCaptchaProvider>
    );
}
