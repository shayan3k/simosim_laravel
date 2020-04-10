import React from "react";

export default function SearchPanel(props) {
    return (
        <div className="container-fluid row p-0 m-0  mt-3">
            <div className="col-6 col-md-4  p-0 m-0 input-group">
                <select
                    name="location"
                    id="location"
                    className="form-control"
                    defaultValue={props.location}
                    onChange={e => props.setLocation(e.target.value)}
                >
                    <option value="">استان</option>
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
                    <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
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
            </div>
            <div className="col-6 col-md-4  p-0 m-0 input-group">
                <input
                    type="text"
                    className="form-control"
                    maxLength="11"
                    value={props.phonenumber}
                    onChange={e => props.setPhonenumber(e.target.value)}
                    placeholder="Phone Number"
                />
            </div>
            <div className="col-6 col-md-4  p-0 m-0 input-group">
                <select
                    name="status"
                    id="status"
                    className="form-control"
                    value={props.simstatus}
                    onChange={e => {
                        props.setSimstatus(e.target.value);
                        console.log(e.target.value);
                    }}
                >
                    <option value="">وضعیت</option>
                    <option value="صفر">صفر</option>
                    <option value="تقریبا صفر">تقریبا صفر</option>
                    <option value="کارکرده">کارکرده</option>
                </select>
            </div>
            <div className="col-6 col-md-4  p-0 m-0 input-group">
                <input
                    type="text"
                    className="form-control"
                    value={props.code}
                    onChange={e => props.setCode(e.target.value)}
                    maxLength="1"
                    placeholder="Code"
                />
            </div>
            <div className="col-6 col-md-4  p-0 m-0 input-group">
                <select
                    name="rond"
                    id="rond"
                    className="form-control"
                    value={props.rond}
                    onChange={e => props.setRond(e.target.value)}
                >
                    <option value="">نوع رند</option>
                    <option value="رند">رند</option>
                    <option value="نیمه رند">نیمه رند</option>
                    <option value="معمولی">معمولی</option>
                </select>
            </div>
            <div className="col-6 col-md-4  p-0 m-0 input-group">
                <select
                    name="value"
                    id="value"
                    className="form-control"
                    value={props.value}
                    onChange={e => props.setValue(e.target.value)}
                >
                    <option value="">ارزش</option>
                    <option value="طلایی">طلایی</option>
                    <option value="نقره ای">نقره ای</option>
                    <option value="برنز">برنز</option>
                </select>
            </div>
            <div className="col-6 col-md-4  p-0 m-0 input-group">
                <input
                    type="text"
                    className="form-control w-75"
                    maxLength="11"
                    value={props.sellerphonenumber}
                    onChange={e => props.setSellerphonenumber(e.target.value)}
                    placeholder="Seller Phone Number"
                />
            </div>
            <div className="col-3 col-md-4  p-0 m-0 input-group d-felx justify-content-center align-content-center">
                <span className="mx-4">Sale</span>
                <input
                    type="checkbox"
                    className="d-inline"
                    onChange={e => {
                        if (e.target.checked) props.setSale("فوری");
                        else props.setSale("");
                    }}
                    defaultChecked={props.sale == "فوری" ? true : false}
                />
            </div>
            <div className="col-3 col-md-4  p-0 m-0 input-group  d-felx justify-content-center align-content-center">
                <span className="mx-4">Published</span>
                <input
                    type="checkbox"
                    className="d-inline"
                    onChange={e => {
                        props.setPublished(e.target.checked);
                    }}
                    defaultChecked={props.published}
                />
            </div>
            <div className="col-12 p-0 m-0 mt-2 mb-3 input-group">
                <button
                    className="btn btn-dark ml-auto"
                    onClick={e => props.handleSearchBtn(e)}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
