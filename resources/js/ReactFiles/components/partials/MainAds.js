import React, { useState, useEffect } from "react";
import Advertisment from "./Advertisment";
import AdvertismentApply from "./AdvertismentApply";
import { useStoreState } from "easy-peasy";
import { JWTHeader } from "../services/Auth";
import secureStorage from "../services/Storage";
import axios from "axios";

function MainAds() {
    const baseUrl = process.env.MIX_BASEURL;
    const showAdvertisments = process.env.MIX_MAIN_ADVERTISMENTS;

    const advertismentDeleteUser = process.env.MIX_ADVERTISMENT_DELETE_USER;
    const advertismentBerozresaniUser =
        process.env.MIX_ADVERTISMENT_BEROZRESANI_USER;
    const advertismentSoldUser = process.env.MIX_ADVERTISMENT_SOLD_USER;

    const Phonenumber = useStoreState(state => state.searchBox.phonenumber);
    const Status = useStoreState(state => state.searchBox.status);
    const Value = useStoreState(state => state.searchBox.value);
    const Rond = useStoreState(state => state.searchBox.rond);
    const Code = useStoreState(state => state.searchBox.code);
    const Location = useStoreState(state => state.searchBox.location);
    const Sale = useStoreState(state => state.searchBox.sale);
    const PriceRange = useStoreState(state => state.searchBox.priceRange);

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
    }, [
        Phonenumber,
        Status,
        Value,
        Rond,
        Code,
        Location,
        PriceRange,
        Sale,
        currnetPage
    ]);

    const listUpdate = async () => {
        var data = {
            page: currnetPage,
            phonenumber: Phonenumber ? "0912" + Phonenumber : "",
            location: Location,
            code: Code,
            value: Value,
            rond: Rond,
            status: Status,
            sale: Sale,
            priceRange: PriceRange
        };
        axios({
            method: "POST",
            url: baseUrl + showAdvertisments,
            data: data
        })
            .then(async response => {
                await setPosts(response.data);
                // console.log("Secondary response", response, data);
            })
            .catch(err => {
                // console.log(err);
                // console.log("Error search", err.response, data);
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
                listUpdate();
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
                listUpdate();
            })
            .catch(e => {
                console.log(
                    "Item can not beroz the item at this time",
                    e.response
                );
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
                listUpdate();
            })
            .catch(e => {
                console.log(
                    "Item can not update the item at this time",
                    e.response
                );
            });
    };

    return (
        <div className="container my-0 mainAdsToggler bg-custom">
            <nav aria-label="Page navigation">
                <ul className="pagination py-2 px-1 d-flex justify-content-center align-content-center">
                    <li className="page-item">
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
                        >
                            صفحه بعد
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="d-flex justify-content-between align-items-stretch flex-wrap p-0 m-0">
                {posts.map((item, index) => {
                    return (
                        <div
                            className="p-1 d-flex justify-content-center align-items-center"
                            key={index}
                        >
                            <Advertisment
                                phoneNumber={item.phonenumber}
                                status={item.simstatus}
                                rond={item.rond}
                                code={item.code}
                                value={item.value}
                                operator={item.operator}
                                location={item.location}
                                price={item.price}
                                text={item.text}
                                sellerPhoneNumber={item.sellerphonenumber}
                                sellerName={item.sellername}
                                sale={item.sale}
                                secondPrice={item.secondprice}
                                id={item.id}
                                updated_at={item.updated_at}
                                handleDeleteBtn={handleDeleteBtn}
                                handleBeRoozResaniBtn={handleBeRoozResaniBtn}
                                handleSoldBtn={handleSoldBtn}
                            />
                        </div>
                    );
                })}
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination py-2 px-1 d-flex justify-content-center align-content-center">
                    <li className="page-item">
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
                        >
                            صفحه بعد
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainAds;
