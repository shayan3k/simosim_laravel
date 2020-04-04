import React, { useEffect, useState } from "react";
import { TimelineMax } from "gsap";
export default function Footer() {
    useEffect(() => {
        let tl = new TimelineMax({ repeat: -1 });
        tl.fromTo(
            ".fa-arrow-up",
            2,
            {
                css: { transform: "translate(10px , 10px) rotate(-45deg)" },
                opacity: 1,
            },
            {
                css: {
                    transform: "translate(-10px , -10px)  rotate(-45deg)",
                    opacity: 0,
                },
            }
        );
    }, []);
    return (
        <>
            <footer className="page-footer stylish-color-dark pt-4">
                <a className="go-to-top" href="#myNavbar">
                    <i className="fas fa-arrow-up fa-rotate-45"></i>
                </a>
                <div className="container text-center text-md-left">
                    <div className="row m-0 p-0 ">
                        <div className="col-12 col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase font6">
                                بورس سیمکارت
                            </h5>
                            <p className="font4">
                                مهم اینه که میتونی بدون واسطه سیمکارت بفروشی
                            </p>
                        </div>

                        <hr className="col-12 clearfix w-100 d-md-none pb-3" />

                        <div className="col-6 col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase font6">لینکها</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="font4">
                                        داشبورد
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="font4">
                                        قوانین
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="font4">
                                        تبلیغات
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="font4">
                                        درباره ما
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase font6">لینکها</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="font4">
                                        خانه
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="font4">
                                        ثبت نام
                                    </a>
                                </li>

                                <li>
                                    <a href="#!" className="font4">
                                        تماس با ما
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row m-0 p-0 w-100 d-flex justify-content-center align-content-center">
                    <div className="col-12 col-md-6 text-right">
                        <h6 className="text-white font4">
                            سیمکارت خود را آگهی کنید
                        </h6>
                        <button className="btn btn-outline-light font4">
                            شروع
                        </button>
                    </div>
                    <div className="col-12 col-md-6 text-right">
                        <h6 className="text-white font4">
                            سیمکارت خود را آگهی کنید
                        </h6>
                    </div>
                </div>
                <div className="container-fluid d-inline-block w-100 bg-dark text-center py-1 mt-3 font3">
                    © 2020 Copyright:
                    <a
                        className="bg-dark font3"
                        href="https://shayanmotalebi.ir"
                    >
                        ShayaNNN
                    </a>
                </div>
            </footer>
        </>
    );
}
