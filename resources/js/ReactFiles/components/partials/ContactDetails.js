import React from "react";
import persianJs from "persianjs";

export default function ContactDetails() {
    return (
        <div className="container py-1">
            <span className="well font3">برای تبلیغات با ما تماس بگیرید</span>
            <hr />
            <p className="font4">
                شماره تماس:{" "}
                {persianJs("09190771243").englishNumber().toString()}{" "}
            </p>
            <p className="font4 ">M.MEHRABI5445@GMAIL.COM :ایمیل</p>
        </div>
    );
}
