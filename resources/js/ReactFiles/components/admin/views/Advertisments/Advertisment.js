import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "../Message";
import { JWTHeader } from "../../../services/Auth";

export default function Advertisment(props) {
    const baseUrl = process.env.MIX_BASEURL;

    // const AdvertismentDeleteAdmin = process.env.MIX_ADVERTISMENT_All_ADMIN;
    const AdvertismentDeleteAdmin = "/advertisments-admin";

    const [message, setMessage] = useState("");
    const [messageStatus, setMessageStatus] = useState("");

    const [id, setId] = useState(props.id);
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
    const [status, setStatus] = useState(props.status);
    const [location, setLocation] = useState(props.location);
    const [rond, setRond] = useState(props.rond);
    const [code, setCode] = useState(props.code);
    const [value, setValue] = useState(props.value);
    const [price, setPrice] = useState(props.price);
    const [secondPrice, setSecondPrice] = useState(props.secondPrice);
    const [sellerPhoneNumber, setSellerPhoneNumber] = useState(
        props.sellerPhoneNumber
    );
    const [published, setPublished] = useState(props.published);
    const [text, setText] = useState(props.text);
    const [sellerName, setSellerName] = useState(props.sellerName);
    const [sale, setSale] = useState(props.sale);

    const handleDeleteBtn = () => {
        console.log("DELETE BTN");

        axios({
            method: "DELETE",
            url: baseUrl + AdvertismentDeleteAdmin,
            headers: JWTHeader().headers,
            data: {
                id: id
            }
        })
            .then(res => {
                console.log(res);
                props.updateList(id);
            })
            .catch(e => console.log(e));
    };

    const handleUpdateBtn = () => {
        const data = {
            id,
            phoneNumber,
            simStatus: status,
            rond,
            code,
            location,
            value,
            price,
            secondPrice,
            published,
            text,
            sale
        };

        axios({
            url: baseUrl + AdvertismentDeleteAdmin,
            method: "POST",
            headers: JWTHeader().headers,
            data
        })
            .then(res => {
                console.log(res);
                setMessage("Update was successful");
                setMessageStatus("success");
            })
            .catch(e => {
                console.log(e.response);
                setMessage(e.response.data.message);
                setMessageStatus("danger");
            });

        console.log(data);
    };

    return (
        <div className="card card-amdin-advertisments">
            <div className="card-header">
                <div className="input-group">
                    <div className="form-control">{id}</div>
                    <div className="form-control">{sellerPhoneNumber}</div>
                </div>
                <div className="input-group">
                    <div className="form-control">{sellerName}</div>
                </div>
            </div>
            <div className="card-body">
                <div className="input-group">
                    <select
                        name="location"
                        id="location"
                        className="form-control"
                        defaultValue={location}
                        onChange={e => setLocation(e.target.value)}
                    >
                        <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                        <option value="آذربایجان غربی">آذربایجان غربی</option>
                        <option value="اردبیل">اردبیل</option>
                        <option value="اصفهان">اصفهان</option>
                        <option value="البرز">البرز</option>
                        <option value="ایلام">ایلام</option>
                        <option value="بوشهر">بوشهر</option>
                        <option value="تهران">تهران</option>
                        <option value="چهارمحال و بختیاری">
                            چهارمحال و بختیاری
                        </option>
                        <option value="خراسان جنوبی">خراسان جنوبی</option>
                        <option value="خراسان رضوی">خراسان رضوی</option>
                        <option value="خراسان شمالی">خراسان شمالی</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="زنجان">زنجان</option>
                        <option value="سمنان">سمنان</option>
                        <option value="سیستان و بلوچستان">
                            سیستان و بلوچستان
                        </option>
                        <option value="فارس">فارس</option>
                        <option value="قزوین">قزوین</option>
                        <option value="قم">قم</option>
                        <option value="کردستان">کردستان</option>
                        <option value="کرمانشاه">کرمانشاه</option>
                        <option value="کهگیلویه و بویراحمد">
                            کهگیلویه و بویراحمد
                        </option>
                        <option value="گلستان">گلستان</option>
                        <option value="گیلان">گیلان</option>
                        <option value="لرستان">لرستان</option>
                        <option value="مازندران">مازندران</option>
                        <option value="مرکزی">مرکزی</option>
                        <option value="هرمزگان">هرمزگان</option>
                        <option value="همدان">همدان</option>
                        <option value="یزد">یزد</option>
                    </select>

                    <input
                        type="text"
                        className="form-control"
                        maxLength="11"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                    />
                </div>

                <div className="input-group">
                    <select
                        name="status"
                        id="status"
                        className="form-control"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option value="صفر">صفر</option>
                        <option value="تقریبا صفر">تقریبا صفر</option>
                        <option value="کارکرده">کارکرده</option>
                    </select>
                    <input
                        type="text"
                        className="form-control"
                        value={code}
                        maxLength="1"
                        onChange={e => setCode(e.target.value)}
                        placeholder="Code"
                    />
                </div>
                <div className="input-group">
                    <select
                        name="rond"
                        id="rond"
                        className="form-control"
                        value={rond}
                        onChange={e => setRond(e.target.value)}
                    >
                        <option value="رند">رند</option>
                        <option value="نیمه رند">نیمه رند</option>
                        <option value="معمولی">معمولی</option>
                    </select>
                    <select
                        name="value"
                        id="value"
                        className="form-control"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    >
                        <option value="طلایی">طلایی</option>
                        <option value="نقره ای">نقره ای</option>
                        <option value="برنز">برنز</option>
                    </select>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="Price"
                    />
                    <span className="d-flex justify-content-start align-items-center">
                        .000 تومان
                    </span>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={secondPrice}
                        onChange={e => setSecondPrice(e.target.value)}
                        placeholder="Second Price"
                    />
                    <span className="d-flex justify-content-start align-items-center">
                        .000 تومان
                    </span>
                </div>

                <div className="input-group">
                    <textarea
                        type="text"
                        className="form-control"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Price"
                        rows="5"
                    />
                </div>

                <div className="input-group my-3">
                    <span className="mx-4">Sale</span>
                    <input
                        type="checkbox"
                        className="d-inline"
                        onChange={e => {
                            if (e.target.checked) setSale("فوری");
                            else setSale("");
                        }}
                        defaultChecked={sale == "فوری" ? true : false}
                    />
                </div>

                <div className="input-group my-3">
                    <span className="mx-4">Published</span>
                    <input
                        type="checkbox"
                        className="d-inline"
                        onChange={e => {
                            setPublished(e.target.checked);
                        }}
                        defaultChecked={published}
                    />
                </div>

                <div
                    className="btn btn-danger mx-1"
                    onClick={e => handleDeleteBtn(e)}
                >
                    Delete
                </div>
                <div
                    className="btn btn-warning mx-1"
                    onClick={e => handleUpdateBtn(e)}
                >
                    Update
                </div>
            </div>
            {message ? (
                <Message
                    title={message}
                    status={messageStatus}
                    setMessage={text => setMessage(text)}
                />
            ) : (
                ""
            )}
        </div>
    );
}
