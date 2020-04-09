import React from "react";
import BannerSm1 from "../images/banner-sm-1.gif";
import BannerSm2 from "../images/banner-sm-2.gif";
import BannerSm3 from "../images/banner-sm-3.gif";
import BannerSm4 from "../images/banner-sm-4.gif";

export default function SingleAdvertismentSidebar(props) {
    return (
        <div className={props.className}>
            <img
                className="col-6 col-md-12 ad1-image w-100 px-0 border"
                src={BannerSm1}
            />

            <img
                className="col-6 col-md-12 ad1-image w-100 px-0 border"
                src={BannerSm2}
            />

            <img
                className="col-6 col-md-12 ad1-image w-100 px-0 border"
                src={BannerSm3}
            />
            <img
                className="col-6 col-md-12 ad1-image w-100 px-0 border"
                src={BannerSm4}
            />
        </div>
    );
}
