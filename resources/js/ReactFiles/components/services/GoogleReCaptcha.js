import React, { useState } from "react";
import {
    GoogleReCaptcha as GoogleReCaptchaService,
    GoogleReCaptchaProvider
} from "react-google-recaptcha-v3";
import secureStorage from "./Storage";

export default function GoogleReCaptcha(props) {
    const reCaptchaKey = process.env.MIX_RECAPTCHAKEY;
    // const reCaptchaKey = "6LdOuNwUAAAAALberFJy70eJUzs57cqqirKkaIM7";

    const [safe, setSafe] = useState(false);

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey} language="fa">
            <GoogleReCaptchaService
                onVerify={token => {
                    secureStorage.setItem("verified", "true");
                    setSafe(true);
                }}
            />
            {safe ? props.children : ""}
        </GoogleReCaptchaProvider>
    );
}
