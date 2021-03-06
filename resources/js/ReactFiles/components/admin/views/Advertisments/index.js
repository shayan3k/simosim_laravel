import React, { useState, useEffect } from "react";
import { JWTHeader } from "../../../services/Auth";
import Advertisment from "./Advertisment";
import SearchPanel from "./SearchPanel";
import axios from "axios";

export default function index() {
    const baseUrl = process.env.MIX_BASEURL;
    const advertismentsAllAdmin = process.env.MIX_ADVERTISMENT_All_ADMIN;
    // const advertismentsAllAdmin = "/advertisments-admin";

    const [advertisments, setAdvertisments] = useState([]);
    const [currnetPage, setCurrentpage] = useState(1);

    const [phonenumber, setPhonenumber] = useState("");
    const [location, setLocation] = useState("");
    const [code, setCode] = useState("");
    const [value, setValue] = useState("");
    const [rond, setRond] = useState("");
    const [simstatus, setSimstatus] = useState("");
    const [sale, setSale] = useState("");
    const [sellerphonenumber, setSellerphonenumber] = useState("");
    const [published, setPublished] = useState("");

    const handlePrevOnClick = e => {
        if (currnetPage == 1) return;
        setCurrentpage(currnetPage - 1);
    };

    const handleNextOnClick = e => {
        setCurrentpage(currnetPage + 1);
    };

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
            .catch(e => console.log(e.response));
    }, [currnetPage]);

    const updateList = id => {
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
    };

    const handleSearchBtn = () => {
        var queryString = "";
        if (phonenumber != "") {
            queryString += `&phonenumber=${phonenumber}`;
        }

        if (location != "") {
            queryString += `&location=${location}`;
        }

        if (code != "") {
            queryString += `&code=${code}`;
        }

        if (value != "") {
            queryString += `&value=${value}`;
        }

        if (rond != "") {
            queryString += `&rond=${rond}`;
        }

        if (simstatus != "") {
            queryString += `&simstatus=${simstatus}`;
        }

        if (sellerphonenumber != "") {
            queryString += `&sellerphonenumber=${sellerphonenumber}`;
        }

        if (sale != "") {
            queryString += `&sale=${sale}`;
        }
        if (published != "") {
            queryString += `&published=${published}`;
        }
        console.log(
            baseUrl +
                advertismentsAllAdmin +
                "?page=" +
                currnetPage +
                queryString,

            [
                phonenumber,
                location,
                rond,
                simstatus,
                sellerphonenumber,
                published
            ]
        );

        axios({
            url:
                baseUrl +
                advertismentsAllAdmin +
                "?page=" +
                currnetPage +
                queryString,
            method: "GET",
            headers: JWTHeader().headers
        })
            .then(res => {
                console.log(res);
                setAdvertisments(res.data);
            })
            .catch(e => console.log(e));
    };

    return (
        <div className="container-fluid">
            <SearchPanel
                phonenumber={phonenumber}
                location={location}
                code={code}
                value={value}
                rond={rond}
                sale={sale}
                simstatus={simstatus}
                sellerphonenumber={sellerphonenumber}
                published={published}
                setPhonenumber={e => setPhonenumber(e)}
                setLocation={e => setLocation(e)}
                setSale={e => setSale(e)}
                setCode={e => setCode(e)}
                setValue={e => setValue(e)}
                setRond={e => setRond(e)}
                setSimstatus={e => setSimstatus(e)}
                setSellerphonenumber={e => setSellerphonenumber(e)}
                setPublished={e => setPublished(e)}
                handleSearchBtn={e => handleSearchBtn(e)}
            />

            <nav aria-label="Page navigation">
                <ul class="ml-auto pagination">
                    <li class="page-item">
                        <a
                            class="btn page-link"
                            onClick={e => handlePrevOnClick(e)}
                            style={
                                currnetPage == 1
                                    ? { pointerEvents: "none" }
                                    : null
                            }
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
            <div className="row p-0 m-0 mt-3">
                {advertisments.map(item => {
                    return (
                        <div className="col-12 p-1  my-4 d-flex justify-content-center align-items-center">
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
                                id={item.id}
                                sale={item.sale}
                                secondPrice={item.secondprice}
                                published={item.published}
                                updateList={updateList}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
