import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";
import { JWTLogin } from "../services/Auth";

export default function SMSVerification() {
    const baseUrl = process.env.MIX_BASEURL;
    const registerUrl = process.env.MIX_REGISTERURL;

    const smsToken = useStoreState(state => state.register.smsToken);
    const phonenumber = useStoreState(state => state.register.phonenumber);
    const name = useStoreState(state => state.register.name);
    const password = useStoreState(state => state.register.password);

    const setSmsToken = useStoreActions(
        actions => actions.register.setSmsToken
    );
    const setPhonenumber = useStoreActions(
        actions => actions.register.setPhonenumber
    );
    const setName = useStoreActions(actions => actions.register.setName);
    const setPassword = useStoreActions(
        actions => actions.register.setPassword
    );
    const setError = useStoreActions(actions => actions.message.setError);
    const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);

    const [smsTokenLocal, setSmsTokenLocal] = useState("");
    const handleSubmitBtn = e => {
        e.preventDefault();
        if (smsTokenLocal == smsToken) {
            axios({
                method: "POST",
                url: baseUrl + registerUrl,
                data: {
                    smsToken: smsToken,
                    phonenumber: phonenumber,
                    name: name,
                    password: password
                }
            })
                .then(res => {
                    console.log(res);
                    setError({
                        msg: res.data.message,
                        status: "success"
                    });

                    let loginData = {
                        phonenumber: phonenumber,
                        password: password
                    };

                    setSmsToken("");
                    setPassword("");
                    setPhonenumber("");
                    setName("");

                    JWTLogin(loginData).then(data => {
                        if (data.status === 200) {
                            setLogedIn(true);
                        } else {
                            setError({
                                msg: data.message,
                                status: "danger"
                            });
                        }
                        console.log(data);
                    });
                })
                .catch(e => console.log(e.response));
        }
        console.log("smsToken = " + smsToken);
    };

    console.log();
    return smsToken && phonenumber && password && name ? (
        <div className="alert alert-info">
            <form onSubmit={handleSubmitBtn}>
                <div className="input-group">
                    <div className="ml-auto py-4">
                        رمز موقت ارسال شده به گوشی خود را برای تکمیل ثبتنام وارد
                        کنید
                    </div>
                </div>

                <div className="input-group row">
                    <div className="col-2 px-2  ml-auto">
                        <button type="submit" className="btn btn-light">
                            تایید
                        </button>
                    </div>
                    <input
                        type="text"
                        maxLength="5"
                        className="col-3 form-control"
                        value={smsTokenLocal}
                        onChange={e => setSmsTokenLocal(e.target.value)}
                    />
                </div>
            </form>
        </div>
    ) : (
        ""
    );
}
