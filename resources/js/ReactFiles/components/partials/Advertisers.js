import React, { useEffect, useState } from "react";
import axios from "axios";
import Advertiser from "./Advertiser";
import VipAdvertiser from "./VipAdvertiser";

function Advertisers() {
    const [advertisers, setAdvertisers] = useState();
    const baseUrl = process.env.MIX_BASEURL;
    const AdvertisersUrl = process.env.MIX_ADVERTISERSURL;
    console.log(baseUrl + AdvertisersUrl);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/advertisers")
            .then(res => {
                setAdvertisers(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err.response));
    }, []);
    console.log("Advertisers=", advertisers);
    return (
        <div className="container mx-auto py-0 AdvertisersToggler">
            <div className="row bg-custom pb-5">
                <div className="col-lg-6 order-2 order-lg-1 row p-0 py-4 m-0">
                    {advertisers
                        ? advertisers.map((item, index) => {
                              if (index >= 4) return;
                              return (
                                  <div className="col-lg-6 d-flex justify-content-center align-content-center py-2">
                                      <div className="advertiser">
                                          <Advertiser
                                              ShopName={item.shopname}
                                              PhoneNumbers={item.phonenumbers}
                                              AdvertiserName={
                                                  item.advertisername
                                              }
                                              contactnumber={item.contactnumber}
                                          />
                                      </div>
                                  </div>
                              );
                          })
                        : ""}
                </div>
                <div className="col-lg-6 m-0 p-0 order-1 order-lg-2 row p-2 py-4 m-0 mx-auto">
                    <div className="vip-advertiser col-12 d-flex justify-content-center align-content-center py-2 font1">
                        <VipAdvertiser />
                    </div>
                </div>
                <div className="col-12 order-3 row p-0 m-0">
                    {advertisers
                        ? advertisers.map((item, index) => {
                              if (index < 4) return;
                              return (
                                  <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
                                      <div className="advertiser">
                                          <Advertiser
                                              ShopName={item.shopname}
                                              PhoneNumbers={item.phonenumbers}
                                              AdvertiserName={
                                                  item.advertisername
                                              }
                                              contactnumber={item.contactnumber}
                                          />
                                      </div>
                                  </div>
                              );
                          })
                        : ""}
                </div>
            </div>
        </div>
    );
}

export default Advertisers;
