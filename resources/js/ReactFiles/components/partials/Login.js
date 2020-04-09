import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { JWTLogin } from "../services/Auth";
import ResetPasswordForm from "./ResetPasswordForm";

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);
    const setError = useStoreActions(actions => actions.message.setError);

    const loginRequest = async e => {
        e.preventDefault();
        document.getElementById("loginSubmitBtn").style.cssText =
            "opacity: .3;pointer - events : none;";

        let loginData = {
            phonenumber: username,
            password: password
        };

        JWTLogin(loginData).then(data => {
            if (data.status === 200) {
                setLogedIn("true");
            } else {
                setError({
                    msg: data.message,
                    status: "danger"
                });
                document.getElementById("loginSubmitBtn").style.cssText = "";
            }
        });
    };

    const handleUserNameOnChange = e => {
        var data = e.target.value.replace(/[^0-9]+/g, "");
        setUsername(data);
    };

    const handlePasswordOnChange = e => {
        setPassword(e.target.value);
    };

    return (
        <>
            <form className="col-md-6  order-1 order-md-2">
                <h3 className="my-4 font4">ورود به سیستم</h3>
                <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                    <input
                        className="form-control font3"
                        placeholder="شماره موبایل"
                        type="text"
                        maxLength="11"
                        value={username}
                        onChange={handleUserNameOnChange}
                    />
                </div>
                <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                    <input
                        className="form-control font3"
                        placeholder="رمز ورود"
                        type="password"
                        value={password}
                        onChange={handlePasswordOnChange}
                    />
                </div>
                <button
                    className="btn btn-primary btn-lg my-3 font4"
                    type="button"
                    id="loginSubmitBtn"
                    onClick={e => loginRequest(e)}
                >
                    ورود
                </button>
                <div className="py-5">
                    <button
                        type="button"
                        class="btn-reset-password d-inline-block font2"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        رمز خود را فراموش کردید؟
                    </button>

                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        رمز عبور خود را فراموش کردید؟
                                    </h5>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <ResetPasswordForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Login;
