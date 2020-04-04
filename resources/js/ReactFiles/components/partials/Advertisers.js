import React, { useEffect, useState } from "react";
import axios from "axios";
import Advertiser from "./Advertiser";
import VipAdvertiser from "./VipAdvertiser";

function Advertisers() {
    const [advertisers, setAdvertisers] = useState();
    const baseUrl = process.env.MIX_BASEURL;
    const AdvertisersUrl = process.env.MIX_ADVERTISERS;
    // const AdvertisersUrl = "/advertisers";

    useEffect(() => {
        axios
            .get(baseUrl + AdvertisersUrl)
            .then((res) => {
                setAdvertisers(res.data);
            })
            .catch((err) => console.log(err.response));
    }, []);
    return (
        <div className="container mx-auto py-0 AdvertisersToggler">
            <div className="row bg-custom pb-5">
                <div className="col-lg-6 order-2 order-lg-1 row p-0 py-4 m-0">
                    {advertisers
                        ? advertisers.map((item, index) => {
                              if (index >= 4) return;
                              return (
                                  <div
                                      className="col-lg-6 d-flex justify-content-center align-content-center py-2"
                                      key={index}
                                  >
                                      <div className="advertiser">
                                          <Advertiser
                                              key={index}
                                              ShopName={item.shopname}
                                              PhoneNumbers={item.phonenumbers}
                                              Name={item.name}
                                              ContactNumbers={
                                                  item.contactnumbers
                                              }
                                          />
                                      </div>
                                  </div>
                              );
                          })
                        : ""}
                </div>
                <div className="col-lg-6 m-0 p-0 order-1 order-lg-2 row p-2 py-4 m-0 mx-auto">
                    <div className="vip-advertiser col-12 d-flex justify-content-center align-content-center py-2">
                        <VipAdvertiser />
                    </div>
                </div>
                <div className="col-12 order-3 row p-0 m-0">
                    {advertisers
                        ? advertisers.map((item, index) => {
                              if (index < 4) return;
                              return (
                                  <div
                                      className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2"
                                      key={index}
                                  >
                                      <div className="advertiser">
                                          <Advertiser
                                              ShopName={item.shopname}
                                              PhoneNumbers={item.phonenumbers}
                                              Name={item.name}
                                              ContactNumbers={
                                                  item.contactnumbers
                                              }
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
