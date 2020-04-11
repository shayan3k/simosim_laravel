import React, { useEffect, useState } from "react";
import axios from "axios";
import persianJs from "persianjs";
import { Controller, Scene } from "react-scrollmagic";

export default function VipAdvertiser() {
    const baseUrl = process.env.MIX_BASEURL;
    const vipAdvertiser = process.env.MIX_VIP_ADVERTISER;

    const [Title, setTitle] = useState();
    const [ShopName, setShopName] = useState();
    const [PhoneNumbers, setPhoneNumbers] = useState();
    const [AdvertiserName, setAdvertiserName] = useState();
    const [Text, setText] = useState();
    const [contactnumber, setContactNumber] = useState();

    useEffect(() => {
        axios
            .get(baseUrl + vipAdvertiser)
            .then(res => {
                setTitle(res.data.title);
                setShopName(res.data.shopname);
                setPhoneNumbers(res.data.phonenumbers);
                setAdvertiserName(res.data.advertisername);
                setText(res.data.text);
                setContactNumber(res.data.contactnumber);
            })
            .catch(e => {
                // console.log(e.response);
            });
    }, []);

    return (
        <div class="cutout-card-wrapper">
            <Controller>
                <Scene
                    triggerElement={".cutout-card-wrapper"}
                    duration={1000}
                    triggerHook={"onCenter"}
                    classToggle={"cutout-card-fixed"}
                    reverse={true}
                    indicators={true}
                >
                    <div className="card cutout-card w-100 h-100 position-relative vip-advertiser-card">
                        <div className="card-header card-header-vip-advertiser px-1 py-4  text-center">
                            <h6 className="my-auto pr-1 font0">{Title}</h6>
                        </div>
                        <div className="card-body card-body-vip-advertiser px-0">
                            <h4 className="text-center font1">{ShopName}</h4>
                            <hr />
                            <div className="row p-0 m-0">
                                {PhoneNumbers
                                    ? PhoneNumbers.map((item, index) => (
                                          <div
                                              className="col-6 col-md-4 lead d-inline-block p-1"
                                              key={index}
                                          >
                                              <h1 className="p-1 m-0 bg-vip-advertisers-sim text-center shadow-lg rounded white-space-nowrap font2">
                                                  {persianJs(item)
                                                      .englishNumber()
                                                      .toString()}
                                              </h1>
                                          </div>
                                      ))
                                    : ""}
                            </div>
                        </div>
                        <div className="card-footer card-footer-vip-advertiser">
                            <h4
                                className="py-4 text-center font2"
                                style={{ fontWeight: 1000 }}
                            >
                                {Text}
                            </h4>
                            <hr />
                            <p className="text-right pt-1 font2">
                                {AdvertiserName}
                            </p>
                            <div className="row">
                                {contactnumber
                                    ? contactnumber.map((item, index) => (
                                          <div
                                              className="col-12 col-md-6 lead d-inline-block p-1"
                                              key={index}
                                              key={index}
                                          >
                                              <div className="p-1 m-0  bg-vip-advertisers-sim-owner text-center shadow-lg  white-space-nowrap font2">
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
                </Scene>
            </Controller>
        </div>
    );
}
