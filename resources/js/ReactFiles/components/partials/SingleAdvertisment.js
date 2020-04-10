import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleAdvertismentSidebar from "./SingleAdvertismentSidebar";
import SingleAdvertismentContent from "./SingleAdvertismentContent";
export default function SingleAdvertisment() {
    let { queryPhoneNumber } = useParams();

    const baseUrl = process.env.MIX_BASEURL;
    const showAdvertisments = process.env.MIX_MAIN_ADVERTISMENTS;

    const [id, setId] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [location, setLocation] = useState("");
    const [text, setText] = useState("");
    const [price, setPrice] = useState("");
    const [rond, setRond] = useState("");
    const [secondaryprice, setSecondaryprice] = useState("");
    const [code, setCode] = useState("");
    const [value, setValue] = useState("");
    const [simstatus, setSimstatus] = useState("");
    const [sale, setSale] = useState("");
    const [sellerphonenumber, setSellerphonenumber] = useState("");
    const [sellername, setSellername] = useState("");
    const [updatedAt, setUpdatedat] = useState("");

    useEffect(() => {
        getItemData();
    }, []);

    const getItemData = async () => {
        var data = {
            phonenumber: queryPhoneNumber ? queryPhoneNumber : ""
        };
        axios({
            method: "POST",
            url: baseUrl + showAdvertisments,
            data: data
        })
            .then(response => {
                console.log(response);
                setId(response.data[0].id);
                setPhonenumber(response.data[0].phonenumber);
                setLocation(response.data[0].location);
                setText(response.data[0].text);
                setPrice(response.data[0].price);
                response.data[0].secondprice
                    ? setSecondaryprice(response.data[0].secondprice)
                    : 0;
                setCode(response.data[0].code);
                setValue(response.data[0].value);
                setSimstatus(response.data[0].simstatus);
                setSale(response.data[0].sale);
                setRond(response.data[0].rond);
                setSellerphonenumber(response.data[0].sellerphonenumber);
                setSellername(response.data[0].sellername);
                setUpdatedat(response.data[0].updated_at);
            })
            .catch(err => {
                console.log("Error search", err.response);

                setId(0);
                setPhonenumber("ایتمی پیدا نشد");
                setLocation("ایتمی پیدا نشد");
                setText("ایتمی پیدا نشد");
                setPrice("ایتمی پیدا نشد");
                setSecondaryprice("ایتمی پیدا نشد");
                setCode("ایتمی پیدا نشد");
                setValue("ایتمی پیدا نشد");
                setSimstatus("ایتمی پیدا نشد");
                setSale("ایتمی پیدا نشد");
                setRond("ایتمی پیدا نشد");
                setSellerphonenumber("ایتمی پیدا نشد");
                setSellername("ایتمی پیدا نشد");
                setUpdatedat("ایتمی پیدا نشد");
            });
    };

    return (
        <div className="singleAdvertisment container mx-auto row m-0 p-0 bg-default">
            <SingleAdvertismentSidebar className="bg-transparent row col-12 col-md-4 order-2 order-md-1 p-0 m-0 pr-1" />
            <SingleAdvertismentContent
                className="col-12 col-md-8 row m-0 p-0 order-1 order-md-2"
                id={id}
                phonenumber={phonenumber}
                location={location}
                text={text}
                price={price}
                secondaryprice={secondaryprice}
                code={code}
                value={value}
                rond={rond}
                simstatus={simstatus}
                sale={sale}
                sellerphonenumber={sellerphonenumber}
                sellername={sellername}
                updatedAt={updatedAt}
            />
        </div>
    );
}
