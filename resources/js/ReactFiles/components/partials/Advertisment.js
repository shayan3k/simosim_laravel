import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import persianJs from "persianjs";
import GoldCrown from "../images/gold.png";
import SilverCrown from "../images/silver.png";
import BronzCrown from "../images/bronz.png";
import secureStorage from "../services/Storage";
import ReactTimeAgo from "react-time-ago";

export default function Advertisment(props) {
    const [toggle, setToggle] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
    const [status, setStatus] = useState(props.status);
    const [location, setLocation] = useState(props.location);
    const [id, setId] = useState(props.id);
    const [code, setCode] = useState(props.code);
    const [rond, setRond] = useState(props.rond);
    const [value, setValue] = useState(props.value);
    const [price, setPrice] = useState(props.price);
    const [secondPrice, setSecondPrice] = useState(props.secondPrice);
    const [text, setText] = useState(props.text);
    const [sellerPhoneNumber, setSellerPhoneNumber] = useState(
        props.sellerPhoneNumber
    );
    const [sellerName, setSellerName] = useState(props.sellerName);
    const [sale, setSale] = useState(props.sale);
    const [targetElement, setTargetElement] = useState("");

    const handleAdvertismentClick = e => {
        setTargetElement(e.currentTarget);
        setToggle(!toggle);
    };

    useEffect(() => {
        targetElement
            ? (targetElement.style.cssText = toggle
                  ? "transform: rotateY(180deg); transition : all 0.5s;transition-timing-function: ease-out;"
                  : "transform: rotateY(0); transition : all 0.5s;transition-timing-function: ease-out;")
            : "";
    }, [toggle]);

    useEffect(() => {
        setPhoneNumber(props.phoneNumber);
        setStatus(props.status);
        setLocation(props.location);
        setCode(props.code);
        setRond(props.rond);
        setValue(props.value);
        setPrice(props.price);
        setSecondPrice(props.secondPrice);
        setText(props.text);
        setSellerPhoneNumber(props.sellerPhoneNumber);
        setSellerName(props.sellerName);
        setSale(props.sale);
    }, [props]);

    const flagRender = () => {
        if (sale === "فوری") return <div className="card-flag font3">فوری</div>;
        else if (value === "طلایی")
            return (
                <div className="card-crown font3">
                    <img
                        className="w-100 h-100"
                        src={GoldCrown}
                        alt="GoldCrown"
                    />
                </div>
            );
        else if (value === "نقره ای")
            return (
                <div className="card-crown font3">
                    <img
                        className="w-100 h-100"
                        src={SilverCrown}
                        alt="SilverCrown"
                    />
                </div>
            );
        else if (value === "برنز")
            return (
                <div className="card-crown font3">
                    <img className="w-100 h-100" src={BronzCrown} alt="crown" />
                </div>
            );
        else {
            return <div className="card-flag font3">Not found</div>;
        }
    };

    const RondRender = () => {
        if (rond === "رند")
            return <span className="card-rond font2 h-100">{rond}</span>;
        else if (rond === "نیمه رند")
            return <span className="card-nime-rond font2 h-100">{rond}</span>;
    };

    return (
        <div
            className="card m-0 flip-card advertisment py-0 shadow bg-transparent"
            onClick={handleAdvertismentClick}
        >
            <div className="card-body flip-card-front w-100 h-100 mh-100 d-flex justify-content-between align-items-center flex-column p-1 ">
                {flagRender()}

                <div className="card-inner-width w-100">
                    <h3 className="ad-number font5 text-right pt-0">
                        <Link to={"/" + phoneNumber}>
                            {phoneNumber
                                ? persianJs(phoneNumber)
                                      .englishNumber()
                                      .toString()
                                : ""}
                        </Link>
                    </h3>
                    <hr className="py-0 my-0" />
                </div>
                <div className="card-inner-width">
                    <h6 className="card-title font2 text-center  p-0  m-0 py-1">
                        {status} | {location}
                    </h6>

                    {sale ? (
                        <>
                            <p className="card-text font2 text-center p-0 m-0">
                                {secondPrice
                                    ? persianJs(secondPrice * 1000)
                                          .englishNumber()
                                          .toString()
                                    : ""}
                                تومان
                            </p>
                            <p className="card-text line-through font1 line text-center p-0 m-0 pb-1">
                                {price
                                    ? persianJs(price * 1000)
                                          .englishNumber()
                                          .toString()
                                    : ""}
                                تومان
                            </p>
                        </>
                    ) : (
                        <p className="card-text font2 text-center p-0 m-0">
                            {price
                                ? persianJs(price * 1000)
                                      .englishNumber()
                                      .toString()
                                : ""}
                            تومان
                        </p>
                    )}

                    <div className="w-100 font3 ">{text}</div>
                </div>
                <div className="mt-auto card-inner-width  mb-0">
                    <hr className="my-1 " />
                    <div className="m-0 p-0 d-flex justify-content-between align-items-end">
                        <span className="lead font1 h-100">
                            <ReactTimeAgo
                                date={props.updated_at ? props.updated_at : ""}
                                locale="fa"
                            />
                        </span>
                        {RondRender()}
                    </div>
                </div>
            </div>
            <div className="flip-card-back d-flex justify-content-center align-items-center flex-column">
                <div className="card-body w-100 d-flex justify-content-center align-items-center flex-column  ">
                    <h1 className="text-center p-2 font4">
                        {sellerPhoneNumber
                            ? persianJs(sellerPhoneNumber)
                                  .englishNumber()
                                  .toString()
                            : ""}
                    </h1>
                    <p className="font3 text-center p-2">{sellerName}</p>

                    {secureStorage.getItem("phonenumber") ===
                    sellerPhoneNumber ? (
                        <div className="advertisment-btn-wrapper">
                            {props.handleDeleteBtn ? (
                                <button
                                    className="btn-advertisment-delete p-1 m-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="پاک کردن"
                                    onClick={e => props.handleDeleteBtn(id)}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            ) : (
                                ""
                            )}

                            {props.handleBeRoozResaniBtn ? (
                                <button
                                    className="btn-advertisment-berozresani p-1 m-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="به روز رسانی"
                                    onClick={e =>
                                        props.handleBeRoozResaniBtn(id)
                                    }
                                >
                                    <i className="fas fa-poo-storm"></i>
                                </button>
                            ) : (
                                ""
                            )}
                            {props.handleSoldBtn ? (
                                <button
                                    className="btn-advertisment-sold p-1 m-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="فروخته شد"
                                    onClick={e => props.handleSoldBtn(id)}
                                >
                                    <i className="fas fa-dollar-sign"></i>
                                </button>
                            ) : (
                                ""
                            )}

                            {props.handleRetriveBtn ? (
                                <button
                                    className="btn-advertisment-sold p-1 m-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="بازیابی آگهی"
                                    onClick={e => props.handleRetriveBtn(id)}
                                >
                                    <i className="fas fa-trash-restore fa-2x"></i>{" "}
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
