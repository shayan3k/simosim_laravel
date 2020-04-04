import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { JWTLogin } from "../services/Auth";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const setLogedIn = useStoreActions((actions) => actions.auth.setLogedIn);
    const setError = useStoreActions((actions) => actions.message.setError);

    const disableLoginBtn = () =>
        (document.getElementById("loginbtn").style.cssText =
            "opacity: .3;pointer - events : none;");
    const enableLoginBtn = () =>
        (document.getElementById("loginbtn").style.cssText =
            "opacity: 1;pointer - events : none;");

    const loginRequest = async (e) => {
        e.preventDefault();
        disableLoginBtn();

        let loginData = {
            phonenumber: username,
            password: password,
        };

        JWTLogin(loginData).then((data) => {
            if (data.status === 200) {
                setLogedIn(true);
            } else {
                setError({
                    msg: data.message,
                    status: "danger",
                });
            }
            enableLoginBtn();
            console.log(data);
        });
    };

    const handleUserNameOnChange = (e) => {
        var data = e.target.value.replace(/[^0-9]+/g, "");
        setUsername(data);
    };

    const handlePasswordOnChange = (e) => {
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
                    id="loginbtn"
                    onClick={(e) => loginRequest(e)}
                >
                    ورود
                </button>
                <div className="py-5">
                    <Link to="/resetpassword">
                        <h1 className="font3 d-inline-block font2">
                            رمز خود را فراموش کردید؟
                        </h1>
                    </Link>
                </div>
            </form>
        </>
    );
}
export default Login;
