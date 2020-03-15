import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "../Message";
import { JWTHeader } from "../../../services/Auth";

export default function User(props) {
    const baseUrl = process.env.MIX_BASEURL;

    // const userActiveTogglerUrl  = process.env.MIX_USERS_ACTIVE_TOGGLER;
    // const deleteUserAllPostsUrl  = process.env.MIX_USERS_DELETE_ALL_POSTS;
    const userActiveTogglerUrl = "/users-active-admin";
    const deleteUserAllPostsUrl = "/users-post-delete-admin";

    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [postsDeleted, setPostsDeleted] = useState(false);

    const handleActiveToggler = e => {
        axios({
            url: baseUrl + userActiveTogglerUrl,
            method: "POST",
            headers: JWTHeader().headers,
            data: { id: props.item.id }
        })
            .then(res => {
                props.updateList();
            })
            .catch(e => console.log(e));
    };

    const handlePostDelete = () => {
        axios({
            url: baseUrl + deleteUserAllPostsUrl,
            method: "POST",
            headers: JWTHeader().headers,
            data: { id: props.item.id }
        })
            .then(res => setPostsDeleted(true))
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
                        className={`btn btn-${
                            props.item.active ? "danger" : "success"
                        } my-1 font4`}
                        onClick={e => handleActiveToggler(e)}
                    >
                        {props.item.active ? "Deactive" : "Active"} User
                    </button>

                    {postsDeleted ? (
                        <button className="btn btn-info my-1 font4">
                            All Posts Deleted
                        </button>
                    ) : (
                        <button
                            className="btn btn-dark my-1 font4"
                            onClick={e => handlePostDelete(e)}
                        >
                            Delete User's Posts
                        </button>
                    )}
                </td>
            </tr>
        </>
    );
}
