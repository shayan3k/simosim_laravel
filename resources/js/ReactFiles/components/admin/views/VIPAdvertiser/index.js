import React, { useEffect, useState } from "react";
import { JWTHeader } from "../../../services/Auth";
import Message from "../Message";
import axios from "axios";

export default function index() {
    const baseUrl = process.env.MIX_BASEURL;

    // const VIPAdvertiserUrl = process.env.MIX_VIP_ADVERTISER;
    const VIPAdvertiserUrl = "/vipadvertisers";

    const [title, setTitle] = useState("");
    const [advertisername, setAdvertisername] = useState("");
    const [text, setText] = useState("");
    const [shopname, setShopname] = useState("");
    const [phonenumbers, setPhonenumbers] = useState([]);
    const [contactnumber, setContactnumber] = useState([]);

    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios
            .get(baseUrl + VIPAdvertiserUrl)
            .then(res => {
                //set the values
                setTitle(res.data.title);
                setAdvertisername(res.data.advertisername);
                setText(res.data.text);
                setShopname(res.data.shopname);
                setPhonenumbers(res.data.phonenumbers);
                setContactnumber(res.data.contactnumber);
            })
            .catch(e => console.log(e));
    }, []);

    const handleOnSubmit = e => {
        e.preventDefault();
        var status = "info";
        axios
            .post(
                baseUrl + VIPAdvertiserUrl,
                {
                    title: title,
                    advertisername: advertisername,
                    text: text,
                    shopname: shopname,
                    phonenumbers: phonenumbers,
                    contactnumber: contactnumber
                },
                JWTHeader()
            )
            .then(res => {
                setStatus("success");
                setMessage("Great, Changes have been saved !");

                console.log(res);
            })
            .catch(e => {
                console.log(e);
                setStatus("danger");
                setMessage("Something went Wrong!");
            });
    };

    return (
        <div>
            <div className="container-fluid bg-advertisers">
                <h1 className="my-3 py-4">VIP-ADVERTISER</h1>
                <hr />
                <form
                    className="pt-2 pb-4 my-4"
                    onSubmit={e => handleOnSubmit(e)}
                >
                    <div className="form-group">
                        <label htmlFor="title" className="text-left">
                            Title:
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            rows="5"
                            value={title}
                            onChange={e => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="advertisername" className="text-left">
                            Advertiser Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="advertisername"
                            id="advertisername"
                            value={advertisername}
                            onChange={e => {
                                setAdvertisername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text" className="text-left">
                            Text
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="text"
                            id="text"
                            rows="5"
                            value={text}
                            onChange={e => {
                                setText(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shopname" className="text-left">
                            Shop Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="shopname"
                            id="shopname"
                            value={shopname}
                            onChange={e => {
                                setShopname(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phonenumbers" className="text-left">
                            Phone Numbers
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="phonenumbers"
                            id="phonenumbers"
                            rows="10"
                            value={phonenumbers}
                            onChange={e => {
                                setPhonenumbers(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactnumber" className="text-left">
                            Contact Numbers
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="contactnumber"
                            id="contactnumber"
                            rows="5"
                            value={contactnumber}
                            onChange={e => {
                                setContactnumber(e.target.value);
                            }}
                        />
                    </div>
                    {message ? (
                        <Message
                            title={message}
                            status={status}
                            setMessage={text => setMessage(text)}
                        />
                    ) : (
                        ""
                    )}
                    <button type="submit" className="btn btn-outline-primary">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
