import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "../Message";
import { JWTHeader } from "../../../services/Auth";

export default function User(props) {
    const baseUrl = process.env.MIX_BASEURL;
    // const userDeleteUrl  = process.env.MIX_USER_ADMIN;
    const userDeleteUrl = "/users-admin";

    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleDeleteUser = e => {
        axios({
            url: baseUrl + userDeleteUrl,
            method: "DELETE",
            headers: JWTHeader().headers,
            data: { id: props.item.id }
        })
            .then(res => {
                props.updateList();
            })
            .catch(e => console.log(e));
    };
    return (
        <>
            {message ? (
                <Message
                    title={message}
                    status={status}
                    setMessage={setMessage}
                />
            ) : (
                ""
            )}
            <tr key={props.item.id}>
                <th scope="row">{props.item.id}</th>
                <td scope="row">{props.item.name}</td>
                <td>{props.item.phonenumber}</td>
                <td>{props.item.is_admin}</td>
                <td>{props.item.active}</td>
                <td>{props.item.phonenumber_verified_at ? "true" : "flase"}</td>
                <td>
                    {new Date(Date.parse(props.item.created_at)).toUTCString()}
                </td>
                <td>
                    {new Date(Date.parse(props.item.updated_at)).toUTCString()}
                </td>

                <td className="d-flex flex-column align-items-center justify-content-center">
                    <button
                        className="btn btn-danger my-1 font4"
                        onClick={e => handleDeleteUser(e)}
                    >
                        Delete User
                    </button>
                    <button className="btn btn-dark my-1 font4">
                        Delete User Posts
                    </button>
                </td>
            </tr>
        </>
    );
}
