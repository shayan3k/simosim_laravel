import React from "react";

function Ad1() {
    return (
        <div className="container row d-flex justify-content-between align-items-center ad1 py-1 mx-auto px-0">
            <div className="col-6 pr-1 ad1-items px-0 ">
                <img className="ad1-image" src={props.Banner1} />
            </div>
            <div className="col-6 pl-1 ad1-items px-0">
                <img className="ad1-image" src={props.Banner2} />
            </div>
        </div>
    );
}

export default Ad1;
