import React from "react";

function Ad2(props) {
    return (
        <div className="container row d-flex justify-content-between align-items-center ad2 py-1 mx-auto px-0">
            <div className="col-12 col-md-6 ad2-items px-0 pr-1">
                <img className="ad2-image" src={props.Banner1} />
            </div>
            <div className="col-12 col-md-6 ad2-items px-0 pl-1">
                <img className="ad2-image" src={props.Banner2} />
            </div>
        </div>
    );
}

export default Ad2;
