import React, { useState, useEffect } from "react";
import persianJs from "persianjs";
import GoldCrown from "../images/gold.png";
import SilverCrown from "../images/silver.png";
import BronzCrown from "../images/bronz.png";
import SingleAdvertismentComment from "./SingleAdvertismentComment";
import secureStorage from "../services/Storage";

export default function SingleAdvertismentConent(props) {
    const FlagRenderer = () => {
        if (props.sale === "فوری")
            return <div className="card-flag font3 mt-3">فوری</div>;
        else if (props.value === "طلایی")
            return (
                <div className="card-crown font3">
                    <img
                        className="w-100 h-100 mt-3"
                        src={GoldCrown}
                        alt="GoldCrown"
                    />
                </div>
            );
        else if (props.value === "نقره ای")
            return (
                <div className="card-crown font3">
                    <img
                        className="w-100 h-100 mt-3"
                        src={SilverCrown}
                        alt="SilverCrown"
                    />
                </div>
            );
        else if (props.value === "برنز")
            return (
                <div className="card-crown font3">
                    <img
                        className="w-100 h-100 mt-3"
                        src={BronzCrown}
                        alt="crown"
                    />
                </div>
            );
        else {
            return <div className="card-flag font3">Not found</div>;
        }
    };
    return (
        <div className={props.className}>
            <div className="col-12 col-md-5 d-flex flex-column justify-content-between align-content-center">
                <div>
                    {" "}
                    <FlagRenderer />
                    <h1 className="single-phonenumber font10 text-center p-1 py-2 my-4">
                        {props.phonenumber
                            ? persianJs(`${props.phonenumber}`)
                                  .englishNumber()
                                  .toString()
                            : "loading..."}
                    </h1>
                    <h2 className="text-center font7">
                        {props.sellername ? props.sellername : "loading..."}
                    </h2>
                    <h3 className="text-center font4">
                        {props.sellerphonenumber
                            ? props.sellerphonenumber
                            : "loading..."}
                    </h3>
                </div>

                {props.sellerphonenumber ==
                secureStorage.getItem("phonenumber") ? (
                    <div>
                        <hr />
                        <div className="d-flex justify-content-between align-content-center">
                            <button
                                className="btn-advertisment-delete p-1 m-1"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="پاک کردن"
                                onClick={e => props.handleDeleteBtn(id)}
                            >
                                <i className="fas fa-trash-alt fa-2x"></i>
                            </button>

                            <button
                                className="btn-advertisment-berozresani p-1 m-1"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="به روز رسانی"
                                onClick={e => props.handleBeRoozResaniBtn(id)}
                            >
                                <i className="fas fa-poo-storm fa-2x"></i>
                            </button>

                            <button
                                className="btn-advertisment-sold p-1 m-1"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="فروخته شد"
                                onClick={e => props.handleSoldBtn(id)}
                            >
                                <i className="fas fa-dollar-sign fa-2x"></i>
                            </button>
                        </div>
                        <hr className="d-md-none" />
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="col-12 col-md-7">
                <ul className="advertisment-details text-right row m-0 p-0 w-100">
                    <li className="col-6 col-md-12 advertisment-details-item font5 p-1 py-2 my-2 text-white">
                        کد : {props.code ? props.code : "loading..."}
                    </li>
                    <li className="col-6 col-md-12 advertisment-details-item font5 p-1 py-2 my-2 text-white">
                        استان : {props.location ? props.location : "loading..."}
                    </li>

                    <li className="col-6 col-md-12 advertisment-details-item font5 p-1 py-2 my-2 text-white">
                        وضعیت :{" "}
                        {props.simstatus ? props.simstatus : "loading..."}
                    </li>

                    <li className="col-6 col-md-12 advertisment-details-item font5 p-1 py-2 my-2 text-white">
                        قیمت : {props.price ? props.price : "loading..."}
                    </li>

                    <li className="col-6 col-md-12 advertisment-details-item font5 p-1 py-2 my-2 text-white">
                        قیمت دوم :{" "}
                        {props.secondaryprice
                            ? props.secondaryprice
                            : "loading..."}
                    </li>

                    <li className="col-6 col-md-12 advertisment-details-item font5 p-1 py-2 my-2 text-white">
                        ارزشمندی : {props.value ? props.value : "loading..."}
                    </li>

                    <li className="col-6 col-md-12 advertisment-details-item font5 p-1 py-2 my-2 text-white">
                        نوع رند : {props.rond ? props.rond : "loading..."}
                    </li>
                </ul>
            </div>
            <hr className="col-9" />
            <SingleAdvertismentComment className="col-12" id={props.id} />
            <hr />
        </div>
    );
}
