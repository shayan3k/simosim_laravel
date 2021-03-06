import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
    //  More Persistant States
    const setError = useStoreActions(actions => actions.message.setError);
    const setSmsToken = useStoreActions(
        actions => actions.register.setSmsToken
    );
    const setPhonenumberGlob = useStoreActions(
        actions => actions.register.setPhonenumber
    );
    const setNameGlob = useStoreActions(actions => actions.register.setName);
    const setPasswordGlob = useStoreActions(
        actions => actions.register.setPassword
    );

    //Local States
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [CheckBox, setCheckBox] = useState(true);
    const [VerifyPassword, setVerifyPassword] = useState("");

    const baseUrl = process.env.MIX_BASEURL;
    // const registerSmsUrl = process.env.MIX_REGISTER_SMS;
    const registerSmsUrl = process.env.MIX_REGISTER_SMS;

    //Function for resting fields after successfull signup
    const handleResetfields = () => {
        setPhoneNumber("");
        setName("");
        setPassword("");
        setCheckBox(false);
        setVerifyPassword("");
    };

    const handleSubmitButton = e => {
        e.preventDefault();

        document.getElementById("signupSubmitBtn").style.cssText =
            "opacity: .3;pointer - events : none;";

        let flag = false;
        let msg = "";

        if (PhoneNumber.length !== 11 || PhoneNumber.slice(0, 2) !== "09") {
            msg += "<li>شماره تماس وارد شده اشتباه است</li>";
            flag = true;
        }

        if (!Name) {
            msg += "<li>نام وارد شده اشتباه است</li>";
            flag = true;
        }

        if (Password !== VerifyPassword) {
            msg += "<li>رمزهای وارد مغایر است</li>";
            flag = true;
        }

        if (Password.length < 8) {
            msg += "<li>رمز عبور وارد شده کمتر از 8 کرکتر است</li>";
            flag = true;
        }

        if (!CheckBox) {
            msg += "<li>تیک قوانین نزده نشده</li>";
            flag = true;
        }
        let data = {
            phonenumber: PhoneNumber,
            name: Name,
            password: Password
        };
        // console.log(data);
        if (!flag) {
            axios
                .post(baseUrl + registerSmsUrl, data)
                .then(res => {
                    // console.log(res);
                    setError({
                        msg: res.data.message,
                        status: "success"
                    });
                    handleResetfields();
                    setSmsToken(res.data.smsToken);
                    setPhonenumberGlob(PhoneNumber);
                    setNameGlob(Name);
                    setPasswordGlob(Password);
                })
                .catch(e => {
                    if (e.response.status == 500) {
                        setError({
                            msg:
                                "امکان ایجاد اکانت برای این شماره در حال حاظر وجود ندارد",
                            status: "danger"
                        });
                        document.getElementById(
                            "signupSubmitBtn"
                        ).style.cssText = "";
                    } else
                        setError({
                            msg: e.response.data.message,
                            status: "danger"
                        });
                    document.getElementById("signupSubmitBtn").style.cssText =
                        "";
                });
        } else {
            setError({
                msg,
                status: "danger"
            });
            enableSignUpBtn();
        }
    };

    const handlePhoneNumberOnChange = e => {
        var data = e.target.value.replace(/[^0-9]+/g, "");
        setPhoneNumber(data);
    };

    const handleNameOnChange = e => {
        var data = e.target.value.replace(/[^\u0600-\u06FF\s]/g, "");
        setName(data);
    };

    return (
        <>
            <form
                className="col-md-6 order-2 order-md-1"
                onSubmit={handleSubmitButton}
            >
                <h3 className="my-4 font4">ثبت اکانت جدید</h3>
                <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                    <input
                        className="form-control font3"
                        id="username"
                        name="username"
                        placeholder="شماره موبایل خود را وارد کنید"
                        type="text"
                        maxLength="11"
                        value={PhoneNumber}
                        onChange={handlePhoneNumberOnChange}
                    />
                </div>
                <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                    <input
                        className="form-control font3"
                        id="name"
                        name="name"
                        placeholder="نام"
                        type="text"
                        maxLength="20"
                        value={Name}
                        onChange={handleNameOnChange}
                    />
                </div>

                <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                    <input
                        className="form-control font3"
                        id="password"
                        name="password"
                        placeholder="رمز ورود"
                        type="password"
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                    <input
                        className="form-control font3"
                        id="password2"
                        name="password2"
                        placeholder="تکرار رمز ورود"
                        type="password"
                        value={VerifyPassword}
                        onChange={e => setVerifyPassword(e.target.value)}
                    />
                </div>

                <div class="pretty p-default p-curve p-thick  m-0 p-0 d-block col-10  ml-auto d-flex justify-content-end align-items-center">
                    <input
                        type="checkbox"
                        id="checkBox"
                        checked={CheckBox}
                        onChange={e => setCheckBox(e.target.checked)}
                    />
                    <div class="state p-success-o form-check-label font2">
                        <label htmlFor="checkBox">
                            <Link to="/ghavanin">قوانین</Link> را مطالعه کردم و
                            قبول دارم
                        </label>
                    </div>
                </div>
                <button
                    className="btn btn-primary btn-lg my-3 font4"
                    id="signupSubmitBtn"
                    type="submit"
                >
                    ثبت نام
                </button>
            </form>
        </>
    );
}

export default SignUp;
