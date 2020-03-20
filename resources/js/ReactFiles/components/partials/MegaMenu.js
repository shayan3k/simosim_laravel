import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TimelineLite } from "gsap";
import { JWTLogout } from "../services/Auth";
import { useStoreState, useStoreActions } from "easy-peasy";
import secureStorage from "../services/Storage";

export default function MegaMenu() {
    const adminSecretKey = process.env.MIX_ADMIN_SECRET_KEY;
    // const adminSecretKey = "true";

    const [hamraheAval, setHamraheAval] = useState(false);
    const [irancell, setIrancell] = useState();
    const [rightel, setRightel] = useState();
    const [talia, setTalia] = useState();
    const [samanTel, setSamanTel] = useState();
    const logedIn = useStoreState(state => state.auth.logedIn);
    const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);
    const setPhoneNumber = useStoreActions(
        actions => actions.auth.setPhoneNumber
    );
    const setNiceName = useStoreActions(actions => actions.auth.setNiceName);

    const [AnimationHamraheAval, setAnimationHamraheAval] = useState(
        new TimelineLite({
            paused: true
        })
    );

    const [AnimationIrancell, setAnimationIrancell] = useState(
        new TimelineLite({
            paused: true
        })
    );

    const [AnimationRightel, setAnimationRightel] = useState(
        new TimelineLite({
            paused: true
        })
    );

    const [AnimationTalia, setAnimationTalia] = useState(
        new TimelineLite({
            paused: true
        })
    );

    const [AnimationSamanTel, setAnimationSamanTel] = useState(
        new TimelineLite({
            paused: true
        })
    );

    // useEffect(() => {
    //     componentMountConfig();
    // }, []);

    // useEffect(() => {
    //     componentUpdateConfig();
    // });

    const handleLogoutBtn = () => {
        console.log("Logout Clicked");
        let elements = document.querySelectorAll(".login-btn");

        JWTLogout()
            .then(res => {
                setLogedIn(false);
                setPhoneNumber("");
                setNiceName("");
                console.log("Loged out");
                console.log(res);
            })
            .catch(e => {
                setLogedIn(false);
                setPhoneNumber("");
                setNiceName("");
                console.log("Loged out");
                console.log("can not sign out at this moment!", e);
            });
    };

    const componentMountConfig = () => {
        hamraheAvalConfig();
        irancellConfig();
        rightelConfig();
        samanTelConfig();
        taliaConfig();

        window.addEventListener("click", e => {
            if (document.getElementById("mega-menu")) {
                if (document.getElementById("mega-menu").contains(e.target)) {
                } else {
                    setHamraheAval(false);
                    setIrancell(false);
                    setRightel(false);
                    setTalia(false);
                    setSamanTel(false);
                }
            }
        });
    };
    const componentUpdateConfig = () => {
        hamraheAval
            ? AnimationHamraheAval.play()
            : AnimationHamraheAval.reverse();

        irancell ? AnimationIrancell.play() : AnimationIrancell.reverse();

        rightel ? AnimationRightel.play() : AnimationRightel.reverse();

        talia ? AnimationTalia.play() : AnimationTalia.reverse();

        samanTel ? AnimationSamanTel.play() : AnimationSamanTel.reverse();
    };
    const hamraheAvalConfig = () => {
        AnimationHamraheAval.to("#hamraheAvalMenu", 0.2, {
            css: { display: "" }
        })
            .fromTo(
                " .megaMenuContent .default-btn",
                0.2,
                { css: { left: "-5%", opacity: 0 } },
                { css: { left: 0, opacity: 1 } }
            )
            .to("#hamraheAval", 0, {
                css: {
                    background: "red",
                    color: "white"
                }
            });

        hamraheAval
            ? AnimationHamraheAval.play()
            : AnimationHamraheAval.reverse();
    };
    const handleHamraheAvalBtn = item => {
        setHamraheAval(!hamraheAval);
        setIrancell(false);
        setRightel(false);
        setTalia(false);
        setSamanTel(false);
    };
    const irancellConfig = () => {
        AnimationIrancell.to("#irancellMenu", 0.2, {
            css: { display: "" }
        })
            .fromTo(
                ".megaMenuContent .default-btn",
                0.2,
                { css: { left: "-5%", opacity: 0 } },
                { css: { left: 0, opacity: 1 } }
            )
            .to("#irancell", 0, {
                css: {
                    background: "red",
                    color: "white"
                }
            });

        irancell ? AnimationIrancell.play() : AnimationIrancell.reverse();
    };
    const handleIrancellBtn = item => {
        setHamraheAval(false);
        setIrancell(!irancell);
        setRightel(false);
        setTalia(false);
        setSamanTel(false);
    };
    const rightelConfig = () => {
        AnimationRightel.to("#rightelMenu", 0.2, {
            css: { display: "" }
        })
            .fromTo(
                ".megaMenuContent .default-btn",
                0.2,
                { css: { left: "-5%", opacity: 0 } },
                { css: { left: 0, opacity: 1 } }
            )
            .to("#rightel", 0, {
                css: {
                    background: "red",
                    color: "white"
                }
            });

        hamraheAval ? AnimationRightel.play() : AnimationRightel.reverse();
    };
    const handleRightelBtn = () => {
        setHamraheAval(false);
        setIrancell(false);
        setRightel(!rightel);
        setTalia(false);
        setSamanTel(false);
    };
    const taliaConfig = () => {
        AnimationTalia.to("#taliaMenu", 0.2, {
            css: { display: "" }
        })
            .fromTo(
                ".megaMenuContent .default-btn",
                0.2,
                { css: { left: "-5%", opacity: 0 } },
                { css: { left: 0, opacity: 1 } }
            )
            .to("#talia", 0, {
                css: {
                    background: "red",
                    color: "white"
                }
            });

        talia ? AnimationTalia.play() : AnimationTalia.reverse();
    };
    const handleTaliaBtn = () => {
        setHamraheAval(false);
        setIrancell(false);
        setRightel(false);
        setTalia(!talia);
        setSamanTel(false);
    };
    const samanTelConfig = () => {
        AnimationSamanTel.to("#samanTelMenu", 0.2, {
            css: { display: "" }
        })
            .fromTo(
                ".megaMenuContent .default-btn",
                0.2,
                { css: { left: "-5%", opacity: 0 } },
                { css: { left: 0, opacity: 1 } }
            )
            .to("#samanTel", 0, {
                css: {
                    background: "red",
                    color: "white"
                }
            });

        samanTel ? AnimationSamanTel.play() : AnimationSamanTel.reverse();
    };
    const handlesamanTelBtn = () => {
        console.log("here");
        setHamraheAval(false);
        setIrancell(false);
        setRightel(false);
        setTalia(false);
        setSamanTel(!samanTel);
    };

    return (
        <>
            <div
                className="container mega-menu d-flex justify-content-between align-items-center position-relative flex-column px-0 px-md-1"
                id="mega-menu"
            >
                <div className="w-100 m-0 p-2 d-flex justify-content-between align-items-center">
                    <div className="px-1 d-inline">
                        {logedIn ? (
                            <div className="d-flex justify-content-between align-items-center">
                                {secureStorage.getItem("is_admin") ==
                                adminSecretKey ? (
                                    <>
                                        <span
                                            className="login-btn p-0 m-0"
                                            onClick={() => handleLogoutBtn()}
                                        >
                                            <i className="fas fa-sign-out-alt fa-2x bg-links"></i>
                                        </span>
                                        <Link
                                            className="login-btn bg-links px-3 font2"
                                            to="/admin"
                                            style={{ textDecoration: "none" }}
                                        >
                                            ادمین
                                        </Link>
                                        |
                                        <Link
                                            className="login-btn d-inline-block bg-links  px-3 font2"
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
                                            <i className="fas fa-sign-out-alt fa-2x bg-links"></i>
                                        </span>
                                        <Link
                                            className="login-btn font2 d-inline-block bg-links  px-3 font2"
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
                                <i className="fas fa-sign-in-alt fa-rotate-180 fa-2x"></i>
                                <span className="px-3  font2">
                                    ورود/ثبت نام
                                </span>
                            </Link>
                        )}
                    </div>
                    <div className="font1-2 d-flex justify-content-end align-items-center bg-links">
                        {secureStorage.getItem("is_admin") == adminSecretKey ? (
                            <span className="px-3 font4">
                                {" "}
                                خوش آمدید
                                <span className="font3 px-2">
                                    {secureStorage.getItem("name")}
                                </span>
                            </span>
                        ) : (
                            <Link
                                className="d-flex justify-content-center align-items-center bg-links"
                                to="/login"
                                style={{ textDecoration: "none" }}
                            >
                                خوش آمدید
                                <span
                                    className="font1 px-2"
                                    style={{ color: "lightblue" }}
                                >
                                    سیم سیم
                                </span>
                                به
                            </Link>
                        )}
                    </div>

                    {/* <div className="font2 d-flex justify-content-end align-items-center">
                        <button
                            type="button"
                            className="btn-mega-menu  m-0 mt-1 ml-2"
                            id="samanTel"
                            onClick={() => handlesamanTelBtn()}
                        >
                            <i className="fas fa-caret-down fa-1x px-1 d-none "></i>
                            سامانتل
                        </button>
                        <button
                            type="button"
                            className="btn-mega-menu m-0 mt-1 ml-2"
                            id="talia"
                            onClick={() => handleTaliaBtn()}
                        >
                            <i className="fas fa-caret-down fa-1x px-1  d-none "></i>
                            تالیا
                        </button>
                        <button
                            type="button"
                            className="btn-mega-menu m-0 mt-1 ml-2"
                            id="rightel"
                            onClick={() => handleRightelBtn()}
                        >
                            <i className="fas fa-caret-down fa-1x px-1  d-none "></i>
                            رایتل
                        </button>
                        <button
                            type="button"
                            className="btn-mega-menu m-0 mt-1 ml-2"
                            id="irancell"
                            onClick={() => handleIrancellBtn()}
                        >
                            <i className="fas fa-caret-down fa-1x px-1  d-none "></i>
                            ایرانسل
                        </button>
                        <button
                            type="button"
                            className="btn-mega-menu m-0 mt-1 ml-2"
                            id="hamraheAval"
                            onClick={() => handleHamraheAvalBtn()}
                        >
                            <i className="fas fa-caret-down fa-1x px-1  d-none "></i>
                            همراه اول
                        </button>
                    </div>
       */}
                </div>
                {/* <div className="div w-100">
                    <div
                        className="megaMenuPanel bg-transparent m-0 p-0 py-3"
                        style={{ display: "none" }}
                        id="hamraheAvalMenu"
                    >
                        <div className="row p-0 m-0 d-flex justify-content-end align-items-center">
                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>همراه اول</h6>
                                    <i className="fa fa-spinner faIcons"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>همراه اول</h6>
                                    <i className="fa fa-spinner"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>همراه اول</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-4 order-sm-1 megaMenuContent">
                                <div className="div w-75 mx-auto">
                                    <ul>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>همراه اول</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>همراه اول</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>همراه اول</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>همراه اول</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>همراه اول</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="megaMenuPanel bg-transparent m-0 p-0"
                        style={{ display: "none" }}
                        id="irancellMenu"
                    >
                        <div className="row p-0 m-0 d-flex justify-content-end align-items-center">
                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>ایرانسل</h6>
                                    <i className="fa fa-spinner faIcons"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>ایرانسل</h6>
                                    <i className="fa fa-spinner"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>ایرانسل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-4 order-sm-1 megaMenuContent">
                                <div className="div w-75 mx-auto">
                                    <ul>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>ایرانسل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>ایرانسل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>ایرانسل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>ایرانسل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>ایرانسل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div
                        className="megaMenuPanel bg-transparent m-0 p-0"
                        style={{ display: "none" }}
                        id="rightelMenu"
                    >
                        <div className="row p-0 m-0 d-flex justify-content-end align-items-center">
                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>رایتل</h6>
                                    <i className="fa fa-spinner faIcons"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>رایتل</h6>
                                    <i className="fa fa-spinner"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>رایتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-4 order-sm-1 megaMenuContent">
                                <div className="div w-75 mx-auto">
                                    <ul>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>رایتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>رایتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>رایتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>رایتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>رایتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="megaMenuPanel bg-transparent m-0 p-0"
                        style={{ display: "none" }}
                        id="taliaMenu"
                    >
                        <div className="row p-0 m-0 d-flex justify-content-end align-items-center">
                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>تالیا</h6>
                                    <i className="fa fa-spinner faIcons"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>تالیا</h6>
                                    <i className="fa fa-spinner"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>تالیا</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-4 order-sm-1 megaMenuContent">
                                <div className="div w-75 mx-auto">
                                    <ul>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>تالیا</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>تالیا</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>تالیا</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>تالیا</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>تالیا</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="megaMenuPanel bg-transparent m-0 p-0"
                        style={{ display: "none" }}
                        id="samanTelMenu"
                    >
                        <div className="row p-0 m-0 d-flex justify-content-end align-items-center">
                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>سامانتل</h6>
                                    <i className="fa fa-spinner faIcons"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 order-sm-2 megaMenuContent">
                                <div className="default-btn btn-search-options-item my-1 ml-auto megaMenuTitle">
                                    <h6>سامانتل</h6>
                                    <i className="fa fa-spinner"></i>
                                </div>
                                <ul>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                    <li className="default-btn btn-search-options-item my-1">
                                        <h6>سامانتل</h6>
                                        <i className="fa fa-spinner"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-4 order-sm-1 megaMenuContent">
                                <div className="div w-75 mx-auto">
                                    <ul>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>سامانتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>سامانتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>سامانتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>سامانتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                        <li className="default-btn btn-search-options-item my-1">
                                            <h6>سامانتل</h6>
                                            <i className="fa fa-spinner"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    */}
            </div>
        </>
    );
}
