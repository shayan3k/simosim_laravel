import React, { useState, useEffect, useRef } from "react";
import persianJs from "persianjs";
import GoldCrown from "../images/gold.png";
import SilverCrown from "../images/silver.png";
import BronzCrown from "../images/bronz.png";
import secureStorage from "../services/Storage";

export default function Advertisment(props) {
    const [toggle, setToggle] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
    const [status, setStatus] = useState(props.status);
    const [location, setLocation] = useState(props.location);
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
        console.log(e.currentTarget);
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
        if (sale === "فوری")
            return <div className="card-flag font3-4">فوری</div>;
        else if (value === "طلایی")
            return (
                <div className="card-crown font3-4">
                    <img
                        className="w-100 h-100"
                        src={GoldCrown}
                        alt="GoldCrown"
                    />
                </div>
            );
        else if (value === "نقره ای")
            return (
                <div className="card-crown font3-4">
                    <img
                        className="w-100 h-100"
                        src={SilverCrown}
                        alt="SilverCrown"
                    />
                </div>
            );
        else if (value === "برنز")
            return (
                <div className="card-crown font3-4">
                    <img className="w-100 h-100" src={BronzCrown} alt="crown" />
                </div>
            );
        else {
            return <div className="card-flag font3-4">Not found</div>;
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
            className="card flip-card w-100 h-100 advertisment py-0 shadow position-relative bg-transparent position-relative"
            onClick={handleAdvertismentClick}
        >
            {flagRender()}

            <div className="card-body flip-card-front w-100 h-100 mh-100 d-flex justify-content-between align-items-center flex-column p-1 ">
                <div className="card-inner-width w-100">
                    <h3 className="ad-number font1-2 text-right pt-0">
                        {persianJs(phoneNumber)
                            .englishNumber()
                            .toString()}
                    </h3>
                    <hr className="py-0 my-0" />
                </div>
                <div className="card-inner-width">
                    <h6 className="card-title font3 text-center  p-0  m-0 py-1">
                        {status} | {location}
                    </h6>

                    {sale ? (
                        <>
                            <p className="card-text font2 text-center p-0 m-0">
                                {persianJs(secondPrice)
                                    .englishNumber()
                                    .toString()}
                                تومان
                            </p>
                            <p className="card-text line-through font3 line text-center p-0 m-0 pb-1">
                                {persianJs(price)
                                    .englishNumber()
                                    .toString()}
                                تومان
                            </p>
                        </>
                    ) : (
                        <p className="card-text font2 text-center p-0 m-0">
                            {persianJs(price)
                                .englishNumber()
                                .toString()}
                            تومان
                        </p>
                    )}

                    <div className="w-100 font3 ">{text}</div>
                </div>
                <div className="mt-auto card-inner-width  mb-0">
                    <hr className="my-1 " />
                    <div className="m-0 p-0 d-flex justify-content-between align-items-end">
                        <span className="lead font3 h-100">4 ساعت قبل</span>
                        {RondRender()}
                    </div>
                </div>
            </div>
            <div className="flip-card-back d-flex justify-content-center align-items-center flex-column">
                <div className="card-body w-100 d-flex justify-content-center align-items-center flex-column  ">
                    <div className="flip-card-background"></div>
                    <h1 className="font1 text-center p-2">
                        {persianJs(sellerPhoneNumber)
                            .englishNumber()
                            .toString()}
                    </h1>
                    <p className="font2 text-center p-2">{sellerName}</p>

                    {secureStorage.getItem("username") === sellerPhoneNumber ? (
                        <button
                            className="btn btn-outline-danger"
                            onClick={e =>
                                handleDeleteBtn(e, id, sellerPhoneNumber)
                            }
                        >
                            پاک کردن
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
