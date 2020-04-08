import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TimelineLite } from "gsap";
import Loading from "./Loading";
import { JWTLogout } from "../services/Auth";
import { useStoreState, useStoreActions } from "easy-peasy";
import secureStorage from "../services/Storage";

export default function MegaMenu() {
    const adminSecretKey = process.env.MIX_ADMIN_SECRET_KEY;
    // const adminSecretKey = "true";

    const [isLoaded, setIsLoaded] = useState(true);

    const logedIn = useStoreState(state => state.auth.logedIn);
    const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);
    const setPhoneNumber = useStoreActions(
        actions => actions.auth.setPhoneNumber
    );
    const setNiceName = useStoreActions(actions => actions.auth.setNiceName);

    const handleLogoutBtn = () => {
        JWTLogout()
            .then(res => {
                setLogedIn(false);
                setPhoneNumber("");
                setNiceName("");
                setIsLoaded(false);
            })
            .catch(e => {
                setLogedIn(false);
                setPhoneNumber("");
                setNiceName("");
                setIsLoaded(false);
            });
    };

    return (
        <div
            className="container mega-menu d-flex justify-content-between align-items-center position-relative flex-column px-0 px-md-1"
            id="mega-menu"
        >
            <div className="w-100 m-0 p-2 d-flex justify-content-between align-items-center">
                <div className="px-1 d-inline">
                    {logedIn == "notset" ? (
                        <Loading />
                    ) : logedIn == "true" ? (
                        <div className="d-flex justify-content-between align-items-center">
                            {secureStorage.getItem("is_admin") ==
                            adminSecretKey ? (
                                <>
                                    <span
                                        className="login-btn p-0 m-0"
                                        onClick={() => handleLogoutBtn()}
                                    >
                                        <i className="fas fa-sign-out-alt fa-1x bg-links"></i>
                                    </span>
                                    <Link
                                        className="login-btn bg-links px-3 font3"
                                        to="/admin"
                                        style={{ textDecoration: "none" }}
                                    >
                                        ادمین
                                    </Link>
                                    |
                                    <Link
                                        className="login-btn d-inline-block bg-links  px-3 font3"
                                        to="/dashboard"
                                        style={{ textDecoration: "none" }}
                                    >
                                        داشبورد
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <span
                                        className="login-btn p-0 m-0"
                                        onClick={() => handleLogoutBtn()}
                                    >
                                        <i className="fas fa-sign-out-alt fa-1x bg-links"></i>
                                    </span>
                                    <Link
                                        className="login-btn font3 d-inline-block bg-links  px-3 font3"
                                        to="/dashboard"
                                        style={{ textDecoration: "none" }}
                                    >
                                        داشبورد
                                    </Link>
                                </>
                            )}
                        </div>
                    ) : (
                        <Link
                            className="login-btn d-flex justify-content-center align-items-center bg-links"
                            to="/login"
                            style={{ textDecoration: "none" }}
                        >
                            <i className="fas fa-sign-in-alt fa-rotate-180 fa-1x"></i>
                            <span className="px-3 font3">ورود/ثبت نام</span>
                        </Link>
                    )}
                </div>
                <div className="font3-2 d-flex justify-content-end align-items-center bg-links">
                    {secureStorage.getItem("is_admin") == adminSecretKey ? (
                        <span className="px-3 font3">
                            خوش آمدید
                            <span className="font5 px-2">
                                {secureStorage.getItem("name")}
                            </span>
                        </span>
                    ) : (
                        <Link
                            className="d-flex justify-content-center align-items-center bg-links font3"
                            to="/login"
                            style={{ textDecoration: "none" }}
                        >
                            خوش آمدید
                            <span
                                className="font3 px-2"
                                style={{ color: "lightblue" }}
                            >
                                سیم سیم
                            </span>
                            به
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
