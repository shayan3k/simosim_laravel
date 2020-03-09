import React, { useState, useEffect } from "react";
import { JWTHeader } from "../../../services/Auth";
import Axios from "axios";

export default function NewAdvertiser(props) {
    const [id, setId] = useState(props.id);
    const [name, setName] = useState("");
    const [shopname, setShopname] = useState("");
    const [phonenumbers, setPhonenumbers] = useState("");
    const [contactnumbers, setContactnumbers] = useState("");

    const handleOnSubmitBtn = async () => {
        var errorMessage = "";
        if (name == "") errorMessage += "<li>Name can not be Empty</li>";
        if (shopname == "")
            errorMessage += "<li>Shop Name can not be Empty</li>";
        if (phonenumbers == "")
            errorMessage += "<li>Phone Numbers can not be Empty</li>";
        if (contactnumbers == "")
            errorMessage += "<li>Contact Numbers can not be Empty</li>";

        if (errorMessage == "") {
            const res = await axios({
                url: props.baseUrl + props.advertisersNewUrl,
                data: {
                    name,
                    shopname,
                    phonenumbers,
                    contactnumbers
                },
                headers: JWTHeader().headers,
                method: "POST"
            })
                .then(res => {
                    props.setMessage("Item has been created");
                    props.setStatus("success");
                    console.log(res);
                    props.handleNewAdvertiser(res.data);
                })
                .catch(e => {
                    props.setMessage(e);
                    props.setStatus("danger");
                    console.log(e.response);
                });
        } else {
            props.setMessage(errorMessage);
            props.setStatus("danger");
            console.log("ekfnbeljgbfelkjgb", errorMessage);
        }
    };

    return (
        <div className="border rounded my-4 p-3 bg-info">
            <form className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="shopname">Shop Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="shopname"
                        id="shopname"
                        value={shopname}
                        onChange={e => setShopname(e.target.value)}
                    />
                </div>

                <div className="form-group col-12">
                    <label htmlFor="phonenumbers">Phone Numbers</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="phonenumbers"
                        id="phonenumbers"
                        value={phonenumbers}
                        onChange={e => setPhonenumbers(e.target.value)}
                    />
                </div>

                <div className="form-group col-12">
                    <label htmlFor="contactnumbers">Contact Numbers</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="contactnumbers"
                        id="contactnumbers"
                        value={contactnumbers}
                        onChange={e => setContactnumbers(e.target.value)}
                    />
                </div>

                <div
                    className="btn btn-outline-dark btn-lg mx-5"
                    onClick={handleOnSubmitBtn}
                >
                    Create New
                </div>
            </form>
        </div>
    );
}
