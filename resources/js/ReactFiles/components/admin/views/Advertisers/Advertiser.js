import React, { useState, useEffect, useRef } from "react";
import { JWTHeader } from "../../../services/Auth";
import Message from "../Message";
import axios from "axios";

export default function Advertiser(props) {
    const handleDeleteItem = props.handleDeleteItem;

    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const [name, setName] = useState(props.item.name);
    const [shopname, setShopname] = useState(props.item.shopname);
    const [phonenumbers, setPhonenumbers] = useState(props.item.phonenumbers);
    const [contactnumbers, setContactnumbers] = useState(
        props.item.contactnumbers
    );

    const handleDeleteBtn = async e => {
        console.log(props.item.id, e);

        var id = props.item.id;

        const res = await axios({
            url: props.baseUrl + props.advertisersUrl,
            data: {
                id
            },
            headers: JWTHeader().headers,
            method: "DELETE"
        })
            .then(res => console.log(res))
            .catch(e => {
                setMessage(e.response.data.message);
                setStatus("danger");
            });

        handleDeleteItem(id);
    };

    const handleUpdateBtn = async () => {
        var id = props.item.id;

        const res = await axios({
            url: props.baseUrl + props.advertisersUrl,
            data: {
                id,
                name,
                shopname,
                phonenumbers,
                contactnumbers
            },
            headers: JWTHeader().headers,
            method: "POST"
        })
            .then(res => {
                setMessage("Update was successful");
                setStatus("success");
            })
            .catch(e => {
                setMessage(e.response.data.message);
                setStatus("danger");
            });
    };

    return (
        <div className="border rounded my-4 p-3 bg-admin-advertisers">
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
                    <label htmlFor="contactnumbers">Contact Number</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="contactnumbers"
                        id="contactnumbers"
                        value={contactnumbers}
                        onChange={e => setContactnumbers(e.target.value)}
                    />
                </div>

                <a
                    className="btn btn-outline-danger btn-lg mx-5 ml-auto"
                    onClick={handleDeleteBtn}
                >
                    Delete
                </a>
                <a
                    className="btn btn-outline-primary btn-lg mx-5"
                    onClick={handleUpdateBtn}
                >
                    Update
                </a>
            </form>
            {message ? (
                <Message
                    title={message}
                    status={status}
                    setMessage={text => setMessage(text)}
                />
            ) : (
                ""
            )}
        </div>
    );
}
