import React, { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";
import { TimelineLite, Power4 } from "gsap";
import { Link } from "react-router-dom";
import TimeAndDate from "./TimeAndDate";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

function Navbar() {
    const [menuTogglerAnimation, setMenuTogglerAnimation] = useState(
        new TimelineLite({ paused: true })
    );
    const [Navbar, setNavbar] = useState([]);

    const baseUrl = process.env.MIX_BASEURL;
    // const navbar = process.env.MIX_NAVBAR;
    const navbarUrl = "/navbar";

    useEffect(() => {
        axios
            .get(baseUrl + navbarUrl)
            .then(res => {
                console.log(res.data);
                setNavbar(res.data);
            })
            .catch(e => console.log(e));

        menuTogglerAnimation
            .to(".MenuOpenner", 0.3, {
                css: { transform: "translateX(-10px)", opacity: "0" }
            })
            .to(".MenuCloser", 0.1, {
                css: { width: "", height: "", visibility: "" }
            })
            .to(`.mobile-menu`, 0.3, {
                ease: Power4.easeOut,
                height: "100%",
                visibility: "visible",
                margin: "",
                padding: ""
            });
        let el1 = document.querySelector(".mobile-menu");
        let el2 = document.querySelector(".MenuCloser");
        el1.style.height = 0;
        el1.style.width = 0;
        el1.style.margin = 0;
        el1.style.padding = 0;
        el2.style.width = 0;
        el2.style.visibility = "hidden";
    }, []);
    const handleMenuOpenner = e => {
        menuTogglerAnimation.play();
    };
    const handleMenuCloser = e => {
        menuTogglerAnimation.reverse();
    };
    return (
        <nav className="container-fluid row px-0 w-100 myNavbar" id="myNavbar">
            <div className="container row px-0 mx-auto d-flex justify-content-between align-items-center flex-nowrap ">
                <ul className="navbar-brand pl-0">
                    <li className="nav-item navbar-item-active mr-auto c-white">
                        <i
                            className="fa fa-calendar pr-3 c-white fa-2x"
                            aria-hidden="true"
                        ></i>
                        <TimeAndDate />
                    </li>
                </ul>
                <ul className="navbar-ul d-flex d-md-none  order-sm-4 order-md-3">
                    <li
                        className="nav-link p-0 MenuOpenner"
                        onClick={handleMenuOpenner}
                    >
                        <i className="fa fa-bars fa-2x"></i>
                    </li>
                    <li
                        className="nav-link MenuCloser p-0 "
                        onClick={handleMenuCloser}
                    >
                        <i className="fa fa-times fa-2x"></i>
                    </li>
                </ul>
                <div className="navbar-ul d-none d-md-inline-block order-sm-2 order-md-2">
                    <div className="div m-0 p-0 d-flex justify-content-end align-items-center">
                        {Navbar.length ? (
                            Navbar.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link
                                            className="nav-link font3 p-sm-1 px-md-2"
                                            to={item.url}
                                        >
                                            {item.post_title}
                                        </Link>
                                    </li>
                                );
                            })
                        ) : (
                            <Skeleton
                                count={5}
                                width={40}
                                className="mx-3 px-3"
                            />
                        )}
                    </div>
                </div>
            </div>
            <ul className="mobile-menu container row px-0 mx-auto d-flex justify-content-between align-items-center">
                {Navbar.length ? (
                    Navbar.slice(0)
                        .reverse()
                        .map((item, index) => (
                            <Link
                                key={index}
                                className="mobile-menu-item"
                                to={"/wordpress" + item.url}
                            >
                                <span> {item.post_title}</span>
                            </Link>
                        ))
                ) : (
                    <Skeleton count={5} width={40} />
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
