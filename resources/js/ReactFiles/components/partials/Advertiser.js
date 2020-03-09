import React from "react";
import persianJs from "persianjs";
import flag from "../images/sim-card.png";

export default function Advertiser(props) {
    const { Name, ShopName, PhoneNumbers, ContactNumbers } = props;
    console.log("jbfkjslbsfsffjlsbf", props);

    return (
        <div className="card w-100 h-100 border-0 position-relative">
            <div className="advertiser-flag-icon">
                <img className="w-100 h-100" src={flag} alt="سیمکارت" />
            </div>
            <div className="card-body font4 card-body-advertiser px-0">
                <h4 className="text-center">{ShopName}</h4>
                <hr />
                <div className="row p-0 m-0">
                    {PhoneNumbers.map((item, index) => (
                        <div
                            className="col-6 lead d-inline-block p-1 font2"
                            key={index}
                        >
                            <div className="p-1 m-0  bg-advertisers-sim text-center shadow-lg white-space-nowrap">
                                {persianJs(item)
                                    .englishNumber()
                                    .toString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-footer font2-3 row p-0 m-0 d-flex justify-content-between align-items-center card-body-advertiser">
                <div className="col-12">
                    <div className="font2 text-right py-1">{Name}</div>
                </div>

                {ContactNumbers.map((item, index) => {
                    // console.log(item);
                    return (
                        <p
                            className="col-6 m-0 p-0 py-1 white-space-nowrap"
                            key={index}
                        >
                            {persianJs(item)
                                .englishNumber()
                                .toString()}
                            <i className="fas fa-phone px-1 font2"></i>
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
