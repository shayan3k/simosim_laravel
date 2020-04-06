import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ResetPasswordForm() {
    const baseUrl = process.env.MIX_BASEURL;
    // const registerSmsUrl = process.env.MIX_FORGET_SMS;
    const forgetSmsUrl = process.env.MIX_FORGET_SMS;
    // const changePasswordUrl = process.env.MIX_CHANGE_PASSWORD;
    const changePasswordUrl = process.env.MIX_CHANGE_PASSWORD;

    const [resetPassPhonenummber, setResetPassPhonenummber] = useState();
    const [verificationPin, setVerificationPin] = useState("");
    const [msg, setMsg] = useState("");
    const [status, setStatus] = useState("");
    const [toggler, setToggler] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        // returned function will be called on component unmount
        return () => {
            setMsg("");
            setStatus("");
        };
    }, []);

    const handleSendResetPasswordSMS = e => {
        e.preventDefault();
        setMsg("");
        setStatus("");

        axios({
            method: "POST",
            url: baseUrl + forgetSmsUrl,
            data: {
                phonenumber: resetPassPhonenummber
            }
        })
            .then(res => {
                console.log(res);
                setToggler(!toggler);
                setMsg(
                    "تا دقاقی دیگر کد احراض حویت به شماره موبایلتون ارسال خواهد شد"
                );
                setStatus("success");
            })
            .catch(e => {
                console.log(e.response);
                setMsg(e.response.data.message);
                setStatus("danger");
            });
    };

    const handleSendResetPasswordVerify = e => {
        e.preventDefault();
        setMsg("");
        setStatus("");

        axios({
            method: "POST",
            url: baseUrl + changePasswordUrl,
            data: {
                phonenumber: resetPassPhonenummber,
                token: verificationPin
            }
        })
            .then(res => {
                console.log(res);

                setMsg(
                    "رمز شما با موفقیت تغییر یافت.تا دقایقی دیگر رمز جدید را از طریق پیام کوتاه دریافت خواهید کرد"
                );
                setStatus("success");
                setHidden(true);
            })
            .catch(e => {
                console.log(e.response);
                setMsg(e.response.data.message);
                setStatus("danger");
            });
    };

    return (
        <div class="modal-body">
            {msg ? (
                <ul
                    className={"alert font3 unstyled list alert-" + status}
                    dangerouslySetInnerHTML={{ __html: msg }}
                />
            ) : (
                ""
            )}

            {hidden ? (
                ""
            ) : toggler ? (
                <form onSubmit={handleSendResetPasswordVerify}>
                    <div className="input-group">
                        <input
                            className="form-control font3 my-2"
                            placeholder="کد ارسالی به موبایل خود را وارد کنید"
                            type="text"
                            maxLength="6"
                            value={verificationPin}
                            onChange={e => setVerificationPin(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        class="btn btn-primary"
                        value="تایید"
                    />
                </form>
            ) : (
                <form onSubmit={handleSendResetPasswordSMS}>
                    <div className="input-group">
                        <input
                            className="form-control font3 my-2"
                            placeholder="شماره موبایل خود را وارد کنید"
                            type="text"
                            maxLength="11"
                            value={resetPassPhonenummber}
                            onChange={e =>
                                setResetPassPhonenummber(e.target.value)
                            }
                        />
                    </div>
                    <input
                        type="submit"
                        class="btn btn-primary"
                        value="ارسال"
                    />
                </form>
            )}
        </div>
    );
}
