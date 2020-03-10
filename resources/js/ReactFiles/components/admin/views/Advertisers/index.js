import React, { useEffect, useState } from "react";
import { JWTHeader } from "../../../services/Auth";
import Message from "../Message";
import Advertiser from "./Advertiser";
import NewAdvertiser from "./NewAdvertiser";
import axios from "axios";

export default function index() {
    // const AdvertisersUrl = process.env.MIX_ADVERTISERS;
    const baseUrl = process.env.MIX_BASEURL;
    const advertisersUrl = "/advertisers";
    const advertisersNewUrl = "/advertisers/create";
    const [advertisers, setAdvertisers] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios
            .get(baseUrl + advertisersUrl)
            .then(res => {
                //set the values
                setAdvertisers(res.data);
                console.log(res.data);
            })
            .catch(e => console.log(e));
    }, []);

    const handleNewAdvertiser = data => {
        setAdvertisers([...advertisers, data]);
        console.log("jbsfjbsfjb", [...advertisers, data]);
    };

    const handleDeleteItem = id => {
        const data = advertisers.filter(item => {
            return item.id != id;
        });

        setAdvertisers(data);
        console.log(data, id);
    };

    return (
        <div>
            <div className="container bg-advertisers">
                <h1 className="my-3 py-4">ADVERTISERS</h1>
                <hr />
                {message ? (
                    <Message
                        title={message}
                        status={status}
                        setMessage={text => setMessage(text)}
                    />
                ) : (
                    ""
                )}
                {advertisers
                    ? advertisers.map(item => {
                          return (
                              <Advertiser
                                  key={item.id}
                                  item={item}
                                  baseUrl={baseUrl}
                                  advertisersUrl={advertisersUrl}
                                  handleDeleteItem={handleDeleteItem}
                              />
                          );
                      })
                    : ""}
                {console.log(advertisers)}
                <NewAdvertiser
                    setMessage={setMessage}
                    setStatus={setStatus}
                    baseUrl={baseUrl}
                    advertisersNewUrl={advertisersNewUrl}
                    handleNewAdvertiser={e => handleNewAdvertiser(e)}
                />
            </div>
        </div>
    );
}
