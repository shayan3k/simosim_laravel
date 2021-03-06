import React from "react";

export default function ContactUsForm() {
    return (
        <form className="container py-3">
            <h3 className="mb-4 font5">تماس با ما</h3>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <input
                    className="form-control font3"
                    id="name"
                    name="name"
                    placeholder="نام"
                    type="text"
                />
            </div>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <input
                    className="form-control font3"
                    id="email"
                    name="email"
                    placeholder="ایمیل"
                    type="email"
                />
            </div>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <input
                    className="form-control font3"
                    id="contactnumber"
                    name="contactnumber"
                    placeholder="شماره تماس"
                    type="text"
                />
            </div>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <textarea
                    className="form-control font3"
                    rows="7"
                    id="subject"
                    name="subject"
                    placeholder="موضوع"
                />
            </div>
            <button className="btn btn-primary btn-lg my-3 font5" type="submit">
                ارسال
            </button>
        </form>
    );
}
