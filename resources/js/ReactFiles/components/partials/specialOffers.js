import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Advertisment from "./Advertisment";
import { JWTHeader } from "../services/Auth";
import axios from "axios";

function SpecialOffers(props) {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3100,
        infinite: true,
        speed: 650,
        slidesToShow: 6,
        slidesToScroll: props.ltr ? -3 : 3,
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },

            {
                breakpoint: 1358,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },

            {
                breakpoint: 1135,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },

            {
                breakpoint: 929,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },

            ,
            {
                breakpoint: 707,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            ,
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [posts, setPosts] = useState([]);
    const baseUrl = process.env.MIX_BASEURL;

    const advertismentDeleteUser = process.env.MIX_ADVERTISMENT_DELETE_USER;
    const advertismentBerozresaniUser =
        process.env.MIX_ADVERTISMENT_BEROZRESANI_USER;

    // const advertismentDeleteUser = "/advertisments-delete-user";
    // const advertismentBerozresaniUser = "/advertisments-berozresani-user";

    useEffect(() => {
        axios
            .get(baseUrl + props.uri)
            .then(response => {
                setPosts(response.data);
                console.log("sepecial offers ", response.data);
            })
            .catch(error => {
                console.log(error.response);
            });
    }, []);

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

    return (
        <>
            <Slider
                {...settings}
                className="container specialOffersToggler bg-custom "
            >
                {posts.map((item, index) => {
                    let flag = false;
                    if (props.flagController === "فوری" || item.sale === "فوری")
                        flag = true;
                    else if (
                        props.flagController === "طلایی" &&
                        item.sale === "" &&
                        item.value === "طلایی"
                    )
                        flag = true;
                    else if (
                        props.flagController === "نقره ای" &&
                        item.sale === "" &&
                        item.value === "نقره ای"
                    )
                        flag = true;
                    else if (
                        props.flagController === "برنز" &&
                        item.sale === "" &&
                        item.value === "برنز"
                    )
                        flag = true;

                    return (
                        <div className="p-3 h-100" key={index}>
                            <Advertisment
                                id={item.id}
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
                                updated_at={item.updated_at}
                                handleDeleteBtn={handleDeleteBtn}
                                handleBeRoozResani={handleBeRoozResani}
                            />
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}

export default SpecialOffers;
