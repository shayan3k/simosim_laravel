import React, { useState, useEffect } from "react";
import Advertisment from "./Advertisment";
import { JWTHeader } from "../services/Auth";
import axios from "axios";

function DashboardAdvertisment(props) {
    const [posts, setPosts] = useState([]);

    const baseUrl = process.env.MIX_BASEURL;
    // const myAdvertisments = process.env.MIX_ADVERTISMENT_ME;
    // const advertismentDeleteUser = MIX_ADVERTISMENT_DELETE_USER;
    // const advertismentBerozresaniUser = MIX_ADVERTISMENT_BEROZRESANI_USER;

    const myAdvertisments = "/advertisments-me";
    const advertismentDeleteUser = "/advertisments-delete-user";
    const advertismentBerozresaniUser = "/advertisments-berozresani-user";

    useEffect(() => {
        listUpdate();
    }, []);

    const listUpdate = async () => {
        axios({
            method: "GET",
            url: baseUrl + myAdvertisments,
            headers: JWTHeader().headers
        })
            .then(async response => {
                await setPosts(response.data);
                console.log("dashboard advertisments respond", response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const handleDeleteBtn = (e, id, sellerPhoneNumber) => {
        console.log("id is ", id);
        axios({
            url: baseUrl + advertismentDeleteUser,
            method: "POST",
            headers: JWTHeader().headers,
            data: { id: id }
        })
            .then(res => {
                console.log(res, posts, "done");
                listUpdate();
            })
            .catch(e => console.log(e.response));
    };

    const handleBeRoozResani = (e, id, sellerPhoneNumber) => {
        console.log("id is ", id);
        axios({
            url: baseUrl + advertismentBerozresaniUser,
            method: "POST",
            headers: JWTHeader().headers,
            data: { id: id }
        })
            .then(res => {
                console.log(res, posts, "done");
                listUpdate();
            })
            .catch(e => console.log(e.response));
    };

    useEffect(() => {
        console.log(posts);
    }, [posts]);

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
                            updated_at={item.updated_at}
                            handleDeleteBtn={handleDeleteBtn}
                            handleBeRoozResani={handleBeRoozResani}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardAdvertisment;
