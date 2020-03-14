import React, { useState, useEffect } from "react";
import Advertisment from "./Advertisment";
import AdvertismentApply from "./AdvertismentApply";
import { useStoreState } from "easy-peasy";
import { JWTHeader } from "../services/Auth";
import secureStorage from "../services/Storage";
import axios from "axios";

function MainAds(props) {
    const [posts, setPosts] = useState([]);
    const Status = useStoreState(state => state.searchBox.status);
    const Value = useStoreState(state => state.searchBox.value);
    const Rond = useStoreState(state => state.searchBox.rond);
    const Code = useStoreState(state => state.searchBox.code);
    const Location = useStoreState(state => state.searchBox.location);
    const PriceRange = useStoreState(state => state.searchBox.priceRange);

    const baseUrl = process.env.MIX_BASEURL;
    // const showAdvertisments = MIX_MAIN_ADVERTISMENTS;
    const showAdvertisments = "/advertisments-all";

    useEffect(() => {
        listUpdate();
    }, [Status, Value, Rond, Code, Location, PriceRange]);

    const listUpdate = async () => {
        var data = {
            phonenumber: "",
            location: Location,
            code: Code,
            value: Value,
            rond: Rond,
            status: Status,
            priceRange: PriceRange
        };
        axios({
            method: "POST",
            url: baseUrl + showAdvertisments,
            data: data
        })
            .then(async response => {
                await setPosts(response.data);
                console.log("Secondary response", response, data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const handleDeleteBtn = (e, id, sellerPhoneNumber) => {
        if (secureStorage.getItem("username") === sellerPhoneNumber) {
            axios
                .delete(baseUrl + props.deleteUri + id, JWTHeader())
                .then(res => {
                    console.log(res, posts, "done");

                    setPosts(
                        posts.filter(item => {
                            if (item.id !== id) return item;
                        })
                    );
                })
                .catch(e => console.log(e.response));
        }
    };

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <div className="container my-0 mainAdsToggler bg-custom">
            <div className="d-flex justify-content-start align-items-stretch flex-wrap p-0 m-0">
                {posts.map((item, index) => {
                    return (
                        <div className="m-0 px-1 py-3  flex-grow-1 ">
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
                                key={index}
                                handleDeleteBtn={handleDeleteBtn}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainAds;
