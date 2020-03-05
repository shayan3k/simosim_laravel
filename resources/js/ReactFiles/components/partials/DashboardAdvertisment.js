import React, { useState, useEffect } from "react";
import Advertisment from "./Advertisment";
import { JWTHeader } from "../services/Auth";
import secureStorage from "../services/Storage";
import axios from "axios";

function DashboardAdvertisment(props) {
    const [posts, setPosts] = useState([]);
    // const postUri = process.env.MIX_ADVERTISMENT_ME;
    const baseUrl = process.env.MIX_BASEURL;
    const postUri = "/advertisments-me";

    useEffect(() => {
        axios
            .get(baseUrl + postUri, JWTHeader())
            .then(res => {
                console.log(res);

                setPosts(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });
    }, []);

    const handleDeleteBtn = (e, id, sellerPhoneNumber) => {
        if (secureStorage.getItem("username") === sellerPhoneNumber) {
            axios
                .delete(baseUrl + "/wp/v2/myadvertisement/" + id, JWTHeader())
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

    return (
        <div className="container bg-white my-0 DashboardAdvertisment">
            <div className="row p-0 m-0">
                {posts.map(item => (
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
                            handleDeleteBtn={handleDeleteBtn}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardAdvertisment;
