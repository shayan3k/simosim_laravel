import React, { useEffect, useState } from "react";
import axios from "axios";
import persianJs from "persianjs";

export default function VipAdvertiser() {
    const [Title, setTitle] = useState();
    const [ShopName, setShopName] = useState();
    const [PhoneNumbers, setPhoneNumbers] = useState();
    const [AdvertiserName, setAdvertiserName] = useState();
    const [Text, setText] = useState();
    const [contactnumber, setContactNumber] = useState();
    const baseUrl = process.env.MIX_BASEURL;
    const vipAdvertiser = process.env.MIX_VIPADVERTISER;

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/vipadvertisers")
            .then(res => {
                console.log("th", res.data);

                setTitle(res.data.title);
                setShopName(res.data.shopname);
                setPhoneNumbers(res.data.phonenumbers);
                setAdvertiserName(res.data.advertisername);
                setText(res.data.text);
                setContactNumber(res.data.contactnumber);
            })
            .catch(e => console.log(e.response));
    }, []);

    return (
        <div className="card w-100 h-100 border-0 position-relative">
            <div className="advertiser-vip-flag-icon">
                {/* <img className="w-100 h-100" src={vip} alt="vip" /> */}
            </div>
            <div className="card-header card-header-vip-advertiser d-flex justify-content-end align-content-center px-1 py-4">
                <h6 className="font1 my-auto pr-1">{Title}</h6>
            </div>
            <div className="card-body font2 card-body-vip-advertiser px-0">
                <h4 className="text-center">{ShopName}</h4>
                <hr />
                <div className="row p-0 m-0">
                    {PhoneNumbers
                        ? PhoneNumbers.map((item, index) => (
                              <div
                                  className="col-4 lead d-inline-block p-1"
                                  key={index}
                              >
                                  <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg rounded white-space-nowrap">
                                      {persianJs(item)
                                          .englishNumber()
                                          .toString()}
                                  </div>
                              </div>
                          ))
                        : ""}
                </div>
            </div>
            <div className="card-footer card-footer-vip-advertiser">
                <h4 className="py-4 text-center" style={{ fontWeight: 1000 }}>
                    {Text}
                </h4>
                <hr />
                <p className="text-right pt-1 font-1">{AdvertiserName}</p>
                <div className="d-flex justify-content-center align-content-center">
                    {contactnumber
                        ? contactnumber.map((item, index) => (
                              <div
                                  className="col-4 lead d-inline-block p-1"
                                  key={index}
                                  key={index}
                              >
                                  <div className="p-1 m-0  bg-vip-advertisers-sim-owner text-center shadow-lg  white-space-nowrap font0">
                                      {persianJs(item)
                                          .englishNumber()
                                          .toString()}
                                  </div>
                              </div>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
}
