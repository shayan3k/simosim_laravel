import React, { useState, useEffect } from "react";
import { JWTHeader } from "../../../services/Auth";
import Advertisment from "./Advertisment";
import axios from "axios";

export default function index() {
    const baseUrl = process.env.MIX_BASEURL;
    const advertismentsAllAdmin = "/advertisments-admin";

    const [advertisments, setAdvertisments] = useState([]);
    const [currnetPage, setCurrentpage] = useState(1);

    useEffect(() => {
        axios({
            url: baseUrl + advertismentsAllAdmin + "?page=" + currnetPage,
            method: "GET",
            headers: JWTHeader().headers
        })
            .then(res => {
                console.log(res);
                setAdvertisments(res.data);
            })
            .catch(e => console.log(e));
    }, [currnetPage]);

    const handlePrevOnClick = e => {
        if (currnetPage == 0) return;
        setCurrentpage(currnetPage - 1);
    };

    const handleNextOnClick = e => {
        setCurrentpage(currnetPage + 1);
    };

    const handleDeleteBtn = e => {
        console.log("DELETE BTN", e);
    };

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a
                            class="btn page-link"
                            onClick={e => handlePrevOnClick(e)}
                        >
                            Previous
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="btn btn-danger">{currnetPage}</a>
                    </li>
                    <li class="page-item">
                        <a
                            class="btn page-link"
                            onClick={e => handleNextOnClick(e)}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>

            <hr />
            <div className="row p-0 m-0">
                {advertisments.map(item => {
                    return (
                        <div className="p-1">
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
                                key={item.id}
                                sale={item.sale}
                                secondPrice={item.secondprice}
                                handleDeleteBtn={e => handleDeleteBtn(e)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
