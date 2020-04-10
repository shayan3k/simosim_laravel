import React, { useState, useEffect } from "react";
import Advertisment from "./Advertisment";
import { JWTHeader } from "../services/Auth";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";

function DashboardAdvertisment(props) {
    const baseUrl = process.env.MIX_BASEURL;
    const myAdvertisments = process.env.MIX_ADVERTISMENT_LIVE;
    const advertismentDeleteUser = process.env.MIX_ADVERTISMENT_DELETE_USER;
    const advertismentBerozresaniUser =
        process.env.MIX_ADVERTISMENT_BEROZRESANI_USER;
    const advertismentSoldUser = process.env.MIX_ADVERTISMENT_SOLD_USER;

    const dashboardAdvertismentState = useStoreState(
        state => state.listUpdate.dashboardAdvertisment
    );

    const itemPerPage = 15;
    const [posts, setPosts] = useState([]);
    const [currnetPage, setCurrentPage] = useState(1);

    const handlePrevOnClick = () => {
        if (currnetPage != 1) setCurrentPage(currnetPage - 1);
    };

    const handleNextOnClick = () => {
        setCurrentPage(currnetPage + 1);
    };

    useEffect(() => {
        listUpdate();
    }, [currnetPage, dashboardAdvertismentState, props]);

    const listUpdate = async () => {
        axios({
            method: "GET",
            url: baseUrl + myAdvertisments + "?page=" + currnetPage,
            headers: JWTHeader().headers
        })
            .then(async response => {
                await setPosts(response.data);
                console.log("dashboard advertisments respond", response.data);
            })
            .catch(err => {
                console.log("dashboardAdvertisments", err.response);
            });
    };
    const handleDeleteBtn = id => {
        axios({
            url: baseUrl + advertismentDeleteUser,
            method: "POST",
            headers: JWTHeader().headers,
            data: { id: id }
        })
            .then(res => {
                props.setRefresher(!props.refresher);
            })
            .catch(e => {
                console.log("Item can not delete the item at this time");
            });
    };

    const handleBeRoozResaniBtn = id => {
        axios({
            url: baseUrl + advertismentBerozresaniUser,
            method: "POST",
            headers: JWTHeader().headers,
            data: { id: id }
        })
            .then(res => {
                props.setRefresher(!props.refresher);
            })
            .catch(e => {
                console.log("Item can not beroz the item at this time");
            });
    };

    const handleSoldBtn = id => {
        axios({
            url: baseUrl + advertismentSoldUser,
            method: "POST",
            headers: JWTHeader().headers,
            data: { id: id }
        })
            .then(res => {
                props.setRefresher(!props.refresher);
            })
            .catch(e => {
                console.log("Item can not update the item at this time");
            });
    };

    return (
        <div className="container bg-white my-0 DashboardAdvertismentLive bg-custom">
            <nav aria-label="Page navigation">
                <ul className="pagination py-2 px-1">
                    <li className="page-item ml-auto">
                        <a
                            className="btn page-link"
                            onClick={e => handlePrevOnClick(e)}
                            style={
                                currnetPage == 1
                                    ? { pointerEvents: "none" }
                                    : null
                            }
                        >
                            صفحه قبل
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="btn btn-danger">{currnetPage}</a>
                    </li>
                    <li className="page-item">
                        <a
                            className="btn page-link"
                            onClick={e => handleNextOnClick(e)}
                            style={
                                posts.length != itemPerPage
                                    ? { pointerEvents: "none" }
                                    : null
                            }
                        >
                            صفحه بعد
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="row p-0 m-0">
                {posts.length == 0 ? (
                    <div className="alert alert-warning">نتیجه ای یافت نشد</div>
                ) : (
                    posts.map(item => (
                        <div
                            className="row col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 mx-auto mx-0 p-0 px-1 py-3"
                            key={item.id}
                        >
                            <Advertisment
                                phoneNumber={item.phonenumber}
                                location={item.location}
                                text={item.text}
                                price={item.price}
                                secondPrice={item.secondprice}
                                code={item.code}
                                operator={item.operator}
                                value={item.value}
                                rond={item.rond}
                                status={item.simstatus}
                                sale={item.sale}
                                sellerPhoneNumber={item.sellerphonenumber}
                                sellerName={item.sellername}
                                id={item.id}
                                updated_at={item.updated_at}
                                handleDeleteBtn={handleDeleteBtn}
                                handleBeRoozResaniBtn={handleBeRoozResaniBtn}
                                handleSoldBtn={handleSoldBtn}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default DashboardAdvertisment;
